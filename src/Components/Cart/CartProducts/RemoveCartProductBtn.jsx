import cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { SCREEN_SIZES } from "src/Data/globalVariables";
import { removeById } from "src/Features/productsSlice";
import { cartProductToolTipPos } from "src/Functions/componentsFunctions";
import useGetResizeWindow from "src/Hooks/Helper/useGetResizeWindow";
import SvgIcon from "../../Shared/MiniComponents/SvgIcon";
import ToolTip from "../../Shared/MiniComponents/ToolTip";
import s from "./RemoveCartProductBtn.module.scss";

const RemoveCartProductBtn = ({ productId }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const lang = cookies.get("i18next");
  const { windowWidth } = useGetResizeWindow();

  const [toolTipLeftPos, setToolTipLeftPos] = useState(cartProductToolTipPos(lang));
  const [toolTipTopPos, setToolTipTopPos] = useState("50%");

  function updateToolTipPositions() {
    if (windowWidth <= SCREEN_SIZES.laptop) {
      setToolTipLeftPos("50%");
      setToolTipTopPos("-20px");
      return;
    }

    setToolTipLeftPos(cartProductToolTipPos(lang));
    setToolTipTopPos("50%");
  }

  useEffect(() => {
    updateToolTipPositions();
  }, [windowWidth, lang]);

  return (
    <button
      type="button"
      className={s.removeButton}
      aria-label="Remove product from cart"
      onClick={() => removeProduct(dispatch, productId)}
    >
      <SvgIcon name="xMark" />
      <ToolTip
        top={toolTipTopPos}
        left={toolTipLeftPos}
        content={t("tooltips.remove")}
      />
    </button>
  );
};
export default RemoveCartProductBtn;

function removeProduct(dispatch, productId) {
  const removeAction = removeById({ key: "cartProducts", id: productId });
  dispatch(removeAction);
}
