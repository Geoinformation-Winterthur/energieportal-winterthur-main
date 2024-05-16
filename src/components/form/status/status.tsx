import { Icon } from "@/components/common/icon/icon";
import styles from "./status.module.scss";

type StatusType = "success" | "warning" | "error" | "info";

interface StatusProps {
  text: string;
  type?: StatusType;
}

export const Status = ({ text, type }: StatusProps) => {
  const statusClassName = `${styles["status"]} ${styles["status--" + type]}`;
  return (
    <div className={statusClassName}>
      <div className={styles["status__icon"]}>
        {type && <Icon icon={type} size={24} color={"dark"} />}
      </div>
      <p className={styles["status__text"]}>{text}</p>
    </div>
  );
};
