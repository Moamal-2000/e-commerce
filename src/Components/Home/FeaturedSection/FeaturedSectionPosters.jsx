import { ps5 } from "../../../Assets/Images/Images";
import MediumPoster from "../../Shared/Posters/MediumPoster";
import styles from "./FeaturedSectionPosters.module.scss";

const FeaturedSectionPosters = () => {
  return (
    <div className={styles.posters}>
      <MediumPoster
        title="PlayStation 5"
        description="Black and White version of the PS5 coming out on sale."
        posterUrl={ps5}
      />
    </div>
  );
};
export default FeaturedSectionPosters;
