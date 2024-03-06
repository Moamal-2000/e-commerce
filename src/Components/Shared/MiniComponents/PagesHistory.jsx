import { Link } from "react-router-dom";
import styles from "./PagesHistory.module.scss";

const PagesHistory = ({ history }) => {
  const previousPages = history.slice(0, history.length - 1);
  const currentPage = history[history.length - 1];

  return (
    <div className={styles.pageHistory}>
      {previousPages.map((page, i) => (
        <div className={styles.page} key={i}>
          <Link to={page.toLowerCase()}>{page === "/" ? "Home" : page}</Link>
          <span>/</span>
        </div>
      ))}
      <span className={styles.currentPage}>{currentPage}</span>
    </div>
  );
};
export default PagesHistory;
