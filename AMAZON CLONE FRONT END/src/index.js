import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { StateProvider } from "./StateProvider";
import reducer, { initialstate } from "./reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StateProvider initialstate={initialstate} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
);
