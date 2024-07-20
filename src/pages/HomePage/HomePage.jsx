import React from "react";
import HeroSection from "../../components/HomePage/HeroSection";
import CreateBingo from "../../components/CreateBingo/CreateBingo";
import CardDesigns from "../../components/CardsDesigns/CardDesigns";
import Faq from "../../components/Faq/Faq";
import EditBingoCard from "../../components/EditBingoCard/EditBingoCard";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <CardDesigns />
      <CreateBingo />
      <EditBingoCard />
      <Faq />
    </div>
  );
};

export default HomePage;
