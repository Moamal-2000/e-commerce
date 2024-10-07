import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import SectionTitle from "../../MiniComponents/SectionTitle/SectionTitle";
import ForYouProducts from "./ForYouProducts";
import s from "./ForYouSection.module.scss";

const ForYouSection = () => {
  const { t } = useTranslation();

  return (
    <section className={s.forYou}>
      <header>
        <SectionTitle eventName={t("sectionTitles.forYou")} type={2} />

        <Link to="/products">{t("buttons.seeAll")}</Link>
      </header>

      <ForYouProducts loading="lazy" />
    </section>
  );
};
export default ForYouSection;
