import { ourMembersData } from "src/Data/staticData";
import MemberCard from "../../Shared/MidComponents/MemberCard/MemberCard";
import s from "./OurMembersSection.module.scss";

const OurMembersSection = () => {
  return (
    <section className={s.ourMembersSection}>
      {ourMembersData.map((member) => (
        <MemberCard key={member.id} data={member} />
      ))}
    </section>
  );
};
export default OurMembersSection;
