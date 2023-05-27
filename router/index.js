import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
// import CustomHook2 from "./CustomHook2";
// import CustomHook21 from "./CustomHook21";
// import CustomHool from "./CustomHool";
// import CustomHool1 from "./CustomHool1";
// import UseReducer from "./UseReducer";
// import UseEffect2 from "./UseEffect2";
// import Usecontext from "./Userecducer";
// import UseEffect1 from "./UseEffect1";
// import UseState2 from "./UseState2";
// import UseState from "./UseState";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>

    {/* <UseState /> */}
    {/* <UseState2 /> */}
    {/* <UseEffect1 /> */}
    {/* <Usecontext /> */}
    {/* <UseEffect2 /> */}
    {/* <UseReducer /> */}
    {/* <CustomHool />
    <CustomHool1 /> */}
    {/* <CustomHook2 />
    <CustomHook21 /> */}
  </React.StrictMode>
);
