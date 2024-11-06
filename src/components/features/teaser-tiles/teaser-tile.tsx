import { Button } from "@/components/common/button/button";
import Image from "next/image";
import styles from "./teaser-tile.module.scss";
import { Teaser } from "./teaser-tiles";

interface TeaserTileProps {
  content: Teaser;
}

export const TeaserTile = ({ content }: TeaserTileProps) => {
  const imagePath = `${process.env.NEXT_PUBLIC_BASE_PATH}/images/`;

  return (
    <div className={styles["teaser-tile"]}>
      <div className={styles["teaser-tile__content"]}>
        <h4 className={styles["teaser-tile__title"]}>{content.title}</h4>
        <div className={styles["teaser-tile__img"]}>
          <Image
            src={imagePath + content.imageSrc}
            alt={content.imageAlt}
            fill
          />
        </div>
        <div className={styles["teaser-tile__section"]}>
          <h5 className={styles["teaser-tile__subtitle"]}>
            {content.subtitle}
          </h5>
          {content.tag && (
            <p className={styles["teaser-tile__tag"]}>{content.tag}</p>
          )}
        </div>
        <ul className={styles["teaser-tile__list"]}>
          {content.facts.map((fact, index) => (
            <li className={styles["teaser-tile__list-item"]} key={index}>
              {fact}
            </li>
          ))}
        </ul>
      </div>
      <Button>{content.button_label}</Button>
    </div>
  );
};
