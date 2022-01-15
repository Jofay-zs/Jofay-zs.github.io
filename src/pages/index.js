import React from "react";
import "../styles/global.css";
import General from "../layouts/general";
import Home from "../components/indexComponents/home";
import About from "../components/indexComponents/about";
import Study from "../components/indexComponents/study";

const Index = () => {
  return (
    <General>
      <main className="h-auto min-h-screen max-w-full flex flex-col w-full">
        <Home />
        <About />
        <Study />
      </main>
    </General>
  );
};

export default Index;
