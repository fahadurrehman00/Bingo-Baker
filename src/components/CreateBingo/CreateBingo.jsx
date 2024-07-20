import React from "react";
import CreateBingoCard from "./CreateBingCard/CreateBingoCard";

const CreateBingo = () => {
  return (
    <div className="mt-28 container">
      <div className="relative pb-16">
        <h3 className="text-7xl text-[#552cb8] font-semibold w-2/3">
          Create your own bingo card from scratch
        </h3>
        <div className="flex gap-8 absolute right-0 bottom-0 justify-end">
          <img className="pt-16 w-fit h-fit" src="/icons/downarrow.png" alt="" />
          <p className="w-[33%] -rotate-12 text-[#fd5a47] text-3xl">
            Create your own card from scratch
          </p>
        </div>
      </div>
      <CreateBingoCard />
    </div>
  );
};

export default CreateBingo;
