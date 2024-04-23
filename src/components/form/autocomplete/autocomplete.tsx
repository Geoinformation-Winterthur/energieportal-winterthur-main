import { Button } from '@/components/common/button/button';
import { Icon } from '@/components/common/icon/icon';
import { debounce } from '@/utils/debounce';
import { Autocomplete as MuiAutocomplete } from '@mui/material';
import clsx from 'clsx';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from '../../../../i18n';
import "../../../styles/popper.scss";
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
      setSearchString(searchParams.get("address") ?? "")
    }
  }, [searchParams])

  const getAddresses = async (value: string) => {
    const response = await fetch(`https://stadtplantest.winterthur.ch/energieportal-service/Address?search=${value}`);
    const data = await response.json();
    return data;
  }

  const performSearch = async (value: string) => {
    setIsLoading(true);
    const results = await getAddresses(value);
    setSearchResults(results);
    setIsLoading(false);
  };

  const handleOnChange = async (value: string) => {
    setSearchString(() => value);
    if (value.length < 3) {
      setSearchResults([]);
      return;
    };
    debounce(performSearch(value), 200);
  }

  const handleSubmitClick = (value: string) => {
    router.push(pathname + "?" + createQueryString("address", value), { scroll: false });
    setSubmittedAddress(value);
  };

  const handleClearClick = () => {
    setSearchString("");
    setSearchResults([]);
  }

  return (
    <div className={styles["autocomplete"]}>
      <MuiAutocomplete
        fullWidth
        value={searchString}
        onInputChange={(e, value) => handleOnChange(value)}
        onBlur={() => setSearchResults([])}
        disablePortal
        options={searchResults.slice(0, 40).sort()}
        noOptionsText={searchString.length < 3 ? t("address.search_bar.input_help") : t("address.search_bar.input_no_results")}
        filterOptions={(x) => x}
        renderInput={(params) => (
          <div ref={params.InputProps.ref} className={clsx(styles["autocomplete__input-wrapper"], submittedAddress ? styles["autocomplete__input--filled"] : "")}>
            <div className={clsx(styles["autocomplete__icon"], styles["autocomplete__icon--search"])}>
              <Icon icon={isLoading ? "loading" : "search"} />
            </div>
            <input type="text" {...params.inputProps} placeholder={t("address.search_bar.input_placeholder")} />
            {submittedAddress &&
              <div className={clsx(styles["autocomplete__icon"], styles["autocomplete__icon--clear"])}>
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