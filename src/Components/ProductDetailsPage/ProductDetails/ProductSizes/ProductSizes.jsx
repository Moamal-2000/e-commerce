import { useTranslation } from "react-i18next";
import s from "./ProductSizes.module.scss";
import Sizes from "./Sizes";

const ProductSizes = ({ productData }) => {
  const { t } = useTranslation();

  return (
    <section className={s.sizes}>
      <span>{t("detailsPage.size")}:</span>
      <Sizes sizes={productData?.sizes} />
    </section>
  );
};
export default ProductSizes;
