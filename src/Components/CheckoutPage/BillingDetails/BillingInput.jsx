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
  const redStar = isRequired && <span className={s.redStar}>*</span>;

  return (
    <div className={s.input}>
      <label htmlFor={name}>
        {label}
        {redStar}
      </label>
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
