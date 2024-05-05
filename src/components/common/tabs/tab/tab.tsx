import { useContext } from "react";
import { TabsContext } from "../../../../context/tabs-context";
import clsx from "clsx";
import styles from './tab.module.scss';

interface TabProps {
    label: string;
    value: string;
}

export default function Tab({ label, value }: TabProps) {
    const tabs = useContext(TabsContext);
    const isActive = tabs.value === value;
    return (
        <button
                onKeyDown={(event) => tabs.handleKeyDown(event)}
                onBlur={(event) => tabs.handleBlur(event)}
                className={clsx(styles['tab'], isActive && styles['tab--active'])}
                onClick={() => tabs.changeTabsValue(value)}
                tabIndex={isActive ? 0 : -1}
                aria-selected={isActive}
                id={`${tabs.name}-tab-${value}`}
                aria-controls={`${tabs.name}-panel-${value}`}
                role="tab">
            <span className={styles['tab__inner']}>{label}</span>
        </button>
    )
}