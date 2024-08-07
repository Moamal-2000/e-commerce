import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { updateGlobalState } from "src/Features/globalSlice";
import { whatDoIDoButtonToolTipPos } from "src/Functions/componentsFunctions";
import SvgIcon from "../../../MiniComponents/SvgIcon";
import ToolTip from "../../../MiniComponents/ToolTip";
import s from "./WhatDoIDoButton.module.scss";

const WhatDoIDoButton = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const toolTipLeftPosition = whatDoIDoButtonToolTipPos(i18next.language);

  function openMenu() {
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
