import Image from "next/image";
import Link from "next/link";
import { Icon } from "../icon/icon";
import styles from "./teaser.module.scss";
import clsx from "clsx";

interface TeaserProps {
  title: string;
  description: string;
  image: string;
  image_credits?: string;
  link: string;
  link_target: string;
  subtitle?: string;
  asRow?: boolean;
}

export const Teaser = ({ title, description, image, image_credits, link, link_target, subtitle, asRow }: TeaserProps) => {

  const pathToImages = "/energieportal/images/"

  return (
    <div className={clsx(styles["teaser"], asRow ? styles["teaser--as-row"] : "")}>
      <div className={styles["teaser__image"]}>
        <div className={styles["teaser__image-background"]}>
          {image_credits && <p className={styles["teaser__image-copyright"]}>{image_credits}</p>}
        </div>
        <Image src={pathToImages + image} alt={title} fill sizes="(max-width: 833px) 100vw, 50vw" />
      </div>
      <div className={styles["teaser__content"]}>
        <h3 className={styles["teaser__title"]}>{title}</h3>
        <p className={styles["teaser__description"]}>{description}</p>
        {subtitle && <h4 className={styles["teaser__subtitle"]}>{subtitle}</h4>}
        {link_target.startsWith("/") ? <Link href={link_target}>{link} <Icon icon="arrow-right" /></Link> : <a href={link_target} target="_blank">{link} <Icon icon="link" /></a>}
      </div>
    </div>
  )
};
