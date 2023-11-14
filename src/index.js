import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navigation from "./components/Navigation";
import Showcase from "./components/Showcase";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div className="w-11/12	m-auto	">
    <Navigation />
    <hr />
    <Showcase image="showcase-develop.jpeg" />
  </div>
);
