"use client"
import clsx from 'clsx';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { Icon } from "../icon/icon";
import styles from "./navigation.module.scss";

export const Navigation = ({ }) => {
  const { t } = useTranslation();
  const pathname = usePathname()
  const [activeItem, setActiveItem] = useState<string | null>(pathname);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { isMobile } = useWindowSize();

  useEffect(() => {
    setActiveItem(pathname);
    document.body.classList.toggle("no-scroll", isOpen);
  }, [pathname, isOpen])


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
          <li>
            <Link href={item.slug} className={clsx("link-primary", item.slug === activeItem ? "link-primary--active" : "")}>{item.title}</Link>
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
      <ul className={clsx(styles["navigation-panel"], isOpen ? styles["navigation--open"] : styles["navigation--closed"])}>
        <Link href="/" onClick={toggleNavMenu} className={clsx(styles["navigation__domain"], "link-primary")}>{t('general.header.domain')}</Link>
        {items.map((item) => (
          <li className={styles["navigation-panel__items"]} key={item.slug}>
            <Link href={item.slug} onClick={() => setIsOpen(false)}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )

  return (
    <nav className={styles["navigation"]}>
      {isMobile ? navOnMobile() : navOnDesktop()}
    </nav>
  );
};
