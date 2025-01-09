'use client';
import { Slider } from '@/components/common/slider/slider';
import { SliderSlide } from '@/components/common/slider/slider-slide';
import { useWindowSize } from '@/hooks/useWindowSize';
import { useTranslation } from '../../../../i18n';
import { TeaserTile } from './teaser-tile';
import styles from './teaser-tiles.module.scss';
import { Button } from '@/components/common/button/button';
import { useState } from 'react';
import { CaseStudy } from '@/types/case-study';

interface TeaserTilesProps {
  type?: string;
}

export const TeaserTiles = ({ type }: TeaserTilesProps) => {
  const { t } = useTranslation();
  const { isMobile } = useWindowSize();
  const [showAll, setShowAll] = useState(false);

  const items: CaseStudy[] = t(`case_studies.${type}.items`, {
    returnObjects: true,
  }) as CaseStudy[];

  const displayItems = showAll ? items : items.slice(0, 12);

  return (
    Array.isArray(items) && (
      <div className={styles['teaser-tiles']}>
        <div className={styles['teaser-tiles__header']}>
          <h3 className={styles['teaser-tiles__title']}>
            {t(`case_studies.${type}.title`)}
          </h3>
          <p className={styles['teaser-tiles__lead']}>
            {t(`case_studies.${type}.lead`)}
          </p>
        </div>
        {isMobile ? (
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
          <div className={styles['teaser-tiles__content']}>
            <div className={styles['teaser-tiles__grid']}>
              {displayItems?.map((item, index) => (
                <TeaserTile
                  key={index}
                  teaser={item.teaser}
                  detail={item.detail}
                />
              ))}
            </div>
            {!showAll && items.length > 12 && (
              <div className={styles['teaser-tiles__load-more-btn-container']}>
                <div className={styles['teaser-tiles__load-more-btn']}>
                  <Button onClick={() => setShowAll(true)}>
                    {t('case_studies.show_more_button')}
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    )
  );
};
