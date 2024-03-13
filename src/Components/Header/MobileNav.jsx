import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { userImg } from "../../Assets/Images/Images";
import useSignOut from "../../Hooks/useSignOut";
import SvgIcon from "../Shared/MiniComponents/SvgIcon";
import s from "./MobileNav.module.scss";

const MobileNav = () => {
  const { isMobileMenuActive } = useSelector((state) => state.global);
  const { loginInfo, isSignIn } = useSelector((state) => state.user);
  const { username } = loginInfo;
  const userText = username === "Guest" ? "There" : username;
  const handleSignOut = useSignOut();

  return (
    <div className={`${s.mobileMenu} ${isMobileMenuActive ? s.active : ""}`}>
      <div className={s.userInfo}>
        <div className={s.img}>
          <img src={userImg} alt="user's picture" />
        </div>

        <p>
          Hey 🖐️
          <span className={s.userName}>{userText}</span>
        </p>
      </div>

      <nav className={s.nav}>
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
              <SvgIcon name="heart" />
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

      <hr className={s.line}></hr>

      {isSignIn ? (
        <button
          className={s.signOutButton}
          type="button"
          onClick={handleSignOut}
        >
          <SvgIcon name="boxArrowRight" />
          <span>Sign Out</span>
        </button>
      ) : (
        <Link to="/signup" className={s.signOutButton}>
          <SvgIcon name="boxArrowRight" />
          <span>Sign In</span>
        </Link>
      )}
    </div>
  );
};

export default MobileNav;
