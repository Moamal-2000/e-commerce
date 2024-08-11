import { useState } from "react";
import { setItemToLocalStorage } from "./useLocalStorage";

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

      if (storeInLocalStorage)
        setItemToLocalStorage(localStorageKey, updatedValues);
      return updatedValues;
    };

    setValues(updateValues);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(values);
  };

  return { values, handleChange, handleSubmit };
};

export default useFormData;
