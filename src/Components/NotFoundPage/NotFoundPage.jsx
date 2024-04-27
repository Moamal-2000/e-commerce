import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { UN_BUILT_PAGES } from "src/Data/globalVariables";
import PagesHistory from "../Shared/MiniComponents/PagesHistory/PagesHistory";
import s from "./NotFoundPage.module.scss";

const NotFoundPage = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const pageName = location.pathname.replace("/", "");
  const isPageNotReady = UN_BUILT_PAGES.includes(pageName);
  const tabTitleText = isPageNotReady
    ? t("notFoundPage.notBuiltTabTitle")
    : t("notFoundPage.tabTitle");
  const descriptionText = isPageNotReady
    ? t("notFoundPage.notBuiltDescription")
    : t("notFoundPage.description");
  const notFoundMessage = t("notFoundPage.notFoundMessage");
  const backToHomeText = t("buttons.backToHome");
  const historyText = t("history.404Error");

  return (
    <>
      <Helmet>
        <title>{tabTitleText}</title>
      </Helmet>

      <div className="container">
        <main className={s.notFoundPage}>
          <PagesHistory history={["/", historyText]} />

          <div className={s.wrapper} id="notfound-page">
            <b>{notFoundMessage}</b>
            <p>{descriptionText}</p>
            <Link to="/">{backToHomeText}</Link>
          </div>
        </main>
      </div>
    </>
  );
};

export default NotFoundPage;
