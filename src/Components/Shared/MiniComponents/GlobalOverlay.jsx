import { useDispatch, useSelector } from "react-redux";
import { toggleState } from "../../../Features/globalSlice";
import styles from "./GlobalOverlay.module.scss";

const GlobalOverlay = () => {
  const { isOverlayActive, isMobileMenuActive } = useSelector(
    (state) => state.global
  );
  const dispatch = useDispatch();

  function handleOverlayClick() {
    if (isMobileMenuActive)
      dispatch(toggleState({ key: "isMobileMenuActive", value: false }));
    dispatch(toggleState({ key: "isOverlayActive", value: false }));
    dispatch(toggleState({ key: "isSectionsMenuActive", value: false }));
  }

  return (
    <div
      className={`${styles.overlay} ${isOverlayActive ? styles.active : ""}`}
      onClick={handleOverlayClick}
    ></div>
  );
};

export default GlobalOverlay;
