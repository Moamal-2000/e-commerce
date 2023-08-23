import { useEffect } from "react";
import { useGlobalContext } from "../../Context/GlobalContext";
import NavTools from "../Shared/NavTools";
import MobileNav from "./MobileNav";
import Nav from "./Nav";
import styles from "./_Header.module.scss";

const Header = () => {
  const { isMobileMenuActive, setIsMobileMenuActive } = useGlobalContext();

  function handleResizeWindow() {
    if (window.innerWidth > 768 && !isMobileMenuActive) {
      setIsMobileMenuActive(true)
    } else {
      setIsMobileMenuActive(true)
    }
  }

  function openMobileNav() {
    setIsMobileMenuActive(true)
  }

  useEffect(() => {
    window.addEventListener("resize", () => handleResizeWindow());
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.space}>
          <h1>
            <a href="\#">Exclusive</a>
          </h1>
        </div>

        {window.innerWidth > 768 ? (
          <div className={styles.headerContent}>
            <Nav />
            <NavTools showUser={false} />
          </div>
        ) : (
          <>
          <i className="bi bi-list" onClick={() => openMobileNav()}></i>
          <MobileNav />
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
