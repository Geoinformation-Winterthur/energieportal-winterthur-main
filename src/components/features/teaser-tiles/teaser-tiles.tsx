import { Slider } from "@/components/common/slider/slider";
import { SliderSlide } from "@/components/common/slider/slider-slide";
import { useWindowSize } from "@/hooks/useWindowSize";
import { useTranslation } from "../../../../i18n";
import { TeaserTile } from "./teaser-tile";
import styles from "./teaser-tiles.module.scss";

export type Teaser = {
  title: string;
  imageSrc: string;
  imageAlt: string;
  subtitle: string;
  tag?: string;
  facts: string[];
  button_label: string;
};

interface TeaserTilesProps {
  type: string;
}

export const TeaserTiles = ({ type }: TeaserTilesProps) => {
  const { t } = useTranslation();
  const { isMobile } = useWindowSize();

  const items: Teaser[] = t(`case_studies.${type}.items`, {
    returnObjects: true,
  }) as Teaser[];

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
      {isMobile ? (
        <Slider>
          {items.map((item, index) => (
            <SliderSlide key={index}>
              <TeaserTile key={index} content={item} />
            </SliderSlide>
          ))}
        </Slider>
      ) : (
        <div className={styles["teaser-tiles__content"]}>
          {items.map((item, index) => (
            <TeaserTile key={index} content={item} />
          ))}
        </div>
      )}
    </div>
  );
};
