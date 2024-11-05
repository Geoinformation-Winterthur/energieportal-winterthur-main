import { Slider } from "@/components/common/slider/slider";
import { SliderSlide } from "@/components/common/slider/slider-slide";
import { useWindowSize } from "@/hooks/useWindowSize";
import { useTranslation } from "../../../../i18n";
import { TeaserTile } from "./teaser-tile";
import styles from "./teaser-tiles.module.scss";

interface TeaserTilesProps {
  type: string;
}

export const TeaserTiles = ({ type }: TeaserTilesProps) => {
  const { t } = useTranslation();
  const { isMobile } = useWindowSize();

  const items: string[] = t(
    `my_property.heating_recommendations.${type}.items`,
    {
      returnObjects: true,
    }
  ) as string[];

  return (
    <div className={styles["teaser-tiles"]}>
      <div className={styles["teaser-tiles__header"]}>
        <h3 className={styles["teaser-tiles__title"]}>
          {t(`case_studies.${type}.title`)}
        </h3>
        <p className={styles["teaser-tiles__lead"]}>
          {t(`case_studies.${type}.lead`)}
        </p>
      </div>
      {/* {isMobile ? (
        <Slider>
          {items.map((item) => (
            <SliderSlide key={item}>{""}</SliderSlide>
          ))}
        </Slider>
      ) : (
        <div className={styles["teaser-tiles__content"]}>
          {items.map((item) => (
            <TeaserTile key={item} />
          ))}
        </div>
      )} */}
    </div>
  );
};
