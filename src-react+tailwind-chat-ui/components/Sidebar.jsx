import React from "react";
import Navbar from "./Navbar";
import Search from "./Serach";

const Sidebar = () => {
  return (
    <div className=" rounded-tl-lg">
      <Navbar />
      <Search />
    </div>
  );
};

export default Sidebar;
