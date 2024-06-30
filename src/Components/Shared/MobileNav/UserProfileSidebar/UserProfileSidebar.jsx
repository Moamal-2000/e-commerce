import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userImg, userPicturePlaceholder } from "src/Assets/Images/Images";
import s from "./UserProfileSidebar.module.scss";

const UserProfileSidebar = () => {
  const { loginInfo } = useSelector((state) => state.user);
  const { username, isSignIn } = loginInfo;
  const { t } = useTranslation();

  return (
    <div className={s.userInfo}>
      <Link to="/profile" title={t("mobileNav.profile")} className={s.img}>
        <img
          src={isSignIn ? userImg : userPicturePlaceholder}
          alt="user's picture"
          loading="lazy"
          decoding="async"
        />
      </Link>

      <p>
        {t("mobileNav.hey")} 🖐️
        <Link
          to="/profile"
          title={t("mobileNav.profile")}
          className={s.userName}
        >
          {username}
        </Link>
      </p>
    </div>
  );
};
export default UserProfileSidebar;
