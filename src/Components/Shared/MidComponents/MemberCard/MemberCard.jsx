import { useTranslation } from "react-i18next";
import { camelCase } from "../../../../Functions/helper";
import SvgIcon from "../../MiniComponents/SvgIcon";
import ToolTip from "../../MiniComponents/ToolTip";
import s from "./MemberCard.module.scss";

const MemberCard = ({ data }) => {
  const { t } = useTranslation();
  const { name, jobTitle, img, socialMedia } = data;
  const memberDataTrans = `aboutPage.ourMembersData.${camelCase(jobTitle)}`;

  return (
    <div className={s.card}>
      <div className={s.imgHolder}>
        <img src={img} alt={name} />
      </div>

      <div className={s.info}>
        <b tabIndex="0">{t(`${memberDataTrans}.name`)}</b>
        <p tabIndex="0">{t(`${memberDataTrans}.jobTitle`)}</p>

        <div className={s.socialMedia}>
          <SocialMedia socialMedia={socialMedia} />
        </div>
      </div>
    </div>
  );
};
export default MemberCard;

const SocialMedia = ({ socialMedia }) => {
  const socialMediaNames = Object.keys(socialMedia);
  const { t } = useTranslation();

  return socialMediaNames?.map((mediaName, i) => {
    const instagramClass = mediaName === "instagram" ? s.instagram : "";
    const mediaNameTrans = t(`common.${mediaName}`);

    return (
      <a
        key={mediaName + i}
        href={socialMedia[mediaName]}
        target="_blank"
        className={instagramClass}
        title={mediaNameTrans}
      >
        <SvgIcon name={mediaName} />
        <ToolTip top="40px" left="50%" content={mediaNameTrans} />
      </a>
    );
  });
};
