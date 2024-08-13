import i18n from "i18next";
import { useEffect, useState } from "react";
import SvgIcon from "../SvgIcon";
import s from "./ShowHidePassword.module.scss";

const ShowHidePassword = ({ top = "40%", right = "8px" }) => {
  const [showPass, setShowPass] = useState(true);
  const [iconPosition, setIconPosition] = useState({ top, right });

  useEffect(() => {
    updateIconPosition(i18n.language, right, setIconPosition);
  }, [i18n.language]);

  return (
    <span
      className={s.iconHolder}
      onClick={(e) => toggleShowPass(e, showPass, setShowPass)}
      style={iconPosition}
    >
      <SvgIcon name={showPass ? "eye" : "eyeSlash"} />
    </span>
  );
};
export default ShowHidePassword;

function toggleShowPass(e, showPass, setShowPass) {
  const inputWrapperEle = e.currentTarget.parentElement;
  const inputEle = inputWrapperEle.querySelector("input");

  inputEle.type = inputEle?.type === "password" ? "text" : "password";
  setShowPass(!showPass);
}

function updateIconPosition(lang, right, setIconPosition) {
  if (lang === "ar") {
    setIconPosition({ top, right: "unset", left: right });
    return;
  }
  setIconPosition({ top, left: "unset", right });
}
