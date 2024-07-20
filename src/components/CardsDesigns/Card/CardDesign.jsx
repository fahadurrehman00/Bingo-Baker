import React from "react";

const CardDesign = ({ card }) => {
  return (
    <div className="border-2 border-black rounded-3xl bg-white p-2 w-full md:w-1/4">
      <div className="border-2 border-black bg-[#552CB8] rounded-2xl p-2 w-full">
        <h4 className="text-shadow-custom font-extrabold text-white text-center flex items-center justify-center font-barlow">
          {card.title}
        </h4>
      </div>
      <div className="p-2 w-full mt-3">
        <img className="w-full" src={card.imgSrc} alt={card.title} />
      </div>
    </div>
  );
};

export default CardDesign;
