import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center md:py-16 container">
      <div>
        <img src="/images/bingoLogo.svg" alt="" />
      </div>
      <div>
        <ul className="flex items-center justify-between gap-10">
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
      </div>
      <div className="flex items-center gap-10 text-xl font-bold">
        <button>Login</button>
        <button className="px-10 py-4 bg-[#fd5a47] shadow-custom rounded-lg text-white">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
