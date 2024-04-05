import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { updateState } from "src/Features/productsSlice";
import { random } from "src/Functions/helper";

const useUpdateLoadingState = ({
  loadingState,
  loadingKey,
  cleanFunction,
  delays,
  dependencies = [],
}) => {
  const dispatch = useDispatch();
  const timerId = useRef(null);
  let randomDelay = random(delays);

  function updateLoadingState() {
    if (!loadingState) return;

    timerId.current = setTimeout(() => {
      dispatch(updateState({ key: loadingKey, value: false }));
    }, randomDelay);

    randomDelay = random(delays);
  }

  function useEffectFunction() {
    updateLoadingState();

    return () => {
      clearTimeout(timerId.current);
      if (cleanFunction) cleanFunction();
    };
  }

  useEffect(useEffectFunction, dependencies);
};
export default useUpdateLoadingState;
