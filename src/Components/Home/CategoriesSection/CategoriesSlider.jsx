import { useRef } from "react";
import { categoriesData } from "src/Data/staticData";
import useSlider from "src/Hooks/App/useSlider";
import SvgIcon from "../../Shared/MiniComponents/SvgIcon";
import CategoryCard from "../../Shared/ProductsCards/CategoryCard/CategoryCard";
import s from "./CategoriesSlider.module.scss";

const CategoriesSlider = () => {
  const sliderRef = useRef();
  const { handleNextBtn, handlePrevBtn } = useSlider(sliderRef);

  return (
    <>
      <div className={s.sliderButtons}>
        <button
          type="button"
          onClick={handlePrevBtn}
          aria-label="Previous button for slider"
        >
          <SvgIcon name="arrowLeftShort" />
        </button>

        <button
          type="button"
          onClick={handleNextBtn}
          aria-label="Next button for slider"
        >
          <SvgIcon name="arrowRightShort" />
        </button>
      </div>

      <div className={s.categoriesSlider} ref={sliderRef}>
        {categoriesData.map((categoryData) => (
          <CategoryCard categoryData={categoryData} key={categoryData.id} />
        ))}
      </div>
    </>
  );
};
export default CategoriesSlider;
