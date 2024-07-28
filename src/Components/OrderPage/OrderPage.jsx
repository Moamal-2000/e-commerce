import { useTranslation } from "react-i18next";
import useScrollOnMount from "src/Hooks/App/useScrollOnMount";
import PagesHistory from "../Shared/MiniComponents/PagesHistory/PagesHistory";
import ForYouSection from "../Shared/Sections/ForYouSection/ForYouSection";
import OrderProducts from "./CartProducts/OrderProducts";
import s from "./OrderPage.module.scss";
import OrderPageButtons from "./OrderPageButtons/OrderPageButtons";

const OrderPage = () => {
  const { t } = useTranslation();

  useScrollOnMount(200);

  return (
    <div className="container">
      <main className={s.orderPage}>
        <PagesHistory history={["/", t("history.orders")]} />

        <div className={s.pageComponents} id="order-page">
          <OrderProducts />
          <OrderPageButtons />
          <ForYouSection />
        </div>
      </main>
    </div>
  );
};
export default OrderPage;
