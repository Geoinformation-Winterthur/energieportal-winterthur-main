import { Contact } from "@/components/common/contact/contact";
import { TwoCols } from "@/components/common/layout/two-cols/two-cols";
import { Section } from "@/components/common/section/section";
import { Teaser } from "@/components/common/teaser/teaser";
import { useTranslation } from "../../../../i18n";

interface EndLayOutProps {
  type: string;
}

export const EndLayOut = ({ type }: EndLayOutProps) => {
  const { t } = useTranslation();

  const LeftContent = () => (
    <>
      <Section
        title={t(`my_property.${type}_section_title`)}
        description={t(`my_property.${type}_section_description`)}
      />
      <Contact />
    </>
  );
  const RightContent = () => (
    <>
      <Teaser
        title={t(`my_property.${type}_teaser_1_title`)}
        description={t(`my_property.${type}_teaser_1_description`)}
        image={t(`my_property.${type}_teaser_1_image`)}
        image_credits={t(`my_property.${type}_teaser_1_image_credits`)}
        link={t(`my_property.${type}_teaser_1_link`)}
        link_target={t(`my_property.${type}_teaser_1_link_target`)}
      />
      <Teaser
        title={t(`my_property.${type}_teaser_2_title`)}
        description={t(`my_property.${type}_teaser_2_description`)}
        image={t(`my_property.${type}_teaser_2_image`)}
        image_credits={t(`my_property.${type}_teaser_2_image_credits`)}
        link={t(`my_property.${type}_teaser_2_link`)}
        link_target={t(`my_property.${type}_teaser_2_link_target`)}
      />
    </>
  );
  return (
    <TwoCols
      contentLeft={<LeftContent />}
      contentRight={<RightContent />}
    ></TwoCols>
  );
};
