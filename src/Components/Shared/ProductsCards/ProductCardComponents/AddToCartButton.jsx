import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SvgIcon from "../../MiniComponents/SvgIcon";
import s from "./AddToCartButton.module.scss";
import { addToArray } from "../../../../Features/productsSlice";

const AddToCartButton = ({ product }) => {
  const navigateTo = useNavigate();
  const dispatch = useDispatch();
  const { cartProducts } = useSelector((state) => state.products);
  const { isSignIn } = useSelector((state) => state.user);

  function addProductToCart() {
    const isProductAlreadyExist = cartProducts.includes(product);
    if (!isSignIn) navigateTo("/signup");
    if (isProductAlreadyExist) return;

    dispatch(addToArray({ key: "cartProducts", value: product }));
  }

  return (
    <button
      type="button"
      className={`${s.addToCartBtn} ${s.addToCartButton}`}
      onClick={addProductToCart}
      aria-label="Add to cart"
      data-addToCartButton
    >
      <SvgIcon name="cart3" />
      <span>Add to cart</span>
    </button>
  );
};
export default AddToCartButton;
