import { categoriesData } from "../../../Data/staticData";
import CategoryCard from "../../Shared/ProductsCards/CategoryCard";
import styles from "./CategoriesSlider.module.scss";

const CategoriesSlider = () => {
  return (
    <div className={styles.categoriesSlider}>
      {categoriesData.map((categoryData) => (
        <CategoryCard categoryData={categoryData} key={categoryData.id} />
      ))}
    </div>
  );
};
export default CategoriesSlider;
