import useTimerDown from "../../../Hooks/useTimerDown";
import styles from "./PostCounter.module.scss";

const PostCounter = () => {
  const { timeData } = useTimerDown("5 23 59 35", {
    timerName: "product poster",
  });
  const { days, hours, minutes, seconds } = timeData;

  return (
    <div className={styles.postCounter}>
      <div className={styles.timeUnit}>
        <span>{days}</span>
        <span>Days</span>
      </div>

      <div className={styles.timeUnit}>
        <span>{hours}</span>
        <span>House</span>
      </div>

      <div className={styles.timeUnit}>
        <span>{minutes}</span>
        <span>Minutes</span>
      </div>

      <div className={styles.timeUnit}>
        <span>{seconds}</span>
        <span>Seconds</span>
      </div>
    </div>
  );
};
export default PostCounter;
