import cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { MAC_BOOKS_SCREEN_WIDTH } from "src/Data/globalVariables";
import { removeById } from "src/Features/productsSlice";
import { removeCartProductToolTipLeftPos } from "src/Functions/componentsFunctions";
import useGetResizeWindow from "src/Hooks/Helper/useGetResizeWindow";
import SvgIcon from "../../Shared/MiniComponents/SvgIcon";
import ToolTip from "../../Shared/MiniComponents/ToolTip";
import s from "./RemoveCartProductBtn.module.scss";

const RemoveCartProductBtn = ({ productId }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const lang = cookies.get("i18next");
  const { width: windowWidth } = useGetResizeWindow();

  const [toolTipLeftPos, setToolTipLeftPos] = useState(
    removeCartProductToolTipLeftPos(lang)
  );
  const [toolTipTopPos, setToolTipTopPos] = useState("50%");

  function updateToolTipPositions() {
    if (windowWidth <= MAC_BOOKS_SCREEN_WIDTH) {
      setToolTipLeftPos("50%");
      setToolTipTopPos("-20px");
      return;
    }

    setToolTipLeftPos(removeCartProductToolTipLeftPos(lang));
    setToolTipTopPos("50%");
  }

  useEffect(() => {
    updateToolTipPositions();
  }, [windowWidth, lang]);

  function removeProduct() {
    const removeAction = removeById({ key: "cartProducts", id: productId });
    dispatch(removeAction);
  }

  return (
    <button
      type="button"
      className={s.removeButton}
      aria-label="Remove product from cart"
      onClick={removeProduct}
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
