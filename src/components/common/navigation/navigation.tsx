import Link from "next/link";
import { useTranslation } from "react-i18next";
import styles from "./navigation.module.scss"
import { useState } from "react";


export const Navigation = ({ }) => {
  const { t } = useTranslation();
  const [activeItem, setActiveItem] = useState<HTMLElement | null>(null);

  const items = [
    {
      title: t('general.navigation.online_consulting'),
      slug: "/online-beratung"
    },
    {
      title: t('general.navigation.our_consulting_service'),
      slug: "/unser-beratungsangebot"
    },
    {
      title: t('general.navigation.contact'),
      slug: "/kontakt"
    }
  ]

  return (
    <nav className={styles["navigation"]}>
      <ul className={styles["navigation__items"]}>
        {items.map((item, i) => (
          <>
            <li className={styles["navigation__item"]}>
              <Link href={item.slug}>{item.title}</Link>
            </li>
            {
              i < items.length - 1 && <div className={styles["navigation__divider"]} />
            }
          </>
        ))}
      </ul>
    </nav>
  );
};
