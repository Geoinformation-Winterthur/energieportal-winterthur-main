'use client'
import { Slider } from "@/components/common/slider/slider";
import { useWindowSize } from "@/hooks/useWindowSize";
import { Service } from "@/types/service";
import { useTranslation } from "../../../../i18n";
import { ServiceTile } from "./service-tile";
import styles from "./service-tiles.module.scss";
import { SliderSlide } from "@/components/common/slider/slider-slide";

export const ServiceTiles = () => {
  const { t } = useTranslation();
  const { isMobile } = useWindowSize()
  const services = t("our_consulting_service.our-services.tiles", { returnObjects: true }) as Service[];

  return (
    <div className={styles["service-tiles"]}>
      <h2 className={styles["service-tiles__title"]}>{t("our_consulting_service.our-services.title")}</h2>
      {isMobile ?
        <Slider>
          {services.map(service => <SliderSlide key={service.title}><ServiceTile service={service} /></SliderSlide>)}
        </Slider>
        :
        <div className={styles["service-tiles__services"]}>
          {services.map(service => <ServiceTile service={service} key={service.title} />)}
        </div>}
      <p className={styles["service-tiles__text"]}>{t("our_consulting_service.our-services.further_information_1")} <a href={t("our_consulting_service.our-services.further_information_link_target_1")} target="_blank">{t("our_consulting_service.our-services.further_information_link_1")}</a> {t("our_consulting_service.our-services.further_information_2")} <a href={t("our_consulting_service.our-services.further_information_link_target_2")} target="_blank">{t("our_consulting_service.our-services.further_information_link_2")}</a> {t("our_consulting_service.our-services.further_information_3")}</p>
    </div>
  )
}