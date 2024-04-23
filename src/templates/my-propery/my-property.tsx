import { Intro } from "@/components/common/intro/intro"
import { FullWidth } from "@/components/common/layout/full-width/full-width"
import { AddressSearchBar } from "@/components/features/address-search-bar/address-search-bar"
import { Co2Emissions } from "@/components/features/co2-emissions/co2-emissions"
import { PropertyFacts } from "@/components/features/property-facts/property-facts"
import { useTranslation } from "../../../i18n"

export const MyPropertyPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Intro title={t("my_property.title")} variant="dark" />
      <FullWidth noPaddingY>
        <AddressSearchBar variant="light" />
        <Co2Emissions />
        <PropertyFacts />
      </FullWidth >
    </>
  )
}
