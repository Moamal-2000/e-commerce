import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { stereo } from "src/Assets/Images/Images";
import PostCounter from "./PostCounter";
import s from "./ProductPoster.module.scss";

const ProductPoster = () => {
  const { t } = useTranslation();

  return (
    <section className={s.productPoster}>
      <div className={s.content}>
        <span>{t("productPoster.title")}</span>
        <h2>{t("productPoster.subTitle")}</h2>
        <PostCounter />
        <Link to="/products">{t("buttons.buyNow")}!</Link>
      </div>

      <div className={s.productHolder}>
        <img src={stereo} alt="Stereo" loading="lazy" decoding="async" />
      </div>
    </section>
  );
};
export default ProductPoster;
