import { useEffect, useRef } from "react";

export const useWakeLock = () => {
  const currentWakeLock = useRef<WakeLockSentinel | null>(null);

  const lockScreen = async () => {
    if (!navigator.wakeLock) {
      return;
    }

    try {
      currentWakeLock.current = await navigator.wakeLock.request("screen");
      console.log("Wake lock enabled");
    } catch (err) {
      console.log(err);
    }
  };

  const unlockScreen = async () => {
    if (currentWakeLock.current) {
      currentWakeLock.current.release();
      console.log("Wake lock released");
    }
  };

  useEffect(() => {
    window.addEventListener("focus", lockScreen);
    window.addEventListener("blur", unlockScreen);
    lockScreen();

    return () => {
      unlockScreen();
      window.removeEventListener("focus", lockScreen);
      window.removeEventListener("blur", unlockScreen);
    };
  }, []);
};
