import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function CountDown() {
  const { t } = useTranslation();
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-01-13") - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

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

  const timerComponents = Object.keys(timeLeft).map((interval) => (
    <div
      className="flex flex-col items-center justify-center md:p-4 p-2"
      key={interval}
    >
      <span className="lg:text-6xl text-3xl font-medium	text-3">
        {timeLeft[interval].toString().padStart(2, "0")}
      </span>
      <span className=" md:text-lg font-normal text-5 text-base">
        {interval}
      </span>
    </div>
  ));

  return (
    <div className="flex flex-col items-center justify-center md:mt-5">
      <h1 className=" mb-4 mt-16 text-2xl	text-5 ">D - DAY</h1>
      <h1 className="text-4xl font-light text-beigeC ">2024.01.13</h1>
      <div className="flex items-center space-x-4 lg:mt-16 mt-10 mb-10">
        {timerComponents}
      </div>
    </div>
  );
}
