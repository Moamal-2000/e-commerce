import { useSelector } from "react-redux";
import { userImg } from "../../assets/images/Images";
import styles from "./_MobileNav.module.scss";

const MobileNav = () => {
  const { userName } = useSelector((state) => state.user);
  const { isMobileMenuActive } = useSelector((state) => state.global);

  return (
    <div
      className={`${styles.mobileMenu} ${
        isMobileMenuActive ? styles.active : ""
      }`}
    >
      <div className={styles.userInfo}>
        <div className={styles.img}>
          <img src={userImg} alt="" />
        </div>

        <p>
          Hey 🖐️, <span className={styles.userName}>{userName}</span>
        </p>
      </div>

      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="/#">
              <i className="fa-regular fa-user"></i>
              Profile
            </a>
          </li>
          <li>
            <a href="/#" className={styles.active}>
              <i className="bi bi-house"></i>
              Home Page
            </a>
          </li>
          <li>
            <a href="/#">
              <i className="fa-regular fa-file-lines"></i>
              About
            </a>
          </li>
          <li>
            <a href="/#">
              <i className="bi bi-bag"></i>
              My Cart
            </a>
          </li>
          <li>
            <a href="/#">
              <i className="fa-regular fa-heart"></i>
              Favorite
            </a>
          </li>
          <li>
            <a href="/#">
              <i className="bi bi-bell"></i>
              Notifications
            </a>
          </li>
        </ul>
      </nav>

      <div className={styles.line}></div>

      <button className={styles.signOutButton} type="button">
        <i className="bi bi-box-arrow-right"></i>
        Sign Out
      </button>
    </div>
  );
};

export default MobileNav;
