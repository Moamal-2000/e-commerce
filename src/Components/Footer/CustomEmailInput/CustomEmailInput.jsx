import cookies from "js-cookie";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { sendToolTipLeftPos } from "src/Functions/componentsFunctions";
import SvgIcon from "../../Shared/MiniComponents/SvgIcon";
import ToolTip from "../../Shared/MiniComponents/ToolTip";
import s from "./CustomEmailInput.module.scss";

const CustomEmailInput = () => {
  const [email, setEmail] = useState("");
  const { t, i18n } = useTranslation();
  const lang = cookies.get("i18next");
  const sendIconToolTipLeftPos = sendToolTipLeftPos(lang);
  const sendIconDirection = {
    rotate: i18n.dir() === "rtl" ? "180deg" : "0deg",
  };

  function sendEmail(e) {
    e.preventDefault();
    setEmail("");
    // Required a function to show popup message to notify user that the message has been sent
  }

  return (
    <form className={s.input} onSubmit={sendEmail}>
      <input
        type="email"
        placeholder={t("inputsPlaceholders.enterYourEmail")}
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label htmlFor="email" aria-label="Send mail">
        <div style={sendIconDirection}>
          <SvgIcon name="vector" />
        </div>

        <ToolTip
          left={sendIconToolTipLeftPos}
          top="50%"
          content={t("footer.section1.sendLabel")}
        />
      </label>
    </form>
  );
};
export default CustomEmailInput;
