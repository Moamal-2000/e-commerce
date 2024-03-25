import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SectionTitle from "../Shared/MiniComponents/SectionTitle";
import ForYouProducts from "./ForYouProducts";
import s from "./WishList.module.scss";
import WishProducts from "./WishProducts";

const WishList = () => {
  const { wishList } = useSelector((state) => state.products);
  const lengthOfWishList = wishList.length;

  return (
    <>
      <Helmet>
        <title>Wishlist</title>
      </Helmet>

      <div className="container">
        <main className={s.wishListPage} id="wishlist-page">
          <section className={s.wishList}>
            <header>
              <label htmlFor="wishlist">WishList ({lengthOfWishList})</label>

              <button type="button">Move All To Bag</button>
            </header>

            <WishProducts />
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
export default WishList;
