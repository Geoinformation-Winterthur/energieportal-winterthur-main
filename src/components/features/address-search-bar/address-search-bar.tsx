"use client"
import { Button } from "@/components/common/button/button";
import { Icon } from "@/components/common/icon/icon";
import { debounce } from "@/utils/debounce";
import { Autocomplete } from '@mui/material';
import { useCallback, useEffect, useState } from "react";
import styles from "./address-search-bar.module.scss";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface AddressSearchBarProps {
  title?: string;
  lead?: string;
  variant?: "light" | "dark";
}

export const AddressSearchBar = ({ title, lead, variant = "dark" }: AddressSearchBarProps) => {
  const [searchString, setSearchString] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [submittedAddress, setSubmittedAddress] = useState<string | null>(null);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      return params.toString();
    },
    [searchParams],
  );

  useEffect(() => {
    if (searchParams.get("address")) {
      setSubmittedAddress(searchParams.get("address") ?? null);
    }
  }, [searchParams])

  const getAddresses = async () => {
    const response = await fetch(`https://stadtplantest.winterthur.ch/energieportal-service/Address?search=${searchString}`);
    const data = await response.json();
    return data;
  }

  const performSearch = async () => {
    setIsLoading(true);
    const results = await getAddresses();
    setSearchResults(results);
    setIsLoading(false);
  };

  const handleOnChange = async (value: string) => {
    setSearchString(value);
    if (value.length < 3) {
      setSearchResults([])
      return;
    };
    debounce(performSearch(), 200);
  }

  const handleSubmitClick = (value: string) => {
    router.push(pathname + "?" + createQueryString("address", value));
    setSubmittedAddress(value);
  };

  const handleClearClick = () => {
    router.push(pathname, { scroll: false });
    setSubmittedAddress(null);
    setSearchString("");
    setSearchResults([]);
  }

  return (
    <div className={`${styles["address-search-bar"]} ${styles[`address-search-bar--${variant}`]}`}>
      <div className={styles["address-search-bar__content"]}>
        <h2 className={styles["address-search-bar__title"]}>{title}</h2>
        <p className={styles["address-search-bar__lead"]}>{lead}</p>
      </div>
      <div className={styles["address-search-bar__form"]}>
        <Autocomplete
          fullWidth
          onInputChange={(e, value) => handleOnChange(value)}
          value={searchString}
          onBlur={() => setSearchResults([])}
          disablePortal
          options={searchResults.slice(0, 40)}
          noOptionsText={searchString.length < 3 ? "Bitte mind. 3 Zeichen eingeben" : "Keine Ergebnisse"}
          filterOptions={(x) => x}
          renderInput={(params) => (
            <div ref={params.InputProps.ref} className={`${styles["address-search-bar__input-wrapper"]} ${submittedAddress ? styles["address-search-bar__input--filled"] : ""} }`}>
              <div className={`${styles["address-search-bar__icon"]} ${styles["address-search-bar__icon--search"]}`}>
                <Icon icon={`${isLoading ? "loading" : "search"}`} />
              </div>
              <input type="text" {...params.inputProps} placeholder={submittedAddress ?? "Strasse und Hausnummer eingeben"} />
              {submittedAddress &&
                <div className={`${styles["address-search-bar__icon"]} ${styles["address-search-bar__icon--clear"]}`}>
                  <Icon icon="close" onButtonClick={handleClearClick} />
                </div>
              }
            </div>
          )}
        />
        <div className={styles["address-search-bar__button"]}>
          <Button icon="arrow-right" onClick={() => handleSubmitClick(searchString)}>Jetzt starten</Button>
        </div>
      </div>
    </div >
  )
};


