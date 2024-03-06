import SectionTitle from "../Shared/MiniComponents/SectionTitle";
import styles from "./WishList.module.scss";

const WishList = () => {
  const lengthOfWishList = 4;
  return (
    <div className="container">
      <main className={styles.wishListPage}>
        <section className={styles.wishList}>
          <header>
            <label htmlFor="wishlist">WishList ({lengthOfWishList})</label>

            <button type="button">Move All To Bag</button>
          </header>

          {/* Products here */}
        </section>

        <section className={styles.forYou}>
          <header>
            <SectionTitle eventName="Just For You" type={2} />

            <button type="button">See All</button>
          </header>

          {/* Products here */}
        </section>
      </main>
    </div>
  );
};
export default WishList;
