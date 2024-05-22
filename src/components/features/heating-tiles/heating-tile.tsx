import { Button } from "@/components/common/button/button";
import { Icon, IconType } from "@/components/common/icon/icon";
import { FullWidth } from "@/components/common/layout/full-width/full-width";
import Overlay from "@/components/common/overlay/overlay";
import { Recommendation } from "@/components/common/recommendation/recommendation";
import TabList from "@/components/common/tabs/tab-list/tab-list";
import TabPanel from "@/components/common/tabs/tab-panel/tab-panel";
import Tab from "@/components/common/tabs/tab/tab";
import Tabs from "@/components/common/tabs/tabs";
import { HeatingsFaq } from "@/templates/faq/heatings/heatings-faq";
import { Heating } from "@/types/heating";
import { useTranslation } from "../../../../i18n";
import styles from "./heating-tile.module.scss";

interface HeatingTileProps {
  heating: Heating;
  allRecommendations?: Heating[];
}

export const HeatingTile = ({ heating, allRecommendations }: HeatingTileProps) => {
  const { t } = useTranslation();

  const getPros = () => t(`my_property.heating_recommendations.${heating.code}.pros`, { returnObjects: true }) as string[];
  const getCons = () => t(`my_property.heating_recommendations.${heating.code}.cons`, { returnObjects: true }) as string[];

  const renderHeatingOverlay = (trigger: React.ReactNode) => (
    <Overlay trigger={trigger}>
      <Tabs initialValue={heating.code} name={'heating-tabs'} variant="reduced" inOverlay>
        <TabList>
          {allRecommendations?.map(heating => (
            <Tab label={t(`my_property.heating_recommendations.${heating.code}.title`)} value={heating.code} key={heating.code}></Tab>
          ))}
        </TabList>
        {allRecommendations?.map(heating => (
          <TabPanel value={heating.code} key={heating.code}>
            <FullWidth variant="white">
              <HeatingsFaq code={heating.code} />
            </FullWidth>
          </TabPanel>
        ))}
      </Tabs>
    </Overlay>
  )

  const EnergyPlanStatus = () => (
    <div className={styles["heating-tile__status"]}>
      <h5 className={styles["heating-tile__status-label"]}>{t("my_property.heating_recommendations.state")}</h5>
      {renderHeatingOverlay(<button className={styles["heating-tile__status-btn"]}>{t(`my_property.heating_recommendations.${heating.code}.status.label`)}</button>)}
    </div>
  )

  const renderContent = () => (
    <>
      <div className={styles["heating-tile__content"]}>
        <div className={styles["heating-tile__header"]}>
          <h4 className={styles["heating-tile__title"]}>{t(`my_property.heating_recommendations.${heating.code}.title`)}</h4>
          <Icon icon={heating.isDistrictHeating ? "districtheating" : heating.code as IconType} size={56} />
        </div>
        <div className={styles["heating-tile__lists"]}>
          {heating.isDistrictHeating && <EnergyPlanStatus />}
          <div>
            <h5 className={styles["heating-tile__list-title"]}>{t("my_property.heating_recommendations.pros")}</h5>
            <ul className={styles["heating-tile__list"]}>
              {getPros().map(pro => (
                <li className={styles["heating-tile__list-item"]} key={pro}>{pro}</li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className={styles["heating-tile__list-title"]}>{t("my_property.heating_recommendations.cons")}</h5>
            <ul className={styles["heating-tile__list"]}>
              {getCons().map(con => (
                <li className={styles["heating-tile__list-item"]} key={con}>{con}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {renderHeatingOverlay(<Button>{t("my_property.heating_recommendations.button")}</Button>)}
    </>
  );

  return heating.isRecommendation
    ? (
        <Recommendation title={t("my_property.heating_recommendations.flag")} height={730}>
          {renderContent()}
        </Recommendation>
    ) : (
      <div className={styles["heating-tile"]}>
        <div className={styles["heating-tile__inner"]}>
          {renderContent()}
        </div>
      </div>
    )
}