import { coloredStar, uncoloredStar } from "../assets/images/Images";

export function RateStars({ rate }) {
  if (!rate) throw new Error("Rate value is undefined")
  let maxNumberOfRate = 5;

  const rateStars = Array.from({ length: maxNumberOfRate }, (_, i) =>
  rate > i
    ? <img key={i} src={coloredStar} alt="yellow star icon" />
    : <img key={i} src={uncoloredStar} alt="gray star icon" />
  );

  return rateStars;
}