import { Button } from "@/components/common/button/button";
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
import clsx from "clsx";

const PIN_SIZE = 16;
const HALF_PIN_SIZE = PIN_SIZE / 2;

interface SolarImageProps {
  clickedCoordinates: { x: number, y: number } | null;
  onImageClick: (e: React.MouseEvent<HTMLDivElement>, mapArea: MapArea | null) => void;
  onZoomClick: () => void;
}

export const SolarImage = ({ clickedCoordinates, onImageClick, onZoomClick }: SolarImageProps) => {
  const { t } = useTranslation();
  const searchParams = useSearchParams();
  const [currentAddress, setCurrentAddress] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [imgSrc, setImgSrc] = useState("");
  const [solarImageSrc, setSolarImageSrc] = useState("");
  const [coordinates, setCoordinates] = useState<MapArea | null>(null);
  const [zoomLevel, setZoomLevel] = useState(2);
  const [margin, setMargin] = useState(20);

  useEffect(() => {
    if (searchParams.get("address")) {
      setCurrentAddress(searchParams.get("address") ?? "");
      setZoomLevel(2);
      setMargin(20);
    }
  }, [searchParams])

  useEffect(() => {
    async function propertyWrapper() {
      setIsLoading(true);
      const propertyData = await getPropertyFacts(currentAddress ?? "");
      const eCoordinate = propertyData.results[0].attributes.gkode;
      const nCoordinate = propertyData.results[0].attributes.gkodn;

      const eCoordDecreased = eCoordinate - margin;
      const nCoordDecreased = nCoordinate - margin;
      const eCoordIncreased = eCoordinate + margin;
      const nCoordIncreased = nCoordinate + margin;
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
  }, [currentAddress, margin])

  const handlePlusClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (zoomLevel === 3) {
      return;
    }
    zoomLevel === 0 ? setMargin(margin - 20) : setMargin(margin - 10);
    setZoomLevel(zoomLevel + 1);
    onZoomClick();
  }

  const handleMinusClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (zoomLevel === 0) {
      return;
    }
    zoomLevel - 1 === 0 ? setMargin(margin + 20) : setMargin(margin + 10);
    setZoomLevel(zoomLevel - 1);
    onZoomClick();
  }

  const handleWrapperClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // prevent the point from being moved if the buttons are disabled
  }

  const renderImages = () => (
    <>
      <Image className={styles["solar-image__img"]} src={imgSrc} alt={t("my_property.property_image_alt")} fill />
      <Image className={styles["solar-image__solar-img"]} src={solarImageSrc} alt={t("my_property.solar_potential_image_alt")} fill />
      {clickedCoordinates && (
        <div
          className={styles["solar-image__clicked-coordinates"]}
          style={{ left: clickedCoordinates.x - HALF_PIN_SIZE, top: clickedCoordinates.y - HALF_PIN_SIZE }}></div>
      )}
      <div className={styles["solar-image__buttons"]} onClick={handleWrapperClick}>
        <Button onClick={handlePlusClick} icon="plus" disabled={zoomLevel === 3} light />
        <div className={clsx(styles["solar-image__buttons-divider"], zoomLevel === 3 || zoomLevel === 0 ? styles["solar-image__buttons-divider--hidden"] : "")} />
        <Button onClick={handleMinusClick} icon="minus" disabled={zoomLevel === 0} light />
      </div>
    </>
  )

  const isReadyToRender = Boolean(!isLoading && imgSrc && solarImageSrc);

  return (
    <div className={styles["solar-image"]} onClick={(e) => onImageClick(e, coordinates)}>
      {isReadyToRender ? renderImages() : <Icon icon="loading" color="red" />}
      {isReadyToRender && (
        <>
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
        </>
      )}
    </div>
  )
}
