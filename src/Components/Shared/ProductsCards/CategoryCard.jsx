import SvgIcon from "../MiniComponents/SvgIcon";
import s from "./CategoryCard.module.scss";

const CategoryCard = ({ categoryData }) => {
  const { iconName, title } = categoryData;

  return (
    <a href="#" className={s.card} title={title + "category"}>
      <SvgIcon name={iconName} />
      <span>{title}</span>
    </a>
  );
};
export default CategoryCard;
