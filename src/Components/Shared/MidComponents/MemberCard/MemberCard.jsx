import { useTranslation } from "react-i18next";
import { camelCase } from "src/Functions/helper";
import s from "./MemberCard.module.scss";
import SocialMedia from "./memberCardComponents/SocialMedia";

const MemberCard = ({ data }) => {
  const { t } = useTranslation();
  const { name, jobTitle, img, socialMedia } = data;
  const memberDataTrans = `aboutPage.ourMembersData.${camelCase(jobTitle)}`;

  return (
    <div className={s.card}>
      <div className={s.imgHolder}>
        <img src={img} alt={name} loading="lazy" decoding="async" />
      </div>

      <div className={s.info}>
        <b>{t(`${memberDataTrans}.name`)}</b>
        <p>{t(`${memberDataTrans}.jobTitle`)}</p>

        <SocialMedia socialMedia={socialMedia} />
      </div>
    </div>
  );
};
export default MemberCard;
