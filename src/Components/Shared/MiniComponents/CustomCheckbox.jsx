import { useDispatch, useSelector } from "react-redux";
import { updateProductsState } from "../../../Features/productsSlice";
import s from "./CustomCheckbox.module.scss";
import SvgIcon from "./SvgIcon";

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
    <div className={s.customInput}>
      <input
        type="checkbox"
        name={name}
        checked={saveBillingInfoToLocal}
        onChange={handleCheckboxChange}
        id={id}
        required={isRequired}
      />
      <SvgIcon name="checked" />
    </div>
  );
};
export default CustomCheckbox;
