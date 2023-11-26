import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navigation from "./components/Navigation";
import Showcase from "./components/Showcase";
import Contact from "./components/Contact";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="w-11/12	m-auto	">
    <Navigation />
    <hr />
    <Showcase id="welcome" image="showcase-develop.jpeg" />
    <Contact />
  </div>
);
