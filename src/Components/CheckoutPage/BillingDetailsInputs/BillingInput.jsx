import s from "./BillingInput.module.scss";

const BillingInput = ({ inputData }) => {
  const {
    label,
    placeholder,
    name,
    required,
    type,
    value,
    onChange,
    autoComplete,
  } = inputData;

  const inputAttributes = {
    id: name,
    name,
    type: type || "text",
    placeholder: placeholder || "",
    required: required || false,
    "aria-required": required,
    value,
    onChange,
    autoComplete: autoComplete ? "on" : "off",
  };

  const redStarClass = required ? s.redStar : "";

  return (
    <div className={s.input}>
      <label htmlFor={name} className={redStarClass}>
        {label}
      </label>
      <input {...inputAttributes} />
    </div>
  );
};
export default BillingInput;
