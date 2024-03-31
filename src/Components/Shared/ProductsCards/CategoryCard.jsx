import { Link, useNavigate } from "react-router-dom";
import SvgIcon from "../MiniComponents/SvgIcon";
import s from "./CategoryCard.module.scss";

const CategoryCard = ({ categoryData }) => {
  const { iconName, title } = categoryData;
  const categoryType = title.toLowerCase();
  const navigateTo = useNavigate();

  function navigateToCategory() {
    navigateTo(`/category?type=${categoryType}`);
  }

  return (
    <Link
      className={s.card}
      title={title + " category"}
      onClick={() => navigateToCategory(categoryType)}
    >
      <SvgIcon name={iconName} />
      <span>{title}</span>
    </Link>
  );
};
export default CategoryCard;
