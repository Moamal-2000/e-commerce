import { paymentCards } from "../../../Data/staticData";
import s from "./PaymentCards.module.scss";

const PaymentCards = () => {
  return (
    <div className={s.images}>
      {paymentCards.map(({ img, alt, link, id }) => (
        <a key={id} href={link} target="_blank" title={alt}>
          <img src={img} alt={alt} />
        </a>
      ))}
    </div>
  );
};
export default PaymentCards;
