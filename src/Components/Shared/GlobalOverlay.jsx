import { useDispatch, useSelector } from "react-redux";
import styles from "./_GlobalOverlay.module.scss";
import { toggleMobileMenu, toggleOverlay } from "../../features/globalSlice";

const GlobalOverlay = () => {
  const { isOverlayActive, isMobileMenuActive } = useSelector(
    (state) => state.global
  );
  const dispatch = useDispatch();

  function handleOverlay() {
    if (isMobileMenuActive) dispatch(toggleMobileMenu(false));
    dispatch(toggleOverlay(false));
  }

  return (
    <div
      className={`${styles.overlay} ${isOverlayActive ? styles.active : ""}`}
      onClick={() => handleOverlay()}
    ></div>
  );
};

export default GlobalOverlay;
