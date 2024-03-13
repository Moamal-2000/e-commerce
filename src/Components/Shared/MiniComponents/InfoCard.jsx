import s from "./InfoCard.module.scss";
import SvgIcon from "./SvgIcon";

const InfoCard = ({ data }) => {
  return (
    <div className={s.card}>
      <div className={s.iconHolder}>
        <SvgIcon name={data.iconName} />
      </div>

      <b>{data.number}</b>
      <p>{data.text}</p>
    </div>
  );
};
export default InfoCard;
