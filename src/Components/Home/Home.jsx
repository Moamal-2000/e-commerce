import { Helmet } from "react-helmet-async";
import { productImg1 } from "src/Assets/Images/Images";
import useScrollOnMount from "src/Hooks/App/useScrollOnMount";
import CategoriesSection from "./CategoriesSection/CategoriesSection";
import FeaturedSection from "./FeaturedSection/FeaturedSection";
import FeaturedSectionFeatures from "./FeaturedSection/FeaturedSectionFeatures";
import s from "./Home.module.scss";
import MainSlider from "./Introduction/MainSlider/MainSlider";
import SectionsMenu from "./Introduction/SectionsMenu/SectionsMenu";
import OurProductsSection from "./OurProductsSection/OurProductsSection";
import ProductPoster from "./ProductPoster/ProductPoster";
import ThisMonthSection from "./ThisMonthSection/ThisMonthSection";
import TodaySection from "./TodaySection/TodaySection";

const Home = () => {
  useScrollOnMount();

  return (
    <>
      <Helmet>
        <title>E-Commercew</title>
        <meta
          name="description"
          content="Your ultimate destination for effortless online shopping. Discover curated collections, easily add items to your cart and wishlist,and enjoy detailed product descriptions with captivating previews. Experience convenience like never before with our intuitive interface. Shop smarter with us today."
        />
        <link ref="preload" as="image" type="image/webp" href={productImg1} />
      </Helmet>

      <main className={s.home}>
        <div className={s.container}>
          <div className={s.introductionContainer}>
            <SectionsMenu />

            <div className={s.line} />

            <MainSlider />
          </div>

          <TodaySection />
          <CategoriesSection />
          <ThisMonthSection />
          <ProductPoster />
          <OurProductsSection />
          <FeaturedSection />
          <FeaturedSectionFeatures />
        </div>
      </main>
    </>
  );
};

export default Home;
