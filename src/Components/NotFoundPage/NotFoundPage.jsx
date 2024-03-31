import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";
import { UN_BUILT_PAGES } from "../../Data/globalVariables";
import PagesHistory from "../Shared/MiniComponents/PagesHistory";
import s from "./NotFoundPage.module.scss";

const NotFoundPage = () => {
  const location = useLocation();
  const pageName = location.pathname.replace("/", "");
  const isPageUnBuiltYet = UN_BUILT_PAGES.includes(pageName);
  const tabTitleText = isPageUnBuiltYet ? "Page Not Built" : "Page Not Found";
  const descriptionText = isPageUnBuiltYet
    ? "Sorry, the page you're looking for is not built yet."
    : "Your visited page was not found. You may go to the home page.";

  return (
    <>
      <Helmet>
        <title>{tabTitleText}</title>
      </Helmet>

      <div className="container">
        <main className={s.notFoundPage} id="notfound-page">
          <PagesHistory history={["/", "404 Error"]} />

          <div className={s.wrapper}>
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
