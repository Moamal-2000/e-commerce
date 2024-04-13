import { useDispatch, useSelector } from "react-redux";
import { updateGlobalState } from "src/Features/globalSlice";
import s from "./GlobalOverlay.module.scss";

const GlobalOverlay = () => {
  const { isOverlayActive, isMobileMenuActive, isProfileMenuActive } =
    useSelector((state) => state.global);
  const dispatch = useDispatch();

  function handleOverlayClick() {
    if (isMobileMenuActive)
      dispatch(updateGlobalState({ key: "isMobileMenuActive", value: false }));
    if (isProfileMenuActive)
      dispatch(updateGlobalState({ key: "isProfileMenuActive", value: false }));

    dispatch(updateGlobalState({ key: "isOverlayActive", value: false }));
    dispatch(updateGlobalState({ key: "isSectionsMenuActive", value: false }));
  }

  return (
    <div
      className={`${s.overlay} ${isOverlayActive ? s.active : ""}`}
      onClick={handleOverlayClick}
    ></div>
  );
};

export default GlobalOverlay;
