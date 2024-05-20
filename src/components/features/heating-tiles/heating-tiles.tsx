import { Icon } from "@/components/common/icon/icon";
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

type RawHeating = {
  code: string;
  isRecommendation: boolean;
  status: string;
}

export const HeatingTiles = () => {
  const { t } = useTranslation();
  const { isMobile } = useWindowSize();

  const searchParams = useSearchParams();
  const [currentAddress, setCurrentAddress] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [heatingSystems, setHeatingSystems] = useState<Heating[]>([]);

  const transformHeatingData = (heatings: RawHeating[]) => {
    return heatings.map(heating => {
      if (heating.code === "districtheating") {
        let specificCode;
        switch (heating.status) {
          case "Verdichtung":
            specificCode = `${heating.code}_v`;
            break;
          case "in Prüfung":
            specificCode = `${heating.code}_pr`;
            break;
          default:
            specificCode = `${heating.code}_pl`;
            break;
        }
        return {
          code: specificCode,
          isRecommendation: heating.isRecommendation,
          status: heating.status,
          isDistrictHeating: true
        } as Heating;
      }
      return heating as Heating;
    })
  }

  const sortHeatingsByRecommendation = (heatings: RawHeating[]) => {
    return transformHeatingData(heatings).sort((a, b) => {
      if (a.isRecommendation && !b.isRecommendation) {
        return -1;
      } else if (!a.isRecommendation && b.isRecommendation) {
        return 1;
      } else {
        return 0;
      }
    });
  }

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
        setHeatingSystems(sortHeatingsByRecommendation(heatingData));
      }
      setIsLoading(false);
    }

    if (currentAddress) {
      propertyWrapper();
    }
  }, [currentAddress, sortHeatingsByRecommendation])

  const renderHeating = (heating: Heating) => <HeatingTile heating={heating} allRecommendations={heatingSystems} key={heating.code} />

  return (
    <div className={styles["heating-tiles"]}>
      <div className={styles["heating-tiles__header"]}>
        <h3 className={styles["heating-tiles__title"]}>{t("my_property.heating_recommendations.title")}</h3>
        <p className={styles["heating-tiles__lead"]}>{t("my_property.heating_recommendations.lead")}</p>
      </div>
      {isLoading ? <Icon icon="loading" /> : ""}
      {isMobile ?
        <Slider>
          {heatingSystems.map(heating => <SliderSlide key={heating.code}>{renderHeating(heating)}</SliderSlide>)}
        </Slider>
        :
        <div className={styles["heating-tiles__content"]}>
          {heatingSystems.map(heating => renderHeating(heating))}
        </div>}
    </div>
  )
}