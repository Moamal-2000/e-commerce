import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { productImg1 } from "src/Assets/Images/Images";
import useScrollOnMount from "src/Hooks/App/useScrollOnMount";
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
  const { pathname } = useLocation();
  useScrollOnMount(0);

  return (
    <>
      <Helmet>
        <title>E-Commercew</title>
        {/* {pathname === "/" && (
        )} */}
        <link rel="preload" as="image" href={productImg1} />
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
