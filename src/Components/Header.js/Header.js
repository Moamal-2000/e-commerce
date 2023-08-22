import Nav from "./Nav";
import styles from "./_Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <Nav />
    </header>
  );
};

export default Header;
