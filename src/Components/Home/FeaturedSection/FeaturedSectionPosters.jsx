import { perfumeGucci, ps5, speakers, womanWithHat } from "../../../Assets/Images/Images";
import HorizontalPoster from "../../Shared/Posters/HorizontalPoster";
import MediumPoster from "../../Shared/Posters/MediumPoster";
import SmallPoster from "../../Shared/Posters/SmallPoster";
import styles from "./FeaturedSectionPosters.module.scss";

const FeaturedSectionPosters = () => {
  return (
    <div className={styles.posters}>
      <MediumPoster
        title="PlayStation 5"
        description="Black and White version of the PS5 coming out on sale."
        posterUrl={ps5}
      />

      <div className={styles.smallPosters}>
        <HorizontalPoster
          title="Women’s Collections"
          description="Featured woman collections that give you another vibe."
          posterUrl={womanWithHat}
        />

        <div className={styles.smallerPosters}>
          <SmallPoster
            title="Speakers"
            description="Amazon wireless speakers"
            posterUrl={speakers}
          />

          <SmallPoster
            title="Perfume"
            description="GUCCI INTENSE OUD EDP"
            posterUrl={perfumeGucci}
          />
        </div>
      </div>
    </div>
  );
};
export default FeaturedSectionPosters;
