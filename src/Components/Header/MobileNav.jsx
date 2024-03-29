import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { userImg } from "../../Assets/Images/Images";
import useSignOut from "../../Hooks/App/useSignOut";
import SvgIcon from "../Shared/MiniComponents/SvgIcon";
import s from "./MobileNav.module.scss";

const MobileNav = () => {
  const { isMobileMenuActive } = useSelector((state) => state.global);
  const { loginInfo } = useSelector((state) => state.user);
  const { username, isSignIn } = loginInfo;
  const userText = username === "Guest" ? "There" : username;
  const handleSignOut = useSignOut();

  return (
    <div className={`${s.mobileMenu} ${isMobileMenuActive ? s.active : ""}`}>
      <div className={s.userInfo}>
        <Link to="/profile" title="Profile" className={s.img}>
          <img src={userImg} alt="user's picture" />
        </Link>

        <p>
          Hey 🖐️
          <span className={s.userName}>{userText}</span>
        </p>
      </div>

      <nav className={s.navLinks}>
        <ul>
          {isSignIn && (
            <li>
              <NavLink to="/profile">
                <SvgIcon name="user" />
                <span>Profile</span>
              </NavLink>
            </li>
          )}
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
          {isSignIn && (
            <>
              <li>
                <NavLink to="/cart">
                  <SvgIcon name="bag" />
                  <span>My Cart</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/favorite">
                  <SvgIcon name="heart" />
                  <span>Favorite</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/wishlist">
                  <SvgIcon name="save" />
                  <span>Wishlist</span>
                </NavLink>
              </li>
            </>
          )}
          <li>
            <NavLink to="/notifications">
              <SvgIcon name="bell" />
              <span>Notifications</span>
            </NavLink>
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
