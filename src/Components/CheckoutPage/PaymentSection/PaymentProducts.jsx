import { Link } from "react-router-dom";
import s from "./PaymentProducts.module.scss";

const PaymentProducts = ({ data }) => {
  return (
    <div className={s.products}>
      {data.map(({ img, name, shortName, afterDiscount, id }) => (
        <div key={id} className={s.product}>
          <div className={s.wrapper}>
            <img src={img} alt={shortName} />
            <Link to={`/details?product=${name}`}>{shortName}</Link>
          </div>

          <span className={s.price}>${afterDiscount}</span>
        </div>
      ))}
    </div>
  );
};
export default PaymentProducts;
