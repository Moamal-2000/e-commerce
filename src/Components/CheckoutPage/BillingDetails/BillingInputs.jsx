import BillingInput from "./BillingInput";
import s from "./BillingInputs.module.scss";

const BillingInputs = ({ inputsData: { billingValues, handleChange } }) => {
  const {
    firstName,
    companyName,
    address,
    streetAddress,
    city,
    phoneNumber,
    email,
  } = billingValues;

  return (
    <div className={s.inputs}>
      <BillingInput
        inputData={{
          label: "First Name",
          name: "firstName",
          required: true,
          value: firstName,
          onChange: handleChange,
        }}
      />

      <BillingInput
        inputData={{
          label: "Company Name",
          name: "companyName",
          value: companyName,
          onChange: handleChange,
        }}
      />

      <BillingInput
        inputData={{
          label: "Street Address",
          name: "streetAddress",
          required: true,
          value: streetAddress,
          onChange: handleChange,
          autoComplete: true,
        }}
      />

      <BillingInput
        inputData={{
          label: "Apartment, floor, etc. (optional)",
          name: "address",
          value: address,
          onChange: handleChange,
          autoComplete: true,
        }}
      />

      <BillingInput
        inputData={{
          label: "Town/City",
          name: "city",
          required: true,
          value: city,
          onChange: handleChange,
          autoComplete: true,
        }}
      />

      <BillingInput
        inputData={{
          label: "Phone Number",
          name: "phoneNumber",
          required: true,
          value: phoneNumber,
          type: "tel",
          onChange: handleChange,
          autoComplete: true,
        }}
      />

      <BillingInput
        inputData={{
          label: "Email Address",
          name: "email",
          required: true,
          value: email,
          type: "email",
          onChange: handleChange,
          autoComplete: true,
        }}
      />
    </div>
  );
};
export default BillingInputs;
