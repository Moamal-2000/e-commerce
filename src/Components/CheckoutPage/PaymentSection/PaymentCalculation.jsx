import { useSelector } from "react-redux";
import { getSubTotal } from "src/Functions/helper";
import s from "./PaymentCalculation.module.scss";

const PaymentCalculation = () => {
  const { cartProducts } = useSelector((state) => state.products);
  const subTotal = getSubTotal(cartProducts);

  return (
    <div className={s.calculationInfo}>
      <div className={s.item}>
        <span>subTotal:</span>
        <span>${subTotal}</span>
      </div>

      <div className={s.item}>
        <span>Shipping:</span>
        <span>Free</span>
      </div>

      <div className={s.item}>
        <span>Total:</span>
        <span>${subTotal}</span>
      </div>
    </div>
  );
};
export default PaymentCalculation;
