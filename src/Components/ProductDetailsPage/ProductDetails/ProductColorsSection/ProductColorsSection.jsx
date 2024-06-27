import { useTranslation } from "react-i18next";
import ProductColors from "../../../Shared/MiniComponents/ProductColors/ProductColors";
import s from "./ProductColorsSection.module.scss";

const ProductColorsSection = ({ productData: { colors } }) => {
  const { t } = useTranslation();
  const hasColors = colors?.length > 0 && colors;

  if (!hasColors) return null;

  return (
    <section className={s.colors}>
      <span>{t("detailsPage.colors")}:</span>
      <ProductColors colors={colors} showToolTip={true} />
    </section>
  );
};
export default ProductColorsSection;
