import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { updateGlobalState } from "src/Features/globalSlice";
import AuthSideBarButtons from "./AuthSideBarButtons/AuthSideBarButtons";
import s from "./MobileNav.module.scss";
import MobileNavCloseBtn from "./MobileNavCloseBtn/MobileNavCloseBtn";
import NavLinksSideBar from "./NavLinksSideBar/NavLinksSideBar";
import UserProfileSidebar from "./UserProfileSidebar/UserProfileSidebar";

const MobileNav = () => {
  const { isMobileMenuActive } = useSelector((state) => state.global);
  const activeClass = isMobileMenuActive ? s.active : "";
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isMobileMenuActive) return;

    dispatch(updateGlobalState({ key: "isOverlayActive", value: false }));
    dispatch(updateGlobalState({ key: "isMobileMenuActive", value: false }));
  }, [location]);

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
