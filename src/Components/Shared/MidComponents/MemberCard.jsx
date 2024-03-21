import SvgIcon from "../MiniComponents/SvgIcon";
import ToolTip from "../MiniComponents/ToolTip";
import s from "./MemberCard.module.scss";

const MemberCard = ({ data }) => {
  const { name, jobTitle, img, socialMedia } = data;

  return (
    <div className={s.card}>
      <div className={s.imgHolder}>
        <img src={img} alt={name} />
      </div>

      <div className={s.info}>
        <b>{name}</b>
        <p>{jobTitle}</p>

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

  return socialMediaNames?.map((mediaName, i) => {
    const instagramClass = mediaName === "instagram" ? s.instagram : "";

    return (
      <a
        key={mediaName + i}
        href={socialMedia[mediaName]}
        target="_blank"
        className={instagramClass}
        title={mediaName}
      >
        <SvgIcon name={mediaName} />
        <ToolTip top="40px" left="50%" content={mediaName} />
      </a>
    );
  });
};
