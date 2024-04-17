import { Button } from '@/components/common/button/button';
import { Icon } from '@/components/common/icon/icon';
import { debounce } from '@/utils/debounce';
import { Autocomplete as MuiAutocomplete } from '@mui/material';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from '../../../../i18n';
import styles from "./autocomplete.module.scss";

export const Autocomplete = () => {
  const [searchString, setSearchString] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [submittedAddress, setSubmittedAddress] = useState<string | null>(null);
  const { t } = useTranslation();

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
    router.replace(pathname, { scroll: false });
    setSubmittedAddress(null);
    setSearchString("");
    setSearchResults([]);
  }

  return (
    <div className={styles["autocomplete"]}>
      <MuiAutocomplete
        fullWidth
        onInputChange={(e, value) => handleOnChange(value)}
        onBlur={() => setSearchResults([])}
        disablePortal
        options={searchResults.slice(0, 40).sort()}
        noOptionsText={searchString.length < 3 ? t("address.search_bar.input_help") : t("address.search_bar.input_no_results")}
        filterOptions={(x) => x}
        renderInput={(params) => (
          <div ref={params.InputProps.ref} className={`${styles["autocomplete__input-wrapper"]} ${submittedAddress ? styles["autocomplete__input--filled"] : ""} }`}>
            <div className={`${styles["autocomplete__icon"]} ${styles["autocomplete__icon--search"]}`}>
              <Icon icon={`${isLoading ? "loading" : "search"}`} />
            </div>
            <input className="autocomplete__input" type="text" {...params.inputProps} placeholder={submittedAddress ?? t("address.search_bar.input_placeholder")} />
            {submittedAddress &&
              <div className={`${styles["autocomplete__icon"]} ${styles["autocomplete__icon--clear"]}`}>
                <Icon icon="close" onButtonClick={handleClearClick} />
              </div>
            }
          </div>
        )}
      />
      <div className={styles["autocomplete__button"]}>
        {submittedAddress ? <Button onClick={() => handleSubmitClick(searchString)}>{t("address.search_bar.edit")}</Button> : <Button icon="arrow-right" onClick={() => handleSubmitClick(searchString)}>{t("address.search_bar.submit")}</Button>}
      </div>
    </div>
  )
}