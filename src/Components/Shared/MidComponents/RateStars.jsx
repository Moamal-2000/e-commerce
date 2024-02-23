import { coloredStar, uncoloredStar } from "../../../Assets/Images/Images";
import { isDecimalNumber } from "../../../Functions/helper";
import styles from "./RateStars.module.scss";

const RateStars = ({ rate }) => {
  if (!rate && rate !== 0) throw new Error("Rate value is undefined");

  const fixedRate = Math.floor(rate);
  const maxNumberOfRate = 5;

  function getRateStars() {
    return Array.from({ length: maxNumberOfRate }, (_, i) => {
      const randomKey = Math.random();

      return fixedRate > i ? (
        <img key={i} src={coloredStar} alt="yellow star" />
      ) : isDecimalNumber(rate) ? (
        <HalfStar key={randomKey} />
      ) : (
        <img key={i} src={uncoloredStar} alt="gray star" />
      );
    });
  }

  return getRateStars();
};

export default RateStars;

const HalfStar = () => {
  return (
    <div className={styles.halfStar}>
      <div className={styles.hideBox}>
        <div className={styles.uncoloredStar}>
          <img src={uncoloredStar} alt="gray star" />
        </div>
      </div>

      <div className={styles.coloredStar}>
        <img src={coloredStar} alt="yellow star" />
      </div>
    </div>
  );
};
