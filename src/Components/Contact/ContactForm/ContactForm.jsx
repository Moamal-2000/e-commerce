import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { showAlert } from "src/Features/alertsSlice";
import s from "./ContactForm.module.scss";

const ContactForm = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [phone, setPhone] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    resetForm(e, setPhone);
    showSentMsgAlert(dispatch, t);
  }

  return (
    <form className={s.contactForm} onSubmit={handleSubmit}>
      <div className={s.inputs}>
        <div className={s.wrapper}>
          <div className={s.input}>
            <label htmlFor="username" aria-label="Username field placeholder">
              {t("inputsPlaceholders.yourName")}
            </label>
            <input
              type="text"
              placeholder=""
              autoComplete="off"
              name="username"
              id="username"
              required
              aria-required="true"
            />
          </div>

          <div className={s.input}>
            <label htmlFor="email" aria-label="Email field placeholder">
              {t("inputsPlaceholders.yourEmail")}
            </label>
            <input
              type="email"
              placeholder=""
              autoComplete="off"
              name="email"
              id="email"
              required
              aria-required="true"
            />
          </div>

          <div className={s.input}>
            <label htmlFor="phone" aria-label="Phone number field placeholder">
              {t("inputsPlaceholders.yourPhone")}
            </label>
            <input
              type="tel"
              autoComplete="off"
              placeholder=""
              name="phone"
              id="phone"
              required
              aria-required="true"
              onChange={(e) => handleMobileOnChange(e, setPhone)}
              value={phone}
            />
          </div>
        </div>

        <textarea
          name="message"
          autoComplete="off"
          placeholder={t("inputsPlaceholders.yourMessage")}
          aria-label="User message field"
          required
          aria-required="true"
        />
      </div>

      <div className={s.buttons}>
        <button type="reset">{t("common.reset")}</button>
        <button type="submit">{t("buttons.sendMessage")}</button>
      </div>
    </form>
  );
};
export default ContactForm;

function resetForm(e, setPhone) {
  const resetButton = e.target.querySelector("button[type=reset]");
  resetButton?.click();
  setPhone("");
}

function handleMobileOnChange(e, setPhone) {
  const pressedKey = e.nativeEvent.data;
  const isNumber = !isNaN(parseInt(pressedKey));
  if (isNumber || pressedKey === null) setPhone(e.target.value);
}

function showSentMsgAlert(dispatch, t) {
  const action = showAlert({
    alertText: t("toastAlert.messageSent"),
    alertState: "success",
    alertType: "alert",
  });

  setTimeout(() => dispatch(action), 1200);
}
