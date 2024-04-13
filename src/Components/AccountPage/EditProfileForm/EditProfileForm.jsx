import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserData } from "src/Features/userSlice";
import {
  checkEmailValidation,
  checkEmptyInputs,
  checkIsInputsValid,
  checkPasswordInputs,
} from "src/Functions/helper";
import s from "./EditProfileForm.module.scss";
import EditProfileInputs from "./EditProfileInputs";
import ProfileFormButtons from "./ProfileFormButtons";

const EditProfileForm = () => {
  const { loginInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();
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
    updateUserInfo();
  }

  function updateUserInfo() {
    const formEle = formRef.current;
    const inputs = formEle.querySelectorAll("input");
    const isFormValid = checkIsInputsValid(inputs);

    if (!isFormValid) return;

    const updatedUserData = {
      username: `${inputs[0].value} ${inputs[1].value}`,
      emailOrPhone: inputs[2].value,
      password: inputs[5].value,
    };

    if (updatedUserData.password === "") delete updatedUserData.password;
    dispatch(updateUserData({ updatedUserData }));
  }

  return (
    <form
      method="POST"
      ref={formRef}
      className={s.profileForm}
      onSubmit={handleSubmit}
    >
      <h2>Edit Your Profile</h2>
      <EditProfileInputs />
      <ProfileFormButtons />
    </form>
  );
};
export default EditProfileForm;
