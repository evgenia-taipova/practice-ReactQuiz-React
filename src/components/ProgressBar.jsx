import { useEffect, useState } from "react";

export default function ProgressBar({ timer, onTimeout, mode }) {
  const [remainingTime, setRemainingtime] = useState(timer);

  //   setTimeout(onTimeout(), timer);
  useEffect(() => {
    const timeout = setTimeout(onTimeout, timer);
    return () => {
      clearTimeout(timeout);
    };
  }, [timer, onTimeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingtime((prevTime) => prevTime - 100);
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress id="question-time" value={remainingTime} max={timer} className={mode}></progress>
  );
}
