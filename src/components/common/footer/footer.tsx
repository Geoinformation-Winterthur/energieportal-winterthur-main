
import Link from "next/link";
import { useTranslation } from "../../../../i18n";
import styles from "./footer.module.scss";

export const Footer = () => {
  const { t } = useTranslation();
  const pathToFiles = "/pdf/"

  return (
    <footer className={styles["footer"]}>
      <p className={styles["footer__copyright"]}>{`© ${t("general.footer.copyright")}`}</p>
      <div className={styles["footer__links"]}>
        <Link href={t("general.footer.legal_link")} className={styles["footer__link"]}>{t("general.footer.legal")}</Link>
        <div className={styles["footer__divider"]} />
        <a href={pathToFiles + t("general.footer.privacy_link")} className={styles["footer__link"]} target="_blank">{t("general.footer.privacy")}</a>
        <div className={styles["footer__divider"]} />
        <a href={pathToFiles + t("general.footer.terms_of_use_link")} className={styles["footer__link"]} target="_blank">{t("general.footer.terms_of_use")}</a>
      </div>
    </footer>
  );
};