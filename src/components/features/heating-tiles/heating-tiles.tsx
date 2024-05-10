import { Icon, IconType } from "@/components/common/icon/icon";
import { Slider } from "@/components/common/slider/slider";
import { SliderSlide } from "@/components/common/slider/slider-slide";
import { useWindowSize } from "@/hooks/useWindowSize";
import { Heating } from "@/types/heating";
import { getHeatingSystems } from "@/utils/get-heating-systems";
import { getPropertyFacts } from "@/utils/get-property-facts";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslation } from "../../../../i18n";
import { HeatingTile } from "./heating-tile";
import styles from "./heating-tiles.module.scss";

export const HeatingTiles = () => {
  const { t } = useTranslation();
  const { isMobile } = useWindowSize();

  const searchParams = useSearchParams();
  const [currentAddress, setCurrentAddress] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [heatingSystems, setHeatingSystems] = useState<Heating[]>([])

  useEffect(() => {
    if (searchParams.get("address")) {
      setCurrentAddress(searchParams.get("address") ?? "");
    }
  }, [searchParams])

  useEffect(() => {
    async function propertyWrapper() {
      setIsLoading(true);
      const propertyData = await getPropertyFacts(currentAddress || "");
      const eCoordinate = propertyData.results[0].attributes.gkode;
      const nCoordinate = propertyData.results[0].attributes.gkodn;
      const heatingData = await getHeatingSystems(eCoordinate, nCoordinate);

      if (heatingData) {
        setHeatingSystems(heatingData);
      }
      setIsLoading(false);
    }

    if (currentAddress) {
      propertyWrapper();
    }
  }, [currentAddress])

  const getStatus = (heating: Heating) => {
    if (heating.status === "Verdichtung") {
      return `${heating.code}_verdichtung`;
    }
    if (heating.status === "in Prüfung") {
      return `${heating.code}_pruefung`;
    }
    return `${heating.code}_planung`;
  }

  const renderHeating = (heating: Heating) => <HeatingTile code={heating.code === "districtheating" ? getStatus(heating) : heating.code} isRecommendation={heating.isRecommendation} icon={heating.code as IconType} showStatus={heating.code === "districtheating"} key={heating.code} />

  const sortHeatingsByRecommendation = () => {
    return heatingSystems.sort((a, b) => {
      if (a.isRecommendation && !b.isRecommendation) {
        return -1;
      } else if (!a.isRecommendation && b.isRecommendation) {
        return 1;
      } else {
        return 0;
      }
    });
  }

  return (
    <div className={styles["heating-tiles"]}>
      <div className={styles["heating-tiles__header"]}>
        <h3 className={styles["heating-tiles__title"]}>{t("my_property.heating_recommendations.title")}</h3>
        <p className={styles["heating-tiles__lead"]}>{t("my_property.heating_recommendations.lead")}</p>
      </div>
      {isLoading ? <Icon icon="loading" /> : ""}
      {isMobile ?
        <Slider>
          {sortHeatingsByRecommendation().map(heating => <SliderSlide key={heating.code}>{renderHeating(heating)}</SliderSlide>)}
        </Slider>
        :
        <div className={styles["heating-tiles__content"]}>
          {sortHeatingsByRecommendation().map(heating => renderHeating(heating))}
        </div>}
    </div>
  )
}