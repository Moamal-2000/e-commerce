import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import s from "./PaymentProducts.module.scss";

const PaymentProducts = ({ data }) => {
  const { t } = useTranslation();

  function translateProduct(key, shortName, uppercase, dynamicData = {}) {
    const shortNameKey = shortName.replaceAll(" ", "");
    const productTrans = `products.${shortNameKey}`;
    const translateText = t(`${productTrans}.${key}`, dynamicData);
    return uppercase ? translateText.toUpperCase() : translateText;
  }

  return (
    <div className={s.products}>
      {data.map(({ img, name, shortName, afterDiscount, id }) => (
        <Link to={`/details?product=${name}`} key={id} className={s.product}>
          <div className={s.wrapper}>
            <img src={img} alt={shortName} />
            <span>{translateProduct("shortName", shortName)}</span>
          </div>

          <span className={s.price}>${afterDiscount}</span>
        </Link>
      ))}
    </div>
  );
};
export default PaymentProducts;
