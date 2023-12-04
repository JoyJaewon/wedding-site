import React, { useState, useEffect } from "react";

export default function CountDown() {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-01-13") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <div
        className="flex flex-col items-center justify-center p-4"
        key={interval}
      >
        <span className="text-6xl font-semibold">{timeLeft[interval]}</span>
        <span className="text-lg font-semibold uppercase">{interval}</span>
      </div>
    );
  });

  return (
    <div className="flex flex-col items-center justify-center p-4 mt-5">
      <h1 className="text-4xl font-semibold mb-4">Junyong</h1>
      <h1 className="text-4xl font-semibold mb-4">&</h1>
      <h1 className="text-4xl font-semibold mb-4">Jaewon</h1>
      <h1 className="text-2xl font-semibold mb-4 mt-5">January 13th, 2024</h1>
      <div className="flex items-center space-x-4">
        {timerComponents.length ? timerComponents : <span>Time's up!</span>}
      </div>
    </div>
  );
}
