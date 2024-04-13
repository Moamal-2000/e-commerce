import { useNavigate } from "react-router-dom";
import s from "./PagesHistory.module.scss";

const PagesHistory = ({ history, historyPaths }) => {
  const previousPages = history.slice(0, history.length - 1);
  const currentPage = history[history.length - 1];
  const navigateTo = useNavigate();

  function navigateToPage(pageIndex) {
    const clickedParam = historyPaths?.[pageIndex];

    if (clickedParam) {
      navigateTo(clickedParam.path);
      return;
    }

    navigateTo(`${history[pageIndex].toLowerCase()}`);
  }

  return (
    <div className={s.pageHistory}>
      {previousPages.map((page, i) => {
        const pageName = page === "/" ? "Home" : page;
        return (
          <div className={s.page} key={i}>
            <a href="#" onClick={() => navigateToPage(i)}>
              {pageName}
            </a>
            <span>/</span>
          </div>
        );
      })}
      <span className={s.currentPage}>{currentPage}</span>
    </div>
  );
};
export default PagesHistory;
