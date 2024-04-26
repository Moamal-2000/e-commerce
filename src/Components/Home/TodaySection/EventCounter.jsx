import { useTranslation } from "react-i18next";
import useTimerDown from "src/Hooks/App/useTimerDown";
import s from "./EventCounter.module.scss";

const EventCounter = ({ timeEvent, eventName }) => {
  const { t } = useTranslation();
  const { timeData } = useTimerDown(timeEvent, {
    timerName: eventName,
    formattedTime: true,
  });

  return (
    <>
      <div className={s.eventTimer}>
        <div className={s.timeContainer}>
          <div className={s.typeTime}>{t("common.days")}</div>
          <div className={s.time}>{timeData.days}</div>
        </div>
        <span>:</span>

        <div className={s.timeContainer}>
          <div className={s.typeTime}>{t("common.hours")}</div>
          <div className={s.time}>{timeData.hours}</div>
        </div>
        <span>:</span>

        <div className={s.timeContainer}>
          <div className={s.typeTime}>{t("common.minutes")}</div>
          <div className={s.time}>{timeData.minutes}</div>
        </div>
        <span>:</span>

        <div className={s.timeContainer}>
          <div className={s.typeTime}>{t("common.seconds")}</div>
          <div className={s.time}>{timeData.seconds}</div>
        </div>
      </div>
    </>
  );
};
export default EventCounter;
