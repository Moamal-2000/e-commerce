import { Link } from "react-router-dom";
import useSignOut from "../../../Hooks/useSignOut";
import SvgIcon from "../MiniComponents/SvgIcon";
import styles from "./UserMenu.module.scss";

const UserMenu = ({ isActive, toggler }) => {
  const activeClass = isActive ? styles.active : "";
  const handleSignOut = useSignOut();

  return (
    <div className={`${styles.userMenu} ${activeClass}`}>
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

      <Link to="/favorites">
        <SvgIcon name="solidStar" />
        <span>My Reviews</span>
      </Link>

      <Link to="/wishlist">
        <SvgIcon name="heart" />
        <span>Wishlist</span>
      </Link>

      <Link onClick={handleSignOut}>
        <SvgIcon name="boxArrowLeft" />
        <span>Logout</span>
      </Link>
    </div>
  );
};
export default UserMenu;
