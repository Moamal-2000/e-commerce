import SectionTitle from "../../Shared/MiniComponents/SectionTitle";
import s from "./FeaturedSection.module.scss";
import FeaturedSectionFeatures from "./FeaturedSectionFeatures";
import FeaturedSectionPosters from "./FeaturedSectionPosters";

const FeaturedSection = () => {
  return (
    <section className={s.featuredSection}>
      <SectionTitle eventName="Featured" sectionName="New Arrival" />

      <FeaturedSectionPosters />
      <FeaturedSectionFeatures />
    </section>
  );
};
export default FeaturedSection;
