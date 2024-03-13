import { Link } from "react-router-dom";
import SvgIcon from "../MiniComponents/SvgIcon";
import s from "./IconWithCount.module.scss";

const IconWithCount = ({ iconName, visibility, routePath, countLength }) => {
  const countNoun = countLength > 99 ? "99+" : countLength;

  return (
    visibility && (
      <Link to={routePath} className={s.link}>
        <SvgIcon name={iconName} />
        {countLength > 0 && <span>{countNoun}</span>}
      </Link>
    )
  );
};
export default IconWithCount;
