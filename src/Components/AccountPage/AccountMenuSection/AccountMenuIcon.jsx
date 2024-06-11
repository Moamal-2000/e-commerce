import { useDispatch } from "react-redux";
import { multiUpdateGlobalState } from "src/Features/globalSlice";
import SvgIcon from "../../Shared/MiniComponents/SvgIcon";
import s from "./AccountMenuIcon.module.scss";

const AccountMenuIcon = () => {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      className={s.profileSectionsButton}
      aria-label="List of Profile sections"
      title="Sections list"
      onClick={() => openProfileMenu(dispatch)}
    >
      <SvgIcon name="list" />
    </button>
  );
};
export default AccountMenuIcon;

function openProfileMenu(dispatch) {
  const payload = {
    isProfileMenuActive: true,
    isOverlayActive: true,
  };
  dispatch(multiUpdateGlobalState(payload));
}
