import { Link } from "react-router-dom";
import CopyRightsText from "./CopyRightsText/CopyRightsText";
import CustomEmailInput from "./CustomEmailInput/CustomEmailInput";
import s from "./Footer.module.scss";
import RepoStarsForks from "./RepoStarsForks/RepoStarsForks";
import DownloadAppInfo from "./WebsiteSocialMedia/DownloadAppInfo";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className="container">
        <section className={s.sections}>
          <section className={s.section1}>
            <b>
              <Link to="/">Exclusive</Link>
            </b>
            <span>Subscribe</span>
            <p>Get 10% off your first order</p>

            <CustomEmailInput />
          </section>

          <section className={s.section2}>
            <b>Support</b>

            <ul>
              <li>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</li>
              <li>
                <a href="mailto:exclusive@gmail.com">exclusive@gmail.com</a>
              </li>
              <li>
                <a href="tel:+88015-88888-9999">+88015-88888-9999</a>
              </li>
            </ul>
          </section>

          <section className={s.section3}>
            <b>Account</b>

            <ul>
              <li>
                <Link to="/profile">My Account</Link>
              </li>
              <li>
                <Link to="/signup">Login / Register</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
              <li>
                <Link to="/wishlist">Wishlist</Link>
              </li>
              <li>
                <Link to="/products">Shop</Link>
              </li>
            </ul>
          </section>

          <section className={s.section4}>
            <b>Quick Link</b>

            <ul>
              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms">Terms Of Use</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </section>

          <section className={s.section5}>
            <DownloadAppInfo />
          </section>
        </section>

        <CopyRightsText />
      </div>

      <RepoStarsForks />
    </footer>
  );
};
export default Footer;
