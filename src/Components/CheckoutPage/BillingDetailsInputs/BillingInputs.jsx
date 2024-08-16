import { useTranslation } from "react-i18next";
import { billingInputsData } from "src/Data/staticData";
import BillingInput from "./BillingInput";
import s from "./BillingInputs.module.scss";

const BillingInputs = ({ inputsData }) => {
  const { billingValues, handleChange } = inputsData;
  const { t } = useTranslation();

  function onChange(event, name) {
    const isPhoneInput = name === "phoneNumber";
    const isNumber = !isNaN(+event.nativeEvent.data);
    const isPaste = event.nativeEvent.inputType === "insertFromPaste";

    if (isPhoneInput && !isNumber) return;
    if (isPhoneInput && isPaste) return;

    handleChange(event);
  }

  return (
    <div className={s.inputs}>
      {billingInputsData.map(
        ({ translationKey, name, type, required, id, regex }) => {
          const inputData = {
            value: billingValues[translationKey],
            name,
            label: t(`inputsLabels.${translationKey}`),
            required,
            type,
            onChange: (event) => onChange(event, name),
          };

          return <BillingInput key={id} inputData={inputData} />;
        }
      )}
    </div>
  );
};
export default BillingInputs;
