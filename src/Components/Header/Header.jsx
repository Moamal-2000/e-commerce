import { useDispatch } from "react-redux";
import NavTools from "../Shared/MidComponents/NavTools";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import styles from "./Header.module.scss";
import { toggleMobileMenu, toggleOverlay } from "../../Features/globalSlice";

const Header = () => {
  const dispatch = useDispatch()

  function openMobileNav() {
    dispatch(toggleMobileMenu(true))
    dispatch(toggleOverlay(true))
  }

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.space}>
          <h1>
            <a href="\#">Exclusive</a>
          </h1>
        </div>

        <div className={styles.headerContent}>
          <Nav />
          <NavTools showUser={false} />
        </div>

        <div className={styles.mobileNav}>
          <i
            className={`bi bi-list ${styles.openMobileMenu}`}
            onClick={() => openMobileNav()}
          ></i>
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
