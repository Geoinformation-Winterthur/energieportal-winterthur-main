import { Icon } from "@/components/common/icon/icon";
import { getPropertyFacts } from "@/utils/get-property-facts";
import { getPropertyImage } from "@/utils/get-property-image";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslation } from "../../../../i18n";
import styles from "./property-image.module.scss";

const MARGIN = 50; // extra space around buildings coordinates

export const PropertyImage = () => {

  const { t } = useTranslation();

  const searchParams = useSearchParams();
  const [currentAddress, setCurrentAddress] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [imgSrc, setImgSrc] = useState("");

  useEffect(() => {
    if (searchParams.get("address")) {
      setCurrentAddress(searchParams.get("address") ?? "");
    }
  }, [searchParams])

  useEffect(() => {
    async function propertyWrapper() {
      setIsLoading(true);
      const propertyData = await getPropertyFacts(currentAddress || "");
      const eCoordinate = propertyData.results[0].attributes.gkode;
      const nCoordinate = propertyData.results[0].attributes.gkodn;

      const eCoordDecreased = eCoordinate - MARGIN;
      const nCoordDecreased = nCoordinate - MARGIN;
      const eCoordIncreased = eCoordinate + MARGIN;
      const nCoordIncreased = nCoordinate + MARGIN;

      const image = await getPropertyImage(eCoordDecreased, nCoordDecreased, eCoordIncreased, nCoordIncreased);

      if (!image) {
        setIsLoading(false);
        return;
      }
      setImgSrc(URL.createObjectURL(image));
      setIsLoading(false);
    }

    if (currentAddress) {
      propertyWrapper();
    }
  }, [currentAddress])


  return (
    <div className={styles["property-image"]}>
      {isLoading ? <Icon icon="loading" color="red" /> : <Image className={styles["property-image__img"]} src={imgSrc} alt={t("my_property.property_image_alt")} fill />}
    </div>
  )
}