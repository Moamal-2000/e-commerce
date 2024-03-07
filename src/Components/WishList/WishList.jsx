import { useSelector } from "react-redux";
import SectionTitle from "../Shared/MiniComponents/SectionTitle";
import ForYouProducts from "./ForYouProducts";
import styles from "./WishList.module.scss";
import WishProducts from "./WishProducts";

const WishList = () => {
  const { wishList } = useSelector((state) => state.products);
  const lengthOfWishList = wishList.length;

  return (
    <div className="container">
      <main className={styles.wishListPage}>
        <section className={styles.wishList}>
          <header>
            <label htmlFor="wishlist">WishList ({lengthOfWishList})</label>

            <button type="button">Move All To Bag</button>
          </header>

          <WishProducts />
        </section>

        <section className={styles.forYou}>
          <header>
            <SectionTitle eventName="Just For You" type={2} />

            <button type="button">See All</button>
          </header>

          <ForYouProducts />
        </section>
      </main>
    </div>
  );
};
export default WishList;
