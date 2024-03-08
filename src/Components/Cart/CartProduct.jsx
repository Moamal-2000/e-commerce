import { useState } from "react";
import styles from "./CartProduct.module.scss";

const CartProduct = ({ data }) => {
  const { img, name, price } = data;
  const [quantity, setQuantity] = useState(1);
  const subTotal = quantity * price;

  return (
    <tr className={styles.productContainer}>
      <td className={styles.product}>
        <img src={img} alt="" />
        <span>{name}</span>
      </td>

      <td className={styles.price}>${price}</td>

      <td></td>

      <td>${subTotal}</td>
    </tr>
  );
};
export default CartProduct;
