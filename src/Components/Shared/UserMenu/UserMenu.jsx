import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import useSignOut from "src/Hooks/App/useSignOut";
import SvgIcon from "../MiniComponents/SvgIcon";
import s from "./UserMenu.module.scss";
import UserMenuItemWithCount from "./UserMenuItemWithCount";

const UserMenu = ({ isActive, toggler }) => {
  const { wishList } = useSelector((state) => state.products);
  const wishListLength = wishList.length;
  const activeClass = isActive ? s.active : "";
  const navigateTo = useNavigate();
  const { t } = useTranslation();
  const signOut = useSignOut();

  function handleSignOut() {
    signOut();
    navigateTo("/", { replace: true });
  }

  return (
    <div className={`${s.userMenu} ${activeClass}`}>
      <NavLink to="/profile">
        <SvgIcon name="user" />
        <span>{t("userMenuItems.profile")}</span>
      </NavLink>

      <NavLink to="/cart">
        <SvgIcon name="cart" />
        <span>{t("userMenuItems.cart")}</span>
      </NavLink>

      <NavLink to="/cancellations">
        <SvgIcon name="cancel" />
        <span>{t("userMenuItems.cancellations")}</span>
      </NavLink>

      <NavLink to="/reviews">
        <SvgIcon name="solidStar" />
        <span>{t("userMenuItems.reviews")}</span>
      </NavLink>

      <NavLink to="/wishlist">
        <UserMenuItemWithCount
          props={{
            iconName: "save",
            title: t("userMenuItems.wishlist"),
            countLength: wishListLength,
          }}
        />
      </NavLink>

      <a href="#" onClick={handleSignOut} onBlur={() => toggler()}>
        <SvgIcon name="boxArrowLeft" />
        <span>{t("userMenuItems.logout")}</span>
      </a>
    </div>
  );
};
export default UserMenu;
