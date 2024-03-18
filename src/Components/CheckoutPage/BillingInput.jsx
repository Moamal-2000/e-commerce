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
  },
}) => {
  return (
    <div className={s.input}>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={isRequired}
        value={value}
        onChange={onchange}
      />
    </div>
  );
};
export default BillingInput;
