"use client"
import { useWindowSize } from "../../../hooks/useWindowSize";
import { useTranslation } from "../../../../i18n";
import { Icon } from "../icon/icon";
import { Logo } from "../logo/logo";
import styles from "./header.module.scss";
import { Navigation } from "../navigation/navigation";

export const Header = () => {
  const { t } = useTranslation();
  const { isMobile } = useWindowSize();

  return (
    <header className={styles["header"]}>
      <div className={styles["header__topline"]}>
        <div className={styles["header__red-strip"]}></div>
        <p>{t('general.header.domain')}</p>
        {isMobile ? <Icon icon="burger" size={24} /> : <Logo type="full" width={260} />}
      </div>
      <h1 className={styles["header__title"]}>{t('general.header.title')}</h1>
      <Navigation />
    </header>
  );
};
