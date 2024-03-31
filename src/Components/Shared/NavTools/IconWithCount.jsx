import { Link } from "react-router-dom";
import SvgIcon from "../MiniComponents/SvgIcon";
import ToolTip from "../MiniComponents/ToolTip";
import s from "./IconWithCount.module.scss";

const IconWithCount = ({
  props: { iconName, visibility, routePath, countLength, title },
}) => {
  const countNoun = countLength > 99 ? "99+" : countLength;

  return (
    visibility && (
      <Link to={routePath} className={s.link} aria-label={title}>
        <div className={s.wrapper}>
          <SvgIcon name={iconName} />
          {countLength > 0 && <span className={s.count}>{countNoun}</span>}
        </div>

        <ToolTip top="42px" left="50%" content={title} />
      </Link>
    )
  );
};
export default IconWithCount;
