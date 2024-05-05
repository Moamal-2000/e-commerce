import { useRef } from "react";
import { productsData } from "src/Data/productsData";
import useSlider from "src/Hooks/App/useSlider";
import SvgIcon from "../../MiniComponents/SvgIcon";
import ProductCard from "../../ProductsCards/ProductCard/ProductCard";
import s from "./ProductsSlider.module.scss";

const ProductsSlider = ({ filterFun = () => productsData, customization }) => {
  const filteredProducts = filterFun();
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

      <div className={s.productsSlider} ref={sliderRef} draggable={true}>
        {filteredProducts.map((product) => (
          <ProductCard
            product={product}
            key={product.id}
            customization={customization}
          />
        ))}
      </div>
    </>
  );
};

export default ProductsSlider;
