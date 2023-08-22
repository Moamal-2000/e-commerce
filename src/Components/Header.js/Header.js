import Nav from "./Nav";
import styles from "./_Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
