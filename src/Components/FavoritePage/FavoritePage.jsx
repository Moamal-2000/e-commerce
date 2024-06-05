import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import SectionTitle from "../Shared/MiniComponents/SectionTitle/SectionTitle";
import ForYouProducts from "../WishList/ForYouProducts/ForYouProducts";
import s from "./FavoritePage.module.scss";
import FavoritePageHeader from "./FavoritePageHeader/FavoritePageHeader";
import FavoriteProducts from "./FavoriteProducts/FavoriteProducts";

const FavoritePage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Favorite</title>
        <meta
          name="description"
          content="Save and manage your favorite products on Exclusive. Create a personalized wishlist to easily access and purchase your preferred items anytime."
        />
      </Helmet>

      <div className="container">
        <main className={s.favoritePage} id="favorite-page">
          <section className={s.favoritePageContent}>
            <FavoritePageHeader />

            <FavoriteProducts />
          </section>

          <section className={s.forYou}>
            <header>
              <SectionTitle eventName={t("sectionTitles.forYou")} type={2} />

              <Link to="/products">{t("buttons.seeAll")}</Link>
            </header>

            <ForYouProducts />
          </section>
        </main>
      </div>
    </>
  );
};
export default FavoritePage;
