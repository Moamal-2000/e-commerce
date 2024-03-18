import s from "./CustomCheckbox.module.scss";
import SvgIcon from "./SvgIcon";

const CustomCheckbox = ({
  inputData: { name, isRequired = false, value, onchange, id },
}) => {
  return (
    <div className={s.customInput}>
      <input
        type="checkbox"
        name={name}
        value={value}
        onChange={onchange}
        id={id}
        required={isRequired}
      />
      <SvgIcon name="checked" />
    </div>
  );
};
export default CustomCheckbox;
