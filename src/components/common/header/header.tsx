import { Button } from "../button/button";
import { Icon } from "../icon/icon";
import { Logo } from "../logo/logo";
import styles from "./header.module.scss";

interface HeaderProps { }

export const Header = ({ }: HeaderProps) => {

  return (
    <header className={styles["header"]}>
      <Logo type="full" width={260} />
      <Button icon="send">Beratung starten</Button>
      <h1>Energieportal Winterthur</h1>
      <a href="">Link <Icon icon="send" size={18} /></a>
    </header>
  );
};
