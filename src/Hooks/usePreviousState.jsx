import { useEffect, useRef } from "react";

const usePreviousState = (state) => {
  const oldState = useRef(state);

  useEffect(() => {
    oldState.current = state;
  }, [state]);

  return oldState.current;
};

export default usePreviousState;
