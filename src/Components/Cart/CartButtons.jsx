import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import s from "./CartButtons.module.scss";

const CartButtons = () => {
  const {} = useSelector((state) => state.products);
  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  function updateCart() {}

  return (
    <div className={s.buttons}>
      <button type="button" onClick={() => navigateTo("/")}>
        Return To Shop
      </button>

      <button type="button" onClick={updateCart}>
        Update Cart
      </button>
    </div>
  );
};
export default CartButtons;
