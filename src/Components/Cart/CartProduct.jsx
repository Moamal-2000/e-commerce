import { useState } from "react";
import CustomNumberInput from "../Shared/MiniComponents/CustomNumberInput";
import styles from "./CartProduct.module.scss";

const CartProduct = ({ data }) => {
  const { img, shortName, price } = data;
  const [quantity, setQuantity] = useState(1);
  const subTotal = quantity * price;

  return (
    <tr className={styles.productContainer}>
      <td className={styles.product}>
        <img src={img} alt="" />
        <span>{shortName}</span>
      </td>

      <td className={styles.price}>${price}</td>

      <td>
        <CustomNumberInput number={quantity} setNumber={setQuantity} />
      </td>

      <td>${subTotal}</td>
    </tr>
  );
};
export default CartProduct;
