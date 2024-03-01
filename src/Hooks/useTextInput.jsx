import { useState } from "react";

const useTextInput = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);
  const attributes = {
    type: "text",
    value,
    onChange: (e) => setValue(e.target.value),
  };

  return [value, attributes, setValue];
};

export default useTextInput;
