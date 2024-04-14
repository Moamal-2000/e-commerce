import { appStore, googlePlay, qrCode } from "src/Assets/Images/Images";
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
        <a
          href="https://www.facebook.com/MoamalAlaa109"
          target="_blank"
          title="facebook"
        >
          <SvgIcon name="facebook" />
          <ToolTip left="50%" top="48px" content="facebook" />
        </a>

        <a
          href="https://twitter.com/MoamalAlaa7"
          target="_blank"
          title="twitter"
        >
          <SvgIcon name="twitter" />
          <ToolTip left="50%" top="48px" content="twitter" />
        </a>

        <a
          href="https://www.instagram.com/kubislav23/"
          target="_blank"
          title="instagram"
        >
          <SvgIcon name="instagram" />
          <ToolTip left="50%" top="48px" content="instagram" />
        </a>

        <a
          href="https://www.linkedin.com/in/moamal-alaa-a4bb15237/"
          target="_blank"
          title="linkedin"
        >
          <SvgIcon name="linkedin" />
          <ToolTip left="50%" top="48px" content="linkedin" />
        </a>
      </div>
    </>
  );
};
export default DownloadAppInfo;
