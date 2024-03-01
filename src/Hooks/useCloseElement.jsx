import { useEffect, useState } from "react";

const useCloseElement = (toggleEleRef, switcherEleRef, exceptElementRef) => {
  const [isElementClose, setIsElementClose] = useState(false);

  function handleDocumentClick(e) {
    if (!toggleEleRef.current || !switcherEleRef.current) return;

    const target = e.target;
    const isSwitcherEle = target === switcherEleRef?.current;
    const isExceptEle = target === exceptElementRef?.current;
    const isInsideToggle = isParentOfElement(target, toggleEleRef?.current);
    const shouldCloseElement =
      (!isSwitcherEle && !isInsideToggle) || isExceptEle;

    if (shouldCloseElement) setIsElementClose(false);
    else if (isSwitcherEle) setIsElementClose((prevState) => !prevState);
  }

  useEffect(() => {
    window.addEventListener("click", handleDocumentClick);

    return () => window.removeEventListener("click", handleDocumentClick);
  }, [toggleEleRef, switcherEleRef, exceptElementRef]);

  return [isElementClose, setIsElementClose];
};

export default useCloseElement;

/* Helper Function */
const isParentOfElement = (element, requiredEle) => {
  let parentElement = element.parentElement;

  while (
    parentElement &&
    requiredEle !== parentElement &&
    requiredEle !== element
  ) {
    parentElement = parentElement.parentElement;
  }

  return !!parentElement;
};
