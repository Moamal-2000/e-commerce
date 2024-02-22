import { useSelector } from "react-redux";
import { userImg } from "../../Assets/Images/Images";
import SvgIcon from "../Shared/MiniComponents/SvgIcon";
import styles from "./MobileNav.module.scss";

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
          <img src={userImg} alt="user's picutre" />
        </div>

        <p>
          Hey 🖐️, <span className={styles.userName}>{userName}</span>
        </p>
      </div>

      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="/#">
              <SvgIcon name="user" />
              <span>Profile</span>
            </a>
          </li>
          <li>
            <a href="/#" className={styles.active}>
              <SvgIcon name="home" />
              <span>Home Page</span>
            </a>
          </li>
          <li>
            <a href="/#">
              <SvgIcon name="fileLines" />
              <span>About</span>
            </a>
          </li>
          <li>
            <a href="/#">
              <SvgIcon name="bag" />
              <span>My Cart</span>
            </a>
          </li>
          <li>
            <a href="/#">
              <SvgIcon name="love" />
              <span>Favorite</span>
            </a>
          </li>
          <li>
            <a href="/#">
              <SvgIcon name="bell" />
              <span>Notifications</span>
            </a>
          </li>
        </ul>
      </nav>

      <hr className={styles.line}></hr>

      <button className={styles.signOutButton} type="button">
        <SvgIcon name="boxArrowRight" />
        <span>Sign Out</span>
      </button>
    </div>
  );
};

export default MobileNav;
