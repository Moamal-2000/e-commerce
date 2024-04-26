import { useTranslation } from "react-i18next";
import useTimerDown from "src/Hooks/App/useTimerDown";
import s from "./PostCounter.module.scss";

const PostCounter = () => {
  const { t } = useTranslation();
  const { timeData } = useTimerDown("5 23 59 35", {
    timerName: "product poster",
    formattedTime: true,
  });

  return (
    <div className={s.postCounter}>
      <div className={s.timeUnit}>
        <span>{timeData.days}</span>
        <span>{t("common.days")}</span>
      </div>

      <div className={s.timeUnit}>
        <span>{timeData.hours}</span>
        <span>{t("common.hours")}</span>
      </div>

      <div className={s.timeUnit}>
        <span>{timeData.minutes}</span>
        <span>{t("common.minutes")}</span>
      </div>

      <div className={s.timeUnit}>
        <span>{timeData.seconds}</span>
        <span>{t("common.seconds")}</span>
      </div>
    </div>
  );
};

export default PostCounter;
