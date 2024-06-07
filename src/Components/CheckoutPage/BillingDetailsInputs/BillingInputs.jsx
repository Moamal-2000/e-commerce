import { useTranslation } from "react-i18next";
import { billingInputsData } from "src/Data/staticData";
import BillingInput from "./BillingInput";
import s from "./BillingInputs.module.scss";

const BillingInputs = ({ inputsData: { billingValues, handleChange } }) => {
  const { t } = useTranslation();

  return (
    <div className={s.inputs}>
      {billingInputsData.map(({ translationKey, name, type, required, id }) => {
        const inputData = {
          value: billingValues[translationKey],
          name,
          label: t(`inputsLabels.${translationKey}`),
          required,
          type,
          onChange: handleChange,
        };

        return <BillingInput key={id} inputData={inputData} />;
      })}
    </div>
  );
};
export default BillingInputs;
