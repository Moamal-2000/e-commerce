import { useRef } from "react";
import { productsData } from "src/Data/productsData";
import useSlider from "src/Hooks/App/useSlider";
import ProductCard from "../../ProductsCards/ProductCard/ProductCard";
import s from "./ProductsSlider.module.scss";
import SliderButtons from "./SliderButtons/SliderButtons";

const ProductsSlider = ({
  filterFun = () => productsData,
  customization,
  loading,
}) => {
  const filteredProducts = filterFun();
  const sliderRef = useRef();
  const { handleNextBtn, handlePrevBtn } = useSlider(sliderRef);

  return (
    <>
      <SliderButtons
        handleNextBtn={handleNextBtn}
        handlePrevBtn={handlePrevBtn}
      />

      <div className={s.productsSlider} ref={sliderRef} dir="ltr">
        {filteredProducts.map((product) => (
          <ProductCard
            product={product}
            key={product.id}
            customization={customization}
            loading={loading}
          />
        ))}
      </div>
    </>
  );
};

export default ProductsSlider;
