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
    </div>
  );
};
export default EditProfileInput;
