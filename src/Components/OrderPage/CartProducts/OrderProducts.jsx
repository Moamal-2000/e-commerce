import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import OrderProduct from "./OrderProduct";
import s from "./OrderProducts.module.scss";

const OrderProducts = () => {
  const { t } = useTranslation();
  const { orderProducts } = useSelector((state) => state.products);
  const productsTable = "cartPage.productsTable";

  return (
    <table className={s.orderProducts}>
      <thead>
        <tr>
          <th>{t(`${productsTable}.product`)}</th>
          <th>{t(`${productsTable}.price`)}</th>
          <th>{t(`${productsTable}.quantity`)}</th>
          <th>{t(`${productsTable}.subtotal`)}</th>
        </tr>
      </thead>

      <tbody>
        {orderProducts?.map((product) => (
          <OrderProduct key={product.id} data={product} />
        ))}
      </tbody>
    </table>
  );
};
export default OrderProducts;
