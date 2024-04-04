import { ourMembersData } from "src/Data/staticData";
import MemberCard from "../../Shared/MidComponents/MemberCard";
import s from "./OurMembersSection.module.scss";

const OurMembersSection = () => {
  return (
    <section className={s.slider}>
      {ourMembersData.map((member) => (
        <MemberCard key={member.id} data={member} />
      ))}
    </section>
  );
};
export default OurMembersSection;
