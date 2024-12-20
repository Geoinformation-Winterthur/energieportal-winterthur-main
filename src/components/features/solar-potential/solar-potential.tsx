import { MapArea } from "@/types/map-area";
import { SolarFacts as SolarFactsType } from "@/types/solar-facts";
import { getSolarFacts } from "@/utils/get-solar-facts";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslation } from "../../../../i18n";
import { SolarFacts } from "../solar-facts/solar-facts";
import { SolarImage } from "../solar-image/solar-image";
import styles from "./solar-potential.module.scss";

export const SolarPotential = () => {
  const { t } = useTranslation();
  const [solarFacts, setSolarFacts] = useState<SolarFactsType | null>(null);
  const [clickedPosition, setClickedPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);

  const searchParams = useSearchParams();
  const [currentAddress, setCurrentAddress] = useState<string | null>(null);

  const onImageClick = async (
    e: React.MouseEvent<HTMLDivElement>,
    mapArea: MapArea | null
  ) => {
    if (!mapArea) {
      return;
    }
    // calculate the distance from the top left corner of the image
    const rect = e.currentTarget.getBoundingClientRect();
    const imageSize = e.currentTarget.clientWidth;
    const distanceX = e.clientX - rect.left;
    const distanceY = e.clientY - rect.top;

    // map the clicked position on the image to the coordinates of the map
    const eDec =
      mapArea.eCoordDecreased +
      (distanceX / imageSize) *
        (mapArea.eCoordIncreased - mapArea.eCoordDecreased);
    const nDec =
      mapArea.nCoordIncreased -
      (distanceY / imageSize) *
        (mapArea.nCoordIncreased - mapArea.nCoordDecreased);
    setClickedPosition({ x: distanceX, y: distanceY });
    const roundedE = Math.round(eDec);
    const roundedN = Math.round(nDec);
    const facts = await getSolarFacts(roundedE, roundedN);
    setSolarFacts(facts);
  };

  const onZoomClick = () => {
    setClickedPosition(null);
    setSolarFacts(null);
  };

  useEffect(() => {
    if (searchParams.get("address")) {
      setCurrentAddress(searchParams.get("address") ?? "");
    }
  }, [searchParams]);

  useEffect(() => {
    setClickedPosition(null);
    setSolarFacts(null);
  }, [currentAddress]);

  return (
    <div className={styles["solar-potential"]}>
      <div className={styles["solar-potential__header"]}>
        <h3 className={styles["solar-potential__title"]}>
          {t("my_property.solar_potential.title")}
        </h3>
        <p className={styles["solar-potential__lead"]}>
          {t("my_property.solar_potential.lead")}
        </p>
      </div>
      <div className={styles["solar-potential__content"]}>
        <div className={styles["solar-potential__content-left"]}>
          <SolarImage
            clickedCoordinates={clickedPosition}
            onImageClick={onImageClick}
            onZoomClick={onZoomClick}
          />
        </div>
        <div className={styles["solar-potential__content-right"]}>
          <SolarFacts solarFacts={solarFacts} />
        </div>
      </div>
    </div>
  );
};
