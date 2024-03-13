import s from "./Feature.module.scss";

const Feature = ({ iconImg, iconAlt, title, description }) => {
  return (
    <div className={s.feature}>
      <div className={s.iconHolder}>
        <img src={iconImg} alt={iconAlt} />
      </div>

      <b>{title}</b>
      <p>{description}</p>
    </div>
  );
};
export default Feature;
