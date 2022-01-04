import React from "react";
import "../styles/global.css";
import General from "../layouts/general";
import Home from "../components/indexComponents/home";
import About from "../components/indexComponents/about";
import Projects from "../components/indexComponents/projects";

const index = () => {
  return (
    <General>
      <main className="h-auto min-h-screen max-w-full flex flex-col w-full">
        <Home />
        <About />
        {/* <Projects/> */}
      </main>
    </General>
  );
};

export default index;
