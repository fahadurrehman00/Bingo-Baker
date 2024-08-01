import React, { useState } from "react";
import { Transition } from "@headlessui/react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative flex justify-between items-center md:py-16 container">
      <div>
        <img src="/images/bingoLogo.svg" alt="Bingo Logo" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center justify-between gap-10">
        <ul className="flex items-center gap-10">
          <li>
            <a href="#">Bingo Card Generator</a>
          </li>
          <li>
            <a href="#">Bingo cards</a>
          </li>
          <li>
            <a href="#">Help</a>
          </li>
        </ul>
        <div className="flex items-center gap-10 text-xl font-bold">
          <button className="text-xl hover:mb-2 transition-all duration-500">
            Login
          </button>
          <button className="px-10 py-4 bg-[#fd5a47] shadow-custom hover:shadow-hover-custom transition-all duration-500 rounded-lg text-white">
            Sign Up
          </button>
        </div>
      </div>

      {/* Burger Icon */}
      <button
        className="lg:hidden flex flex-col items-center justify-center p-2 text-black"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div
          className={`w-6 h-0.5 bg-black mb-1 transition-transform ${
            isMenuOpen ? "transform rotate-45" : ""
          }`}
        ></div>
        <div
          className={`w-6 h-0.5 bg-black mb-1 transition-transform ${
            isMenuOpen ? "opacity-0" : ""
          }`}
        ></div>
        <div
          className={`w-6 h-0.5 bg-black transition-transform ${
            isMenuOpen ? "transform -rotate-45" : ""
          }`}
        ></div>
      </button>

      {/* Mobile Menu */}
      <Transition
        show={isMenuOpen}
        enter="transition ease-out duration-300"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition ease-in duration-200"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg lg:hidden z-50">
          <div className="flex justify-between items-center p-4">
            <img
              src="/images/bingoLogo.svg"
              alt="Bingo Logo"
              className="h-12"
            />
            <button
              className="text-black text-4xl"
              onClick={() => setIsMenuOpen(false)}
            >
              &times;
            </button>
          </div>
          <ul className="flex flex-col items-center">
            <li className="py-4">
              <a href="#">Bingo Card Generator</a>
            </li>
            <li className="py-4">
              <a href="#">Bingo cards</a>
            </li>
            <li className="py-4">
              <a href="#">Help</a>
            </li>
          </ul>
          <div className="flex flex-col items-center gap-4 py-4">
            <button className="text-xl hover:mb-2 transition-all">Login</button>
            <button className="px-10 py-4 bg-[#fd5a47] shadow-custom rounded-lg text-white">
              Sign Up
            </button>
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default Navbar;
