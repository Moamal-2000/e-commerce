import styles from "./FirstHeader.module.scss";
import LanguageSelector from "./LanguageSelector";

const FirstHeader = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.space}></div>

        <div className={styles.headerContent}>
          <p className={styles.discount}>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <a href="/#">ShopNow</a>
          </p>

          <LanguageSelector />
        </div>
      </div>
    </div>
  );
};

export default FirstHeader;
