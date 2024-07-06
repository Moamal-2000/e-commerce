import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import s from "./OrderProduct.module.scss";
import RemoveOrderProductBtn from "./RemoveOrderProductBtn";

const OrderProduct = ({ data }) => {
  const { img, name, shortName, afterDiscount, quantity } = data;
  const priceAfterDiscount = afterDiscount.replaceAll(",", "");
  const subTotal = (quantity * priceAfterDiscount).toFixed(2);
  const { t } = useTranslation();

  const translatedProductName = translateProduct({
    productName: shortName,
    translateMethod: t,
    translateKey: "shortName",
  });

  return (
    <tr className={s.productContainer}>
      <td className={s.product}>
        <div className={s.imgHolder}>
          <img src={img} alt={shortName} />
          <RemoveOrderProductBtn productName={shortName} />
        </div>

        <Link to={`/details?product=${name}`}>{translatedProductName}</Link>
      </td>

      <td className={s.price}>${afterDiscount}</td>

      <td>{quantity}</td>

      <td>${subTotal}</td>
    </tr>
  );
};
export default OrderProduct;

export function translateProduct({
  productName,
  translateMethod,
  translateKey,
  uppercase = false,
  dynamicData = {},
}) {
  const shortNameKey = productName?.replaceAll(" ", "");
  const productTrans = `products.${shortNameKey}`;
  const translateText = translateMethod(
    `${productTrans}.${translateKey}`,
    dynamicData
  );
  return uppercase ? translateText.toUpperCase() : translateText;
}
