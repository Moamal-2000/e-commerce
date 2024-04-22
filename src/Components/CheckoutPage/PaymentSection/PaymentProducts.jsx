import { Link } from "react-router-dom";
import s from "./PaymentProducts.module.scss";

const PaymentProducts = ({ data }) => {
  return (
    <div className={s.products}>
      {data.map(({ img, name, shortName, afterDiscount, id }) => (
        <Link to={`/details?product=${name}`} key={id} className={s.product}>
          <div className={s.wrapper}>
            <img src={img} alt={shortName} />
            <span>{shortName}</span>
          </div>

          <span className={s.price}>${afterDiscount}</span>
        </Link>
      ))}
    </div>
  );
};
export default PaymentProducts;
