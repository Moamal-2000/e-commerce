import PagesHistory from "../Shared/MiniComponents/PagesHistory";
import styles from "./Cart.module.scss";
import CartButtons from "./CartButtons";
import CartProducts from "./CartProducts";

const Cart = () => {
  return (
    <div className="container">
      <main className={styles.cartPage}>
        <PagesHistory history={["/", "Cart"]} />

        <div className={styles.pageComponents}>
          <CartProducts />
          <CartButtons />
        </div>
      </main>
    </div>
  );
};
export default Cart;
