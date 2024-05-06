import { useTranslation } from "react-i18next";
import { appStore, googlePlay, qrCode } from "src/Assets/Images/Images";
import { mySocialMedia } from "src/Data/staticData";
import SvgIcon from "../../Shared/MiniComponents/SvgIcon";
import ToolTip from "../../Shared/MiniComponents/ToolTip";
import s from "./DownloadAppInfo.module.scss";

const DownloadAppInfo = () => {
  const { t } = useTranslation();

  return (
    <>
      <b>{t("footer.section5.downloadApp")}</b>
      <p>{t("footer.section5.saveThreeDollars")}</p>

      <div className={s.appInfo}>
        <div className={s.qrCode}>
          <img
            src={qrCode}
            alt="QR Code"
            title="qr code"
            tabIndex="0"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className={s.downloadButtons}>
          <button type="button">
            <img
              src={googlePlay}
              alt="Download app at Google play"
              loading="lazy"
              decoding="async"
            />
          </button>

          <button type="button">
            <img
              src={appStore}
              alt="Download app at App store"
              loading="lazy"
              decoding="async"
            />
          </button>
        </div>
      </div>

      <div className={s.socialMedia}>
        {mySocialMedia.map((item) => {
          const nameTrans = t(`common.${item.name.toLowerCase()}`);

          return (
            <a href={item.link} target="_blank" title={nameTrans} key={item.id}>
              <SvgIcon name={item.icon} />
              <ToolTip left="50%" top="48px" content={nameTrans} />
            </a>
          );
        })}
      </div>
    </>
  );
};
export default DownloadAppInfo;
