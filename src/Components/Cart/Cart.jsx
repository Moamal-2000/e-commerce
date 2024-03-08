import PagesHistory from "../Shared/MiniComponents/PagesHistory";
import styles from "./Cart.module.scss";
import CartProducts from "./CartProducts";

const Cart = () => {
  return (
    <div className="container">
      <main className={styles.cartPage}>
        <PagesHistory history={["/", "Cart"]} />

        <div className={styles.pageComponents}>
          <CartProducts />
        </div>
      </main>
    </div>
  );
};
export default Cart;
