import { useState } from "react";

const useFormData = ({ initialValues, onSubmit }) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(values);
  };

  return { values, handleChange, handleSubmit };
};

export default useFormData;
