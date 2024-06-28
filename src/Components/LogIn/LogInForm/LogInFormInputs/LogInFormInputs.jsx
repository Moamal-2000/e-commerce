import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { updateInput } from "src/Features/formsSlice";
import ShowHidePassword from "../../../Shared/MiniComponents/ShowHidePassword/ShowHidePassword";
import s from "./LogInFormInputs.module.scss";

const LogInFormInputs = () => {
  const { emailOrPhone, password } = useSelector((state) => state.forms.login);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  function updateInputOnChange(e) {
    dispatch(
      updateInput({
        formName: "login",
        key: e.target.name,
        value: e.target.value,
      })
    );
  }

  return (
    <div className={s.inputs}>
      <input
        type="text"
        name="emailOrPhone"
        value={emailOrPhone}
        placeholder={t("inputsPlaceholders.emailOrPhone")}
        onChange={updateInputOnChange}
        aria-required="false"
      />

      <div className={s.input}>
        <input
          type="password"
          name="password"
          value={password}
          placeholder={t("inputsPlaceholders.password")}
          onChange={updateInputOnChange}
          aria-required="false"
        />
        <ShowHidePassword />
      </div>
    </div>
  );
};
export default LogInFormInputs;
