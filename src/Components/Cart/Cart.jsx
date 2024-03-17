import PagesHistory from "../Shared/MiniComponents/PagesHistory";
import AddCoupon from "./AddCoupon";
import s from "./Cart.module.scss";
import CartButtons from "./CartButtons";
import CartInfoMenu from "./CartInfoMenu";
import CartProducts from "./CartProducts";

const Cart = () => {
  return (
    <div className="container">
      <main className={s.cartPage} id="cart-page">
        <PagesHistory history={["/", "Cart"]} />

        <div className={s.pageComponents}>
          <CartProducts />
          <CartButtons />

          <div className={s.wrapper}>
            <AddCoupon />
            <CartInfoMenu />
          </div>
        </div>
      </main>
    </div>
  );
};
export default Cart;
