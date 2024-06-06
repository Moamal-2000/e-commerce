import { useDispatch, useSelector } from "react-redux";
import {
  multiUpdateGlobalState,
  updateGlobalState,
} from "src/Features/globalSlice";
import s from "./GlobalOverlay.module.scss";

const GlobalOverlay = () => {
  const dispatch = useDispatch();
  const { isOverlayActive, isMobileMenuActive, isProfileMenuActive } =
    useSelector((state) => state.global);
  const activeClass = isOverlayActive ? s.active : "";

  function handleOverlayClick() {
    const closeMenuAndOverlayAction = multiUpdateGlobalState({
      isSectionsMenuActive: false,
      isOverlayActive: false,
    });
    dispatch(closeMenuAndOverlayAction);

    if (isMobileMenuActive)
      dispatch(updateGlobalState({ key: "isMobileMenuActive", value: false }));
    if (isProfileMenuActive)
      dispatch(updateGlobalState({ key: "isProfileMenuActive", value: false }));
  }

  return (
    <div
      tabIndex="0"
      className={`${s.overlay} ${activeClass}`}
      onClick={handleOverlayClick}
      onKeyUp={(e) => e.key === "Enter" && handleOverlayClick()}
    />
  );
};

export default GlobalOverlay;
