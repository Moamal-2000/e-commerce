import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import useSignOut from "../../../Hooks/App/useSignOut";
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
      <Link to="/profile">
        <SvgIcon name="user" />
        <span>Manage My Account</span>
      </Link>

      <Link to="/cart">
        <SvgIcon name="cart" />
        <span>My Order</span>
      </Link>

      <Link to="/cancellations">
        <SvgIcon name="cancel" />
        <span>My Cancellations</span>
      </Link>

      <Link to="/reviews">
        <SvgIcon name="solidStar" />
        <span>My Reviews</span>
      </Link>

      <Link to="/wishlist">
        <UserMenuItemWithCount
          props={{
            iconName: "save",
            title: "Wishlist",
            countLength: wishListLength,
          }}
        />
      </Link>

      <Link onClick={handleSignOut}>
        <SvgIcon name="boxArrowLeft" />
        <span>Logout</span>
      </Link>
    </div>
  );
};
export default UserMenu;
