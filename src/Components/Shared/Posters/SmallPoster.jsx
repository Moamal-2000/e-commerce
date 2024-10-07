import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import s from "./SmallPoster.module.scss";

const SmallPoster = ({ title, description, posterUrl }) => {
  const { t } = useTranslation();

  return (
    <div className={s.smallPoster} dir="ltr">
      <img src={posterUrl} alt="product's poster" loading="lazy" />
      <div className={s.content}>
        <b>{title}</b>
        <p>{description}</p>
        <Link to="/products" className={s.shopNow}>
          <span>{t("buttons.buyNow")}</span>
        </Link>
      </div>
    </div>
  );
};
export default SmallPoster;
