import SvgIcon from "../MiniComponents/SvgIcon";
import ToolTip from "../MiniComponents/ToolTip";
import s from "./WhatDoIDo.module.scss";

const WhatDoIDo = () => {
  return (
    <button className={s.whatDoIDoBtn} type="button" aria-haspopup="true">
      <SvgIcon name="questionMark" />
      <ToolTip content="What i'm working on?" left="126px" top="50%" />
    </button>
  );
};
export default WhatDoIDo;
