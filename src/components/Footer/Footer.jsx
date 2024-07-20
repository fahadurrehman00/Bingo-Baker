import React from "react";
import { BsChat } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="bg-purple py-7">
        <div className="container mx-auto flex flex-col items-center justify-center md:flex-row md:justify-between mb-9">
          <img src="images/footerLogo.png" alt="" className="cursor-pointer" />
          <div className="flex gap-4 ml-auto">
            <a href="" className="text-white hover:underline">
              Bingo Card Generator
            </a>
            <a href="" className="text-white hover:underline">
              Bingo Cards
            </a>
            <a href="" className="text-white hover:underline">
              Help
            </a>
            <a href="" className="text-white hover:underline">
              Login
            </a>
            <a href="" className="text-white hover:underline">
              Sign Up
            </a>
          </div>
        </div>
        <div className="container mx-auto flex flex-col items-start md:flex-row md:justify-between">
          <div className="w-40 flex cursor-pointer hover:scale-110 transition-all">
            <BsChat className="text-white mt-1" />
            <span className="text-white pl-2"> Let’s chat</span>
          </div>
          <div className="flex gap-4 sm:ml-auto">
            <FaEnvelope className="text-white mt-1" />
            <a
              href="mailto:info@bingobaker.com"
              className="text-white hover:underline"
            >
              info@bingobaker.com
            </a>
          </div>
        </div>
      </div>
      <div className="bg-black">
        <div className="container mx-auto p-6 flex flex-col-reverse sm:items-start md:flex-row md:justify-between">
          <span className="text-white">
            © Copyright 2024 BingoBaker All Right Reserved
          </span>
          <div className="flex gap-4 sm:ml-auto sm:items-start items-center justify-center">
            <a href="" className="text-white p-1 rounded-full bg-purple  hover:scale-110 transition-all">
              <FaInstagram />
            </a>
            <a href="" className="text-white p-1 rounded-full bg-purple hover:scale-110 transition-all">
              <FaFacebook />
            </a>
            <a href="" className="text-white p-1 rounded-full bg-purple hover:scale-110 transition-all">
              <AiFillYoutube />
            </a>
            <a href="" className="text-white p-1 rounded-full bg-purple hover:scale-110 transition-all">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
