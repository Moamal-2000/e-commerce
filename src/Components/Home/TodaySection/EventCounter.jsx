import useTimerDown from "src/Hooks/App/useTimerDown";
import s from "./EventCounter.module.scss";

const EventCounter = ({ timeEvent, eventName }) => {
  const { timeData } = useTimerDown(timeEvent, {
    timerName: eventName,
    formattedTime: true,
  });

  return (
    <>
      <div className={s.eventTimer}>
        <div className={s.timeContainer}>
          <div className={s.typeTime}>Days</div>
          <div className={s.time}>{timeData.days}</div>
        </div>
        <span>:</span>

        <div className={s.timeContainer}>
          <div className={s.typeTime}>Hours</div>
          <div className={s.time}>{timeData.hours}</div>
        </div>
        <span>:</span>

        <div className={s.timeContainer}>
          <div className={s.typeTime}>Minutes</div>
          <div className={s.time}>{timeData.minutes}</div>
        </div>
        <span>:</span>

        <div className={s.timeContainer}>
          <div className={s.typeTime}>Seconds</div>
          <div className={s.time}>{timeData.seconds}</div>
        </div>
      </div>
    </>
  );
};
export default EventCounter;
