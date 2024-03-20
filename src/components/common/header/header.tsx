import { Logo } from "../logo/logo";
import styles from "./header.module.scss";

interface HeaderProps { }

export const Header = ({ }: HeaderProps) => {

  return (
    <header className={styles["header"]}>
      <Logo type="full" color="red" />
      <h1>Energieportal Winterthur</h1>
    </header>
  );
};
