import SkeletonCard from "./SkeletonCard";

const SkeletonCards = ({ numberOfCards = 4 }) => {
  const cards = Array.from({ length: numberOfCards });
  return cards.map((_) => <SkeletonCard />);
};
export default SkeletonCards;
