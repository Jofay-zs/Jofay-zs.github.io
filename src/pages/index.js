import React from "react";
import "../styles/global.css";
import { General } from "../layouts/General";
import { Home } from "../components/indexComponents/Home";
import { About } from "../components/indexComponents/About";

const Index = () => {
  return (
    <General>
      <main className="h-auto min-h-screen max-w-full flex flex-col w-full">
        <Home />
        <About />
      </main>
    </General>
  );
};

export default Index;
