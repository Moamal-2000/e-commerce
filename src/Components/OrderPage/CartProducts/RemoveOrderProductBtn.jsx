import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { REMOVE_ORDER_PRODUCT } from "src/Data/constants";
import { SCREEN_SIZES } from "src/Data/globalVariables";
import { showAlert, updateAlertState } from "src/Features/alertsSlice";
import { updateProductsState } from "src/Features/productsSlice";
import { cartProductToolTipPos } from "src/Functions/componentsFunctions";
import useGetResizeWindow from "src/Hooks/Helper/useGetResizeWindow";
import SvgIcon from "../../Shared/MiniComponents/SvgIcon";
import ToolTip from "../../Shared/MiniComponents/ToolTip";
import s from "./RemoveOrderProductBtn.module.scss";

const RemoveOrderProductBtn = ({ productName, translatedProduct }) => {
  const { removeOrderProduct } = useSelector((state) => state.products);
  const { isAlertActive } = useSelector((state) => state.alerts).confirm;
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const { windowWidth } = useGetResizeWindow();
  const [toolTipLeftPos, setToolTipLeftPos] = useState(
    cartProductToolTipPos(i18n.language)
  );
  const [toolTipTopPos, setToolTipTopPos] = useState("50%");

  function updateToolTipPositions() {
    if (windowWidth <= SCREEN_SIZES.laptop) {
      setToolTipLeftPos("50%");
      setToolTipTopPos("-20px");
      return;
    }

    setToolTipLeftPos(cartProductToolTipPos(i18n.language));
    setToolTipTopPos("50%");
  }

  function showAlert() {
    showConfirmAlert(dispatch, productName, t, translatedProduct);
  }

  useEffect(() => {
    const isSelectedProduct = removeOrderProduct === productName;

    updateToolTipPositions();

    if (isAlertActive && isSelectedProduct) showAlert();
  }, [windowWidth, i18n.language]);

  return (
    <button
      type="button"
      className={s.removeButton}
      aria-label="Remove product from cart"
      onClick={showAlert}
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
    updateAlertState({
      type: "confirm",
      key: "confirmPurpose",
      value: REMOVE_ORDER_PRODUCT,
    })
  );

  dispatch(
    updateProductsState({ key: "removeOrderProduct", value: productName })
  );
}
