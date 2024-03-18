import s from "./PaymentCalculation.module.scss";

const PaymentCalculation = () => {
  const subTotal = 1750;
  const totalAfterCoupon = subTotal;

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
        <span>${totalAfterCoupon}</span>
      </div>
    </div>
  );
};
export default PaymentCalculation;
