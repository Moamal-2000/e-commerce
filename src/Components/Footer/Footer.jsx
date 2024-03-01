import { appStore, googlePlay, qrCode } from "../../Assets/Images/Images";
import SvgIcon from "../Shared/MiniComponents/SvgIcon";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.sections}>
        <section className={styles.section1}>
          <b>Exclusive</b>
          <span>Subscribe</span>
          <p>Get 10% off your first order</p>

          <div className={styles.input}>
            <input type="email" placeholder="Enter your email" />
            <SvgIcon name="vector" />
          </div>
        </section>

        <section className={styles.section2}>
          <b>Support</b>

          <ul>
            <li>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</li>
            <li>exclusive@gmail.com</li>
            <li>+88015-88888-9999</li>
          </ul>
        </section>

        <section className={styles.section3}>
          <b>Account</b>

          <ul>
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </section>

        <section className={styles.section4}>
          <b>Quick Link</b>

          <ul>
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </section>

        <section className={styles.section5}>
          <b>Download App</b>
          <p>Save $3 with App New User Only</p>

          <div className={styles.appInfo}>
            <div className={styles.qrCode}>
              <img src={qrCode} alt="QR Code" />
            </div>

            <div className={styles.downloadButtons}>
              <button type="button">
                <img src={googlePlay} alt="Download app at Google play" />
              </button>

              <button type="button">
                <img src={appStore} alt="Download app at App store" />
              </button>
            </div>
          </div>

          <div className={styles.socialMedia}>
            Facebook, twitter, instagram, linkedin
          </div>
        </section>
      </div>

      <p className={styles.copyRights}>
        &copy; Copyright Rimel 2022. All right reserved
      </p>
    </footer>
  );
};
export default Footer;
