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
  const inputAttributes = {
    type: type || "text",
    name,
    id: name,
    value,
    required: required || false,
    "aria-required": required,
    autoComplete: autoComplete ? "on" : "off",
    onChange: setValue ? (e) => setValue(e.target.value) : null,
    placeholder: placeholder || "",
  };

  return (
    <div className={s.input}>
      {label && <label htmlFor={name}>{label}</label>}
      <input {...inputAttributes} />
    </div>
  );
};
export default EditProfileInput;
