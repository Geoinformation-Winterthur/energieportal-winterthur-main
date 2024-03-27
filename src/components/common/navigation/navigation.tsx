import Link from "next/link";
import { useTranslation } from "react-i18next";
import styles from "./navigation.module.scss"
import { Fragment, useState } from "react";
import { Icon } from "../icon/icon";
import { useWindowSize } from "../../../hooks/useWindowSize";

export const Navigation = ({ }) => {
  const { t } = useTranslation();
  const [activeItem, setActiveItem] = useState<string | null>("/online-beratung");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { isMobile } = useWindowSize();

  const items = [
    {
      title: t('general.navigation.online_consulting'),
      slug: "/online-beratung"
    },
    {
      title: t('general.navigation.our_consulting_service'),
      slug: "/unser-beratungsangebot"
    },
    {
      title: t('general.navigation.contact'),
      slug: "/kontakt"
    }
  ]

  const toggleNavMenu = () => {
    setIsOpen(!isOpen);
  }

  const navOnDesktop = () => (
    <ul className={styles["navigation__items"]}>
      {items.map((item, i) => (
        <Fragment key={i}>
          <li className={`${styles["navigation__item"]} ${item.slug === activeItem ? styles["navigation__item--active"] : ""}`}>
            <Link href={item.slug} onClick={() => setActiveItem(item.slug)}>{item.title}</Link>
          </li>
          {
            i < items.length - 1 && <div className={styles["navigation__divider"]} />
          }
        </Fragment>
      ))}
    </ul>
  )

  const navOnMobile = () => (
    <>
      {isOpen ? <Icon icon="close" size={24} onButtonClick={toggleNavMenu} /> : <Icon icon="burger" size={24} onButtonClick={toggleNavMenu} />}
      <ul className={`${styles["navigation-panel"]} ${isOpen ? styles["navigation--open"] : styles["navigation--closed"]}`}>
        {items.map((item) => (
          <li className={`${styles["navigation__item"]} ${item.slug === activeItem ? styles["navigation__item--active"] : ""}`} key={item.slug}>
            <Link href={item.slug} onClick={() => setActiveItem(item.slug)}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )

  return (
    <nav className={`${styles["navigation"]}`}>
      {isMobile ? navOnMobile() : navOnDesktop()}
    </nav>
  );
};
