import React from "react";
import { Project } from "../components/Project";

const Projects = () => {
  return (
    <div className="w-full h-screen grid grid-cols-1 md:grid-cols-2">
      <Project
        title="Weather App"
        alt="image"
        image="https://www.americangeosciences.org/sites/default/files/styles/ci__650_x_430_/public/ERN_weather_map_NOAANWS.gif?itok=B8pzOJHO"
      />
    </div>
  );
};

export default Projects;
