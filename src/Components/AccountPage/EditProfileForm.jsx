import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import s from "./EditProfileForm.module.scss";

const EditProfileForm = () => {
  const { loginInfo } = useSelector((state) => state.user);
  const { username, emailOrPhone, password } = loginInfo;
  const firstLastUserName = username.split(" ");
  const [firstName, setFirstName] = useState(firstLastUserName[0]);
  const [lastName, setLastName] = useState(firstLastUserName[1]);
  const [emailOrPhoneState, setEmailOrPhoneState] = useState(emailOrPhone);
  const currPasswordRef = useRef("");
  const newPasswordRef = useRef("");
  const confirmPasswordRef = useRef("");
  const formRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    checkPasswordInputs();
    checkEmptyInputs();
  }

  function checkPasswordInputs() {
    const formEle = formRef.current;
    const passwordInputs = formEle.querySelectorAll("input[type=password]");

    const currentPassInput = passwordInputs[0];
    const newPassInput = passwordInputs[1];
    const confirmPassInput = passwordInputs[2];

    const isCurrentPassCorrect = currentPassInput.value === password;
    const isNewPassValid = newPassInput.value.length >= 8;
    const isConfirmPassEqualToNewPass =
      confirmPassInput.value === newPassInput.value;

    const currentPassClassListMethod = isCurrentPassCorrect ? "remove" : "add";
    const newPassClassListMethod = isNewPassValid ? "remove" : "add";
    const confirmPassClassListMethod = isConfirmPassEqualToNewPass
      ? "remove"
      : "add";

    currentPassInput.classList[currentPassClassListMethod]("invalid");
    newPassInput.classList[newPassClassListMethod]("invalid");
    confirmPassInput.classList[confirmPassClassListMethod]("invalid");
  }

  function checkEmptyInputs() {
    const formEle = formRef.current;
    const inputs = formEle.querySelectorAll("input");

    inputs.forEach((input) => {
      const inputClassListMethod = input.value.length > 2 ? "remove" : "add";
      input.classList[inputClassListMethod]("invalid")
    });
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
              placeholder="Md"
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
              placeholder="Rimel"
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
              placeholder="rimel1111@gmail.com"
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
              placeholder="Kingston, 5236, United State"
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
              onChange={(e) => (currPasswordRef.current = e.target.value)}
            />
          </div>

          <div className={s.input}>
            <input
              type="password"
              name="newPass"
              id="newPass"
              placeholder="New Password"
              onChange={(e) => (newPasswordRef.current = e.target.value)}
            />
          </div>

          <div className={s.input}>
            <input
              type="password"
              name="confirmPass"
              id="confirmPass"
              placeholder="Confirm New Password"
              onChange={(e) => (confirmPasswordRef.current = e.target.value)}
            />
          </div>
        </section>
      </section>

      <div className={s.buttons}>
        <button type="reset" className={s.cancelButton}>
          <Link to="/">Cancel</Link>
        </button>
        <button type="submit" className={s.submitButton}>
          Save Changes
        </button>
      </div>
    </form>
  );
};
export default EditProfileForm;
