import { useDispatch, useSelector } from "react-redux";
import { updateProductsState } from "../../../../Features/productsSlice";
import SvgIcon from "../SvgIcon";
import s from "./CustomCheckbox.module.scss";

const CustomCheckbox = ({ inputData: { name, isRequired = false, id } }) => {
  const { saveBillingInfoToLocal } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  function handleCheckboxChange(e) {
    const isInputChecked = e.target.checked;

    dispatch(
      updateProductsState({
        key: "saveBillingInfoToLocal",
        value: isInputChecked,
      })
    );
  }

  return (
    <div className={s.checkboxContainer}>
      <div className={s.customInput}>
        <input
          type="checkbox"
          name={name}
          checked={saveBillingInfoToLocal}
          onChange={handleCheckboxChange}
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
