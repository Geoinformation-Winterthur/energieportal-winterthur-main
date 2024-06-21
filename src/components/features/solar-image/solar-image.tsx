import { Icon } from "@/components/common/icon/icon";
import { MapArea } from "@/types/map-area";
import { getPropertyFacts } from "@/utils/get-property-facts";
import { getPropertyImage } from "@/utils/get-property-image";
import { getSolarImage } from "@/utils/get-solar-potential";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslation } from "../../../../i18n";
import styles from "./solar-image.module.scss";

const MARGIN = 20; // extra space around buildings coordinates
const PIN_SIZE = 16;
const HALF_PIN_SIZE = PIN_SIZE / 2;

interface SolarImageProps {
  clickedCoordinates: { x: number, y: number } | null;
  onImageClick: (e: React.MouseEvent<HTMLDivElement>, mapArea: MapArea | null) => void;
}

export const SolarImage = ({ clickedCoordinates, onImageClick }: SolarImageProps) => {
  const { t } = useTranslation();
  const searchParams = useSearchParams();
  const [currentAddress, setCurrentAddress] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [imgSrc, setImgSrc] = useState("");
  const [solarImageSrc, setSolarImageSrc] = useState("");
  const [coordinates, setCoordinates] = useState<MapArea | null>(null);

  useEffect(() => {
    if (searchParams.get("address")) {
      setCurrentAddress(searchParams.get("address") ?? "");
    }
  }, [searchParams])

  useEffect(() => {
    async function propertyWrapper() {
      setIsLoading(true);
      const propertyData = await getPropertyFacts(currentAddress ?? "");
      const eCoordinate = propertyData.results[0].attributes.gkode;
      const nCoordinate = propertyData.results[0].attributes.gkodn;

      const eCoordDecreased = eCoordinate - MARGIN;
      const nCoordDecreased = nCoordinate - MARGIN;
      const eCoordIncreased = eCoordinate + MARGIN;
      const nCoordIncreased = nCoordinate + MARGIN;
      setCoordinates({ eCoordDecreased, nCoordDecreased, eCoordIncreased, nCoordIncreased });

      const image = await getPropertyImage(eCoordDecreased, nCoordDecreased, eCoordIncreased, nCoordIncreased);
      const solarImage = await getSolarImage(eCoordDecreased, nCoordDecreased, eCoordIncreased, nCoordIncreased);

      if (!image || !solarImage) {
        setIsLoading(false);
        return;
      }
      setImgSrc(URL.createObjectURL(image));
      setSolarImageSrc(URL.createObjectURL(solarImage));
      setIsLoading(false);
    }

    if (currentAddress) {
      propertyWrapper();
    }
  }, [currentAddress])


  const renderImages = () => (
    <div>
      <Image className={styles["solar-image__img"]} src={imgSrc} alt={t("my_property.property_image_alt")} fill />
      <Image className={styles["solar-image__solar-img"]} src={solarImageSrc} alt={t("my_property.solar_potential_image_alt")} fill />
      {clickedCoordinates && (
        <div
          className={styles["solar-image__clicked-coordinates"]}
          style={{ left: clickedCoordinates.x - HALF_PIN_SIZE, top: clickedCoordinates.y - HALF_PIN_SIZE }}></div>
      )}
    </div>
  )

  const isReadyToRender = Boolean(!isLoading && imgSrc && solarImageSrc);

  return (
    <div className={styles["solar-image"]} onClick={(e) => onImageClick(e, coordinates)}>
      {isReadyToRender ? renderImages() : <Icon icon="loading" color="red" />}
      {isReadyToRender && (
        <div className={styles["solar-image__legend"]}>
          <div className={styles["solar-image__legend-item"]}>
            <span className={`${styles["solar-image__legend-color"]} ${styles["solar-image__legend-color--potential-1"]}`}></span>
            {t("my_property.solar_potential_legend_1")}
          </div>
          <div className={styles["solar-image__legend-item"]}>
            <span className={`${styles["solar-image__legend-color"]} ${styles["solar-image__legend-color--potential-2"]}`}></span>
            {t("my_property.solar_potential_legend_2")}
          </div>
          <div className={styles["solar-image__legend-item"]}>
            <span className={`${styles["solar-image__legend-color"]} ${styles["solar-image__legend-color--potential-3"]}`}></span>
            {t("my_property.solar_potential_legend_3")}
          </div>
          <div className={styles["solar-image__legend-item"]}>
            <span className={`${styles["solar-image__legend-color"]} ${styles["solar-image__legend-color--potential-4"]}`}></span>
            {t("my_property.solar_potential_legend_4")}
          </div>
        </div>
      )}
    </div>
  )
}
