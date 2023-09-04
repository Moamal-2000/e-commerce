import { useGlobalContext } from "../../Context/GlobalContext";
import NavTools from "../Shared/NavTools";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import styles from "./_Header.module.scss";

const Header = () => {
  const { setIsMobileMenuActive, setIsOverlayActive } =
    useGlobalContext();



  function openMobileNav() {
    setIsMobileMenuActive(true);
    setIsOverlayActive(true);
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
