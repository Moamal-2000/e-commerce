import { useSelector } from "react-redux";
import AddCoupon from "../Cart/AddCoupon";
import PaymentProducts from "./PaymentProducts";
import s from "./PaymentSection.module.scss";

const PaymentSection = () => {
  const { cartProducts } = useSelector((state) => state.products);
  const subTotal = 1750;
  const totalAfterCoupon = subTotal;

  return (
    <section className={s.paymentSection}>
      <PaymentProducts data={cartProducts} />

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
          <span>${totalAfterCoupon}</span>
        </div>
      </div>

      <AddCoupon />
    </section>
  );
};
export default PaymentSection;
