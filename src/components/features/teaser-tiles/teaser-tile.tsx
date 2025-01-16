import { Button } from '@/components/common/button/button';
import Overlay from '@/components/common/overlay/overlay';
import { Detail, Teaser } from '@/types/case-study';
import Image from 'next/image';
import { DetailView } from '../detail-view/detail-view';
import styles from './teaser-tile.module.scss';

interface TeaserTileProps {
  teaser: Teaser;
  detail: Detail;
}

export const TeaserTile = ({ teaser, detail }: TeaserTileProps) => {
  const imagePath = `${process.env.NEXT_PUBLIC_BASE_PATH}/`;

  const renderOverlay = (
    trigger: React.ReactNode,
    title: string,
    subtitle: string
  ) => (
    <Overlay trigger={trigger} title={title + ' ' + subtitle} isCaseStudy>
      <DetailView detail={detail} />
    </Overlay>
  );

  return renderOverlay(
    <div className={styles['teaser-tile']}>
      <div className={styles['teaser-tile__content']}>
        <div className={styles['teaser-tile__header']}>
          <h4 className={styles['teaser-tile__title']}>{teaser.title}</h4>
        </div>
        <div className={styles['teaser-tile__img']}>
          <Image src={imagePath + teaser.imageSrc} alt={teaser.imageAlt} fill />
        </div>
        <div className={styles['teaser-tile__section']}>
          <h5 className={styles['teaser-tile__subtitle']}>{teaser.subtitle}</h5>
          {teaser.tag && (
            <p className={styles['teaser-tile__tag']}>{teaser.tag}</p>
          )}
        </div>
        <ul className={styles['teaser-tile__list']}>
          {teaser.facts.map((fact, index) => (
            <li className={styles['teaser-tile__list-item']} key={index}>
              {fact}
            </li>
          ))}
        </ul>
      </div>
      <Button>{teaser.buttonLabel}</Button>
    </div>,
    teaser.title,
    teaser.subtitle
  );
};
