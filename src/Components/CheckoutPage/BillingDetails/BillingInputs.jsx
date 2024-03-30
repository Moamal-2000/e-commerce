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
          isRequired: true,
          value: firstName,
          onchange: handleChange,
        }}
      />

      <BillingInput
        inputData={{
          label: "Company Name",
          name: "companyName",
          value: companyName,
          onchange: handleChange,
        }}
      />

      <BillingInput
        inputData={{
          label: "Street Address",
          name: "streetAddress",
          isRequired: true,
          value: streetAddress,
          onchange: handleChange,
        }}
      />

      <BillingInput
        inputData={{
          label: "Apartment, floor, etc. (optional)",
          name: "address",
          value: address,
          onchange: handleChange,
        }}
      />

      <BillingInput
        inputData={{
          label: "Town/City",
          name: "city",
          isRequired: true,
          value: city,
          onchange: handleChange,
        }}
      />

      <BillingInput
        inputData={{
          label: "Phone Number",
          name: "phoneNumber",
          isRequired: true,
          value: phoneNumber,
          type: "tel",
          onchange: handleChange,
        }}
      />

      <BillingInput
        inputData={{
          label: "Email Address",
          name: "email",
          isRequired: true,
          value: email,
          type: "email",
          onchange: handleChange,
        }}
      />
    </div>
  );
};
export default BillingInputs;
