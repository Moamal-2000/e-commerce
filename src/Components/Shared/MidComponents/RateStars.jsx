import { coloredStar, uncoloredStar } from "../../../Assets/Images/Images";
import { isDecimalNumber } from "../../../Functions/helper";
import s from "./RateStars.module.scss";

const RateStars = ({ rate }) => {
  if (!rate && rate !== 0) throw new Error("Rate value is undefined");

  const fixedRate = Math.floor(rate);
  const maxNumberOfRate = 5;

  function getRateStars() {
    let isHalfStarRendered = false;

    return Array.from({ length: maxNumberOfRate }, (_, i) => {
      const randomKey = Math.random();

      if (fixedRate > i) return <img key={i} src={coloredStar} alt="star" />;

      if (isDecimalNumber(rate) && !isHalfStarRendered) {
        isHalfStarRendered = true;
        return <HalfStar key={randomKey} />;
      }

      return <img key={i} src={uncoloredStar} alt="star" />;
    });
  }

  return <div className={s.stars}>{getRateStars()}</div>;
};

export default RateStars;

const HalfStar = () => {
  return (
    <div className={s.halfStar}>
      <div className={s.hideBox}>
        <div className={s.uncoloredStar}>
          <img src={uncoloredStar} alt="star" />
        </div>
      </div>

      <div className={s.coloredStar}>
        <img src={coloredStar} alt="star" />
      </div>
    </div>
  );
};
