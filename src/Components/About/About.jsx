import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { womenShopping } from "src/Assets/Images/Images";
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
          content="About us, Launched in 2015, Exclusive is South Asia’s premier online shopping marketplace, offering over 1 million products from 10,500 sellers and 300 brands to 3 million customers in Bangladesh."
        />
        <link ref="preload" as="image" type="image/webp" href={womenShopping} />
      </Helmet>

      <main className={s.aboutPage}>
        <div className="container">
          <PagesHistory history={["/", t("nav.about")]} />
        </div>

        <div className={s.container} id="about-page">
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
