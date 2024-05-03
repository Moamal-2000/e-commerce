import ShowHidePassword from "../../Shared/MiniComponents/ShowHidePassword/ShowHidePassword";
import s from "./EditProfileInput.module.scss";

const EditProfileInput = ({
  inputData: {
    label,
    name,
    type = "text",
    value,
    setValue,
    required = false,
    autoComplete = false,
    placeholder = "",
    showPassTopPos = "50%",
  },
}) => {
  return (
    <div className={s.input}>
      {label && <label htmlFor={name}>{label}</label>}

      <input
        type={type}
        name={name}
        id={name}
        value={value?.length === 0 ? "" : value}
        required={required}
        autoComplete={`${autoComplete ? "on" : "off"}`}
        onChange={setValue ? (e) => setValue(e.target.value) : null}
        placeholder={placeholder}
      />

      {type === "password" && <ShowHidePassword top={showPassTopPos} />}
    </div>
  );
};
export default EditProfileInput;
