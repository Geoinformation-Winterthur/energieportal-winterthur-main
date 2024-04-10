"use client"
import { Button } from "@/components/common/button/button";
import { Input } from "@/components/form/input/input";
import { ChangeEvent, useState } from "react";
import styles from "./address-search-bar.module.scss";
import { debounce } from "@/utils/debounce";
import { Icon } from "@/components/common/icon/icon";

interface AddressSearchBarProps {
  title?: string;
  lead?: string;
  variant: "light" | "dark";
}

export const AddressSearchBar = ({ title, lead, variant }: AddressSearchBarProps) => {
  const [searchString, setSearchString] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  const handleOnChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setSearchString(e?.target?.value ?? "");
    if (e?.target?.value?.length < 3) {
      setSearchResults([]);
      return;
    };
    debounce(performSearch(), 400);
  }

  const handleOnBlur = () => {
    setSearchResults([]);
  }

  const handleResultClick = (result: string) => {
    setSearchString(result);
    setSearchResults([]);
  }

  return (
    <div className={`${styles["address-search-bar"]} ${styles[`address-search-bar--${variant}`]}`}>
      <div className={styles["address-search-bar__content"]}>
        <h2 className={styles["address-search-bar__title"]}>Ihr Gebäude in Winterthur</h2>
        <p className={styles["address-search-bar__lead"]}>Geben Sie für eine digitale Energieberatung Ihre Adresse ein.</p>
      </div>
      <div className={styles["address-search-bar__input"]}>
        <div className={styles["address-search-bar__icon"]}>
          <Icon icon={`${isLoading ? "loading" : "search"}`} />
        </div>
        <Input
          name="address"
          type="text"
          placeholder="Strasse und Hausnummer eingeben"
          value={searchString}
          onChange={handleOnChange}
          onBlur={handleOnBlur}
        />
        {searchResults.length > 1 && (
          <ul className={styles["address-search-bar__search-results"]}>
            {searchResults.slice(0, 8).map((result, i) => (
              <li className={styles["address-search-bar__search-result"]} key={i} onMouseDown={() => handleResultClick(result)}>{result}</li>
            ))}
          </ul>
        )}
        {searchResults.length === 1 && searchString.length > 0 && (
          <div className={styles["address-search-bar__no-results"]}>
            Keine Ergebnisse
          </div>
        )}
      </div>
      <div className={styles["address-search-bar__button"]}>
        <Button icon="arrow-right">Jetzt starten</Button>
      </div>
    </div >
  )
};


