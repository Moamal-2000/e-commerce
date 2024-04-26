import { useTranslation } from "react-i18next";
import SvgIcon from "../SvgIcon";
import s from "./InfoCard.module.scss";

const InfoCard = ({ data, index }) => {
  const { iconName, number } = data;
  const { t } = useTranslation();

  return (
    <div className={s.card} tabIndex="0">
      <div className={s.iconHolder}>
        <SvgIcon name={iconName} />
      </div>

      <b>{number}</b>
      <p>{t(`aboutPage.cardInfo.aboutCardsInfo${index + 1}`)}</p>
    </div>
  );
};
export default InfoCard;
