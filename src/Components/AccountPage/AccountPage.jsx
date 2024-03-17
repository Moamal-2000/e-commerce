import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PagesHistory from "../Shared/MiniComponents/PagesHistory";
import AccountMenuSection from "./AccountMenuSection";
import s from "./AccountPage.module.scss";
import EditProfileForm from "./EditProfileForm";

const AccountPage = () => {
  const {
    loginInfo: { username },
  } = useSelector((state) => state.user);

  return (
    <div className="container">
      <main className={s.accountPage}>
        <div className={s.wrapper}>
          <PagesHistory history={["/", "My Account"]} />

          <p className={s.welcomeMessage}>
            Welcome! <Link to="/profile">{username}</Link>
          </p>
        </div>

        <div className={s.accountPageContent}>
          <AccountMenuSection />
          <EditProfileForm />
        </div>
      </main>
    </div>
  );
};
export default AccountPage;
