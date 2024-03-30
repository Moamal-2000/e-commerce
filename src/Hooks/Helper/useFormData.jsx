import { useState } from "react";

const useFormData = ({
  initialValues,
  onSubmit,
  storeInLocalStorage,
  localStorageKey,
}) => {
  const valuesLocal = localStorage.getItem(localStorageKey);
  const setValuesFromLocal = valuesLocal && storeInLocalStorage;

  const [values, setValues] = useState(
    setValuesFromLocal ? JSON.parse(valuesLocal) : initialValues
  );

  function handleChange(event) {
    const { name, value } = event.target;

    const updateValues = (prevValues) => {
      const updatedValues = {
        ...prevValues,
        [name]: value,
      };

      if (storeInLocalStorage) storeValuesToLocalStorage(updatedValues);
      return updatedValues;
    };

    setValues(updateValues);
  }

  function storeValuesToLocalStorage(getValues) {
    localStorage.setItem(localStorageKey, JSON.stringify(getValues));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(values);
  };

  return { values, handleChange, handleSubmit };
};

export default useFormData;
