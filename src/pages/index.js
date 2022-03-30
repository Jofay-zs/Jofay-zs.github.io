import React from "react";
import "../styles/global.css";
import General from "../layouts/general";
import Home from "../components/index_components/home";
import About from "../components/index_components/about";
import "../styles/stars.css";

const Index = () => {
  return (
    <General pageTitle="Jofay-zs | Home" id="background">
      <div id="stars1"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <Home />
      <About />
    </General>
  );
};

export default Index;
