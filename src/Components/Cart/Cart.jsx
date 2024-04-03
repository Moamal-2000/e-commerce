import { Helmet } from "react-helmet-async";
import PagesHistory from "../Shared/MiniComponents/PagesHistory";
import s from "./Cart.module.scss";
import AddCoupon from "./CartInfo/AddCoupon";
import CartInfoMenu from "./CartInfo/CartInfoMenu";
import CartButtons from "./CartProducts/CartButtons";
import CartProducts from "./CartProducts/CartProducts";

const Cart = () => {
  return (
    <>
      <Helmet>
        <title>Cart</title>
      </Helmet>

      <div className="container">
        <main className={s.cartPage}>
          <PagesHistory history={["/", "Cart"]} />

          <div className={s.pageComponents} id="cart-page">
            <CartProducts />
            <CartButtons />

            <div className={s.wrapper}>
              <AddCoupon />
              <CartInfoMenu />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
export default Cart;
