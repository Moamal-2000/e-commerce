import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import s from "./FirstHeader.module.scss";
import LanguageSelector from "./LanguageSelector";

const FirstHeader = () => {
  const { t } = useTranslation();

  return (
    <div className={s.header}>
      <div className={s.container}>
        <div className={s.space} />

        <div className={s.headerContent}>
          <p className={s.discount}>
            <span>{t("firstHeader.saleMessage")}</span>
            <Link to="/products">{t("firstHeader.shopNow")}</Link>
          </p>

          <LanguageSelector />
        </div>
      </div>
    </div>
  );
};

export default FirstHeader;
