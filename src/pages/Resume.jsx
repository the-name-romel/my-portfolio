import React from "react";
import { FaBook, FaCalendarDay } from "react-icons/fa";

function Resume() {
  return (
    <div className="w-full bg-bgColor p-[15px] mb-12" name="resume">
      <div className="max-w-[1200px] mx-auto w-full h-full gap-2">
        <h1 className="text-primary text-[32px] text-center">RESUME</h1>
        <div className="flex items-center gap-1">
          <FaBook className="text-primary text-[24px]" />{" "}
          <span className="text-[32px]">Education</span>
        </div>
        <div className="grid grid-cols-2 h-full">
          <div className="border-r-[1px] border-black rounded-[35px] w-full flex flex-col text-center items-center justify-center h-[250px] px-2">
            <span className="font-bold">
              Bachelor of Science in Information Technology
            </span>
            <p>Sorsogon State University Bulan Campus</p>
            <div className="flex items-center gap-1">
              <FaCalendarDay className="text-primary" />{" "}
              <strong>2020 - Present</strong>
            </div>
          </div>
          <div className="border-l-[1px] border-black rounded-[35px] w-full flex items-center justify-center h-[250px]"></div>
          <div className="border-r-[1px] border-black rounded-[35px] w-full flex items-center justify-center h-[250px]"></div>
          <div className="border-l-[1px] border-black rounded-[35px] w-full flex flex-col text-center items-center justify-center h-[250px] px-2">
            <span className="font-bold">
              Secondary <br /> EIM and GAS
            </span>
            <p>Magallanes National Vocational High School</p>
            <div className="flex items-center gap-1">
              <FaCalendarDay className="text-primary" />{" "}
              <strong>2014 - 2020</strong>
            </div>
          </div>
          <div className="border-r-[1px] border-black rounded-[35px] w-full flex flex-col text-center items-center justify-center h-[250px] px-2">
            <span className="font-bold">Primary</span>
            <p>
              Magallanes North Central School <br /> Magallanes, Sorsogon
            </p>
            <div className="flex items-center gap-1">
              <FaCalendarDay className="text-primary" />{" "}
              <strong>2009 - 2014</strong>
            </div>
          </div>
          <div className="border-l-[1px] border-black rounded-[35px] w-full flex items-center justify-center h-[250px]"></div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
