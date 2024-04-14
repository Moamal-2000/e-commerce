import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SectionTitle from "../Shared/MiniComponents/SectionTitle/SectionTitle";
import ForYouProducts from "../WishList/ForYouProducts/ForYouProducts";
import s from "./FavoritePage.module.scss";
import FavoritePageHeader from "./FavoritePageHeader/FavoritePageHeader";
import FavoriteProducts from "./FavoriteProducts/FavoriteProducts";

const FavoritePage = () => {
  return (
    <>
      <Helmet>
        <title>Favorite</title>
      </Helmet>

      <div className="container">
        <main className={s.favoritePage} id="favorite-page">
          <section className={s.favoritePageContent}>
            <FavoritePageHeader />

            <FavoriteProducts />
          </section>

          <section className={s.forYou}>
            <header>
              <SectionTitle eventName="Just For You" type={2} />

              <Link to="/products">See All</Link>
            </header>

            <ForYouProducts />
          </section>
        </main>
      </div>
    </>
  );
};
export default FavoritePage;
