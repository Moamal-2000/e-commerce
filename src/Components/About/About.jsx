import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { womenShopping } from "src/Assets/Images/Images";
import { WEBSITE_NAME } from "src/Data/constants";
import useScrollOnMount from "src/Hooks/App/useScrollOnMount";
import FeaturedSectionFeatures from "../Home/FeaturedSection/FeaturedSectionFeatures";
import PagesHistory from "../Shared/MiniComponents/PagesHistory/PagesHistory";
import s from "./About.module.scss";
import AboutHeroSection from "./HeroSection/AboutHeroSection";
import AboutInfoCards from "./InfoCards/AboutInfoCards";
import OurMembersSection from "./OurMembersSection/OurMembersSection";

const About = () => {
  const { t } = useTranslation();

  useScrollOnMount();

  return (
    <>
      <Helmet>
        <title>About</title>
        <meta
          name="description"
          content={`${WEBSITE_NAME} is South Asia’s leading e-commerce platform since 2015, offering 1M+ products from 10,500 sellers and 300 brands in Bangladesh.`}
        />
        <link ref="preload" as="image" type="image/webp" href={womenShopping} />
      </Helmet>

      <main className={s.aboutPage}>
        <div className="container">
          <PagesHistory history={["/", t("nav.about")]} />
          <AboutHeroSection />
        </div>

        <div className="container">
          <AboutInfoCards />
          <OurMembersSection />
          <FeaturedSectionFeatures />
        </div>
      </main>
    </>
  );
};
export default About;
