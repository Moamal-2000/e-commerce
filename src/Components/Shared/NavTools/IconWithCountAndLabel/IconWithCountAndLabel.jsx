import { NavLink } from "react-router-dom";
import SvgIcon from "../../MiniComponents/SvgIcon";
import s from "./IconWithCountAndLabel.module.scss";

const IconWithCountAndLabel = ({
  props: {
    iconName,
    visibility,
    routePath,
    countLength,
    title,
    text,
    ariaHidden = false,
    tabIndex = 0,
  },
}) => {
  const count = countLength > 99 ? "99+" : countLength;

  return (
    visibility && (
      <NavLink
        to={routePath}
        aria-label={title}
        aria-hidden={ariaHidden}
        tabIndex={tabIndex}
      >
        <div className={s.wrapper}>
          <SvgIcon name={iconName} />
          {countLength > 0 && <span className={s.count}>{count}</span>}
        </div>

        <span className={s.text}>{text}</span>
      </NavLink>
    )
  );
};
export default IconWithCountAndLabel;
