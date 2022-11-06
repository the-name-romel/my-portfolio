import React from "react";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [shadow, setShadow] = useState(false);
  const addShadow = () => {
    if (window.scrollY >= 80) {
      setShadow(true);
    } else {
      setShadow(false);
    }
  };
  window.addEventListener("scroll", addShadow);

  return (
    <div
      className={
        shadow
          ? "fixed bg-bgColor w-full h-20 shadow-lg z-50"
          : "fixed bg-bgColor w-full h-20 z-50 "
      }
    >
      <div className="flex max-w-[1200px] w-full h-full mx-auto px-[15px] md:px-[30px] lg:px-10 justify-between items-center bg-bgColor">
        <h1 className="text-[32px] text-textColor">r.acopra</h1>

        <div className="md:hidden">
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
    </div>
  );
};

export default Navbar;
