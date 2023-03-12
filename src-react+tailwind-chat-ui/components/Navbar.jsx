import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center rounded-tl-lg justify-between bg-slate-400 h-14 overflow-hidden p-2 gap-44">
      <span className="font-bold uppercase">chat</span>
      <div className="gap-[5px] flex items-center">
        <img src="asdfa" alt="" />
        <span>Suresh</span>
        <button className="z-10 bg-white p-1">Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
