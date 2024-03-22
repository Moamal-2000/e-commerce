import useDebounce from "./useDebounce";
import useKeyPress from "./useKeyPress";

const useFunctionOnKey = (
  callback,
  keysNames,
  delay = 200,
  disableMainKeys = false,
  disableOnFocus = false
) => {
  const [pressedKey, pressInfo] = useKeyPress();
  useDebounce(() => executeOnClick(), delay, [pressedKey, pressInfo]);

  function executeOnClick() {
    const { shiftKey, altKey, ctrlKey } = pressInfo;
    const isOneOfMainKeysPressed = shiftKey || altKey || ctrlKey;
    const focusElement = document.activeElement?.tagName;
    const isFocusOnInput = /^(input|textarea)$/i.test(focusElement);
    const shouldRejectExecution =
      (disableMainKeys || disableOnFocus) &&
      (isOneOfMainKeysPressed || isFocusOnInput);

    if (shouldRejectExecution) return;

    if (keysNames.includes(pressedKey)) callback();
  }
};

export default useFunctionOnKey;
