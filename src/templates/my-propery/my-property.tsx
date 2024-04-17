import { Intro } from "@/components/common/intro/intro"
import { FullWidth } from "@/components/common/layout/full-width/full-width"
import { AddressSearchBar } from "@/components/features/address-search-bar/address-search-bar"
import { t } from "i18next"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

export const MyPropertyPage = () => {
  const [currentAddress, setCurrentAddress] = useState<string | null>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("address")) {
      setCurrentAddress(searchParams.get("address") ?? "");
    }
  }, [searchParams])

  useEffect(() => {
    async function propertyWrapper() {
      const response = await getPropertyInfos();
    }
    if (currentAddress) {
      propertyWrapper();
    }
  }, [currentAddress])


  const getEgid = async () => {
    if (currentAddress) {
      const response = await fetch(`https://stadtplantest.winterthur.ch/energieportal-service/Egid?address=${currentAddress}`);
      const data = await response.json();
      return data;
    }
  }

  const getPropertyInfos = async () => {
    const response = await fetch(`https://api3.geo.admin.ch/rest/services/api/MapServer/find?layer=ch.bfs.gebaeude_wohnungs_register&searchText=${await getEgid()}&searchField=egid&returnGeometry=false&contains=false`);
    const data = await response.json();
    return data;
  }

  return (
    <>
      <Intro title={t("my_property.title")} variant="dark" />
      <FullWidth noPaddingY>
        <AddressSearchBar variant="light" />
      </FullWidth>
    </>
  )
}
