import Header from "../Header/Header";
import styles from "./Home.module.scss";
import MainSlider from "./Introduction/MainSlider";
import SectionsMenu from "./Introduction/SectionsMenu";
import TodaySection from "./TodaySection/TodaySection";

const Home = () => {
  return (
    <div className={styles.home}>
      <Header />

      <div className={styles.container}>
        <div className={styles.introductionContainer}>
          <SectionsMenu />

          <div className={styles.line}></div>

          <MainSlider />
        </div>

          <TodaySection />
      </div>
    </div>
  );
};

export default Home;
