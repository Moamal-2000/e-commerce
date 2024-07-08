import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { SCREEN_SIZES } from "src/Data/globalVariables";
import { showAlert } from "src/Features/alertsSlice";
import { updateProductsState } from "src/Features/productsSlice";
import { cartProductToolTipPos } from "src/Functions/componentsFunctions";
import useCurrentLang from "src/Hooks/App/useCurrentLang";
import useGetResizeWindow from "src/Hooks/Helper/useGetResizeWindow";
import SvgIcon from "../../Shared/MiniComponents/SvgIcon";
import ToolTip from "../../Shared/MiniComponents/ToolTip";
import s from "./RemoveOrderProductBtn.module.scss";

const RemoveOrderProductBtn = ({ productName, translatedProduct }) => {
  const { removeOrderProduct } = useSelector((state) => state.products);
  const { isAlertActive } = useSelector((state) => state.alerts).confirm;
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { windowWidth } = useGetResizeWindow();
  const [lang] = useCurrentLang();
  const [toolTipLeftPos, setToolTipLeftPos] = useState(
    cartProductToolTipPos(lang)
  );
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
    const isSelectedProduct = removeOrderProduct === productName;

    updateToolTipPositions();

    if (isAlertActive && isSelectedProduct)
      showConfirmAlert(dispatch, productName, t, translatedProduct);
  }, [windowWidth, lang]);

  return (
    <button
      type="button"
      className={s.removeButton}
      aria-label="Remove product from cart"
      onClick={() =>
        showConfirmAlert(dispatch, productName, t, translatedProduct)
      }
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
export default RemoveOrderProductBtn;

function showConfirmAlert(dispatch, productName, t, translatedProduct) {
  dispatch(
    showAlert({
      alertText: t("toastAlert.removeOrderProduct", {
        translatedProduct: translatedProduct,
      }),
      alertState: "warning",
      alertType: "confirm",
    })
  );

  dispatch(
    updateProductsState({ key: "removeOrderProduct", value: productName })
  );
}
