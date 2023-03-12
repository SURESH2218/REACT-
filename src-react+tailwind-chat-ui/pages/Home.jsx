import React from "react";
import Chat from "../components/Chat";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="bg-slate-500 h-[100vh] flex items-center justify-center flex-col">
      <div className="w-[65%] h-[80%] border-2 rounded-lg flex">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default Home;
