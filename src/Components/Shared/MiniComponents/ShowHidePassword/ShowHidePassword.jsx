import cookies from "js-cookie";
import { useEffect, useState } from "react";
import SvgIcon from "../SvgIcon";
import s from "./ShowHidePassword.module.scss";

const ShowHidePassword = ({ top = "50%", right = "8px" }) => {
  const [showPass, setShowPass] = useState(true);
  const [iconPosition, setIconPosition] = useState({ top, right });

  const lang = cookies.get("i18next");

  function toggleShowPass(e) {
    const inputWrapperEle = e.currentTarget.parentElement;
    const inputEle = inputWrapperEle.querySelector("input");

    inputEle.type = inputEle?.type === "password" ? "text" : "password";
    setShowPass(!showPass);
  }

  useEffect(() => {
    if (lang === "ar") {
      setIconPosition({ top, right: "unset", left: right });
    } else {
      setIconPosition({ top, left: "unset", right });
    }
  }, [lang]);

  return (
    <span
      className={s.iconHolder}
      onClick={toggleShowPass}
      style={iconPosition}
    >
      <SvgIcon name={showPass ? "eye" : "eyeSlash"} />
    </span>
  );
};
export default ShowHidePassword;
