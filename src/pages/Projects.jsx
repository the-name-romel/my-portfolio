import React from "react";
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
          title="Weather App"
          alt="image"
          image="https://www.americangeosciences.org/sites/default/files/styles/ci__650_x_430_/public/ERN_weather_map_NOAANWS.gif?itok=B8pzOJHO"
        />
        <Project
          title="Weather App"
          alt="image"
          image="https://www.americangeosciences.org/sites/default/files/styles/ci__650_x_430_/public/ERN_weather_map_NOAANWS.gif?itok=B8pzOJHO"
        />
        <Project
          title="Weather App"
          alt="image"
          image="https://www.americangeosciences.org/sites/default/files/styles/ci__650_x_430_/public/ERN_weather_map_NOAANWS.gif?itok=B8pzOJHO"
        />
        <Project
          title="Weather App"
          alt="image"
          image="https://www.americangeosciences.org/sites/default/files/styles/ci__650_x_430_/public/ERN_weather_map_NOAANWS.gif?itok=B8pzOJHO"
        />
      </div>
    </div>
  );
};

export default Projects;
