import useTimerDown from "../../../Hooks/useTimerDown";
import styles from "./EventCounter.module.scss";

const EventCounter = ({ timeEvent, eventName }) => {
  const { timeData, isTimerDone } = useTimerDown(timeEvent, {
    timerName: eventName,
  });
  const { days, hours, minutes, seconds } = timeData;

  return (
    <>
      <div className={styles.eventTimer}>
        <div className={styles.timeContainer}>
          <div className={styles.typeTime}>Days</div>
          <div className={styles.time}>{days?.toString().padStart(2, 0)}</div>
        </div>
        <span>:</span>

        <div className={styles.timeContainer}>
          <div className={styles.typeTime}>Hours</div>
          <div className={styles.time}>{hours?.toString().padStart(2, 0)}</div>
        </div>
        <span>:</span>

        <div className={styles.timeContainer}>
          <div className={styles.typeTime}>Minutes</div>
          <div className={styles.time}>
            {minutes?.toString().padStart(2, 0)}
          </div>
        </div>
        <span>:</span>

        <div className={styles.timeContainer}>
          <div className={styles.typeTime}>Seconds</div>
          <div className={styles.time}>
            {seconds?.toString().padStart(2, 0)}
          </div>
        </div>
      </div>
    </>
  );
};
export default EventCounter;
