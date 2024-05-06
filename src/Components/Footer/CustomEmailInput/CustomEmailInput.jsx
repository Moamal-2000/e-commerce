import cookies from "js-cookie";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { showAlert } from "src/Features/globalSlice";
import { sendToolTipLeftPos } from "src/Functions/componentsFunctions";
import { isEmailValid } from "src/Functions/helper";
import useOnlineStatus from "src/Hooks/Helper/useOnlineStatus";
import SvgIcon from "../../Shared/MiniComponents/SvgIcon";
import ToolTip from "../../Shared/MiniComponents/ToolTip";
import s from "./CustomEmailInput.module.scss";

const CustomEmailInput = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const { t, i18n } = useTranslation();
  const lang = cookies.get("i18next");
  const sendIconToolTipLeftPos = sendToolTipLeftPos(lang);
  const isWebsiteOnline = useOnlineStatus();
  const sendIconDirection = {
    rotate: i18n.dir() === "rtl" ? "180deg" : "0deg",
  };

  function sendEmail(e) {
    const emailInput = e.target.querySelector("input");

    e.preventDefault();
    if (isEmailValid(emailInput)) subscription();
  }

  function subscription() {
    const alertText = isWebsiteOnline
      ? "You subscribed to exclusive offers"
      : "Failed to subscribe, Please check your internet connection";
    const alertState = isWebsiteOnline ? "success" : "error";

    if (isWebsiteOnline) setEmail("");

    setTimeout(() => {
      dispatch(showAlert({ alertText, alertState }));
    }, 1000);
  }

  return (
    <form className={s.input} onSubmit={sendEmail}>
      <input
        type="email"
        placeholder={t("inputsPlaceholders.enterYourEmail")}
        id="email"
        value={email}
        autoComplete="off"
        aria-describedby="email-tooltip"
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
