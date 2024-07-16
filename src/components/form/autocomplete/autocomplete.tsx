import { Button } from "@/components/common/button/button";
import { Icon } from "@/components/common/icon/icon";
import { debounce } from "@/utils/debounce";
import { sortOptions } from "@/utils/sort-addresses";
import {
  AutocompleteInputChangeReason,
  Autocomplete as MuiAutocomplete,
} from "@mui/material";
import clsx from "clsx";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "../../../../i18n";
import "../../../styles/popper.scss";
import styles from "./autocomplete.module.scss";

export const Autocomplete = () => {
  const [searchString, setSearchString] = useState<string | null>(null);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [submittedAddress, setSubmittedAddress] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
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
    [searchParams]
  );

  useEffect(() => {
    if (searchParams.get("address")) {
      setSubmittedAddress(searchParams.get("address") ?? null);
      setSelectedValue(searchParams.get("address") ?? "");
    }
  }, [searchParams]);

  const getAddresses = async (value: string) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/Address?search=${value}`
    );
    const data = await response.json();
    return data;
  };

  const performSearch = async (value: string) => {
    setIsLoading(true);
    const results = await getAddresses(value);
    setSearchResults(results);
    setIsLoading(false);
  };

  const handleOnInputChange = async (
    value: string,
    reason: AutocompleteInputChangeReason
  ) => {
    setSearchString(() => value);
    if (value.length < 3 || reason === "reset") {
      setSearchResults([]);
      setOpen(false);
      return;
    }
    setOpen(true);
    debounce(performSearch(value), 200);
  };

  const handleOnChange = async (value: string, reason: string) => {
    if (reason === "selectOption") {
      setSelectedValue(value);
      handleSubmitClick(value);
      setSearchResults([]);
      setOpen(false);
      return;
    }
  };

  const handleSubmitClick = (value: string) => {
    router.push(pathname + "?" + createQueryString("address", value), {
      scroll: false,
    });
    setSubmittedAddress(value);
  };

  const handleClearClick = () => {
    setSearchString(null);
    setSearchResults([]);
  };

  const handleOnBlur = () => {
    setSearchResults([]);
    setOpen(false);
  };

  return (
    <div className={styles["autocomplete"]}>
      <MuiAutocomplete
        open={open}
        inputValue={searchString ?? ""}
        value={selectedValue}
        onChange={(_, value, reason) => handleOnChange(value ?? "", reason)}
        onInputChange={(_, value, reason) => handleOnInputChange(value, reason)}
        onBlur={handleOnBlur}
        disablePortal
        options={searchResults.slice(0, 40).sort(sortOptions)}
        noOptionsText={
          (searchString ?? "").length < 3
            ? t("address.search_bar.input_help")
            : t("address.search_bar.input_no_results")
        }
        filterOptions={(x) => x}
        renderInput={(params) => (
          <div
            ref={params.InputProps.ref}
            className={clsx(
              styles["autocomplete__input-wrapper"],
              submittedAddress ? styles["autocomplete__input--filled"] : ""
            )}
          >
            <div
              className={clsx(
                styles["autocomplete__icon"],
                styles["autocomplete__icon--search"]
              )}
            >
              <Icon icon={isLoading ? "loading" : "search"} />
            </div>
            <input
              type="text"
              {...params.inputProps}
              placeholder={t("address.search_bar.input_placeholder")}
            />
            {submittedAddress && (
              <div
                className={clsx(
                  styles["autocomplete__icon"],
                  styles["autocomplete__icon--clear"]
                )}
              >
                <Icon icon="close" onButtonClick={handleClearClick} />
              </div>
            )}
          </div>
        )}
      />
      <div className={styles["autocomplete__button"]}>
        {submittedAddress ? (
          <Button
            disabled={!selectedValue || !searchString}
            onClick={() => handleSubmitClick(searchString ?? "")}
          >
            {t("address.search_bar.edit")}
          </Button>
        ) : (
          <Button
            disabled={!selectedValue || !searchString}
            icon="arrow-right"
            onClick={() => handleSubmitClick(searchString ?? "")}
          >
            {t("address.search_bar.submit")}
          </Button>
        )}
      </div>
    </div>
  );
};
