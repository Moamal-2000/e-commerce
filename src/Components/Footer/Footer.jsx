import { useState } from "react";
import { Link } from "react-router-dom";
import { appStore, googlePlay, qrCode } from "../../Assets/Images/Images";
import SvgIcon from "../Shared/MiniComponents/SvgIcon";
import s from "./Footer.module.scss";

const Footer = () => {
  const [email, setEmail] = useState("");
  function sendEmail(e) {
    e.preventDefault();
    setEmail("")
  }

  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.sections}>
          <section className={s.section1}>
            <b>Exclusive</b>
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
              <label htmlFor="email" title="Send">
                <SvgIcon name="vector" />
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
                <Link to="/account">My Account</Link>
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
                <Link to="/">Shop</Link>
              </li>
            </ul>
          </section>

          <section className={s.section4}>
            <b>Quick Link</b>

            <ul>
              <li>
                <Link to="/">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/">Terms Of Use</Link>
              </li>
              <li>
                <Link to="/">FAQ</Link>
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
              </a>

              <a
                href="https://twitter.com/MoamalAlaa7"
                target="_blank"
                title="twitter"
              >
                <SvgIcon name="twitter" />
              </a>

              <a
                href="https://www.instagram.com/kubislav23/"
                target="_blank"
                title="instagram"
              >
                <SvgIcon name="instagram" />
              </a>

              <a
                href="https://www.linkedin.com/in/moamal-alaa-a4bb15237/"
                target="_blank"
                title="linkedin"
              >
                <SvgIcon name="linkedin" />
              </a>
            </div>
          </section>
        </div>

        <p className={s.copyRights}>
          <span>&copy;</span> Copyright Rimel 2022. All right reserved
        </p>
      </div>
    </footer>
  );
};
export default Footer;
