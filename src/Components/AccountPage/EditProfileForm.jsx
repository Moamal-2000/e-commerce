import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { updateUserData } from "../../Features/userSlice";
import {
  checkEmailValidation,
  checkEmptyInputs,
  checkIsInputsValid,
  checkPasswordInputs,
} from "../../Functions/helper";
import s from "./EditProfileForm.module.scss";

const EditProfileForm = () => {
  const { loginInfo } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { username, emailOrPhone, password } = loginInfo;
  const firstLastUserName = username.split(" ");
  const [firstName, setFirstName] = useState(firstLastUserName[0]);
  const [lastName, setLastName] = useState(firstLastUserName[1]);
  const [emailOrPhoneState, setEmailOrPhoneState] = useState(emailOrPhone);
  const [newPassword, setNewPassword] = useState("");
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
    checkPasswordInputs(passwordInputs, password);
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
    dispatch(updateUserData({ userInfo: updatedUserData }));
  }

  return (
    <form
      method="POST"
      className={s.profileForm}
      onSubmit={handleSubmit}
      ref={formRef}
    >
      <h2>Edit Your Profile</h2>

      <section className={s.inputs}>
        <section className={s.wrapper}>
          <div className={s.input}>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className={s.input}>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className={s.input}>
            <label htmlFor="changeEmail">Email</label>
            <input
              type="text"
              name="emailOrPhone"
              id="changeEmail"
              placeholder="example@gmail.com"
              value={emailOrPhoneState}
              onChange={(e) => setEmailOrPhoneState(e.target.value)}
            />
          </div>

          <div className={s.input}>
            <label htmlFor="address">Address</label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="EX Kingston, 5236, United State"
            />
          </div>
        </section>

        <section className={s.passwordInputs}>
          <div className={s.input}>
            <label htmlFor="currentPass">Password Changes</label>
            <input
              type="password"
              name="currentPass"
              id="currentPass"
              placeholder="Current Password"
            />
          </div>

          <div className={s.input}>
            <input
              type="password"
              name="newPass"
              id="newPass"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>

          <div className={s.input}>
            <input
              type="password"
              name="confirmPass"
              id="confirmPass"
              placeholder="Confirm New Password"
            />
          </div>
        </section>
      </section>

      <div className={s.buttons}>
        <Link className={s.cancelLink} to="/">
          Cancel
        </Link>
        <button type="submit" className={s.submitButton}>
          Save Changes
        </button>
      </div>
    </form>
  );
};
export default EditProfileForm;
