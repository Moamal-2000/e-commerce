import { useEffect } from "react";

const useScrollOnMount = (scrollY = 0) => {
  const scrollBehavior = "instant";

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: scrollBehavior });
    window.scrollTo({ top: scrollY, behavior: scrollBehavior });
  }, []);
};
export default useScrollOnMount;
