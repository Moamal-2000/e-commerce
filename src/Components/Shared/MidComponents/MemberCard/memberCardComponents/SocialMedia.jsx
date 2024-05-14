import { useTranslation } from "react-i18next";
import SvgIcon from "../../../MiniComponents/SvgIcon";
import ToolTip from "../../../MiniComponents/ToolTip";
import s from "./SocialMedia.module.scss";

const SocialMedia = ({ socialMedia }) => {
  const socialMediaNames = Object.keys(socialMedia);
  const { t } = useTranslation();

  return (
    <div className={s.socialMedia}>
      {socialMediaNames?.map((mediaName, i) => {
        const instagramClass = mediaName === "instagram" ? s.instagram : "";
        const mediaNameTrans = t(`common.${mediaName}`);

        return (
          <a
            key={mediaName + i}
            href={socialMedia[mediaName]}
            target="_blank"
            className={instagramClass}
            title={mediaNameTrans}
          >
            <SvgIcon name={mediaName} />
            <ToolTip top="40px" left="50%" content={mediaNameTrans} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialMedia;
