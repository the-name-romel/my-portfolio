import React from "react";

export const Project = ({ image, alt, title }) => {
  return (
    <div className="relative max-h-[342px] max-w-[387px] h-full w-full rounded-[10px] overflow-hidden duration-300">
      <img src={image} alt={alt} className="object-cover w-full h-full" />
      <div className="absolute flex flex-col top-0 left-0 h-full w-full bg-opacity-0 group hover:bg-opacity-70 bg-primary items-center justify-center duration-300 hover:backdrop-blur-[5px] ease-in-out">
        <h1 className="text-white opacity-0 group-hover:opacity-100 duration-500 ease">{title}</h1>
        <a href=""></a>
      </div>
    </div>
  );
};
