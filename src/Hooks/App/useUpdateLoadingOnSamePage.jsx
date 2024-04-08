import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { random } from "src/Functions/helper";

const useUpdateLoadingOnSamePage = ({
  loadingState,
  loadingKey,
  cleanFunction,
  delays,
  dependencies = [],
  actionMethod,
}) => {
  const dispatch = useDispatch();
  const timerId = useRef(null);
  let randomDelay = random(delays);

  function updateLoadingState() {
    dispatch(actionMethod({ key: loadingKey, value: true }));

    timerId.current = setTimeout(() => {
      dispatch(actionMethod({ key: loadingKey, value: false }));
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
export default useUpdateLoadingOnSamePage;
