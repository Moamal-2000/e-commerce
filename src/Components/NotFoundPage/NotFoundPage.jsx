import { Link } from "react-router-dom";
import PagesHistory from "../Shared/MiniComponents/PagesHistory";
import styles from "./NotFoundPage.module.scss";

const NotFoundPage = () => {
  return (
    <div className="container">
      <main className={styles.notFoundPage}>
        <PagesHistory history={["/", "404 Error"]} />

        <div className={styles.wrapper}>
          <b>404 Not Found</b>
          <p>Your visited page not found. You may go home page.</p>
          <Link to="/">Back to home page</Link>
        </div>
      </main>
    </div>
  );
};
export default NotFoundPage;
