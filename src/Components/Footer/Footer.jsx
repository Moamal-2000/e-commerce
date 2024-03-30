import { useState } from "react";
import { Link } from "react-router-dom";
import { appStore, googlePlay, qrCode } from "../../Assets/Images/Images";
import SvgIcon from "../Shared/MiniComponents/SvgIcon";
import ToolTip from "../Shared/MiniComponents/ToolTip";
import s from "./Footer.module.scss";
import RepoStarsForks from "./RepoStarsForks";

const Footer = () => {
  const [email, setEmail] = useState("");
  function sendEmail(e) {
    e.preventDefault();
    setEmail("");
  }

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

            <form className={s.input} onSubmit={(e) => sendEmail(e)}>
              <input
                type="email"
                placeholder="Enter your email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="email" aria-label="Send mail">
                <SvgIcon name="vector" />
                <ToolTip left="70px" top="50%" content="Send" />
              </label>
            </form>
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
            <b>Download App</b>
            <p>Save $3 with App New User Only</p>

            <div className={s.appInfo}>
              <div className={s.qrCode}>
                <img src={qrCode} alt="QR Code" />
              </div>

              <div className={s.downloadButtons}>
                <button type="button">
                  <img src={googlePlay} alt="Download app at Google play" />
                </button>

                <button type="button">
                  <img src={appStore} alt="Download app at App store" />
                </button>
              </div>
            </div>

            <div className={s.socialMedia}>
              <a
                href="https://www.facebook.com/MoamalAlaa109"
                target="_blank"
                title="facebook"
              >
                <SvgIcon name="facebook" />
                <ToolTip left="50%" top="40px" content="facebook" />
              </a>

              <a
                href="https://twitter.com/MoamalAlaa7"
                target="_blank"
                title="twitter"
              >
                <SvgIcon name="twitter" />
                <ToolTip left="50%" top="40px" content="twitter" />
              </a>

              <a
                href="https://www.instagram.com/kubislav23/"
                target="_blank"
                title="instagram"
              >
                <SvgIcon name="instagram" />
                <ToolTip left="50%" top="40px" content="instagram" />
              </a>

              <a
                href="https://www.linkedin.com/in/moamal-alaa-a4bb15237/"
                target="_blank"
                title="linkedin"
              >
                <SvgIcon name="linkedin" />
                <ToolTip left="50%" top="40px" content="linkedin" />
              </a>
            </div>
          </section>
        </section>

        <p className={s.copyRights}>
          <span>Website designed by</span>
          <a href="https://dribbble.com/mdrimel15" target="_blank">
            Rimel
          </a>

          <span>and coded by</span>
          <a
            href="https://www.linkedin.com/in/moamal-alaa-a4bb15237/"
            target="_blank"
          >
            Moamal Alaa
          </a>
        </p>
      </div>

      <RepoStarsForks />
    </footer>
  );
};
export default Footer;
