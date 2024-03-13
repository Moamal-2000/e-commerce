import s from "./CartInfoMenu.module.scss";

const CartInfoMenu = () => {
  const subTotal = 1750;
  const totalAfterCoupon = subTotal;

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
          <span>${totalAfterCoupon}</span>
        </div>
      </div>

      <button type="button">Process to checkout</button>
    </div>
  );
};
export default CartInfoMenu;
