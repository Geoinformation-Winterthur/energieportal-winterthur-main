import { Intro } from "@/components/common/intro/intro";
import { FullWidth } from "@/components/common/layout/full-width/full-width";
import { OneCol } from "@/components/common/layout/one-col/one-col";
import { Teaser } from "@/components/common/teaser/teaser";
import { ServiceTiles } from "@/components/features/service-tiles/service-tiles";
import { useTranslation } from "../../../i18n";

export default function OurConsultingService() {
  const { t } = useTranslation();

  return (
    <>
      <Intro title={t("our_consulting_service.intro.title")} variant="dark" slim />
      <OneCol>
        <Teaser title={t("our_consulting_service.teaser_title")} description={t("our_consulting_service.teaser_description")} image={t("our_consulting_service.teaser_image")} image_credits={t("our_consulting_service.teaser_image_credits")} link={t("our_consulting_service.teaser_link")} link_target={t("our_consulting_service.teaser_link_target")} subtitle={t("our_consulting_service.teaser_subtitle")} asRow />
      </OneCol>
      <FullWidth>
        <ServiceTiles />
      </FullWidth>
    </>
  );
}