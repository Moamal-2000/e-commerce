import CustomCheckbox from "../../Shared/MiniComponents/CustomCheckbox/CustomCheckbox";
import s from "./BillingDetails.module.scss";
import BillingInputs from "./BillingInputs";

const BillingDetails = ({ inputsData: { billingValues, handleChange } }) => {
  return (
    <section className={s.billingDetailsSection}>
      <h2>Billing Details</h2>

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
