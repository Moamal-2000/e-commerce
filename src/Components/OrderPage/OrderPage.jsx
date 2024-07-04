import { useTranslation } from "react-i18next";
import PagesHistory from "../Shared/MiniComponents/PagesHistory/PagesHistory";
import s from "./OrderPage.module.scss";

const OrderPage = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <main className={s.orderPage}>
        <PagesHistory history={["/", t("history.order")]} />
      </main>
    </div>
  );
};
export default OrderPage;
