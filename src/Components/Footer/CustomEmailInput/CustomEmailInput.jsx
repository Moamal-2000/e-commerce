import cookies from "js-cookie";
import { useRef, useState } from "react";
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
  const { t, i18n } = useTranslation();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();

  const isWebsiteOnline = useOnlineStatus();
  const sendIconDirection = {
    rotate: i18n.dir() === "rtl" ? "180deg" : "0deg",
  };

  // Tooltip variables
  const lang = cookies.get("i18next");
  const sendIconToolTipLeftPos = sendToolTipLeftPos(lang);
  const sendingIconToolTipLeftPos = sendingToolTipLeftPos(lang);
  const toolTipLeftPosition = loading
    ? sendingIconToolTipLeftPos
    : sendIconToolTipLeftPos;
  const toolTipTextTrans = loading
    ? t("footer.section1.sendingLabel")
    : t("footer.section1.sendLabel");

  const sendEmail = (e) => {
    e.preventDefault();
    if (loading) return;

    emailRef.current.focus();
    const emailInput = e.target.querySelector("input");
    if (isEmailValid(emailInput)) subscription();
  };

  const subscription = () => {
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
  };

  return (
    <form className={s.input} onSubmit={sendEmail}>
      <input
        type="email"
        placeholder={t("inputsPlaceholders.enterYourEmail")}
        value={email}
        autoComplete="off"
        aria-describedby="email-tooltip"
        onChange={(e) => setEmail(e.target.value)}
        ref={emailRef}
        aria-required="false"
      />

      <button aria-label="Send mail" type="submit">
        <div style={sendIconDirection}>
          {!loading && <SvgIcon name="vector" />}
          {loading && <FadeInOutLoading />}
        </div>

        <ToolTip
          top="50%"
          left={toolTipLeftPosition}
          content={toolTipTextTrans}
        />
      </button>
    </form>
  );
};

export default CustomEmailInput;
