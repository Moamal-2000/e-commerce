import FeaturedSectionFeatures from "../Home/FeaturedSection/FeaturedSectionFeatures";
import PagesHistory from "../Shared/MiniComponents/PagesHistory";
import s from "./About.module.scss";
import AboutHeroSection from "./AboutHeroSection";
import AboutInfoCards from "./AboutInfoCards";
import OurMembersSection from "./OurMembersSlider";

const About = () => {
  return (
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
  );
};
export default About;
