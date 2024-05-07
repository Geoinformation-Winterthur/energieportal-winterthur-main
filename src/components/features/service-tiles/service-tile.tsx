import { Icon } from "@/components/common/icon/icon"
import { Service } from "@/types/service"
import { useTranslation } from "../../../../i18n"
import styles from "./service-tile.module.scss"

interface ServiceTileProps {
  service: Service;
}

export const ServiceTile = ({ service }: ServiceTileProps) => {

  const { t } = useTranslation();

  return (
    <div className={styles["service-tile"]}>
      <div>
        <div className={styles["service-tile__header"]}>
          <h3 className={styles["service-tile__title"]}>{service.title}</h3>
          <Icon icon={service.icon} size={72} />
        </div>
        <p>{service.description}</p>
      </div>
      <table className={styles["service-tile__table"]}>
        <tbody>
          <tr className={styles["service-tile__table-row"]}>
            <th className={styles["service-tile__table-row-head"]}>{t("our_consulting_service.our-services.table_scope")}</th>
            <td className={styles["service-tile__table-row-data"]}>{service.scope}</td>
          </tr>
          <tr className={styles["service-tile__table-row"]}>
            <th className={styles["service-tile__table-row-head"]}>{t("our_consulting_service.our-services.table_location")}</th>
            <td className={styles["service-tile__table-row-data"]}>{service.location}</td>
          </tr>
          <tr className={styles["service-tile__table-row"]}>
            <th className={styles["service-tile__table-row-head"]}>{t("our_consulting_service.our-services.table_costs")}</th>
            <td className={styles["service-tile__table-row-data"]}>{service.costs}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}