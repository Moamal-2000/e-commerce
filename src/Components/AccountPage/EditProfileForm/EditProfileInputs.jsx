import { useState } from "react";
import { useSelector } from "react-redux";
import s from "./EditProfileInputs.module.scss";

const EditProfileInputs = () => {
  const { loginInfo } = useSelector((state) => state.user);
  const { username, emailOrPhone } = loginInfo;
  const firstLastUserName = username.split(" ");
  const [firstName, setFirstName] = useState(firstLastUserName[0]);
  const [lastName, setLastName] = useState(firstLastUserName[1]);
  const [emailOrPhoneState, setEmailOrPhoneState] = useState(emailOrPhone);
  const [newPassword, setNewPassword] = useState("");

  return (
    <section className={s.inputs}>
      <section className={s.wrapper}>
        <div className={s.input}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={firstName}
            autoComplete="off"
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
            autoComplete="off"
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
  );
};
export default EditProfileInputs;
