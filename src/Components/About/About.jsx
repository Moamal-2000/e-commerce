import PagesHistory from "../Shared/MiniComponents/PagesHistory";
import styles from "./About.module.scss";
import AboutHeroSection from "./AboutHeroSection";

const About = () => {
  return (
    <div className="container">
      <main className={styles.aboutPage}>
        <PagesHistory history={["/", "About"]} />
        <AboutHeroSection />
      </main>
    </div>
  );
};
export default About;
