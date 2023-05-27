import React from "react";
import { useNavigate } from "react-router-dom";
// import Success from "./Success";

const Home = () => {
  const navigate = useNavigate();

  const navigatetoSuccess = () => {
    navigate("/success");
  };
  return (
    <div>
      Home
      <div>
        <button onClick={navigatetoSuccess}>submit</button>
      </div>
    </div>
  );
};

export default Home;
