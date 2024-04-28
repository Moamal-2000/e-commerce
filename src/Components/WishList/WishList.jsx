import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUniqueArrayByObjectKey } from "src/Functions/helper";
import { updateProductsState } from "../../Features/productsSlice";
import SectionTitle from "../Shared/MiniComponents/SectionTitle/SectionTitle";
import ForYouProducts from "./ForYouProducts/ForYouProducts";
import s from "./WishList.module.scss";
import WishProducts from "./WishProducts/WishProducts";

const WishList = () => {
  const { wishList, cartProducts } = useSelector((state) => state.products);
  const numberOfWishlist = wishList.length;
  const dispatch = useDispatch();
  const { t } = useTranslation();

  function moveAllToCart() {
    const uniqueCartProducts = getUniqueArrayByObjectKey({
      arr: cartProducts,
      newArr: wishList,
      key: "shortName",
    });
    dispatch(
      updateProductsState({ key: "cartProducts", value: uniqueCartProducts })
    );
    dispatch(updateProductsState({ key: "wishList", value: [] }));
  }

  return (
    <>
      <Helmet>
        <title>Wishlist</title>
      </Helmet>

      <div className="container">
        <main className={s.wishListPage} id="wishlist-page">
          <section className={s.wishList}>
            <header>
              <label htmlFor="wishlist">{t("wishlist", {numberOfWishlist})}</label>

              <button type="button" onClick={moveAllToCart}>
                {t("buttons.moveAllToBag")}
              </button>
            </header>

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
