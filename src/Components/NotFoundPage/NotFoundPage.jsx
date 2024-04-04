import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";
import { UN_BUILT_PAGES } from "src/Data/globalVariables";
import PagesHistory from "../Shared/MiniComponents/PagesHistory";
import s from "./NotFoundPage.module.scss";

const NotFoundPage = () => {
  const location = useLocation();
  const pageName = location.pathname.replace("/", "");
  const isPageNotReady = UN_BUILT_PAGES.includes(pageName);
  const tabTitleText = isPageNotReady ? "Page Not Built" : "Page Not Found";
  const descriptionText = isPageNotReady
    ? "Sorry, the page you're looking for is not built yet."
    : "Your visited page was not found. You may go to the home page.";

  return (
    <>
      <Helmet>
        <title>{tabTitleText}</title>
      </Helmet>

      <div className="container">
        <main className={s.notFoundPage}>
          <PagesHistory history={["/", "404 Error"]} />

          <div className={s.wrapper} id="notfound-page">
            <b>404 Not Found</b>
            <p>{descriptionText}</p>
            <Link to="/">Back to home page</Link>
          </div>
        </main>
      </div>
    </>
  );
};
export default NotFoundPage;
