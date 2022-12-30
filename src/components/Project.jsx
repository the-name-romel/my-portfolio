import React from "react";

export const Project = ({ image, alt, title, link }) => {
  return (
    <div className="relative max-h-[342px] max-w-[387px] h-full w-full rounded-[10px] overflow-hidden duration-300">
      <img src={image} alt={alt} className="object-cover w-full h-full" />
      <div className="absolute flex flex-col top-0 left-0 h-full w-full bg-opacity-0 group hover:bg-opacity-70 bg-primary items-center justify-center duration-300 hover:backdrop-blur-[5px] ease-in-out gap-6">
        <h1 className="text-white text-[30px] opacity-0 group-hover:opacity-100 duration-500 ease">
          {title}
        </h1>
        <div className="opacity-0 group-hover:opacity-100 duration-500 ease">
          <a
            target="_blank"
            href={link}
            className="border bg-bgColor rounded-[8px] text-textColor text-[18px] px-[28px] py-[16px] mt-[30px] hover:bg-opacity-80"
          >
            Visit
          </a>
        </div>
      </div>
    </div>
  );
};
