import React from "react";
import cam from "../components/images/cam-recorder.png";
import Add from "../components/images/add.png";
import More from "../components/images/more.png";
import Messages from "./Messages";
import Input from "./Input";

const Chat = () => {
  return (
    <div className="flex-[2] bg-cyan-100 rounded-lg">
      <div className="flex flex-row w-[100%] justify-between h-14 bg-cyan-200 rounded-tr-lg items-center px-1 text-black">
        <span>Suresh</span>
        <div className="flex gap-5 items-center">
          <img className="w-9" src={cam} alt="" />
          <img className="w-8" src={Add} alt="" />
          <img className="w-7" src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
