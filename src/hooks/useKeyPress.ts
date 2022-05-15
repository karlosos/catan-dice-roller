// src: https://usehooks.com/useKeyPress/
import { useEffect } from "react";

export function useKeyPress(callback: () => void, keyCodes: string[]): void {
  const handler = ({ key }: { key: string }): void => {
    if (keyCodes.includes(key)) {
      callback();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handler);

    return () => {
      window.removeEventListener("keydown", handler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [callback]);
}
