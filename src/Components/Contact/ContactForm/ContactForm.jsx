import { useTranslation } from "react-i18next";
import s from "./ContactForm.module.scss";

const ContactForm = () => {
  const { t } = useTranslation();

  function handleSubmit(e) {
    e.preventDefault();
    resetForm(e);
    // Required a function to show popup message to notify user that the message has been sent
  }

  function resetForm(e) {
    const resetButton = e.target.querySelector("button[type=reset]");
    resetButton?.click();
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
            />
          </div>

          <div className={s.input}>
            <label htmlFor="phone" aria-label="Phone number field placeholder">
              {t("inputsPlaceholders.yourPhone")}
            </label>
            <input
              type="text"
              placeholder=""
              name="phone"
              id="phone"
              required
            />
          </div>
        </div>

        <textarea
          name="message"
          autoComplete="off"
          placeholder={t("inputsPlaceholders.yourMessage")}
          aria-label="User message field"
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
