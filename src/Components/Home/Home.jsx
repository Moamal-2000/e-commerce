import { Helmet } from "react-helmet-async";
import {
  productImg1,
  productImg2,
  productImg3,
} from "../../Assets/Images/Images";
import CategoriesSection from "./CategoriesSection/CategoriesSection";
import FeaturedSection from "./FeaturedSection/FeaturedSection";
import s from "./Home.module.scss";
import MainSlider from "./Introduction/MainSlider";
import SectionsMenu from "./Introduction/SectionsMenu";
import OurProductsSection from "./OurProductsSection/OurProductsSection";
import ProductPoster from "./ProductPoster/ProductPoster";
import ThisMonthSection from "./ThisMonthSection/ThisMonthSection";
import TodaySection from "./TodaySection/TodaySection";

const Home = () => {
  return (
    <>
      <Helmet>
        <link rel="preload" href={productImg1} as="image" />
        <link rel="preload" href={productImg2} as="image" />
        <link rel="preload" href={productImg3} as="image" />
        <title>E-Commercew</title>
      </Helmet>

      <div className={s.home}>
        <div className={s.container}>
          <div className={s.introductionContainer}>
            <SectionsMenu />

            <div className={s.line}></div>

            <MainSlider />
          </div>

          <TodaySection />
          <CategoriesSection />
          <ThisMonthSection />
          <ProductPoster />
          <OurProductsSection />
          <FeaturedSection />
        </div>
      </div>
    </>
  );
};

export default Home;
