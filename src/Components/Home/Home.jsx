import Header from "../Header.js/Header";
import MainSlider from "../Introduction/MainSlider";
import SectionsProducts from "../Introduction/SectionsProducts";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.home}>
      <Header />

      <div className={styles.container}>
        <div className={styles.introductionContainer}>
          <SectionsProducts />

          <div className={styles.line}></div>

          <MainSlider />
        </div>
      </div>
    </div>
  );
};

export default Home;
