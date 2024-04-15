import Link from "next/link";
import styles from "./teaser.module.scss";
import Image from "next/image";
import { Icon } from "../icon/icon";

interface TeaserProps {
  title: string;
  description: string;
  image: string;
  image_credits?: string;
  link: string;
  link_target: string;
}

export const Teaser = ({ title, description, image, image_credits, link, link_target }: TeaserProps) => {

  const pathToImages = "/images/"

  return (
    <div className={`${styles["teaser"]}`}>
      <div className={styles["teaser__image"]}>
        <div className={styles["teaser__image-background"]}>
          {image_credits && <p className={styles["teaser__image-copyright"]}>Bildquelle: {image_credits}</p>}
        </div>
        <Image src={pathToImages + image} alt={title} fill sizes="(max-width: 833px) 100vw, 50vw" />
      </div>
      <div className={styles["teaser__content"]}>
        <h3 className={styles["teaser__title"]}>{title}</h3>
        <p className={styles["teaser__description"]}>{description}</p>
        {link_target.startsWith("/pdf" || "https") ? <a href={link_target} target="_blank">{link} <Icon icon="link" /></a> : <Link href={link_target}>{link} <Icon icon="arrow-right" /> </Link>}
      </div>
    </div>
  )
};

