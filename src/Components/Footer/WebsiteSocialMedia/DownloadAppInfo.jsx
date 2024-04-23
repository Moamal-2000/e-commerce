import { appStore, googlePlay, qrCode } from "src/Assets/Images/Images";
import { mySocialMedia } from "../../../Data/staticData";
import SvgIcon from "../../Shared/MiniComponents/SvgIcon";
import ToolTip from "../../Shared/MiniComponents/ToolTip";
import s from "./DownloadAppInfo.module.scss";

const DownloadAppInfo = () => {
  return (
    <>
      <b>Download App</b>
      <p>Save $3 with App New User Only</p>

      <div className={s.appInfo}>
        <div className={s.qrCode}>
          <img src={qrCode} alt="QR Code" title="qr code" tabIndex="0" />
        </div>

        <div className={s.downloadButtons}>
          <button type="button">
            <img src={googlePlay} alt="Download app at Google play" />
          </button>

          <button type="button">
            <img src={appStore} alt="Download app at App store" />
          </button>
        </div>
      </div>

      <div className={s.socialMedia}>
        {mySocialMedia.map((item) => (
          <a href={item.link} target="_blank" title={item.name} key={item.id}>
            <SvgIcon name={item.icon} />
            <ToolTip left="50%" top="48px" content={item.name} />
          </a>
        ))}
      </div>
    </>
  );
};
export default DownloadAppInfo;
