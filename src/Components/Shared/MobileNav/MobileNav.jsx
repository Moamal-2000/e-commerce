import { useSelector } from "react-redux";
import AuthSideBarButtons from "./AuthSideBarButtons/AuthSideBarButtons";
import s from "./MobileNav.module.scss";
import MobileNavCloseBtn from "./MobileNavCloseBtn/MobileNavCloseBtn";
import NavLinksSideBar from "./NavLinksSideBar/NavLinksSideBar";
import UserProfileSidebar from "./UserProfileSidebar/UserProfileSidebar";

const MobileNav = () => {
  const { isMobileMenuActive } = useSelector((state) => state.global);
  const activeClass = isMobileMenuActive ? s.active : "";

  return (
    <aside className={`${s.mobileMenu} ${activeClass}`}>
      <MobileNavCloseBtn />
      <UserProfileSidebar />
      <NavLinksSideBar />
      <hr className={s.line}></hr>
      <AuthSideBarButtons />
    </aside>
  );
};

export default MobileNav;
