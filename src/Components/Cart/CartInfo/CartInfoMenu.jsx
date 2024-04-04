import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getSubTotal } from "src/Functions/helper";
import s from "./CartInfoMenu.module.scss";

const CartInfoMenu = () => {
  const { cartProducts } = useSelector((state) => state.products);
  const subTotal = getSubTotal(cartProducts);

  return (
    <div className={s.menu}>
      <b>Cart Total</b>

      <div className={s.content}>
        <div className={s.item}>
          <span>subTotal:</span>
          <span>${subTotal}</span>
        </div>

        <div className={s.item}>
          <span>Shipping:</span>
          <span>Free</span>
        </div>

        <div className={s.item}>
          <span>Total:</span>
          <span>${subTotal}</span>
        </div>
      </div>

      <Link to="/checkout">Process to checkout</Link>
    </div>
  );
};
export default CartInfoMenu;
