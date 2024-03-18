import { aboutCardsInfo } from "../../../Data/staticData";
import InfoCard from "../../Shared/MiniComponents/InfoCard";
import s from "./AboutInfoCards.module.scss";

const AboutInfoCards = () => {
  return (
    <section className={s.infoCardsSection}>
      {aboutCardsInfo.map((cardInfo) => (
        <InfoCard key={cardInfo.id} data={cardInfo} />
      ))}
    </section>
  );
};
export default AboutInfoCards;
