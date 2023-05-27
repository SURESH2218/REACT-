import React from "react";
import { Link, Outlet } from "react-router-dom";

const Projects = () => {
  return (
    <div>
      Projects
      <Link to="/projects/featured">Featured Projects</Link>
      <Link to="/projects/new">New Projects</Link>
      <Outlet />
    </div>
  );
};

export default Projects;
