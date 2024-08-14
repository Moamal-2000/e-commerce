import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { translateProduct } from "../../Cart/CartProducts/CartProduct";
import s from "./PaymentProducts.module.scss";

const PaymentProducts = ({ products }) => {
  const hasProducts = products.length > 0;
  const { t } = useTranslation();

  return (
    <div className={s.products}>
      {products.map(({ img, name, shortName, afterDiscount, id }) => (
        <Link to={`/details?product=${name}`} key={id} className={s.product}>
          <div className={s.wrapper}>
            <img src={img} alt={shortName} />

            <span>
              {translateProduct({
                productName: shortName,
                translateMethod: t,
                translateKey: "shortName",
              })}
            </span>
          </div>

          <span className={s.price}>${afterDiscount}</span>
        </Link>
      ))}

      {!hasProducts && (
        <p className={s.hasNoProducts}>{t("checkoutPage.hasNoProducts")}</p>
      )}
    </div>
  );
};
export default PaymentProducts;
