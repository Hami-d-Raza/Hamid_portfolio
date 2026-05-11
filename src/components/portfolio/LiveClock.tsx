import { useEffect, useState } from "react";

function getTime() {
  return new Date().toLocaleTimeString("en-US", {
    timeZone: "Asia/Karachi",
    hour12: false,
  });
}

export function LiveClock() {
  const [t, setT] = useState(getTime());
  useEffect(() => {
    const id = setInterval(() => setT(getTime()), 1000);
    return () => clearInterval(id);
  }, []);
  return <>{t} PKT</>;
}
