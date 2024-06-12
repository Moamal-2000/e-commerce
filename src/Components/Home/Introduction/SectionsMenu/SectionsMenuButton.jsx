import { useDispatch } from "react-redux";
import { multiUpdateGlobalState } from "src/Features/globalSlice";
import SvgIcon from "../../../Shared/MiniComponents/SvgIcon";
import s from "./SectionsMenuButton.module.scss";

const SectionsMenuButton = () => {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      onClick={() => openSectionMenu(dispatch)}
      className={s.sectionsMenuButton}
      aria-label="Toggle sections menu"
    >
      <SvgIcon name="list" />
    </button>
  );
};
export default SectionsMenuButton;

function openSectionMenu(dispatch) {
  const payload = {
    isSectionsMenuActive: true,
    isOverlayActive: true,
  };
  dispatch(multiUpdateGlobalState(payload));
}
