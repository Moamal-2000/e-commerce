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

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form method="POST" className={s.profileForm} onSubmit={handleSubmit}>
      <h2>Edit Your Profile</h2>

      <section className={s.inputs}>
        <section className={s.wrapper}>
          <div className={s.input}>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
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
              id="currentPass"
              placeholder="Current Password"
              onChange={(e) => (currPasswordRef.current = e.target.value)}
            />
          </div>

          <div className={s.input}>
            <input
              type="password"
              id="newPass"
              placeholder="New Password"
              onChange={(e) => (newPasswordRef.current = e.target.value)}
            />
          </div>

          <div className={s.input}>
            <input
              type="password"
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
