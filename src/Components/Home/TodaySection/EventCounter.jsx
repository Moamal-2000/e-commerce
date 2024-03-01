import useTimerDown from "../../../Hooks/useTimerDown";
import styles from "./EventCounter.module.scss";

const EventCounter = ({ timeEvent, eventName }) => {
  const { timeData } = useTimerDown(timeEvent, {
    timerName: eventName,
    formattedTime: true,
  });

  return (
    <>
      <div className={styles.eventTimer}>
        <div className={styles.timeContainer}>
          <div className={styles.typeTime}>Days</div>
          <div className={styles.time}>{timeData.days}</div>
        </div>
        <span>:</span>

        <div className={styles.timeContainer}>
          <div className={styles.typeTime}>Hours</div>
          <div className={styles.time}>{timeData.hours}</div>
        </div>
        <span>:</span>

        <div className={styles.timeContainer}>
          <div className={styles.typeTime}>Minutes</div>
          <div className={styles.time}>{timeData.minutes}</div>
        </div>
        <span>:</span>

        <div className={styles.timeContainer}>
          <div className={styles.typeTime}>Seconds</div>
          <div className={styles.time}>{timeData.seconds}</div>
        </div>
      </div>
    </>
  );
};
export default EventCounter;
