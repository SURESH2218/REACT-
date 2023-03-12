import React from "react";
import img from "./images/img.png";
import attachment from "./images/attachment.png";

const Input = () => {
  return (
    <div className="h-14 bg-white rounded-br-lg flex items-center w-[100%] justify-between px-2">
      <input
        type="text"
        placeholder="type something..."
        className="outline-none border-none placeholder:text-gray-800"
      />
      <div className="flex gap-3 items-center">
        <img className="w-7 object-contain" src={attachment} alt="" />
        <input type="file" name="file" style={{ display: "none" }} />
        <label htmlFor="file">
          <img className="w-5 object-contain" src={img} alt="" />
        </label>

        <button className="text-white bg-green-400 p-1 px-2 rounded cursor-pointer">
          Send
        </button>
      </div>
    </div>
  );
};

export default Input;
