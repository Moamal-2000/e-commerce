import { coloredStar, uncoloredStar } from "src/Assets/Images/Images";
import { isDecimalNumber } from "src/Functions/helper";
import SvgIcon from "../MiniComponents/SvgIcon";
import s from "./RateStars.module.scss";

const RateStars = ({ rate }) => {
  const isRateFound = rate !== undefined || rate !== null;
  const fixedRate = Math.floor(rate);
  const maxNumberOfRate = 5;

  if (!isRateFound) throw new Error("Rate value is undefined or null");

  function getRateStars() {
    let isHalfStarRendered = false;

    return Array.from({ length: maxNumberOfRate }, (_, i) => {
      const key = `star-${i}`;

      if (fixedRate > i) {
        return <img key={key} src={coloredStar} alt="star" />;
      }

      if (isDecimalNumber(rate) && !isHalfStarRendered) {
        isHalfStarRendered = true;
        return <SvgIcon name="halfStar" key={key} />;
      }

      return <img key={key} src={uncoloredStar} alt="star" />;
    });
  }

  return <div className={s.stars}>{getRateStars()}</div>;
};

export default RateStars;
