"use client";
import { Button } from "@/components/common/button/button";
import { Contact } from "@/components/common/contact/contact";
import { Checkbox } from "@/components/form/checkbox/checkbox";
import { Input } from "@/components/form/input/input";
import { Textarea } from "@/components/form/textarea/textarea";
import { useState } from "react";
import { useTranslation } from "../../../../i18n";
import styles from "./contact-form.module.scss";
import { Autocomplete } from "@/components/form/autocomplete/autocomplete";

interface ContactFormProps { }

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const ContactForm = ({ }: ContactFormProps) => {
  const { t } = useTranslation();
  const [objectAddress, setobjectAddress] = useState("");
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [eMailAddress, setEMailAddress] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [asksForCallback, setAsksForCallback] = useState(false);
  const [requestText, setRequestText] = useState("");
  const [hasEmailError, setHasEmailError] = useState(false);
  const [showRequiredError, setShowRequiredError] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (eMailAddress === "") {
      setShowRequiredError(true);
      return;
    }
    const body = JSON.stringify({
      objectAddress,
      firstName,
      lastName,
      eMailAddress,
      phoneNo,
      asksForCallback,
      requestText,
    });

    const response = await fetch("https://stadtplantest.winterthur.ch/energieportal-service/ContactForm?dryRun=true", {
      method: "POST",
      headers: {
        "Accept": "*/*",
        "User-Agent": "Mozilla/5.0",
        "Content-Type": "application/json",
      },
      body: `{"objectAddress":"","firstName":"","lastName":"","eMailAddress":"","phoneNo":"","asksForCallback":false,"whenToCallBack":"","requestText":""}`,
    });
    const data = await response.json();
    console.log(data);
  }

  return (
    <form className={styles["contact-form"]} onSubmit={handleFormSubmit}>
      <div className={styles["contact-form__left"]}>
        <div className={styles["contact-form__contact-block"]}>
          <Contact onContactPage />
        </div>
        <div className={styles["contact-form__contact-block"]}>
          <h3 className={styles["contact-form__rooms-title"]}>
            {t("contact.subtitle_rooms")}
          </h3>
          <div className={styles["contact-form__room"]}>
            <p className={styles["contact-form__rooms-name"]}>{t("contact.address_1_name")}</p>
            <p className={styles["contact-form__rooms-address"]}>{t("contact.address_1")}</p>
          </div>
          <div className={styles["contact-form__room"]}>
            <p className={styles["contact-form__rooms-name"]}>{t("contact.address_2_name")}</p>
            <p className={styles["contact-form__rooms-address"]}>{t("contact.address_2")}</p>
          </div>
        </div>
      </div>
      <div className={styles["contact-form__right"]}>
        <h2 className={styles["contact-form__subtitle"]}>
          {t("contact.subtitle_contact_form")}
        </h2>
        <div className={styles["contact-form__item"]}>
          <Input label={t("contact.form.label.address")} placeholder={t("contact.form.placeholder.address")} value={objectAddress} onChange={(e) => setobjectAddress(e.target.value)} />
        </div>
        <div className={styles["contact-form__item"]}>
          <Input label={t("contact.form.label.firstname")} placeholder={t("contact.form.placeholder.firstname")} value={firstName} onChange={(e) => setFirstname(e.target.value)} />
        </div>
        <div className={styles["contact-form__item"]}>
          <Input label={t("contact.form.label.lastname")} placeholder={t("contact.form.placeholder.lastname")} value={lastName} onChange={(e) => setLastname(e.target.value)} />
        </div>
        <div className={styles["contact-form__item"]}>
          <Input
            label={t("contact.form.label.email")}
            placeholder={t("contact.form.placeholder.email")}
            value={eMailAddress}
            onChange={(e) => {
              setEMailAddress(e.target.value);
              const hasErrorsFixed = hasEmailError && emailRegex.test(e.target.value);
              if (hasErrorsFixed) {
                setHasEmailError(false);
              }
            }}
            onBlur={(e) => {
              const hasError = !emailRegex.test(e.target.value);
              setHasEmailError(hasError);
            }}
            error={(showRequiredError && eMailAddress === "") || hasEmailError ? t("contact.form.error.email") : ""}
          />
        </div>
        <div className={styles["contact-form__item"]}>
          <div className={styles["contact-form__row"]}>
            <div className={styles["contact-form__row-item"]}>
              <Input
                label={t("contact.form.label.phone")}
                placeholder={t("contact.form.placeholder.phone")}
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
              />
            </div>
            <div className={styles["contact-form__row-item"]}>
              <div className={styles["contact-form__vertical-align"]}>
                <Checkbox
                  label={t("contact.form.label.callback")}
                  checked={asksForCallback}
                  onChange={() => setAsksForCallback((prev) => !prev)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles["contact-form__item"]}>
          <Textarea
            label={t("contact.form.label.message")}
            placeholder={t("contact.form.placeholder.message")}
            value={requestText}
            onChange={(e) => setRequestText(e.target.value)} />
        </div>
        <div className={styles["contact-form__send-button"]}>
          <Button>
            {t("contact.form.label.send")}
          </Button>
        </div>
      </div>
    </form>
  )
}