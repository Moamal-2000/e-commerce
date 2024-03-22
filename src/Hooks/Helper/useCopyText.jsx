import { useState } from "react";

const useCopyText = () => {
  const [copiedText, setCopiedText] = useState("");

  function setCopy(text) {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
  }

  return [copiedText, setCopy];
};

export default useCopyText;
