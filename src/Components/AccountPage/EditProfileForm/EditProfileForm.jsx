import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { showAlert } from "src/Features/globalSlice";
import { updateUserData } from "src/Features/userSlice";
import {
  checkAreInputsValid,
  checkEmailValidation,
  checkEmptyInputs,
  checkPasswordInputs,
} from "src/Functions/helper";
import EditProfileInputs from "../EditProfileFormInputs/EditProfileInputs";
import ProfileFormButtons from "../ProfileFormButtons/ProfileFormButtons";
import s from "./EditProfileForm.module.scss";

const EditProfileForm = () => {
  const { loginInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const formRef = useRef();

  function handleSubmit(e) {
    const emailInput = document.querySelector("#changeEmail");
    const passwordInputs = formRef.current.querySelectorAll(
      "input[type=password]"
    );

    e.preventDefault();
    checkEmptyInputs({
      exceptions: ["address", "currentPass", "newPass", "confirmPass"],
      formRef: formRef,
    });
    checkEmailValidation(emailInput);
    checkPasswordInputs(passwordInputs, loginInfo.password);
    updateUserInfo(formRef, dispatch, t);
  }

  return (
    <form
      method="POST"
      ref={formRef}
      className={s.profileForm}
      onSubmit={handleSubmit}
    >
      <h2>{t("accountPage.editProfile")}</h2>
      <EditProfileInputs />
      <ProfileFormButtons />
    </form>
  );
};
export default EditProfileForm;

function updateUserInfo(formRef, dispatch, t) {
  const formEle = formRef.current;
  const inputs = formEle.querySelectorAll("input");
  const isFormValid = checkAreInputsValid(inputs);

  if (!isFormValid) return;

  const updatedUserData = {
    username: `${inputs[0].value} ${inputs[1].value}`,
    emailOrPhone: inputs[2].value,
    address: inputs[3].value,
    password: inputs[5].value,
  };

  if (updatedUserData.password === "") delete updatedUserData.password;

  dispatch(updateUserData({ updatedUserData }));
  updateUserInfoAlert(dispatch, t);
}

function updateUserInfoAlert(dispatch, t) {
  const alertText = t("toastAlert.accountInfoUpdated");
  const alertState = "success";
  setTimeout(() => dispatch(showAlert({ alertText, alertState })), 300);
}
