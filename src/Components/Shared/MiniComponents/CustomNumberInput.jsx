import { useRef } from "react";
import styles from "./CustomNumberInput.module.scss";
import SvgIcon from "./SvgIcon";

const CustomNumberInput = ({ number, setNumber }) => {
  const holdTimer = useRef();
  const holdDuration = useRef(300);
  number = handleNumberValue();

  function increase() {
    setNumber((prevNumber) => +prevNumber + 1);
  }

  function decrease() {
    setNumber((prevNumber) => (prevNumber > 1 ? +prevNumber - 1 : 1));
  }

  function handleChangeNumber(e) {
    const value = e.target.value;
    if (value === "0") return;
    setNumber(value);
  }

  function handleMouseDown(direction) {
    holdTimer.current = setInterval(
      () => onHold(direction),
      holdDuration.current
    );
  }

  function onHold(duration) {
    if (duration === "up") setNumber((prevNumber) => +prevNumber + 1);
    else setNumber((prevNumber) => (prevNumber > 1 ? +prevNumber - 1 : 1));
  }

  function handleNumberValue() {
    const formattedNumber = `${number}`;
    if (formattedNumber === "0") return "1";
    return formattedNumber;
  }

  return (
    <div className={styles.numberInput}>
      <input
        type="number"
        value={number}
        onChange={(e) => handleChangeNumber(e)}
        min={1}
        max={999}
      />

      <div className={styles.buttons}>
        <button
          type="button"
          onMouseDown={() => handleMouseDown("up")}
          onMouseUp={() => clearInterval(holdTimer.current)}
          onClick={increase}
        >
          <SvgIcon name="arrowUp" />
        </button>

        <button
          type="button"
          onMouseDown={() => handleMouseDown("down")}
          onMouseUp={() => clearInterval(holdTimer.current)}
          onClick={decrease}
        >
          <SvgIcon name="arrowUp" />
        </button>
      </div>
    </div>
  );
};
export default CustomNumberInput;
