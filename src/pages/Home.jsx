import React from "react";
import Banner from "../components/Banner";
import CountDown from "../components/CountDown";
import OurStory from "../components/OurStory";
import GroomBride from "../components/GroomBride";

export default function Home() {
  return (
    <div className="mb-20">
      <Banner />
      <GroomBride />
      <CountDown />
      <OurStory />
    </div>
  );
}
