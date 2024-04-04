import { categoriesData } from "src/Data/staticData";
import CategoryCard from "../../Shared/ProductsCards/CategoryCard";
import s from "./CategoriesSlider.module.scss";

const CategoriesSlider = () => {
  return (
    <div className={s.categoriesSlider}>
      {categoriesData.map((categoryData) => (
        <CategoryCard categoryData={categoryData} key={categoryData.id} />
      ))}
    </div>
  );
};
export default CategoriesSlider;
