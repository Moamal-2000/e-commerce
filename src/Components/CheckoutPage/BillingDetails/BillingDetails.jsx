import { useTranslation } from "react-i18next";
import CustomCheckbox from "../../Shared/MiniComponents/CustomCheckbox/CustomCheckbox";
import BillingInputs from "../BillingDetailsInputs/BillingInputs";
import s from "./BillingDetails.module.scss";

const BillingDetails = ({ inputsData: { billingValues, handleChange } }) => {
  const { t } = useTranslation();

  return (
    <section className={s.billingDetailsSection}>
      <h2>{t("billingDetails")}</h2>

      <BillingInputs inputsData={{ billingValues, handleChange }} />

      <CustomCheckbox
        inputData={{
          name: "saveInfo",
          value: billingValues.saveInfo,
          onchange: handleChange,
          id: "save-info",
        }}
      />
    </section>
  );
};
export default BillingDetails;
