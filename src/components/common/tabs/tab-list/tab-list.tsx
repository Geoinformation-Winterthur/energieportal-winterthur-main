import { ReactNode, useContext } from "react";
import styles from './tab-list.module.scss';
import { TabsContext } from "../../../../context/tabs-context";
import clsx from "clsx";

interface TabListProps {
  children: ReactNode;
}

export default function TabList({ children }: TabListProps) {
  const tabs = useContext(TabsContext);

  return (
    <div className={clsx(styles['tab-list'], styles[`tab-list--${tabs.variant}`], tabs.inOverlay ? styles["tab-list--in-overlay"] : "")} role="tablist">
      {children}
    </div>
  )
}