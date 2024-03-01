import useTimerDown from "../../../Hooks/useTimerDown";
import styles from "./PostCounter.module.scss";

const PostCounter = () => {
  const { timeData } = useTimerDown("5 23 59 35", {
    timerName: "product poster",
    formattedTime: true,
  });

  return (
    <div className={styles.postCounter}>
      <div className={styles.timeUnit}>
        <span>{timeData.days}</span>
        <span>Days</span>
      </div>

      <div className={styles.timeUnit}>
        <span>{timeData.hours}</span>
        <span>House</span>
      </div>

      <div className={styles.timeUnit}>
        <span>{timeData.minutes}</span>
        <span>Minutes</span>
      </div>

      <div className={styles.timeUnit}>
        <span>{timeData.seconds}</span>
        <span>Seconds</span>
      </div>
    </div>
  );
};

export default PostCounter;
