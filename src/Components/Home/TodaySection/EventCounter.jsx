import useTimerDown from "../../../Hooks/useTimerDown";
import styles from "./EventCounter.module.scss";

const EventCounter = ({ timeEvent, eventName }) => {
  const { timeData } = useTimerDown(timeEvent, {
      timerName: eventName,
    }),
    { days, hours, minutes, seconds } = timeData,
    formattedDays = days?.toString().padStart(2, 0),
    formattedHours = hours?.toString().padStart(2, 0),
    formattedMinutes = minutes?.toString().padStart(2, 0),
    formattedSeconds = seconds?.toString().padStart(2, 0);

  return (
    <>
      <div className={styles.eventTimer}>
        <div className={styles.timeContainer}>
          <div className={styles.typeTime}>Days</div>
          <div className={styles.time}>{formattedDays}</div>
        </div>
        <span>:</span>

        <div className={styles.timeContainer}>
          <div className={styles.typeTime}>Hours</div>
          <div className={styles.time}>{formattedHours}</div>
        </div>
        <span>:</span>

        <div className={styles.timeContainer}>
          <div className={styles.typeTime}>Minutes</div>
          <div className={styles.time}>{formattedMinutes}</div>
        </div>
        <span>:</span>

        <div className={styles.timeContainer}>
          <div className={styles.typeTime}>Seconds</div>
          <div className={styles.time}>{formattedSeconds}</div>
        </div>
      </div>
    </>
  );
};
export default EventCounter;
