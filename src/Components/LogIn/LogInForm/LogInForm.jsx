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
      internetConnectionAlert();
      return;
    }

    const isFormValid = simpleValidationCheck(inputs);
    if (!isFormValid) return;

    const dataByEmail = filterLoginByEmailOrPhone();
    const isCorrectLoginData = checkLoginPassword(dataByEmail);

    const formDataObj = new FormData(e.target);
    const formData = {};

    // Set keys and values from formDataObj to formData
    for (let pair of formDataObj.entries()) formData[pair[0]] = pair[1];

    if (isCorrectLoginData) {
      dispatch(newSignUp(signedUpUsers));
      logInAlert();
    }
  }

  function filterLoginByEmailOrPhone() {
    return signedUpUsers?.filter(
      (user) => user.emailOrPhone === emailOrPhone.current
    );
  }

  function checkLoginPassword(filteredUsersData) {
    const isPasswordValid = filteredUsersData[0]?.password === password.current;
    return isPasswordValid;
  }

  function logInAlert() {
    const alertText = t("toastAlert.loginSuccess");
    const alertState = "success";

    setTimeout(() => {
      dispatch(showAlert({ alertText, alertState }));
    }, 1500);
  }

  function internetConnectionAlert() {
    const alertText = t("toastAlert.loginFailed");
    const alertState = "error";

    dispatch(showAlert({ alertText, alertState }));
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
        />

        <div className={s.input}>
          <input
            type="password"
            name="Password"
            placeholder={t("inputsPlaceholders.password")}
            onChange={(e) => (password.current = e.target.value)}
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
