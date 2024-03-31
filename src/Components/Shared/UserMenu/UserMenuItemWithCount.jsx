import SvgIcon from "../MiniComponents/SvgIcon";
import s from "./UserMenuItemWithCount.module.scss";

const UserMenuItemWithCount = ({ props: { iconName, countLength, title } }) => {
  const countNoun = countLength > 99 ? "99+" : countLength;

  return (
    <div className={s.link} aria-label={title}>
      <div className={s.wrapper}>
        <SvgIcon name={iconName} />
        {countLength > 0 && <span className={s.count}>{countNoun}</span>}
      </div>

      <span className={s.title}>{title}</span>
    </div>
  );
};
export default UserMenuItemWithCount;
