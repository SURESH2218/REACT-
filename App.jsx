import React from "react";
import Home from "./router/Home";
import About from "./router/About";
import { Contact } from "./router/Contact";
import Navbar from "./Navbar";
import Success from "./router/Success";
import NotFound from "./router/NotFound";
import Projects from "./router/Projects";
import Featured from "./router/Featured";
import New from "./router/New";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/success" element={<Success />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/projects" element={<Projects />}>
          <Route index element={<Featured />} />
          <Route path="featured" element={<Featured />} />
          <Route path="new" element={<New />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
