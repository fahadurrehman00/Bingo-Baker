import React from "react";
import CardHeader from "./CardHeader/CardHeader";
import CardDesign from "./Card/CardDesign";

const cardData = [
  {
    title: "Card Design 1",
    imgSrc: "/images/bingo.png",
  },
  {
    title: "Card Design 2",
    imgSrc: "/images/bingo2.png",
  },
  {
    title: "Card Design 3",
    imgSrc: "/images/bingo3.png",
  },
];

const CardDesigns = () => {
  return (
    <div className="border-2 border-black rounded-3xl bg-purple p-4 container">
      <CardHeader />
      <div className="sm:p-24 md:p-4 p-4 flex items-center justify-center flex-wrap gap-6">
        {cardData.map((card, index) => (
          <CardDesign key={index} card={card} />
        ))}
      </div>
    </div>
  );
};

export default CardDesigns;
