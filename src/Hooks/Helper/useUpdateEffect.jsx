import { useEffect, useState } from "react";

const useUpdateEffect = (effect, dependencies, cleanup) => {
  const [isInitialRender, setIsInitialRender] = useState(true);

  useEffect(() => {
    if (isInitialRender) {
      setIsInitialRender(false);
      return;
    }

    effect();

    return () => {
      if (cleanup) cleanup();
    };
  }, dependencies);
};

export default useUpdateEffect;
