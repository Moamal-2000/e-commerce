import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { toggleState } from "src/Features/globalSlice";
import useGetResizeWindow from "src/Hooks/Helper/useGetResizeWindow";
import SvgIcon from "../Shared/MiniComponents/SvgIcon";
import s from "./AccountMenuSection.module.scss";

const AccountMenuSection = () => {
  const { isProfileMenuActive } = useSelector((state) => state.global);
  const dispatch = useDispatch();
  const { width: windowWidth } = useGetResizeWindow();
  const isMobileDevice = windowWidth < 768;
  const mobileClass = isMobileDevice ? s.mobile : "";
  const activeClass = isProfileMenuActive ? s.active : "";

  function openProfileMenu() {
    dispatch(toggleState({ key: "isProfileMenuActive", value: true }));
    dispatch(toggleState({ key: "isOverlayActive", value: true }));
  }

  return (
    <>
      <button
        type="button"
        className={s.profileSectionsButton}
        aria-label="List of Profile sections"
        title="Sections list"
        onClick={openProfileMenu}
      >
        <SvgIcon name="list" />
      </button>

      <section className={`${s.menuSection} ${mobileClass} ${activeClass}`}>
        <section className={s.section}>
          <h2>Manage My Account</h2>

          <ul>
            <li>
              <NavLink to="/profile">My Profile</NavLink>
            </li>

            <li>
              <a href="#">Address Book</a>
            </li>

            <li>
              <a href="#">My Payment Options</a>
            </li>
          </ul>
        </section>

        <section className={s.section}>
          <h2>My Orders</h2>

          <ul>
            <li>
              <a href="#">My Returns</a>
            </li>

            <li>
              <a href="#">My Cancellations</a>
            </li>
          </ul>
        </section>
      </section>
    </>
  );
};
export default AccountMenuSection;
