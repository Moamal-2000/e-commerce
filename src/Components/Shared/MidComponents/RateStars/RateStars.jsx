import { useTranslation } from "react-i18next";
import { coloredStar, uncoloredStar } from "src/Assets/Images/Images";
import { hasDecimalPart } from "src/Functions/helper";
import SvgIcon from "../../MiniComponents/SvgIcon";
import s from "./RateStars.module.scss";

const RateStars = ({ rate }) => {
  const isRateFound = rate !== undefined || rate !== null;
  if (!isRateFound) throw new Error("Rate value is undefined or null");

  const { t } = useTranslation();
  const rateMessage = t("detailsPage.productRate", { rate });

  return (
    <div
      className={s.stars}
      title={rateMessage}
      aria-label={`Rating: ${rate} stars`}
    >
      {getRateStars(rate)}
    </div>
  );
};

export default RateStars;

function getRateStars(rate, maximumStars = 5) {
  const fixedRate = Math.floor(rate);
  let isHalfStarRendered = false;

  return Array.from({ length: maximumStars }, (_, i) => {
    const key = `star-${i}`;

    if (fixedRate > i) {
      return <img key={key} src={coloredStar} alt="star" />;
    }

    if (hasDecimalPart(rate) && !isHalfStarRendered) {
      isHalfStarRendered = true;
      return <SvgIcon name="halfStar" key={key} />;
    }

    return <img key={key} src={uncoloredStar} alt="star" />;
  });
}
