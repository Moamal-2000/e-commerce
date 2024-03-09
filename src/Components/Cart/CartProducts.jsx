import { useDispatch, useSelector } from "react-redux";
import CartProduct from "./CartProduct";
import styles from "./CartProducts.module.scss";

const CartProducts = () => {
  const { cartProducts } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  return (
    <table className={styles.cartProducts}>
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Subtotal</th>
        </tr>
      </thead>

      <tbody>
        {cartProducts.map((product) => (
          <CartProduct key={product.id} data={product} />
        ))}
      </tbody>
    </table>
  );
};
export default CartProducts;
