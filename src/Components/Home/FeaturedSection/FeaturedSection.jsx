import { useTranslation } from "react-i18next";
import SectionTitle from "../../Shared/MiniComponents/SectionTitle/SectionTitle";
import s from "./FeaturedSection.module.scss";
import FeaturedSectionPosters from "./FeaturedSectionPosters";

const FeaturedSection = () => {
  const { t } = useTranslation();
  const featuredSection = "sectionTitles.featuredSection";

  return (
    <section className={s.featuredSection}>
      <SectionTitle
        eventName={t(`${featuredSection}.title`)}
        sectionName={t(`${featuredSection}.newArrival`)}
      />
      <FeaturedSectionPosters />
    </section>
  );
};
export default FeaturedSection;
