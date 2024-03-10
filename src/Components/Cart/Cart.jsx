import PagesHistory from "../Shared/MiniComponents/PagesHistory";
import AddCoupon from "./AddCoupon";
import styles from "./Cart.module.scss";
import CartButtons from "./CartButtons";
import CartInfoMenu from "./CartInfoMenu";
import CartProducts from "./CartProducts";

const Cart = () => {
  return (
    <div className="container">
      <main className={styles.cartPage}>
        <PagesHistory history={["/", "Cart"]} />

        <div className={styles.pageComponents}>
          <CartProducts />
          <CartButtons />

          <div className={styles.wrapper}>
            <AddCoupon />
            <CartInfoMenu />
          </div>
        </div>
      </main>
    </div>
  );
};
export default Cart;
