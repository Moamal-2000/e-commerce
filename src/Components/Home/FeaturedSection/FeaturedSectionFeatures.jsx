import { useTranslation } from "react-i18next";
import { featuresSectionData } from "src/Data/staticData";
import { camelCase } from "src/Functions/helper";
import Feature from "../../Shared/MiniComponents/Feature/Feature";
import s from "./FeaturedSectionFeatures.module.scss";

const FeaturedSectionFeatures = () => {
  const featureSection = "aboutPage.featuresSectionData";
  const { t } = useTranslation();

  return (
    <div className={s.features}>
      {featuresSectionData.map(({ iconImg, iconAlt, id }) => {
        const featuresTransData = `${featureSection}.${camelCase(iconAlt)}`;
        const iconAltTrans = t(`${featuresTransData}.iconAlt`);
        const titleTrans = t(`${featuresTransData}.title`);
        const descriptionTrans = t(`${featuresTransData}.description`);

        return (
          <Feature
            iconImg={iconImg}
            iconAlt={iconAltTrans}
            title={titleTrans}
            description={descriptionTrans}
            key={id}
          />
        );
      })}
    </div>
  );
};
export default FeaturedSectionFeatures;
