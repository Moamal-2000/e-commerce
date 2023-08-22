import styles from "./FirstHeader.module.scss";

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

          <div className={styles.languageSelector}>
            <div className={styles.currentOption}>English</div>
            <i className="fa-solid fa-chevron-down"></i>

            <div className={styles.options}>
              <div className={styles.option}>English</div>
              <div className={styles.option}>Russian</div>
              <div className={styles.option}>Arabic</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FirstHeader;
