import { SCREEN_SIZES } from "src/Data/globalVariables";
import { paymentCards } from "src/Data/staticData";
import ToolTip from "../../Shared/MiniComponents/ToolTip";
import s from "./PaymentCards.module.scss";

const PaymentCards = () => {
  const isLaptopScreen = window.innerWidth >= SCREEN_SIZES.laptop;

  return (
    <div className={s.images}>
      {paymentCards.map(({ img, alt, link, id }) => (
        <a key={id} href={link} target="_blank">
          <img src={img} alt={alt + " image"} />
          {isLaptopScreen && <ToolTip left="50%" top="46px" content={alt} />}
        </a>
      ))}
    </div>
  );
};
export default PaymentCards;
