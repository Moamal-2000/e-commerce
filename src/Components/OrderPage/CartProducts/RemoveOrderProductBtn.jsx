import i18next from "i18next";
import cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { SCREEN_SIZES } from "src/Data/globalVariables";
import { showAlert } from "src/Features/alertsSlice";
import { updateProductsState } from "src/Features/productsSlice";
import { cartProductToolTipPos } from "src/Functions/componentsFunctions";
import useGetResizeWindow from "src/Hooks/Helper/useGetResizeWindow";
import SvgIcon from "../../Shared/MiniComponents/SvgIcon";
import ToolTip from "../../Shared/MiniComponents/ToolTip";
import { translateProduct } from "./OrderProduct";
import s from "./RemoveOrderProductBtn.module.scss";

const RemoveOrderProductBtn = ({ productName }) => {
  const { confirm } = useSelector((state) => state.alerts);
  const {removeOrderProduct} = useSelector((state) => state.products);
  const { isAlertActive } = confirm;
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { windowWidth } = useGetResizeWindow();
  const [lang, setLang] = useState(cookies.get("i18next") || "en");
  const translatedProduct = translateProduct({
    productName,
    translateMethod: t,
    translateKey: "shortName",
  });

  useEffect(() => {
    const handleLanguageChange = (lng) => {
      setLang(lng);
    };

    i18next.on("languageChanged", handleLanguageChange);

    return () => {
      i18next.off("languageChanged", handleLanguageChange);
    };
  }, []);

  useEffect(() => {
    const isNotSelectedProduct = removeOrderProduct !== productName;
    if (!isAlertActive || isNotSelectedProduct) return;

    showConfirmAlert(dispatch, productName, t, translatedProduct);
  }, [lang]);

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
    updateToolTipPositions();
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
