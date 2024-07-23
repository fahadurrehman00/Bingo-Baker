import React from "react";

const HeroSection = () => {
  return (
    <div className="container"> 
      <div className="flex flex-row-reverse">
        <img src="/images/rating.png" alt="" />
      </div>
      <div className="text-7xl xl:text-8xl 2xl:text-9xl purple">
        <h2 className="">Find and customize</h2>
        <h2 className="xl:pl-40">millions of ready-made</h2>
      </div>
      <div className="flex">
        <div>
          <img src="/images/bingoCards.png" alt="" />
        </div>
        <div>
          <img src="/images/bingocard.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
