import cookies from "js-cookie";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { showAlert } from "src/Features/globalSlice";
import {
  sendToolTipLeftPos,
  sendingToolTipLeftPos,
} from "src/Functions/componentsFunctions";
import { isEmailValid } from "src/Functions/helper";
import useOnlineStatus from "src/Hooks/Helper/useOnlineStatus";
import FadeInOutLoading from "../../Shared/Loaders/spinnerLoading";
import SvgIcon from "../../Shared/MiniComponents/SvgIcon";
import ToolTip from "../../Shared/MiniComponents/ToolTip";
import s from "./CustomEmailInput.module.scss";

const CustomEmailInput = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const { t, i18n } = useTranslation();
  const lang = cookies.get("i18next");
  const isWebsiteOnline = useOnlineStatus();
  const sendIconDirection = {
    rotate: i18n.dir() === "rtl" ? "180deg" : "0deg",
  };
  const [loading, setLoading] = useState(false);
  const sendIconToolTipLeftPos = sendToolTipLeftPos(lang);
  const sendingIconToolTipLeftPos = sendingToolTipLeftPos(lang);
  const toolTipLeftPosition = loading
    ? sendingIconToolTipLeftPos
    : sendIconToolTipLeftPos;
  const toolTipTextTrans = loading
    ? t("footer.section1.sendingLabel")
    : t("footer.section1.sendLabel");

  function sendEmail(e) {
    const emailInput = e.target.querySelector("input");
    e.preventDefault();

    if (loading) return;
    if (isEmailValid(emailInput)) subscription();
  }

  function subscription() {
    const alertText = isWebsiteOnline
      ? t("toastAlert.subscriptionSuccess")
      : t("toastAlert.subscriptionFailed");
    const alertState = isWebsiteOnline ? "success" : "error";

    if (isWebsiteOnline) {
      setLoading(true);
      setEmail("");
    }

    setTimeout(() => {
      dispatch(showAlert({ alertText, alertState }));
      setLoading(false);
    }, 3000);
  }

  return (
    <form className={s.input} onSubmit={sendEmail}>
      <input
        type="email"
        placeholder={t("inputsPlaceholders.enterYourEmail")}
        value={email}
        autoComplete="off"
        aria-describedby="email-tooltip"
        onChange={(e) => setEmail(e.target.value)}
      />

      <button aria-label="Send mail" type="submit">
        <div style={sendIconDirection}>
          {!loading && <SvgIcon name="vector" />}
          {loading && <FadeInOutLoading />}
        </div>

        <ToolTip
          left={toolTipLeftPosition}
          top="50%"
          content={toolTipTextTrans}
        />
      </button>
    </form>
  );
};
export default CustomEmailInput;
