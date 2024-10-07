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
      {featuresSectionData?.map(({ iconImg, iconAlt, id }) => {
        const featuresTransData = `${featureSection}.${camelCase(iconAlt)}`;

        return (
          <Feature
            iconImg={iconImg}
            iconAlt={t(`${featuresTransData}.iconAlt`)}
            title={t(`${featuresTransData}.title`)}
            description={t(`${featuresTransData}.description`)}
            key={id}
            loading="lazy"
          />
        );
      })}
    </div>
  );
};
export default FeaturedSectionFeatures;
