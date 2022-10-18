import React from "react";

const Navbar = () => {
  return (
    <div className="fixed bg-bgColor w-full h-20 shadow-lg">
      <div className="flex max-w-[1200px] w-full h-full mx-auto px-10 justify-between items-center bg-bgColor">
        <h1 className="text-[32px]">
          r.<span className="text-primary">acopra</span>
        </h1>

        <ul className="flex space-x-10 uppercase text-base">
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
