import { Link } from "react-router-dom";
import styles from "./IconWithCount.module.scss";
import SvgIcon from "../MiniComponents/SvgIcon";

const IconWithCount = ({ iconName, visibility, routePath, countLength }) => {
  const countNoun = countLength > 99 ? "99+" : countLength;

  return (
    visibility && (
      <Link to={routePath} className={styles.link}>
        <SvgIcon name={iconName} />
        {countLength > 0 && <span>{countNoun}</span>}
      </Link>
    )
  );
};
export default IconWithCount;
