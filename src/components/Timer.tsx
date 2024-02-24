import { formatTime } from "@/utils";
import { useEffect, useState } from "react";

export default function Timer() {
  const [startTime, setStartTime] = useState<number | null>(null);
  const [now, setNow] = useState<number | null>(null);
  let secondsPassed = 0;

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    setInterval(() => {
      setNow(Date.now());
    }, 1000);
  }

  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  useEffect(() => {
    handleStart();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center bg-blue-200 text-blue-950 p-3 rounded-lg w-40">
      <p className="font-bold text-base text-blue-500">Time</p>
      <p className="font-bold text-3xl">
        {formatTime(Math.floor(secondsPassed))}
      </p>
    </div>
  );
}
