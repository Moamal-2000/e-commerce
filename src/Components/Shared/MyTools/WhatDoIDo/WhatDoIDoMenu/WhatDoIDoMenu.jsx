import { useSelector } from "react-redux";
import WhatDoIDoContent from "../WhatDoIDoContent/WhatDoIDoContent";
import WhatDoIDoHeader from "../WhatDoIDoHeader/WhatDoIDoHeader";
import s from "./WhatDoIDoMenu.module.scss";

const WhatDoIDoMenu = () => {
  const { isWhatDoIDoMenuActive } = useSelector((state) => state.global);
  const activeClass = isWhatDoIDoMenuActive ? s.active : "";

  return (
    <div className={`${s.menu} ${activeClass}`}>
      <WhatDoIDoHeader />
      <WhatDoIDoContent />
    </div>
  );
};
export default WhatDoIDoMenu;
