import { aboutCardsInfo } from "../../Data/staticData";
import InfoCard from "../Shared/MiniComponents/InfoCard";
import styles from "./AboutInfoCards.module.scss";

const AboutInfoCards = () => {
  return (
    <section className={styles.infoCardsSection}>
      {aboutCardsInfo.map((cardInfo) => (
        <InfoCard key={cardInfo.id} data={cardInfo} />
      ))}
    </section>
  );
};
export default AboutInfoCards;
