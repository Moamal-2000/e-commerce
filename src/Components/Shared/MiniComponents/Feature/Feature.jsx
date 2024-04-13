import s from "./Feature.module.scss";

const Feature = ({ iconImg, iconAlt, title, description }) => {
  return (
    <div className={s.feature}>
      <div className={s.iconHolder}>
        <img src={iconImg} alt={iconAlt} />
      </div>

      <b tabIndex="0">{title}</b>
      <p tabIndex="0">{description}</p>
    </div>
  );
};
export default Feature;
