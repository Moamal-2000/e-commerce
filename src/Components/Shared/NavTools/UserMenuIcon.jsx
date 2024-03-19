import useToggle from "../../../Hooks/useToggle";
import UserMenu from "../MidComponents/UserMenu";
import SvgIcon from "../MiniComponents/SvgIcon";
import s from "./UserMenuIcon.module.scss";

const UserMenuIcon = ({ visibility }) => {
  const [isMenuUserActive, toggleMenuUserActive] = useToggle(false);
  const activeClass = isMenuUserActive ? s.active : "";

  return (
    visibility && (
      <button
        type="button"
        className={`${s.userContainer} ${activeClass}`}
        onClick={() => toggleMenuUserActive()}
        title="user menu"
      >
        <SvgIcon name="user" />

        <UserMenu isActive={isMenuUserActive} toggler={toggleMenuUserActive} />
      </button>
    )
  );
};
export default UserMenuIcon;
