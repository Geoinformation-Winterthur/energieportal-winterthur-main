import { Autocomplete } from "@/components/form/autocomplete/autocomplete";
import styles from "./address-search-bar.module.scss";


interface AddressSearchBarProps {
  title?: string;
  lead?: string;
  variant?: "light" | "dark";
}

export const AddressSearchBar = ({ title, lead, variant = "dark" }: AddressSearchBarProps) => {

  return (
    <div className={`${styles["address-search-bar"]} ${styles[`address-search-bar--${variant}`]}`}>
      <div className={styles["address-search-bar__content"]}>
        <h2 className={styles["address-search-bar__title"]}>{title}</h2>
        <p className={styles["address-search-bar__lead"]}>{lead}</p>
      </div>
      <div className={styles["address-search-bar__form"]}>
        <Autocomplete />
      </div>
    </div >
  )
};


