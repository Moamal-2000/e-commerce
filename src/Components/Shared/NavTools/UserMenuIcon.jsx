import useToggle from "../../../Hooks/useToggle";
import UserMenu from "../MidComponents/UserMenu";
import SvgIcon from "../MiniComponents/SvgIcon";
import styles from "./UserMenuIcon.module.scss";

const UserMenuIcon = ({ visibility }) => {
  const [isMenuUserActive, toggleMenuUserActive] = useToggle(false);
  const activeClass = isMenuUserActive ? styles.active : "";

  return (
    visibility && (
      <button
        type="button"
        className={`${styles.userContainer} ${activeClass}`}
        onClick={() => toggleMenuUserActive()}
      >
        <SvgIcon name="user" />

        <UserMenu isActive={isMenuUserActive} toggler={toggleMenuUserActive} />
      </button>
    )
  );
};
export default UserMenuIcon;
