import s from "./BillingInput.module.scss";

const BillingInput = ({
  inputData: {
    label,
    placeholder = "",
    name,
    isRequired = false,
    type = "text",
    value,
    onchange,
    autoComplete = false,
  },
}) => {
  return (
    <div className={s.input}>
      <label htmlFor={name} className={isRequired ? s.redStarLabel : ""}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={isRequired}
        value={value}
        onChange={onchange}
        autoComplete={autoComplete ? "on" : "off"}
      />
    </div>
  );
};
export default BillingInput;
