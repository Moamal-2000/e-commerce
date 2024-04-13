import { useState } from "react";
import { useSelector } from "react-redux";
import EditProfileInput from "./EditProfileInput";
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
        <EditProfileInput
          inputData={{
            label: "First Name",
            name: "firstName",
            value: firstName,
            setValue: setFirstName,
          }}
        />

        <EditProfileInput
          inputData={{
            label: "Last Name",
            name: "lastName",
            value: lastName,
            setValue: setLastName,
          }}
        />

        <EditProfileInput
          inputData={{
            label: "Email",
            name: "changeEmail",
            value: emailOrPhoneState,
            setValue: setEmailOrPhoneState,
            placeholder: "example@gmail.com",
          }}
        />

        <EditProfileInput
          inputData={{
            label: "Address",
            name: "address",
            placeholder: "EX Kingston, 5236, United State",
          }}
        />
      </section>

      <section className={s.passwordInputs}>
        <EditProfileInput
          inputData={{
            type: "password",
            label: "Password Changes",
            name: "currentPass",
            placeholder: "Current Password",
          }}
        />

        <EditProfileInput
          inputData={{
            type: "password",
            name: "newPass",
            placeholder: "New Password",
            value: newPassword,
            setValue: setNewPassword,
          }}
        />

        <EditProfileInput
          inputData={{
            type: "password",
            name: "confirmPass",
            placeholder: "Confirm New Password",
          }}
        />
      </section>
    </section>
  );
};
export default EditProfileInputs;
