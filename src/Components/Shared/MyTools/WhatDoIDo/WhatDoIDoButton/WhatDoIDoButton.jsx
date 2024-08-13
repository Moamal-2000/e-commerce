import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { updateGlobalState } from "src/Features/globalSlice";
import { whatDoIDoButtonToolTipPos } from "src/Functions/componentsFunctions";
import SvgIcon from "../../../MiniComponents/SvgIcon";
import ToolTip from "../../../MiniComponents/ToolTip";
import HideButtonIcon from "./HideButtonIcon/HideButtonIcon";
import s from "./WhatDoIDoButton.module.scss";

const WhatDoIDoButton = () => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const toolTipLeftPosition = whatDoIDoButtonToolTipPos(i18n.language);

  function openMenu(e) {
    const isButtonTag = e.target.tagName === "BUTTON";

    if (!isButtonTag) return;

    dispatch(updateGlobalState({ key: "isWhatDoIDoMenuActive", value: true }));
    dispatch(updateGlobalState({ key: "isOverlayActive", value: true }));
  }

  return (
    <button
      className={s.whatDoIDoBtn}
      onClick={openMenu}
      type="button"
      aria-haspopup="true"
      aria-label="to-do list button"
    >
      <HideButtonIcon />

      <SvgIcon name="questionMark" />
      <ToolTip
        content={t("whatImWorking")}
        left={toolTipLeftPosition}
        top="50%"
      />
    </button>
  );
};
export default WhatDoIDoButton;
