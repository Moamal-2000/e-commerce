import { useTranslation } from "react-i18next";
import {
  perfumeGucci,
  ps5,
  speakers,
  womanWithHat,
} from "src/Assets/Images/Images";
import HorizontalPoster from "../../Shared/Posters/HorizontalPoster";
import MediumPoster from "../../Shared/Posters/MediumPoster";
import SmallPoster from "../../Shared/Posters/SmallPoster";
import s from "./FeaturedSectionPosters.module.scss";

const FeaturedSectionPosters = () => {
  const { t } = useTranslation();
  const medPosterTitleTrans = t("featuredSection.mediumPoster.title");
  const medPosterDescTrans = t("featuredSection.mediumPoster.description");

  const smallPoster1TitleTrans = t("featuredSection.smallPoster1.title");
  const smallPoster1DescTrans = t("featuredSection.smallPoster1.description");
  const smallPoster2TitleTrans = t("featuredSection.smallPoster2.title");
  const smallPoster2DescTrans = t("featuredSection.smallPoster2.description");

  const horizontalPosterTitleTrans = t("featuredSection.horizontalPoster.title");
  const horizontalPosterDescTrans = t("featuredSection.horizontalPoster.description");

  return (
    <div className={s.posters}>
      <MediumPoster
        title={medPosterTitleTrans}
        description={medPosterDescTrans}
        posterUrl={ps5}
      />

      <div className={s.smallPosters}>
        <HorizontalPoster
          title={horizontalPosterTitleTrans}
          description={horizontalPosterDescTrans}
          posterUrl={womanWithHat}
        />

        <div className={s.smallerPosters}>
          <SmallPoster
            title={smallPoster1TitleTrans}
            description={smallPoster1DescTrans}
            posterUrl={speakers}
          />

          <SmallPoster
            title={smallPoster2TitleTrans}
            description={smallPoster2DescTrans}
            posterUrl={perfumeGucci}
          />
        </div>
      </div>
    </div>
  );
};
export default FeaturedSectionPosters;
