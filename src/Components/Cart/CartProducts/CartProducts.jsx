import { useSelector } from "react-redux";
import CartProduct from "./CartProduct";
import s from "./CartProducts.module.scss";

const CartProducts = () => {
  const { cartProducts } = useSelector((state) => state.products);

  return (
    <table className={s.cartProducts}>
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
