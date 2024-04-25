import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import PagesHistory from "../Shared/MiniComponents/PagesHistory/PagesHistory";
import s from "./Cart.module.scss";
import AddCoupon from "./CartInfo/AddCoupon";
import CartInfoMenu from "./CartInfo/CartInfoMenu";
import CartButtons from "./CartProducts/CartButtons";
import CartProducts from "./CartProducts/CartProducts";

const Cart = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Cart</title>
      </Helmet>

      <div className="container">
        <main className={s.cartPage}>
          <PagesHistory history={["/", t("history.cart")]} />

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
