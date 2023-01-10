import React from "react";
import { css, html, js, node, react, tailwind } from "../assets/img";

const About = () => {
  return (
    <div className="w-full bg-bgColor mb-12" name="about">
      <div className="flex flex-col max-w-[1200px] md:h-screen mx-auto">
        <div className="text-center px-5 py-[30px] space-y-[20px]">
          <div className="mx-auto">
            <h1 className="text-primary text-[32px]">ABOUT</h1>
            <p>who am I</p>
          </div>
          <p>
            Hello! I am Romel Acopra, a 3rd year Bachelor of Science in
            Information Technology student at Sorsogon State University - Bulan
            Campus. I love to explore to learn different knowledge and learning.
            I do also love coding and chess!
          </p>
        </div>
        <div className="w-ful flex flex-col justify-center items-center">
          <div className="text-center space-y-[20px]">
            <h1 className="text-primary text-[32px]">SKILLS</h1>
            <p>These are the technologies I’m currently using and learning: </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 justify-center items-center w-full gap-[50px] py-[20px] max-w-[1000px]">
            <div className="flex justify-center items-center">
              <img
                src={html}
                alt="HTML logo"
                title="HTML"
                className="w-[100px] hover:scale-105 duration-300 ease-in-out"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src={css}
                alt="CSS logo"
                title="CSS"
                className="w-[100px] hover:scale-105 duration-300 ease-in-out"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src={js}
                alt="JavaScript logo"
                title="JavaScript"
                className="w-[100px] hover:scale-105 duration-300 ease-in-out"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src={tailwind}
                alt="Tailwind CSS logo"
                title="Tailwind CSS"
                className="w-[100px] hover:scale-105 duration-300 ease-in-out"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src={react}
                alt="React JS logo"
                title="React JS"
                className="w-[100px] hover:scale-105 duration-300 ease-in-out"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src={node}
                alt="NodeJS logo"
                title="NodeJS"
                className="w-[100px] hover:scale-105 duration-300 ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
