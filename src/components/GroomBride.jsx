import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./../Animation.css";

export default function GroomBride() {
  const { t } = useTranslation();
  const [brideImage, setBrideImage] = useState("/images/bride.jpg");
  const [groomImage, setGroomImage] = useState("/images/groom.jpg");
  /*
  const changeBrideImage = () => {
    setBrideImage(
      brideImage === "/images/bride.jpg"
        ? "/images/jaewon-child3.jpg"
        : "/images/bride.jpg"
    );
  };
  const changeGroomImage = () => {
    setGroomImage(
      groomImage === "/images/groom.jpg" ? "" : "/images/groom.jpg"
    );
  };
*/

  const handleMouseEnterB = () => {
    setBrideImage("/images/jaewon-child3.jpg");
  };

  const handleMouseLeaveB = () => {
    setBrideImage("/images/bride.jpg");
  };

  const handleMouseEnterG = () => {
    setGroomImage("/images/jun-child.jpg");
  };

  const handleMouseLeaveG = () => {
    setGroomImage("/images/groom.jpg");
  };

  return (
    <div className="flex flex-col items-center justify-center md:p-4 p-2">
      <div className="text-center mt-16 text-lg p-4">
        <h5>{t("home-message1")}</h5>
        <h5>{t("home-message2")}</h5>
        <h5>{t("home-message3")}</h5>
        <h5>{t("home-message4")}</h5>
        <h5>{t("home-message5")}</h5>
      </div>
      <div className="flex justify-center gap-28 lg:gap-52 mt-16">
        <img
          src={groomImage}
          alt="Junyong"
          onMouseEnter={handleMouseEnterG}
          onMouseLeave={handleMouseLeaveG}
          className="rounded-full lg:w-1/5 w-1/4 h-1/4 shadow-lg cursor-pointer transition-all hover:scale-105"
        />
        <img
          src={brideImage}
          alt="Jaewon"
          onMouseEnter={handleMouseEnterB}
          onMouseLeave={handleMouseLeaveB}
          className="rounded-full lg:w-1/5 w-1/4 h-1/4 shadow-lg cursor-pointer transition-all hover:scale-105 duration-300"
        />
      </div>
      <div className="flex lg:justify-around justify-between mt-10 lg:w-2/3 w-3/6">
        <div className="text-center">
          <div className="text-2xl font-semibold">{t("groom")}</div>
          <div className="text-lg">{t("JunyongKim")}</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-semibold">{t("bride")}</div>
          <div className="text-lg">{t("JaewonHan")}</div>
        </div>
      </div>
    </div>
  );
}
