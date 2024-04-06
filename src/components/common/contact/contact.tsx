import Link from "next/link";
import { useTranslation } from "../../../../i18n";
import styles from "./contact.module.scss";
import { Icon } from "../icon/icon";

interface ContactProps {
  onContactPage?: boolean;
}

export const Contact = ({ onContactPage }: ContactProps) => {

  const { t } = useTranslation();

  return (
    <div className={`${styles["contact"]}`}>
      <h3 className={styles["contact__title"]}>{t("contact.box.title")}</h3>
      <p className={styles["contact__description"]}>{t("contact.box.description")}</p>
      <div className={styles["contact__links"]}>
        <a href={`tel:${t("contact.box.phone")}`}><Icon icon="phone" />{t("contact.box.phone")}</a>
        {onContactPage ? <a href={`mailto:${t("contact.box.mail")}`}><Icon icon="mail" />{t("contact.box.mail")}</a> : <Link href={t("contact.box.link_target")}>{t("contact.box.link")} <Icon icon="arrow-right" /></Link>}
      </div>
    </div>
  )
};


