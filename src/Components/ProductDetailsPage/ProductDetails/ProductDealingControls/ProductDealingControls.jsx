import AddToFavButton from "./AddToFavButton/AddToFavButton";
import BuyButton from "./BuyButton/BuyButton";
import CustomNumberInput from "./CustomNumberInput/CustomNumberInput";
import s from "./ProductDealingControls.module.scss";

const ProductDealingControls = ({ productData }) => {
  return (
    <section className={s.dealing}>
      <CustomNumberInput />

      <div className={s.buttons}>
        <BuyButton />
        <AddToFavButton productData={productData} />
      </div>
    </section>
  );
};
export default ProductDealingControls;
