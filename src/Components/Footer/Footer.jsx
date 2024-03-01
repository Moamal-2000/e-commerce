import SvgIcon from "../Shared/MiniComponents/SvgIcon";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <section className={styles.section1}>
          <b>Exclusive</b>
          <span>Subscribe</span>
          <p>Get 10% off your first order</p>

          <div className={styles.input}>
            <input type="email" placeholder="Enter your email" />
            <SvgIcon name="vector" />
          </div>
        </section>

        <section className={styles.section2}></section>

        <section className={styles.section3}></section>

        <section className={styles.section4}></section>

        <section className={styles.section5}></section>
      </div>
    </footer>
  );
};
export default Footer;
