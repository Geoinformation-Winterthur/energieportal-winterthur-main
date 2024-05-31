'use client'
import { Contact } from "@/components/common/contact/contact";
import { Intro } from "@/components/common/intro/intro";
import { OneCol } from "@/components/common/layout/one-col/one-col";
import { TwoCols } from "@/components/common/layout/two-cols/two-cols";
import { Section } from "@/components/common/section/section";
import { Teaser } from "@/components/common/teaser/teaser";
import { AddressSearchBar } from "@/components/features/address-search-bar/address-search-bar";
import { MyPropertyPage } from "@/templates/my-property/my-property";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslation } from "../../i18n";

export default function OnlineConsulting() {
  const { t } = useTranslation();
  const [hasAddress, setHasAddress] = useState(false);
  const searchParams = useSearchParams();

  useEffect(() => {
    setHasAddress(searchParams.has("address"));
  }, [searchParams])


  const RightContent = () => (
    <>
      <Teaser title={t("online_consulting.teaser_1_title")} description={t("online_consulting.teaser_1_description")} image={t("online_consulting.teaser_1_image")} image_credits={t("online_consulting.teaser_1_image_credits")} link={t("online_consulting.teaser_1_link")} link_target={t("online_consulting.teaser_1_link_target")} />
      <Teaser title={t("online_consulting.teaser_2_title")} description={t("online_consulting.teaser_2_description")} image={t("online_consulting.teaser_2_image")} image_credits={t("online_consulting.teaser_2_image_credits")} link={t("online_consulting.teaser_2_link")} link_target={t("online_consulting.teaser_2_link_target")} />
    </>
  )
  const LeftContent = () => (
    <>
      <Section title={t("online_consulting.section_title")} description={t("online_consulting.section_description")} />
      <Contact />
    </>
  )

  const renderWelcomeScreen = () => {
    return (
      <>
        <Intro title={t("online_consulting.intro.title")} lead={t("online_consulting.intro.lead")} variant="light" />
        <OneCol noPaddingTop noPaddingBottom>
          <AddressSearchBar variant="dark" title={t("address.search_bar.title")} lead={t("address.search_bar.text")} />
        </OneCol>
        <TwoCols contentLeft={<LeftContent />} contentRight={<RightContent />}></TwoCols>
      </>
    )
  }

  return (
    <main>
      {hasAddress ? <MyPropertyPage /> : renderWelcomeScreen()}
    </main>
  );
}