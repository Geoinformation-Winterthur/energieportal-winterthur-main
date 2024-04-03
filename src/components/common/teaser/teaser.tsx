import Link from "next/link";
import styles from "./teaser.module.scss";
import Image from "next/image";
import { Icon } from "../icon/icon";

interface TeaserProps {
  title: string;
  description: string;
  image: string;
  link: string;
  link_target: string;
}

export const Teaser = ({ title, description, image, link, link_target }: TeaserProps) => {

  const pathToImages = "/images/"

  return (
    <div className={`${styles["teaser"]}`}>
      <div className={styles["teaser__image"]}>
        <Image src={pathToImages + image} alt={title} fill sizes="(max-width: 833px) 100vw, 50vw" />
      </div>
      <div className={styles["teaser__content"]}>
        <h3 className={styles["teaser__title"]}>{title}</h3>
        <p className={styles["teaser__description"]}>{description}</p>
        {link_target.startsWith("/") ? <Link href={link_target}>{link} <Icon icon="arrow-right" /> </Link> : <a href={link_target} target="_blank">{link} <Icon icon="link" /></a>}
      </div>
    </div>
  )
};


