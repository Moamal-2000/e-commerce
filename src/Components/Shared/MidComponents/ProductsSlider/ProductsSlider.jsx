import { useRef, useState } from "react";
import { productsData } from "src/Data/productsData";
import { shouldDisplaySliderButtons } from "src/Functions/conditions";
import useSlider from "src/Hooks/App/useSlider";
import useGetResizeWindow from "src/Hooks/Helper/useGetResizeWindow";
import ProductCard from "../../ProductsCards/ProductCard/ProductCard";
import s from "./ProductsSlider.module.scss";
import SliderButtons from "./SliderButtons/SliderButtons";

const ProductsSlider = ({
  filterFun = () => productsData,
  customization,
  loading,
  skipToId,
  skipLinkTitle,
  buttonsMarginBottom,
}) => {
  const filteredProducts = filterFun();
  const sliderRef = useRef();
  const { handleNextBtn, handlePrevBtn } = useSlider(sliderRef);
  const { windowWidth } = useGetResizeWindow();
  const [isSkipButtonClicked, setIsSkipButtonClicked] = useState(false);

  const shouldDisplayButtons = shouldDisplaySliderButtons(
    windowWidth,
    filteredProducts
  );

  return (
    <>
      {shouldDisplayButtons && (
        <SliderButtons
          handleNextBtn={handleNextBtn}
          handlePrevBtn={handlePrevBtn}
          skipToId={skipToId}
          skipLinkTitle={skipLinkTitle}
          setIsSkipButtonClicked={setIsSkipButtonClicked}
          buttonsMarginBottom={buttonsMarginBottom}
        />
      )}

      <div className={s.productsSlider} ref={sliderRef} dir="ltr" tabIndex="-1">
        {filteredProducts.map((product) => (
          <ProductCard
            product={product}
            key={product.id}
            customization={customization}
            loading={loading}
            tabIndex={isSkipButtonClicked ? -1 : 0}
          />
        ))}
      </div>
    </>
  );
};

export default ProductsSlider;
