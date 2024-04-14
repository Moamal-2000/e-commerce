import s from "./CopyRightsText.module.scss";

const CopyRightsText = () => {
  const developerProfile = "https://www.linkedin.com/in/moamal-alaa-a4bb15237/";
  const designerProfile = "https://dribbble.com/mdrimel15";

  return (
    <p className={s.copyRights}>
      <span>Website designed by</span>
      <a href={designerProfile} target="_blank">
        Rimel
      </a>

      <span>and coded by</span>
      <a href={developerProfile} target="_blank">
        Moamal Alaa
      </a>
    </p>
  );
};
export default CopyRightsText;
