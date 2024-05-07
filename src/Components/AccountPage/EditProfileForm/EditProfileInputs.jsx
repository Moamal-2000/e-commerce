import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import EditProfileInput from "./EditProfileInput";
import s from "./EditProfileInputs.module.scss";

const EditProfileInputs = () => {
  const { loginInfo } = useSelector((state) => state.user);
  const { username, emailOrPhone, address } = loginInfo;
  const firstLastUserName = username.split(" ");
  const [firstName, setFirstName] = useState(firstLastUserName[0]);
  const [lastName, setLastName] = useState(firstLastUserName[1]);
  const [emailOrPhoneState, setEmailOrPhoneState] = useState(emailOrPhone);
  const [newPassword, setNewPassword] = useState("");
  const [addressState, setAddress] = useState(address);
  const { t } = useTranslation();

  return (
    <section className={s.inputs}>
      <section className={s.wrapper}>
        <EditProfileInput
          inputData={{
            label: t("inputsLabels.firstName"),
            name: "firstName",
            value: firstName,
            setValue: setFirstName,
          }}
        />

        <EditProfileInput
          inputData={{
            label: t("inputsLabels.lastName"),
            name: "lastName",
            value: lastName,
            setValue: setLastName,
          }}
        />

        <EditProfileInput
          inputData={{
            label: t("inputsLabels.email"),
            name: "changeEmail",
            value: emailOrPhoneState,
            setValue: setEmailOrPhoneState,
            placeholder: "example@gmail.com",
          }}
        />

        <EditProfileInput
          inputData={{
            label: t("inputsLabels.address"),
            name: "address",
            value: addressState,
            setValue: setAddress,
            placeholder: t("inputsPlaceholders.address"),
          }}
        />
      </section>

      <section className={s.passwordInputs}>
        <EditProfileInput
          inputData={{
            type: "password",
            label: t("inputsLabels.passwordChanges"),
            name: "currentPass",
            placeholder: t("inputsPlaceholders.currentPass"),
          }}
        />

        <EditProfileInput
          inputData={{
            type: "password",
            placeholder: t("inputsPlaceholders.newPass"),
            value: newPassword,
            setValue: setNewPassword,
          }}
        />

        <EditProfileInput
          inputData={{
            type: "password",
            placeholder: t("inputsPlaceholders.confirmPass"),
          }}
        />
      </section>
    </section>
  );
};
export default EditProfileInputs;
