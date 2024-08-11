import { useState } from "react";
import { setItemToLocalStorage } from "./useLocalStorage";

const useFormData = ({
  initialValues,
  onSubmit,
  storeInLocalStorage,
  localStorageKey,
}) => {
  const valuesLocal = localStorage.getItem(localStorageKey);
  const hasDataInLocal = valuesLocal && storeInLocalStorage;

  const [values, setValues] = useState(
    hasDataInLocal ? JSON.parse(valuesLocal) : initialValues
  );

  function handleChange(event) {
    const { name, value } = event.target;

    setValues((prevValues) => {
      const values = { ...prevValues, [name]: value };

      if (storeInLocalStorage) setItemToLocalStorage(localStorageKey, values);
      return values;
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(values);
  };

  return { values, handleChange, handleSubmit };
};

export default useFormData;
