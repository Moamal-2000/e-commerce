import { useDispatch, useSelector } from "react-redux";
import { toggleState } from "src/Features/globalSlice";
import s from "./GlobalOverlay.module.scss";

const GlobalOverlay = () => {
  const { isOverlayActive, isMobileMenuActive, isProfileMenuActive } =
    useSelector((state) => state.global);
  const dispatch = useDispatch();

  function handleOverlayClick() {
    if (isMobileMenuActive)
      dispatch(toggleState({ key: "isMobileMenuActive", value: false }));
    if (isProfileMenuActive)
      dispatch(toggleState({ key: "isProfileMenuActive", value: false }));

    dispatch(toggleState({ key: "isOverlayActive", value: false }));
    dispatch(toggleState({ key: "isSectionsMenuActive", value: false }));
  }

  return (
    <div
      className={`${s.overlay} ${isOverlayActive ? s.active : ""}`}
      onClick={handleOverlayClick}
    ></div>
  );
};

export default GlobalOverlay;
