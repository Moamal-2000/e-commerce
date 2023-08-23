import { useGlobalContext } from "../../Context/GlobalContext";
import styles from "./_GlobalOverlay.module.scss";

const GlobalOverlay = () => {
  const {
    isOverlayActive,
    setIsOverlayActive,
    isMobileMenuActive,
    setIsMobileMenuActive,
  } = useGlobalContext();

  function handleOverlay() {
    if (isMobileMenuActive) setIsMobileMenuActive(false);
    setIsOverlayActive(false);
  }

  return (
    <div
      className={`${styles.overlay} ${isOverlayActive ? styles.active : ""}`}
      onClick={() => handleOverlay()}
    ></div>
  );
};

export default GlobalOverlay;
