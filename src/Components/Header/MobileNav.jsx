import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { userImg } from "../../Assets/Images/Images";
import { signOut } from "../../Features/userSlice";
import SvgIcon from "../Shared/MiniComponents/SvgIcon";
import styles from "./MobileNav.module.scss";

const MobileNav = () => {
  const { isMobileMenuActive } = useSelector((state) => state.global);
  const { loginInfo, isSignIn } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { username } = loginInfo;
  const userText = username === "Guest" ? "There" : username;

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <div
      className={`${styles.mobileMenu} ${
        isMobileMenuActive ? styles.active : ""
      }`}
    >
      <div className={styles.userInfo}>
        <div className={styles.img}>
          <img src={userImg} alt="user's picture" />
        </div>

        <p>
          Hey 🖐️
          <span className={styles.userName}>{userText}</span>
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
            <NavLink to="/">
              <SvgIcon name="home" />
              <span>Home Page</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              <SvgIcon name="fileLines" />
              <span>About</span>
            </NavLink>
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

      {isSignIn ? (
        <button
          className={styles.signOutButton}
          type="button"
          onClick={handleSignOut}
        >
          <SvgIcon name="boxArrowRight" />
          <span>Sign Out</span>
        </button>
      ) : (
        <Link to="/signup" className={styles.signOutButton}>
          <SvgIcon name="boxArrowRight" />
          <span>Sign In</span>
        </Link>
      )}
    </div>
  );
};

export default MobileNav;
