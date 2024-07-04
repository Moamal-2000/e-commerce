import { useTranslation } from "react-i18next";
import PagesHistory from "../Shared/MiniComponents/PagesHistory/PagesHistory";
import OrderProducts from "./CartProducts/OrderProducts";
import s from "./OrderPage.module.scss";

const OrderPage = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <main className={s.orderPage}>
        <PagesHistory history={["/", t("history.orders")]} />

        <div className={s.pageComponents} id="order-page">
          <OrderProducts />

          <div className={s.wrapper}></div>
        </div>
      </main>
    </div>
  );
};
export default OrderPage;
