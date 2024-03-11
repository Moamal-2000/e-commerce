import PagesHistory from "../Shared/MiniComponents/PagesHistory";
import styles from "./About.module.scss";
import AboutHeroSection from "./AboutHeroSection";
import AboutInfoCards from "./AboutInfoCards";

const About = () => {
  return (
    <main className={styles.aboutPage}>
      <div className="container">
        <PagesHistory history={["/", "About"]} />
      </div>

      <div className={styles.container}>
        <AboutHeroSection />
      </div>

      <div className="container">
        <AboutInfoCards />
      </div>
    </main>
  );
};
export default About;
