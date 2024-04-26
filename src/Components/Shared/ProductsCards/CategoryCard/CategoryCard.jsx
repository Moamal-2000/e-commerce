import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { camelCase } from "src/Functions/helper";
import SvgIcon from "../../MiniComponents/SvgIcon";
import s from "./CategoryCard.module.scss";

const CategoryCard = ({ categoryData }) => {
  const { iconName, title } = categoryData;
  const categoryType = title.toLowerCase();
  const navigateTo = useNavigate();
  const { t } = useTranslation();
  const categoryTitleTrans = t(`categoriesData.${camelCase(title)}`);

  function navigateToCategory() {
    navigateTo(`/category?type=${categoryType}`);
  }

  return (
    <Link
      className={s.card}
      title={categoryTitleTrans}
      onClick={navigateToCategory}
    >
      <SvgIcon name={iconName} />
      <span>{categoryTitleTrans}</span>
    </Link>
  );
};
export default CategoryCard;
