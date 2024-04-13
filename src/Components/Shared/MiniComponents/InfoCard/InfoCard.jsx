import SvgIcon from "../SvgIcon";
import s from "./InfoCard.module.scss";

const InfoCard = ({ data }) => {
  const { iconName, number, text } = data;

  return (
    <div className={s.card} tabIndex="0">
      <div className={s.iconHolder}>
        <SvgIcon name={iconName} />
      </div>

      <b>{number}</b>
      <p>{text}</p>
    </div>
  );
};
export default InfoCard;
