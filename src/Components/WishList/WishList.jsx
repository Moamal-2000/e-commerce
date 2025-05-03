import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { WEBSITE_NAME } from "src/Data/constants";
import useScrollOnMount from "src/Hooks/App/useScrollOnMount";
import ForYouSection from "../Shared/Sections/ForYouSection/ForYouSection";
import s from "./WishList.module.scss";
import WishProducts from "./WishProducts/WishProducts";
import WishlistPageHeader from "./WishlistPageHeader/WishlistPageHeader";

const WishList = () => {
  const { t } = useTranslation();

  useScrollOnMount(200);

  return (
    <>
      <Helmet>
        <title>Wishlist</title>
        <meta
          name="description"
          content={`Curate your dream shopping list on ${WEBSITE_NAME}'s wishlist page. Save your favorite products and access them anytime for a personalized shopping experience.`}
        />
      </Helmet>

      <div className="container">
        <main className={s.wishListPage} id="wishlist-page">
          <section className={s.wishList}>
            <WishlistPageHeader />
            <WishProducts />
          </section>

          <ForYouSection />
        </main>
      </div>
    </>
  );
};
export default WishList;
