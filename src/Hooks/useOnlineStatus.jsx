import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(false);

  function checkOnlineStatus() {
    setIsOnline(true);
  }

  function checkOfflineStatus() {
    setIsOnline(false);
  }

  useEffect(() => {
    checkOnlineStatus();
    window.addEventListener("online", checkOnlineStatus);
    window.addEventListener("offline", checkOfflineStatus);

    return () => {
      document.removeEventListener("online", checkOnlineStatus);
      document.removeEventListener("offline", checkOfflineStatus);
    };
  }, []);

  return isOnline;
};

export default useOnlineStatus;
