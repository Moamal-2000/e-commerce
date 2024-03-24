import { useState } from "react";
import { useDispatch } from "react-redux";
import { removeById } from "../../../Features/productsSlice";
import CustomNumberInput from "../../Shared/MiniComponents/CustomNumberInput";
import SvgIcon from "../../Shared/MiniComponents/SvgIcon";
import ToolTip from "../../Shared/MiniComponents/ToolTip";
import s from "./CartProduct.module.scss";

const CartProduct = ({ data }) => {
  const { img, shortName, price, id } = data;
  const [quantity, setQuantity] = useState(1);
  const subTotal = quantity * price;
  const dispatch = useDispatch();

  return (
    <tr className={s.productContainer}>
      <td className={s.product}>
        <div className={s.imgHolder}>
          <img src={img} alt={shortName} />

          <button
            type="button"
            className={s.removeButton}
            onClick={() => dispatch(removeById({ key: "cartProducts", id }))}
          >
            <SvgIcon name="xMark" />
            <ToolTip top="50%" left="-44px" content="remove" />
          </button>
        </div>
        <span>{shortName}</span>
      </td>

      <td className={s.price}>${price}</td>

      <td>
        <CustomNumberInput number={quantity} setNumber={setQuantity} />
      </td>

      <td>${subTotal}</td>
    </tr>
  );
};
export default CartProduct;
