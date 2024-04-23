import { useDispatch, useSelector } from "react-redux";
import { updateProductsState } from "../../../../Features/productsSlice";
import SvgIcon from "../SvgIcon";
import s from "./CustomCheckbox.module.scss";

const CustomCheckbox = ({ inputData: { name, isRequired = false, id } }) => {
  const { saveBillingInfoToLocal } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  function handleCheckboxChange(e) {
    const isInputChecked = e.target.checked;
    setSaveBillingInfo(isInputChecked);
  }

  function handleKeyPress(e) {
    const isEnterPressed = e.keyCode === 13;
    if (!isEnterPressed) return;
    setSaveBillingInfo(!saveBillingInfoToLocal);
  }

  function setSaveBillingInfo(value) {
    const updateAction = updateProductsState({
      key: "saveBillingInfoToLocal",
      value: value,
    });
    dispatch(updateAction);
  }

  return (
    <div className={s.checkboxContainer}>
      <div className={s.customInput}>
        <input
          type="checkbox"
          name={name}
          checked={saveBillingInfoToLocal}
          onChange={handleCheckboxChange}
          onKeyDown={handleKeyPress}
          required={isRequired}
          id={id}
        />

        <SvgIcon name="checked" />
      </div>

      <label htmlFor="save-info">
        Save this information for faster check-out next time
      </label>
    </div>
  );
};
export default CustomCheckbox;
