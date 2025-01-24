import { useEffect, useCallback } from "react";

export const useDebounce = (
  effect: () => void,
  dependencies: [string],
  delay: number
) => {
  const callback = useCallback(effect, [effect, ...dependencies]);

  useEffect(() => {
    const timeout = setTimeout(callback, delay);
    return () => clearTimeout(timeout);
  }, [callback, delay]);
};
