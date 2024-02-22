import { useDispatch } from "react-redux";
import NavTools from "../Shared/MidComponents/NavTools";
import Nav from "./Nav";
import styles from "./Header.module.scss";
import { toggleState } from "../../Features/globalSlice";

const Header = () => {
  const dispatch = useDispatch()

  function openMobileNav() {
    dispatch(toggleState({key: "isMobileMenuActive", value: true}))
    dispatch(toggleState({ key: "isOverlayActive", value: true }));
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
        </div>
      </div>
    </header>
  );
};

export default Header;
