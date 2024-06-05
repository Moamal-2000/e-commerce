import { useTranslation } from "react-i18next";
import s from "./ProductSizes.module.scss";
import Sizes from "./Sizes";

const ProductSizes = ({ data }) => {
  const { t } = useTranslation();

  return (
    <section className={s.sizes}>
      <span>{t("detailsPage.size")}:</span>
      <Sizes sizes={data?.sizes} />
    </section>
  );
};
export default ProductSizes;
