import SvgIcon from "../MiniComponents/SvgIcon";
import s from "./MemberCard.module.scss";

const MemberCard = ({ data }) => {
  const { name, jobTitle, img, socialMedia, id } = data;

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
      >
        <SvgIcon name={mediaName} />
      </a>
    );
  });
};
