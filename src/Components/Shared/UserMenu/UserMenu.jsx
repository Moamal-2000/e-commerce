import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import useSignOut from "src/Hooks/App/useSignOut";
import SvgIcon from "../MiniComponents/SvgIcon";
import s from "./UserMenu.module.scss";
import UserMenuItemWithCount from "./UserMenuItemWithCount";

const UserMenu = ({ isActive }) => {
  const { wishList } = useSelector((state) => state.products);
  const wishListLength = wishList.length;
  const activeClass = isActive ? s.active : "";
  const navigateTo = useNavigate();
  const signOut = useSignOut();

  function handleSignOut() {
    signOut();
    navigateTo("/", { replace: true });
  }

  return (
    <div className={`${s.userMenu} ${activeClass}`}>
      <NavLink to="/profile">
        <SvgIcon name="user" />
        <span>Manage My Account</span>
      </NavLink>

      <NavLink to="/cart">
        <SvgIcon name="cart" />
        <span>My Order</span>
      </NavLink>

      <NavLink to="/cancellations">
        <SvgIcon name="cancel" />
        <span>My Cancellations</span>
      </NavLink>

      <NavLink to="/reviews">
        <SvgIcon name="solidStar" />
        <span>My Reviews</span>
      </NavLink>

      <NavLink to="/wishlist">
        <UserMenuItemWithCount
          props={{
            iconName: "save",
            title: "Wishlist",
            countLength: wishListLength,
          }}
        />
      </NavLink>

      <a href="#" onClick={handleSignOut}>
        <SvgIcon name="boxArrowLeft" />
        <span>Logout</span>
      </a>
    </div>
  );
};
export default UserMenu;
