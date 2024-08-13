import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { updateStorageState } from "src/Features/storageSlice";
import { hideWhatDoIDoButtonToolTipPos } from "src/Functions/componentsFunctions";
import SvgIcon from "../../../../MiniComponents/SvgIcon";
import ToolTip from "../../../../MiniComponents/ToolTip";
import s from "./HideButtonIcon.module.scss";

const HideButtonIcon = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const hideButtonToolTipPos = hideWhatDoIDoButtonToolTipPos(i18n.language);

  function neverShowMenu() {
    dispatch(updateStorageState({ key: "showWhatDoIDoIcon", value: false }));
  }

  return (
    <div
      className={s.hideIcon}
      data-is-tooltip="true"
      onClick={neverShowMenu}
      aria-label={t("tooltips.hidePermanent")}
      aria-haspopup="true"
    >
      <SvgIcon name="xMark" />
      <ToolTip
        top={"-17px"}
        left={hideButtonToolTipPos}
        content={t("tooltips.hidePermanent")}
      />
    </div>
  );
};
export default HideButtonIcon;
