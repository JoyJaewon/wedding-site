import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./../Animation.css";
import HeartIcon from "../icon/HeartIcon";

export default function GroomBride() {
  const { t } = useTranslation();
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [brideImage, setBrideImage] = useState("/images/bride.jpg");
  const [groomImage, setGroomImage] = useState("/images/groom.jpg");

  useEffect(() => {
    function detectTouchDevice() {
      setIsTouchDevice(
        "ontouchstart" in window || navigator.maxTouchPoints > 0
      );
    }

    detectTouchDevice();
    window.addEventListener("resize", detectTouchDevice);

    return () => window.removeEventListener("resize", detectTouchDevice);
  }, []);

  const handleImageChangeB = () => {
    setBrideImage((prevImage) =>
      prevImage === "/images/bride.jpg"
        ? "/images/jaewon-child3.jpg"
        : "/images/bride.jpg"
    );
  };

  const handleImageChangeG = () => {
    setGroomImage((prevImage) =>
      prevImage === "/images/groom.jpg"
        ? "/images/jun-child.jpg"
        : "/images/groom.jpg"
    );
  };

  return (
    <div className="flex flex-col items-center justify-between md:p-4 p-2">
      <div className="text-center md:mt-16 mt-8 text-lg p-4 home-message">
        <h5>{t("home-message1")}</h5>
        <h5>{t("home-message2")}</h5>
        <h5>{t("home-message3")}</h5>
        <h5>{t("home-message4")}</h5>
        <h5>{t("home-message5")}</h5>
      </div>
      <div className="flex items-center justify-center lg:mt-40 mt-10 px-4">
        <img
          src={groomImage}
          alt="Junyong"
          onClick={isTouchDevice ? handleImageChangeG : null}
          onMouseEnter={
            !isTouchDevice ? () => setGroomImage("/images/jun-child.jpg") : null
          }
          onMouseLeave={
            !isTouchDevice ? () => setGroomImage("/images/groom.jpg") : null
          }
          className="rounded-full w-4/12 shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105"
        />
        <div className="w-52 flex justify-center">
          <HeartIcon />
        </div>
        <div />
        <img
          src={brideImage}
          alt="Jaewon"
          onClick={isTouchDevice ? handleImageChangeB : null}
          onMouseEnter={
            !isTouchDevice
              ? () => setBrideImage("/images/jaewon-child3.jpg")
              : null
          }
          onMouseLeave={
            !isTouchDevice ? () => setBrideImage("/images/bride.jpg") : null
          }
          className="rounded-full w-4/12 shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="flex lg:justify-around justify-between mt-3 lg:mt-10 mg-5 lg:w-full w-9/12">
        <div className="text-center">
          <div className="text-lg lg:text-2xl font-light text-5">
            {t("groom")}
          </div>
          <div className="text-lg lg:text-2xl	 font-normal	text-3">
            {t("JunyongKim")}
          </div>
        </div>
        <div className="text-center">
          <div className="text-lg lg:text-2xl font-light	text-5">
            {t("bride")}
          </div>
          <div className="text-lg lg:text-2xl	 font-normal	text-3">
            {t("JaewonHan")}
          </div>
        </div>
      </div>
    </div>
  );
}
