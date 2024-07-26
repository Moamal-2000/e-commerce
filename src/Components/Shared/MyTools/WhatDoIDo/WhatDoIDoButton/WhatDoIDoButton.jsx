import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { updateGlobalState } from "src/Features/globalSlice";
import SvgIcon from "../../../MiniComponents/SvgIcon";
import ToolTip from "../../../MiniComponents/ToolTip";
import s from "./WhatDoIDoButton.module.scss";

const WhatDoIDoButton = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

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
      <ToolTip content={t("whatImWorking")} left="126px" top="50%" />
    </button>
  );
};
export default WhatDoIDoButton;
