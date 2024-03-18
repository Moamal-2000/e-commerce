import { useSelector } from "react-redux";
import AddCoupon from "../Cart/AddCoupon";
import PaymentCalculation from "./PaymentCalculation";
import PaymentProducts from "./PaymentProducts";
import s from "./PaymentSection.module.scss";

const PaymentSection = () => {
  const { cartProducts } = useSelector((state) => state.products);

  return (
    <section className={s.paymentSection}>
      <PaymentProducts data={cartProducts} />
      <PaymentCalculation />
      <AddCoupon />
    </section>
  );
};
export default PaymentSection;
