"use client";
import { Button } from "@/components/common/button/button";
import { Contact } from "@/components/common/contact/contact";
import { Checkbox } from "@/components/form/checkbox/checkbox";
import { Input } from "@/components/form/input/input";
import { Status } from "@/components/form/status/status";
import { Textarea } from "@/components/form/textarea/textarea";
import { useState } from "react";
import { useTranslation } from "../../../../i18n";
import styles from "./contact-form.module.scss";

interface ContactFormProps { }

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const ContactForm = ({ }: ContactFormProps) => {
  const { t } = useTranslation();
  const [objectAddress, setobjectAddress] = useState("");
  const [objectAddressError, setObjectAddressError] = useState(false);
  const [firstName, setFirstname] = useState("");
  const [firstNameError, setFirstnameError] = useState(false);
  const [lastName, setLastname] = useState("");
  const [lastNameError, setLastnameError] = useState(false);
  const [eMailAddress, setEMailAddress] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [faxNo, setFaxNo] = useState("");
  const [phoneNoError, setPhoneNoError] = useState(false);
  const [asksForCallback, setAsksForCallback] = useState(false);
  const [requestText, setRequestText] = useState("");
  const [requestTextError, setRequestTextError] = useState(false);
  const [hasEmailError, setHasEmailError] = useState(false);
  const [honeyPotError, setHoneyPotError] = useState(false);
  const [serverFeedbackSuccess, setServerFeedbackSuccess] = useState<boolean | null>(null);
  const [serverFeedbackText, setServerFeedbackText] = useState("");

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // prevent form submission if honeypot field is filled
    if (faxNo !== "") {
      setHoneyPotError(true);
      return;
    }

    const requiredFields = [
      { field: objectAddress, setter: setObjectAddressError },
      { field: firstName, setter: setFirstnameError },
      { field: lastName, setter: setLastnameError },
      { field: eMailAddress, setter: setHasEmailError },
      { field: phoneNo, setter: setPhoneNoError },
      { field: requestText, setter: setRequestTextError },
    ];

    // set error state for empty fields
    requiredFields.forEach(({ field, setter }) => {
      if (field === "") {
        setter(true);
      }
    });

    // return if any required field is empty
    if (requiredFields.some(({ field }) => field === "") || !emailRegex.test(eMailAddress)) {
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

    const response = await fetch("https://stadtplantest.winterthur.ch/energieportal-service/ContactForm", {
      method: "POST",
      headers: {
        "Accept": "*/*",
        "User-Agent": "Mozilla/5.0",
        "Content-Type": "application/json",
      },
      body: body
    });

    setServerFeedbackSuccess(response.ok);
    setServerFeedbackText(response.ok ? t("contact.form.feedback.success") : t("contact.form.feedback.error"));
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
          <Input
            name="address"
            label={t("contact.form.label.address")}
            placeholder={t("contact.form.placeholder.address")}
            value={objectAddress}
            onChange={(e) => setobjectAddress(e.target.value)}
            onBlur={(e) => {
              if (e.target.value === "") {
                setObjectAddressError(true)
              }
            }}
            error={(objectAddressError && objectAddress === "") ? t("contact.form.error.default") : ""}
          />
        </div>
        <div className={styles["contact-form__item"]}>
          <Input
            name="firstname"
            label={t("contact.form.label.firstname")}
            placeholder={t("contact.form.placeholder.firstname")}
            value={firstName}
            onChange={(e) => setFirstname(e.target.value)}
            onBlur={(e) => {
              if (e.target.value === "") {
                setFirstnameError(true)
              }
            }}
            error={(firstNameError && firstName === "") ? t("contact.form.error.default") : ""}
          />
        </div>
        <div className={styles["contact-form__item"]}>
          <Input
            name="lastname"
            label={t("contact.form.label.lastname")}
            placeholder={t("contact.form.placeholder.lastname")}
            value={lastName}
            onChange={(e) => setLastname(e.target.value)}
            onBlur={(e) => {
              if (e.target.value === "") {
                setLastnameError(true)
              }
            }}
            error={(lastNameError && lastName === "") ? t("contact.form.error.default") : ""}
          />
        </div>
        <div className={styles["contact-form__item"]}>
          <Input
            name="email"
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
            error={(hasEmailError) ? t("contact.form.error.email") : ""}
          />
        </div>
        <div className={styles["contact-form__item"]}>
          <div className={styles["contact-form__row"]}>
            <div className={styles["contact-form__row-item"]}>
              <Input
                name="phone"
                label={t("contact.form.label.phone")}
                placeholder={t("contact.form.placeholder.phone")}
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                onBlur={(e) => {
                  if (e.target.value === "") {
                    setPhoneNoError(true)
                  }
                }}
                error={(phoneNoError && phoneNo === "") ? t("contact.form.error.default") : ""}
              />
            </div>
            <div className={styles["contact-form__row-item"]}>
              <div className={styles["contact-form__vertical-align"]}>
                <Checkbox
                  name="callback"
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
            name="message"
            label={t("contact.form.label.message")}
            placeholder={t("contact.form.placeholder.message")}
            value={requestText}
            onChange={(e) => setRequestText(e.target.value)}
            onBlur={(e) => {
              if (e.target.value === "") {
                setRequestTextError(true)
              }
            }}
            error={(requestTextError && requestText === "") ? t("contact.form.error.default") : ""}
          />
        </div>
        {/* the fax-field is used as a honeypot */}
        <div className={styles["contact-form__fax"]}>
          <Input
            name="fax"
            label={t("contact.form.label.fax")}
            placeholder={t("contact.form.placeholder.fax")}
            value={faxNo}
            onChange={(e) => setFaxNo(e.target.value)}
            hideFromKeyboard
          />
        </div>
        <div className={styles["contact-form__send-button"]}>
          <Button>
            {t("contact.form.label.send")}
          </Button>
        </div>
        <div className={styles["contact-form__feedback"]}>
          {honeyPotError && <Status text={t("contact.form.error.honeypot")} type="warning" />}
          {serverFeedbackText && <Status text={serverFeedbackText} type={serverFeedbackSuccess === true ? "success" : "error"} />}
        </div>
      </div>
    </form>
  )
}