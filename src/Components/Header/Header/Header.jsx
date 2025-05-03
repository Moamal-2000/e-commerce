import { Link } from "react-router-dom";
import { WEBSITE_NAME } from "src/Data/constants";
import useNavToolsProps from "src/Hooks/App/useNavToolsProps";
import NavTools from "../../Shared/MidComponents/NavTools/NavTools";
import s from "./Header.module.scss";
import MobileNavIcon from "./MobileNavIcon";
import Nav from "./Nav";

const Header = () => {
  const navToolsProps = useNavToolsProps();

  return (
    <header className={s.header} dir="ltr">
      <div className={s.container}>
        <h1>
          <Link to="/">{WEBSITE_NAME}</Link>
        </h1>

        <div className={s.headerContent}>
          <Nav />
          <NavTools {...navToolsProps} />
        </div>

        <MobileNavIcon />
      </div>
    </header>
  );
};

export default Header;
