import { ourMembersData } from "../../Data/staticData";
import MemberCard from "../Shared/MidComponents/MemberCard";
import styles from "./OurMembersSection.module.scss";

const OurMembersSection = () => {
  return (
    <section className={styles.slider}>
      {ourMembersData.map((member) => (
        <MemberCard key={member.id} data={member} />
      ))}
    </section>
  );
};
export default OurMembersSection;
