import React from "react";
import { useState } from "react";
import { FaBars, FaTimes, FaFacebook, FaGithub } from "react-icons/fa";

const Navbar = () => {
  const [shadow, setShadow] = useState(false);
  const addShadow = () => {
    if (window.scrollY >= 80) {
      setShadow(true);
    } else setShadow(false);
  };
  window.addEventListener("scroll", addShadow);

  const [toggle, setToggle] = useState(false);
  const menuClick = () => {
    setToggle((prev) => !prev);
  };

  return (
    <div
      className={
        shadow
          ? "fixed bg-bgColor w-full h-20 shadow-lg z-50"
          : "fixed bg-bgColor w-full h-20 z-50"
      }
    >
      <div className="flex max-w-[1200px] w-full h-full mx-auto px-[15px] md:px-[30px] lg:px-10 justify-between items-center bg-bgColor">
        <h1 className="text-[32px] text-textColor">r.acopra</h1>

        <div className="md:hidden" onClick={menuClick}>
          <FaBars size={24} />
        </div>

        <ul className="hidden md:flex space-x-10 uppercase text-base">
          <li>home</li>
          <li>about</li>
          <li>resume</li>
          <li>projects</li>
          <li>contact</li>
        </ul>
      </div>

      <div
        className={
          toggle
            ? "fixed top-0 left-0 w-full h-screen bg-black/70 z-50 md:hidden"
            : "hidden"
        }
      >
        <div className="fixed top-0 left-0 h-screen w-[75%] bg-bgColor px-4 flex flex-col justify-between">
          <div className="flex w-full h-[80px] justify-between items-center">
            <h1 className="text-[32px] text-textColor">r.acopra</h1>

            <div
              className="w-9 h-9 rounded-full shadow-lg flex justify-center items-center group hover:scale-105"
              onClick={menuClick}
            >
              <FaTimes size={22} className="group-hover:scale-105" />
            </div>
          </div>

          <ul className="flex flex-col space-y-10 uppercase text-[18px] justify-center items-center">
            <li>home</li>
            <li>about</li>
            <li>resume</li>
            <li>projects</li>
            <li>contact</li>
          </ul>

          <div className="h-[150px] flex flex-col justify-center items-start gap-1">
            <p className="text-[18px] text-primary">LET'S CONNECT</p>
            <div className="flex gap-10">
              <a
                href="https://facebook.com"
                className="bg-bgColor rounded-full shadow-xl flex justify-center items-center w-[43px] h-[43px] cursor-pointer hover:scale-105 ease-in-out duration-300 group"
              >
                <FaFacebook className="text-primary opacity-80 group-hover:opacity-100 text-[22px]" />
              </a>
              <a
                href="https://github.com/the-name-romel"
                className="bg-bgColor rounded-full shadow-xl flex justify-center items-center w-[43px] h-[43px] cursor-pointer hover:scale-105 ease-in-out duration-300 group"
              >
                <FaGithub className="text-primary opacity-80 group-hover:opacity-100 text-[22px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
