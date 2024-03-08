import { useNavigate } from "react-router-dom";
import styles from "./CartButtons.module.scss";

const CartButtons = () => {
  const navigateTo = useNavigate();

  function updateCart() {

  }

  return (
    <div className={styles.buttons}>
      <button type="button" onClick={() => navigateTo("/")}>
        Return To Shop
      </button>

      <button type="button" onClick={updateCart}>Update Cart</button>
    </div>
  );
};
export default CartButtons;
