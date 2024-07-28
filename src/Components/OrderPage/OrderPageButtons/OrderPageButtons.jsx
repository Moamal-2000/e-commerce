import s from "./OrderPageButtons.module.scss";

const OrderPageButtons = () => {
  return (
    <div className={s.buttons}>
      <button type="button">Confirm receive all</button>
      <button type="button">Cancel all</button>
    </div>
  );
};
export default OrderPageButtons;
