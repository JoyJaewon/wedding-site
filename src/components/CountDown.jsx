import React, { useState, useEffect } from "react";

export default function CountDown() {
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
      <span className="lg:text-6xl text-3xl font-semibold">
        {timeLeft[interval].toString().padStart(2, "0")}
      </span>
      <span className=" md:text-lg font-semibold uppercase text-base">
        {interval}
      </span>
    </div>
  ));

  return (
    <div className="flex flex-col items-center justify-center mt-5">
      <div className="text-center mt-16 text-lg p-4">
        <h5>서로가 마주보며 다져온 사랑을</h5>
        <h5>이제 함께 한 곳을 바라보며 걸어갈 수 있는</h5>
        <h5>큰 사랑으로 키우고자 합니다.</h5>
        <h5>저희 두 사람이 사랑의 이름으로 지켜나갈 수 있게</h5>
        <h5>앞날의 축복해 주시면 감사하겠습니다.</h5>
      </div>
      <div className="flex justify-center gap-28 lg:gap-52 mt-16">
        <img
          src="/images/groom.jpg"
          alt="Junyong"
          className="rounded-full lg:w-1/5 w-1/4 h-1/4 shadow-lg cursor-pointer transition-all hover:scale-105"
        />
        <img
          src="/images/bride.jpg"
          alt="Jaewon"
          className="rounded-full lg:w-1/5 w-1/4 h-1/4 shadow-lg cursor-pointer transition-all hover:scale-105"
        />
      </div>
      <div className="flex lg:justify-around justify-between mt-10 lg:w-2/3 w-3/6">
        <div className="text-center">
          <div className="text-2xl font-semibold">신랑</div>
          <div className="text-lg">김준용</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-semibold">신부</div>
          <div className="text-lg">한재원</div>
        </div>{" "}
      </div>
      <h1 className="text-2xl font-semibold mb-4 mt-16">January 13th, 2024</h1>
      <div className="flex items-center space-x-4 mb-10">{timerComponents}</div>
    </div>
  );
}
