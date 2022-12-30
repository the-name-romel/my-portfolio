import React from "react";
import { portfolio } from "../assets/img";
import { Project } from "../components/Project";

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full flex flex-col max-w-[1200px] mx-auto my-[50px] space-y-2 px-[15px] md:px-[30px]"
    >
      <div className="mx-auto text-center">
        <h1 className="text-primary text-[32px]">PROJECTS</h1>
        <p>what I've built</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center w-full py-[50px] gap-[32px] flex-1">
        <Project
          title="Note Taking App"
          alt="image"
          image="https://images.ctfassets.net/lzny33ho1g45/3x94Kjg8z9fN0zryKetKbf/0c4bb21e7b2e44e1ed7b2ef11a44bb10/best-note-taking-app-for-ipad-iphone-00-hero.png"
          link="https://github.com/the-name-romel/nodejs-note-app"
        />
        <Project
          title="Weather App"
          alt="image"
          image="https://is2-ssl.mzstatic.com/image/thumb/Purple122/v4/b2/d0/ef/b2d0efa6-060a-76a5-d169-83ca6011c193/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1200x630wa.png"
          link="https://github.com/the-name-romel/weather-app"
        />
        <Project
          title="Chat App"
          alt="image"
          image="http://www.yabb.com/blog/wp-content/uploads/2019/06/Chat-Apps-2019.jpg"
          link="https://github.com/the-name-romel/chat-app"
        />
        <Project
          title="Portfolio"
          alt="image"
          image={portfolio}
          link="https://github.com/the-name-romel/my-portfolio"
        />
      </div>
    </div>
  );
};

export default Projects;
