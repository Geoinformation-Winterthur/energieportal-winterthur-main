"use client"
import { Button } from "@/components/common/button/button";
import { Icon } from "@/components/common/icon/icon";
import { debounce } from "@/utils/debounce";
import { Autocomplete } from '@mui/material';
import { useState } from "react";
import styles from "./address-search-bar.module.scss";

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

  const handleOnChange = async (value: string) => {
    setSearchString(value);
    if (value.length < 3) {
      setSearchResults([])
      return;
    };
    debounce(performSearch(), 200);
  }


  const handleSubmit = (value: string) => {
    alert(`Diese Adresse wurde übermittelt: ${value}`)
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
            <div ref={params.InputProps.ref} className={styles["address-search-bar__input-wrapper"]}>
              <div className={styles["address-search-bar__icon"]}>
                <Icon icon={`${isLoading ? "loading" : "search"}`} />
              </div>
              <input type="text" {...params.inputProps} placeholder="Strasse und Hausnummer eingeben"></input>
            </div>
          )}
        />
        <div className={styles["address-search-bar__button"]}>
          <Button icon="arrow-right" onClick={() => handleSubmit(searchString)}>Jetzt starten</Button>
        </div>
      </div>
    </div >
  )
};


