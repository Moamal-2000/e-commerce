import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleState } from "../../Features/globalSlice";
import useNavToolsProps from "../../Hooks/useNavToolsProps";
import NavTools from "../Shared/MidComponents/NavTools";
import SvgIcon from "../Shared/MiniComponents/SvgIcon";
import s from "./Header.module.scss";
import Nav from "./Nav";

const Header = () => {
  const dispatch = useDispatch();
  const navToolsProps = useNavToolsProps();

  function openMobileNav() {
    dispatch(toggleState({ key: "isMobileMenuActive", value: true }));
    dispatch(toggleState({ key: "isOverlayActive", value: true }));
  }

  return (
    <header className={s.header}>
      <div className={s.container}>
        <h1>
          <Link to="/">Exclusive</Link>
        </h1>

        <div className={s.headerContent}>
          <Nav />
          <NavTools {...navToolsProps} />
        </div>

        <button
          type="button"
          className={s.mobileNav}
          onClick={() => openMobileNav()}
          aria-label="Nav menu"
        >
          <SvgIcon name="burgerMenu" />
        </button>
      </div>
    </header>
  );
};

export default Header;
