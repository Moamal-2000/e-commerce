import { useRef } from "react";
import { categoriesData } from "src/Data/staticData";
import useSlider from "src/Hooks/App/useSlider";
import SliderButtons from "../../Shared/MidComponents/ProductsSlider/SliderButtons/SliderButtons";
import CategoryCard from "../../Shared/ProductsCards/CategoryCard/CategoryCard";
import s from "./CategoriesSlider.module.scss";

const CategoriesSlider = () => {
  const sliderRef = useRef();
  const { handleNextBtn, handlePrevBtn } = useSlider(sliderRef);

  return (
    <>
      <SliderButtons
        handlePrevBtn={handlePrevBtn}
        handleNextBtn={handleNextBtn}
      />

      <div className={s.categoriesSlider} ref={sliderRef}>
        {categoriesData.map((categoryData) => (
          <CategoryCard categoryData={categoryData} key={categoryData.id} />
        ))}
      </div>
    </>
  );
};
export default CategoriesSlider;
