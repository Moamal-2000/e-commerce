import { useNavigate } from "react-router-dom";
import s from "./PagesHistory.module.scss";

const PagesHistory = ({ history, paramsHistory }) => {
  const previousPages = history.slice(0, history.length - 1);
  const currentPage = history[history.length - 1];
  const navigateTo = useNavigate();

  function navigateToPage(pageindex) {
    if (paramsHistory?.length > 0) navigateTo("/");
    navigateTo(`${history[pageindex].toLowerCase()}`);
  }

  return (
    <div className={s.pageHistory}>
      {previousPages.map((page, i) => {
        paramsHistory?.forEach((param) => (history[param.index] = param.link));

        return (
          <div className={s.page} key={i}>
            <a href="#" onClick={() => navigateToPage(i)}>
              {page === "/" ? "Home" : page}
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
