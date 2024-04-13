import { Link } from "react-router-dom";
import s from "./ProfileFormButtons.module.scss";

const ProfileFormButtons = () => {
  return (
    <div className={s.buttons}>
      <Link to="/">Cancel</Link>
      <button type="submit">Save Changes</button>
    </div>
  );
};
export default ProfileFormButtons;
