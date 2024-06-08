import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { googleIcon } from "src/Assets/Images/Images";
import { showAlert } from "src/Features/globalSlice";
import { newSignUp, setLoginData } from "src/Features/userSlice";
import { simpleValidationCheck } from "src/Functions/componentsFunctions";
import {
  compareDataToObjValue,
  getUniqueArrayByObjectKey,
} from "src/Functions/helper";
import useOnlineStatus from "src/Hooks/Helper/useOnlineStatus";
import ShowHidePassword from "../../Shared/MiniComponents/ShowHidePassword/ShowHidePassword";
import { openSignWithGooglePopUp } from "../SignUpWithGoogle/SignUpWithGooglePopup";
import s from "./SignUpForm.module.scss";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const { t } = useTranslation();
  const { signedUpUsers } = useSelector((state) => state.user);
  const username = useRef("");
  const emailOrPhone = useRef("");
  const password = useRef("");
  const isWebsiteOnline = useOnlineStatus();
  let isSignUpWithGooglePressed = false;

  function signUp(e) {
    e.preventDefault();

    const inputs = e.target.querySelectorAll("input");
    const formDataObj = new FormData(e.target);
    const formData = {};

    // Set keys and values from formDataObj to formData
    for (let pair of formDataObj.entries()) formData[pair[0]] = pair[1];

    const isFormValid = simpleValidationCheck(inputs);

    if (isFormValid) {
      const isUserAlreadySignedUp = compareDataToObjValue(
        signedUpUsers,
        formData,
        "emailOrPhone"
      );
      if (isUserAlreadySignedUp) return;

      const uniqueSignedUpUsers = getUniqueArrayByObjectKey({
        arr: signedUpUsers,
        newArr: [formData],
        key: "emailOrPhone",
      });

      if (!isWebsiteOnline) {
        internetConnectionAlert();
        return;
      }

      dispatch(newSignUp(uniqueSignedUpUsers));
      dispatch(setLoginData(formData));
      signInAlert();
    }
  }

  function handleSignUpWithGoogle() {
    if (isSignUpWithGooglePressed) return;
    isSignUpWithGooglePressed = true;

    openSignWithGooglePopUp();
    setDefaultSignUpData();
    signInAlert();
  }

  function setDefaultSignUpData() {
    const defaultLoginData = {
      username: "Lily Watson",
      emailOrPhone: "lily.wastons@gmail.com",
      password: "random-password1234",
      isSignIn: true,
    };

    setTimeout(() => {
      navigateTo("/");
      isSignUpWithGooglePressed = false;

      setTimeout(() => dispatch(setLoginData(defaultLoginData)), 500);
    }, 2500);
  }

  function signInAlert() {
    const alertText = t("toastAlert.signInSuccess");
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
    <form action="GET" className={s.form} onSubmit={signUp}>
      <h2>{t("loginSignUpPage.createAccount")}</h2>
      <p>{t("loginSignUpPage.enterDetails")}</p>

      <div className={s.inputs}>
        <input
          type="text"
          name="username"
          placeholder={t("inputsPlaceholders.fullName")}
          onChange={(e) => (username.current = e.target.value)}
          required
          aria-required="true"
        />
        <input
          type="text"
          name="emailOrPhone"
          placeholder={t("inputsPlaceholders.emailOrPhone")}
          onChange={(e) => (emailOrPhone.current = e.target.value)}
          required
          aria-required="true"
        />
        <div className={s.input}>
          <input
            type="password"
            name="password"
            placeholder={t("inputsPlaceholders.password")}
            onChange={(e) => (password.current = e.target.value)}
            required
            aria-required="true"
          />
          <ShowHidePassword />
        </div>
      </div>

      <div className={s.buttons}>
        <button type="submit" className={s.createAccBtn}>
          {t("buttons.createAccount")}
        </button>

        <button
          type="button"
          className={s.signUpBtn}
          onClick={handleSignUpWithGoogle}
        >
          <img src={googleIcon} alt="Colored Google icon" />
          <span>{t("buttons.signUpWithGoogle")}</span>
        </button>

        <p>
          <span>{t("loginSignUpPage.alreadyHaveAcc")}</span>
          <Link to="/login">{t("buttons.login")}</Link>
        </p>
      </div>
    </form>
  );
};
export default SignUpForm;
