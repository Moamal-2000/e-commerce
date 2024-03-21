import { Helmet } from "react-helmet-async";
import FeaturedSectionFeatures from "../Home/FeaturedSection/FeaturedSectionFeatures";
import PagesHistory from "../Shared/MiniComponents/PagesHistory";
import s from "./About.module.scss";
import AboutHeroSection from "./HeroSection/AboutHeroSection";
import AboutInfoCards from "./InfoCards/AboutInfoCards";
import OurMembersSection from "./OurMemebers/OurMembersSlider";

const About = () => {

  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>

      <main className={s.aboutPage} id="about-page">
        <div className="container">
          <PagesHistory history={["/", "About"]} />
        </div>

        <div className={s.container}>
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
