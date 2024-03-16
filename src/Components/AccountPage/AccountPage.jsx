import PagesHistory from "../Shared/MiniComponents/PagesHistory";
import AccountMenuSection from "./AccountMenuSection";
import s from "./AccountPage.module.scss";
import EditProfileForm from "./EditProfileForm";

const AccountPage = () => {
  return (
    <div className="container">
      <main className={s.accountPage}>
        <PagesHistory history={["/", "My Account"]} />

        <div className={s.accountPageContent}>
          <AccountMenuSection />
          <EditProfileForm />
        </div>
      </main>
    </div>
  );
};
export default AccountPage;
