import SvgIcon from "../MiniComponents/SvgIcon";
import styles from "./MemberCard.module.scss";

const MemberCard = ({ data }) => {
  const { name, jobTitle, img, socialMedia, id } = data;

  return (
    <div className={styles.card}>
      <div className={styles.imgHolder}>
        <img src={img} alt={name} />
      </div>

      <div className={styles.info}>
        <b>{name}</b>
        <p>{jobTitle}</p>

        <div className={styles.socialMedia}>
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
    const instagramClass = mediaName === "instagram" ? styles.instagram : "";

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
