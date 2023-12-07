import React from "react";
import Banner from "../components/Banner";
import CountDown from "../components/CountDown";
import OurStory from "../components/OurStory";

export default function Home() {
  return (
    <div className="mb-20">
      <Banner />
      <CountDown />
      <OurStory />
    </div>
  );
}
