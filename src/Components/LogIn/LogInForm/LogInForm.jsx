import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { showAlert } from "src/Features/alertsSlice";
import { newSignUp } from "src/Features/userSlice";
import { simpleValidationCheck } from "src/Functions/componentsFunctions";
import useOnlineStatus from "src/Hooks/Helper/useOnlineStatus";
import s from "./LogInForm.module.scss";
import LogInFormInputs from "./LogInFormInputs/LogInFormInputs";

const LogInForm = () => {
  const { emailOrPhone, password } = useSelector((state) => state.forms.login);
  const { signedUpUsers } = useSelector((state) => state.user);
  const isWebsiteOnline = useOnlineStatus();
  const { t } = useTranslation();
  const dispatch = useDispatch();

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
      <h2>{t("loginSignUpPage.login")}</h2>
      <p>{t("loginSignUpPage.enterDetails")}</p>

      <LogInFormInputs />

      <div className={s.buttons}>
        <button type="submit" className={s.loginBtn}>
          {t("buttons.login")}
        </button>
        <a href="#">{t("loginSignUpPage.forgotPassword")}</a>
      </div>

      <p className={s.signUpMessage}>
        <span>{t("loginSignUpPage.dontHaveAcc")}</span>
        <Link to="/signup">{t("nav.signUp")}</Link>
      </p>
    </form>
  );
};
export default LogInForm;

function checkLoginPassword(filteredUsersData, password) {
  const isPasswordValid = filteredUsersData[0]?.password === password;
  return isPasswordValid;
}

function filterLoginByEmailOrPhone(signedUpUsers, emailOrPhone) {
  return signedUpUsers?.filter((user) => user.emailOrPhone === emailOrPhone);
}

function logInAlert(dispatch, t) {
  const alertText = t("toastAlert.loginSuccess");
  const alertState = "success";

  setTimeout(
    () => dispatch(showAlert({ alertText, alertState, alertType: "alert" })),
    1500
  );
}

function internetConnectionAlert(dispatch, t) {
  const alertText = t("toastAlert.loginFailed");
  const alertState = "error";

  dispatch(showAlert({ alertText, alertState, alertType: "alert" }));
}
