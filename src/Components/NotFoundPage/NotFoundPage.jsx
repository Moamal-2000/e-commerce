import { Link } from "react-router-dom";
import PagesHistory from "../Shared/MiniComponents/PagesHistory";
import s from "./NotFoundPage.module.scss";

const NotFoundPage = () => {
  return (
    <div className="container">
      <main className={s.notFoundPage}>
        <PagesHistory history={["/", "404 Error"]} />

        <div className={s.wrapper}>
          <b>404 Not Found</b>
          <p>Your visited page not found. You may go home page.</p>
          <Link to="/">Back to home page</Link>
        </div>
      </main>
    </div>
  );
};
export default NotFoundPage;
