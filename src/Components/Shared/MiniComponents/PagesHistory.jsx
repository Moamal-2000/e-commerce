import { Link } from "react-router-dom";
import s from "./PagesHistory.module.scss";

const PagesHistory = ({ history }) => {
  const previousPages = history.slice(0, history.length - 1);
  const currentPage = history[history.length - 1];

  return (
    <div className={s.pageHistory}>
      {previousPages.map((page, i) => (
        <div className={s.page} key={i}>
          <Link to={page.toLowerCase()}>{page === "/" ? "Home" : page}</Link>
          <span>/</span>
        </div>
      ))}
      <span className={s.currentPage}>{currentPage}</span>
    </div>
  );
};
export default PagesHistory;
