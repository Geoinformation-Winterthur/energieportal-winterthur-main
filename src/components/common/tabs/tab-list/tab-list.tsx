import { ReactNode } from "react";
import styles from './tab-list.module.scss';

interface TabListProps {
    children: ReactNode;
}

export default function TabList({ children }: TabListProps) {
    return (
        <div className={styles['tab-list']} role="tablist">
            {children}
        </div>
    )
}