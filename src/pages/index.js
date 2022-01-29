import React from "react";
import "../styles/global.css";
import General from "../layouts/general";
import Home from "../components/index_components/home";
import Study from "../components/index_components/study";
import About from "../components/index_components/about";
import Projects from "../components/index_components/projects";

const Index = () => {
  return (
    <General pageTitle="Jofay-zs | Home">
      <Home />
      <About />
      <Study />
      <Projects />
    </General>
  );
};

export default Index;
