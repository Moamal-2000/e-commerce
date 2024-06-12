import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { showAlert } from "src/Features/globalSlice";
import { newSignUp } from "src/Features/userSlice";
import { simpleValidationCheck } from "src/Functions/componentsFunctions";
import useOnlineStatus from "src/Hooks/Helper/useOnlineStatus";
import ShowHidePassword from "../../Shared/MiniComponents/ShowHidePassword/ShowHidePassword";
import s from "./LogInForm.module.scss";

const LogInForm = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { signedUpUsers } = useSelector((state) => state.user);
  const emailOrPhone = useRef();
  const password = useRef();
  const isWebsiteOnline = useOnlineStatus();

  function login(e) {
    const inputs = e.target.querySelectorAll("input");
    e.preventDefault();

    if (!isWebsiteOnline) {
      internetConnectionAlert(dispatch, t);
      return;
    }

    const isFormValid = simpleValidationCheck(inputs);
    if (!isFormValid) return;

    const dataByEmail = filterLoginByEmailOrPhone(signedUpUsers, emailOrPhone);
    const isCorrectLoginData = checkLoginPassword(dataByEmail, password);

    const formDataObj = new FormData(e.target);
    const formData = {};

    // Set keys and values from formDataObj to formData
    for (let pair of formDataObj.entries()) formData[pair[0]] = pair[1];

    if (isCorrectLoginData) {
      dispatch(newSignUp(signedUpUsers));
      logInAlert(dispatch, t);
    }
  }

  return (
    <form className={s.form} onSubmit={login}>
      <h2></h2>
      <h2>{t("loginSignUpPage.login")}</h2>
      <p>{t("loginSignUpPage.enterDetails")}</p>

      <div className={s.inputs}>
        <input
          type="text"
          name="emailOrPhone"
          placeholder={t("inputsPlaceholders.emailOrPhone")}
          onChange={(e) => (emailOrPhone.current = e.target.value)}
          aria-required="false"
        />

        <div className={s.input}>
          <input
            type="password"
            name="Password"
            placeholder={t("inputsPlaceholders.password")}
            onChange={(e) => (password.current = e.target.value)}
            aria-required="false"
          />
          <ShowHidePassword />
        </div>
      </div>

      <div className={s.buttons}>
        <button type="submit" className={s.loginBtn}>
          {t("buttons.login")}
        </button>
        <a href="#">{t("loginSignUpPage.forgotPassword")}</a>
      </div>
    </form>
  );
};
export default LogInForm;

function checkLoginPassword(filteredUsersData, passwordRef) {
  const isPasswordValid =
    filteredUsersData[0]?.password === passwordRef.current;
  return isPasswordValid;
}

function filterLoginByEmailOrPhone(signedUpUsers, emailOrPhoneRef) {
  return signedUpUsers?.filter(
    (user) => user.emailOrPhone === emailOrPhoneRef.current
  );
}

function logInAlert(dispatch, t) {
  const alertText = t("toastAlert.loginSuccess");
  const alertState = "success";

  setTimeout(() => dispatch(showAlert({ alertText, alertState })), 1500);
}

function internetConnectionAlert(dispatch, t) {
  const alertText = t("toastAlert.loginFailed");
  const alertState = "error";

  dispatch(showAlert({ alertText, alertState }));
}
