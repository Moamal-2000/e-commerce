import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import s from "./Nav.module.scss";

const Nav = () => {
  const { loginInfo } = useSelector((state) => state.user);

  return (
    <nav className={s.nav}>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>

        <li>
          <NavLink to="/about">About</NavLink>
        </li>

        <li>
          {loginInfo.isSignIn && <NavLink to="/profile">Profile</NavLink>}
          {!loginInfo.isSignIn && <NavLink to="/signup">Sign Up</NavLink>}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
