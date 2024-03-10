import styles from "./CartInfoMenu.module.scss";

const CartInfoMenu = () => {
  const subTotal = 1750;
  const totalAfterCoupon = subTotal;

  return (
    <div className={styles.menu}>
      <b>Cart Total</b>

      <div className={styles.content}>
        <div className={styles.item}>
          <span>subTotal:</span>
          <span>${subTotal}</span>
        </div>

        <div className={styles.item}>
          <span>Shipping:</span>
          <span>Free</span>
        </div>

        <div className={styles.item}>
          <span>Total:</span>
          <span>${totalAfterCoupon}</span>
        </div>
      </div>

      <button type="button">Process to checkout</button>
    </div>
  );
};
export default CartInfoMenu;
