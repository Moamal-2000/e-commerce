import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { WEBSITE_NAME } from "src/Data/constants";
import { UN_BUILT_PAGES } from "src/Data/globalVariables";
import useScrollOnMount from "src/Hooks/App/useScrollOnMount";
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
  const notFoundMessage = t("notFoundPage.tabTitle");
  const backToHomeText = t("buttons.backToHome");
  const historyText = t("history.404Error");

  useScrollOnMount(190);

  return (
    <>
      <Helmet>
        <title>{tabTitleText}</title>
        <meta
          name="description"
          content={`Oops! The page you\`re looking for on ${WEBSITE_NAME} couldn\`t be found. Return to our homepage to continue browsing our wide selection of products.`}
        />
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
