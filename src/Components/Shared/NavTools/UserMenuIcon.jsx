import useToggle from "../../../Hooks/Helper/useToggle";
import UserMenu from "../MidComponents/UserMenu";
import SvgIcon from "../MiniComponents/SvgIcon";
import ToolTip from "../MiniComponents/ToolTip";
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
        aria-label="User menu"
      >
        <SvgIcon name="user" />
        <ToolTip top="48px" left="50%" content="user menu" />

        <UserMenu isActive={isMenuUserActive} toggler={toggleMenuUserActive} />
      </button>
    )
  );
};
export default UserMenuIcon;
