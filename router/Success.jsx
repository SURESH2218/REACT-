import React from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();
  const backtoHome = () => {
    navigate("/");
  };
  return (
    <div>
      Successly added
      <button onClick={backtoHome}>bacck to home</button>
    </div>
  );
};

export default Success;
