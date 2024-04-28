import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import s from "./ProfileFormButtons.module.scss";

const ProfileFormButtons = () => {
  const { t } = useTranslation();

  return (
    <div className={s.buttons}>
      <Link to="/">{t("common.cancel")}</Link>
      <button type="submit">{t("buttons.saveChanges")}</button>
    </div>
  );
};
export default ProfileFormButtons;
