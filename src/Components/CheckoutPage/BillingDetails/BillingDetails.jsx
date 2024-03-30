import CustomCheckbox from "../../Shared/MiniComponents/CustomCheckbox";
import s from "./BillingDetails.module.scss";
import BillingInputs from "./BillingInputs";

const BillingDetails = ({ inputsData: { billingValues, handleChange } }) => {
  return (
    <section className={s.billingDetailsSection}>
      <h2>Billing Details</h2>

      <BillingInputs inputsData={{ billingValues, handleChange }} />

      <footer>
        <CustomCheckbox
          inputData={{
            name: "saveInfo",
            value: billingValues.saveInfo,
            onchange: handleChange,
            id: "save-info",
          }}
        />
        <label htmlFor="save-info">
          Save this information for faster check-out next time
        </label>
      </footer>
    </section>
  );
};
export default BillingDetails;
