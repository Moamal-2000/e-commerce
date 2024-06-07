import { useTranslation } from "react-i18next";
import SvgIcon from "../../../Shared/MiniComponents/SvgIcon";
import s from "./ProductFeatures.module.scss";

const ProductFeatures = () => {
  const { t } = useTranslation();
  const freeDeliveryTrans = "detailsPage.freeDelivery";
  const returnDeliveryTrans = "detailsPage.returnDelivery";

  return (
    <section className={s.features}>
      <div className={s.feature} tabIndex="0">
        <SvgIcon name="truck" />

        <div className={s.content}>
          <b>{t(`${freeDeliveryTrans}.title`)}</b>
          <p>{t(`${freeDeliveryTrans}.description`)}</p>
        </div>
      </div>

      <div className={s.feature} tabIndex="0">
        <SvgIcon name="infiniteArrows" />

        <div className={s.content}>
          <b>{t(`${returnDeliveryTrans}.title`)}</b>
          <p>{t(`${returnDeliveryTrans}.description`)}</p>
        </div>
      </div>
    </section>
  );
};
export default ProductFeatures;
