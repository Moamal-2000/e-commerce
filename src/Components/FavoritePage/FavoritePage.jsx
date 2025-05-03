import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { WEBSITE_NAME } from "src/Data/constants";
import useScrollOnMount from "src/Hooks/App/useScrollOnMount";
import ForYouSection from "../Shared/Sections/ForYouSection/ForYouSection";
import s from "./FavoritePage.module.scss";
import FavoritePageHeader from "./FavoritePageHeader/FavoritePageHeader";
import FavoriteProducts from "./FavoriteProducts/FavoriteProducts";

const FavoritePage = () => {
  const { t } = useTranslation();

  useScrollOnMount(200);

  return (
    <>
      <Helmet>
        <title>Favorite</title>
        <meta
          name="description"
          content={`Save and manage your favorite products on ${WEBSITE_NAME}. Create a personalized wishlist to easily access and purchase your preferred items anytime.`}
        />
      </Helmet>

      <div className="container">
        <main className={s.favoritePage} id="favorite-page">
          <section className={s.favoritePageContent}>
            <FavoritePageHeader />

            <FavoriteProducts />
          </section>

          <ForYouSection />
        </main>
      </div>
    </>
  );
};
export default FavoritePage;
