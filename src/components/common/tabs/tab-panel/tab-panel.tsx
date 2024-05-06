import { ReactNode, useContext } from "react";
import { TabsContext } from "../../../../context/tabs-context";
import styles from './tab-panel.module.scss';
import clsx from "clsx";

interface TabProps {
    value: string;
    children: ReactNode;
}

export default function Tab({ value, children }: TabProps) {
    const tabs = useContext(TabsContext);
    const isHidden = tabs.value !== value;
    return (
        <div
                hidden={isHidden}
                className={clsx(styles['tab-panel'], isHidden && styles['tab-panel--hidden'])}
                tabIndex={0}
                id={`${tabs.name}-panel-${value}`}
                aria-labelledby={`${tabs.name}-tab-${value}`}
                role="tabpanel">
            {children}
        </div>
    )
}