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
            <input
              type="text"
              autoComplete="off"
              placeholder={t("inputsPlaceholders.yourName")}
              name="username"
              required
            />
            <span className={s.star} style={{ left: "103px" }} />
          </div>

          <div className={s.input}>
            <input
              type="email"
              autoComplete="off"
              placeholder={t("inputsPlaceholders.yourEmail")}
              name="email"
              required
            />
            <span className={s.star} style={{ left: "98px" }} />
          </div>

          <div className={s.input}>
            <input
              type="text"
              placeholder={t("inputsPlaceholders.yourPhone")}
              name="phone"
              required
            />
            <span className={s.star} style={{ left: "103px" }} />
          </div>
        </div>

        <textarea
          name="message"
          autoComplete="off"
          placeholder={t("inputsPlaceholders.yourMessage")}
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
