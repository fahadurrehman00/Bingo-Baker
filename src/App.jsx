import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import BingoCardsPage from "./pages/BingoCards/BingoCardsPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/bingocards" element={<BingoCardsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
