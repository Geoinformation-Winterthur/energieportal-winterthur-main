
import { useTranslation } from "../../../../i18n";
import styles from "./footer.module.scss";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles["footer"]}>
      <p className={styles["footer__copyright"]}>{`© ${t("general.footer.copyright")}`}</p>
      <div className={styles["footer__links"]}>
        <a href={t("general.footer.privacy_link")} className={styles["footer__link"]} target="_blank">{t("general.footer.privacy")}</a>
        <div className={styles["footer__divider"]} />
        <a href={t("general.footer.legal_link")} className={styles["footer__link"]} target="_blank">{t("general.footer.legal")}</a>
      </div>
    </footer>
  );
};
