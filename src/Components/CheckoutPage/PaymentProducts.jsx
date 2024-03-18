import s from "./PaymentProducts.module.scss";

const PaymentProducts = ({data}) => {
  return data.map(({ img, shortName, price, id }) => (
    <div key={id} className={s.product}>
      <div className={s.wrapper}>
        <img src={img} alt={shortName} />
        <span>{shortName}</span>
      </div>

      <span className={s.price}>${price}</span>
    </div>
  ));
};
export default PaymentProducts;
