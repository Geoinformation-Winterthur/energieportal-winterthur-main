"use client"
import clsx from 'clsx';
import Link from "next/link";
import { useTranslation } from "../../../../i18n";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { Logo } from "../logo/logo";
import { Navigation } from "../navigation/navigation";
import styles from "./header.module.scss";


export const Header = () => {
  const { t } = useTranslation();
  const { isMobile } = useWindowSize();

  return (
    <header className={styles["header"]}>
      <div className={styles["header__content"]}>
        <div className={styles["header__topline"]}>
          <div className={styles["header__red-strip"]} />
          <Link href="/" className={clsx(styles["header__domain"], "link-primary")}>{t('general.header.domain')}</Link>
          {!isMobile && <a className='no-animation' href={t("general.header.logo_link")} target='_blank'><Logo type="full" width={260} /></a>}
        </div>
        <Link href="/"><h1 className={styles["header__title"]}>{t('general.header.title')}</h1></Link>
      </div>
      <Navigation />
    </header>
  );
};
