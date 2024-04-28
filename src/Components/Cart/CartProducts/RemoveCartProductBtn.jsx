import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { removeById } from "../../../Features/productsSlice";
import SvgIcon from "../../Shared/MiniComponents/SvgIcon";
import ToolTip from "../../Shared/MiniComponents/ToolTip";
import s from "./RemoveCartProductBtn.module.scss";

const RemoveCartProductBtn = ({ productId }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  function removeProduct() {
    const removeAction = removeById({ key: "cartProducts", id: productId });
    dispatch(removeAction);
  }

  return (
    <button type="button" className={s.removeButton} onClick={removeProduct}>
      <SvgIcon name="xMark" />
      <ToolTip top="50%" left="-44px" content={t("tooltips.remove")} />
    </button>
  );
};
export default RemoveCartProductBtn;
