import { coloredStar, uncoloredStar } from "../../assets/images/Images";
import { isDecimalNumber } from "../../functions/helper";
import styles from "./RateStars.module.scss";

const RateStars = ({ rate }) => {
  if (!rate && rate !== 0) throw new Error("Rate value is undefined");
  const fixedRate = Math.floor(rate)
  let maxNumberOfRate = 5;
  let isHalfStarRendered = false;

  const halfStar = (key) => {
    return (
      <div key={key} className={styles.halfStar}>
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

  const rateStars = Array.from({ length: maxNumberOfRate }, (_, i) => {
    if (fixedRate > i)
      return <img key={i} src={coloredStar} alt="yellow star icon" />;

    if (isDecimalNumber(rate) && !isHalfStarRendered) {
      isHalfStarRendered = true;
      return halfStar(i);
    }

    return <img key={i} src={uncoloredStar} alt="gray star icon" />;
  });

  return rateStars;
};

export default RateStars;
