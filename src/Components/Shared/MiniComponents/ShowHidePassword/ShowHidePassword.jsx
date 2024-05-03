import { useState } from "react";
import SvgIcon from "../SvgIcon";
import s from "./ShowHidePassword.module.scss";

const ShowHidePassword = () => {
  const [showPass, setShowPass] = useState(true);

  function toggleShowPass(e) {
    const inputWrapperEle = e.currentTarget.parentElement;
    const inputEle = inputWrapperEle.querySelector("input");

    inputEle.type = inputEle?.type === "password" ? "text" : "password";
    setShowPass(!showPass);
  }

  return (
    <span className={s.iconHolder} onClick={toggleShowPass}>
      <SvgIcon name={showPass ? "eye" : "eyeSlash"} />
    </span>
  );
};
export default ShowHidePassword;
