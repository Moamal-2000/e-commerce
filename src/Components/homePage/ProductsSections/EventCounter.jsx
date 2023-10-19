import { useEffect, useRef, useState } from "react";
import styles from "./EventCounter.module.scss";

const EventCounter = () => {
  const eventDateLocal = localStorage.getItem("eventDate")
  let eventDate;
  if (eventDateLocal) eventDate = JSON.parse(eventDateLocal)

  const [seconds, setSeconds] = useState(eventDate?.seconds || 56)
  const [minutes, setMinutes] = useState(eventDate?.minutes || 19)
  const [hours, setHours] = useState(eventDate?.hours || 23)
  const [days, setDays] = useState(eventDate?.days || 3)
  const isMounted = useRef(false)


  function updateCounter(countDownCounter) {
    setSeconds((prevState) => {
      if (prevState === 0) {
        setMinutes(prevState => {
          if (prevState === 0) {
            setHours(prevState => {
              if (prevState === 0) {
                setDays(prevState => {
                  if (prevState === 0) {
                    clearInterval(countDownCounter)
                    resetTimer()
                  }
                  return days - 1
                })
                return 59
              }
              return hours - 1
            })
            return 59
          }
          return minutes - 1
        })
        return 59
      }
      return prevState - 1
    })
  }


  function resetTimer() {
    setDays(0)
    setHours(0)
    setMinutes(0)
    setSeconds(0)
  }


  useEffect(() => {
    const countDownCounter = setInterval(() => updateCounter(countDownCounter), 1000);
    return () => {
      clearInterval(countDownCounter)
    }
  }, [])


  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true
      return
    }

    const eventDate = {
      days,
      hours,
      minutes,
      seconds
    }
    localStorage.setItem("eventDate", JSON.stringify(eventDate))
  }, [seconds])


  return (
    <div className={styles.eventTimer}>
      <div className={styles.timeContainer}>
        <div className={styles.typeTime}>Days</div>
        <div className={styles.time}>{days.toString().padStart(2, 0)}</div>
      </div>
      <span>:</span>

      <div className={styles.timeContainer}>
        <div className={styles.typeTime}>Hours</div>
        <div className={styles.time}>{hours.toString().padStart(2, 0)}</div>
      </div>
      <span>:</span>

      <div className={styles.timeContainer}>
        <div className={styles.typeTime}>Minutes</div>
        <div className={styles.time}>{minutes.toString().padStart(2, 0)}</div>
      </div>
      <span>:</span>

      <div className={styles.timeContainer}>
        <div className={styles.typeTime}>Seconds</div>
        <div className={styles.time}>{seconds.toString().padStart(2, 0)}</div>
      </div>
    </div>
  );
};
export default EventCounter;
