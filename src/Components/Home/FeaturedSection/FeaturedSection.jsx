import SectionTitle from "../../Shared/MiniComponents/SectionTitle";
import styles from "./FeaturedSection.module.scss";
import FeaturedSectionFeatures from "./FeaturedSectionFeatures";
import FeaturedSectionPosters from "./FeaturedSectionPosters";

const FeaturedSection = () => {
  return (
    <section className={styles.featuredSection}>
      <SectionTitle eventName="Featured" sectionName="New Arrival" />

      <FeaturedSectionPosters />
      {/* <FeaturedSectionFeatures /> */}
    </section>
  );
};
export default FeaturedSection;
