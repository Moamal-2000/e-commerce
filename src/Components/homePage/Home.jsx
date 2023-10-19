import Header from "../Header.js/Header";
import styles from "./Home.module.scss";
import MainSlider from "./Introduction/MainSlider";
import SectionsProducts from "./Introduction/SectionsProducts";
import ProductsSections from "./ProductsSections/ProductsSections";

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

        <ProductsSections />
      </div>
    </div>
  );
};

export default Home;
