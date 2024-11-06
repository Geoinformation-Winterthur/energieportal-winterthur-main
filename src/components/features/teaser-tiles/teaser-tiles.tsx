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
  buttonLabel: string;
};

export type Detail = {
  title: string;
  images: {
    src: string;
    alt: string;
    copyright: string;
  }[];
  facts: {
    key: string;
    value: string;
  }[];
  links: {
    src: string;
    label: string;
  }[];
  text: {
    pre: string;
    quote?: {
      phrase: string;
      author: string;
    };
    post?: string;
  };
};

export type CaseStudy = {
  teaser: Teaser;
  detail: Detail;
};

interface TeaserTilesProps {
  type?: string;
}

export const TeaserTiles = ({ type }: TeaserTilesProps) => {
  const { t } = useTranslation();
  const { isMobile } = useWindowSize();

  const items: CaseStudy[] = t(`case_studies.${type}.items`, {
    returnObjects: true,
  }) as CaseStudy[];

  return (
    type && (
      <div className={styles["teaser-tiles"]}>
        <div className={styles["teaser-tiles__header"]}>
          <h3 className={styles["teaser-tiles__title"]}>
            {t(`case_studies.${type}.title`)}
          </h3>
          <p className={styles["teaser-tiles__lead"]}>
            {t(`case_studies.${type}.lead`)}
          </p>
        </div>
        {items.length > 0 && isMobile ? (
          <Slider>
            {items?.map((item, index) => (
              <SliderSlide key={index}>
                <TeaserTile
                  key={index}
                  teaser={item.teaser}
                  detail={item.detail}
                />
              </SliderSlide>
            ))}
          </Slider>
        ) : (
          <div className={styles["teaser-tiles__content"]}>
            {items.length &&
              items?.map((item, index) => (
                <>
                  <TeaserTile
                    key={index}
                    teaser={item.teaser}
                    detail={item.detail}
                  />
                </>
              ))}
          </div>
        )}
      </div>
    )
  );
};
