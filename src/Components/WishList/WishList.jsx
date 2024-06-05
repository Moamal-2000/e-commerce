import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import SectionTitle from "../Shared/MiniComponents/SectionTitle/SectionTitle";
import ForYouProducts from "./ForYouProducts/ForYouProducts";
import s from "./WishList.module.scss";
import WishProducts from "./WishProducts/WishProducts";
import WishlistPageHeader from "./WishlistPageHeader/WishlistPageHeader";

const WishList = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Wishlist</title>
        <meta
          name="description"
          content="Curate your dream shopping list on Exclusive's wishlist page. Save your favorite products and access them anytime for a personalized shopping experience."
        />
      </Helmet>

      <div className="container">
        <main className={s.wishListPage} id="wishlist-page">
          <section className={s.wishList}>
            <WishlistPageHeader />
            <WishProducts />
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
export default WishList;
