import React from "react";

import { Link } from "gatsby";

const Navbar = ({ currentPage }) => {
  const navigationList = () => {
    if (currentPage === "Jofay") {
      return (
        <ul className="w-full flex justify-around">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="w-full flex justify-end">
          <li>
            <Link to="/">Back to home</Link>
          </li>
        </ul>
      );
    }
  };
  return (
    <nav className="w-auto h-auto max-h-screen fixed top-0 z-50">
      <section className="flex justify-center items-center sm:grid w-screen h-auto py-5 sm:grid-cols-3 sm:px-3 md:px-18 lg:px-28 lg:grid-cols-2 bg-main/75">
        <div className="flex w-full h-auto text-2xl justify-center items-center">
          <div className="flex">
            import{" "}
            <h1 className="bg-gradient-to-r from-red-500 to-fuchsia-500 bg-clip-text text-transparent font-bold ml-2">
              {"{ Jofay-zs }"}
            </h1>
          </div>
        </div>
        <div className="hidden font-bold sm:flex col-span-2 justify-center items-center lg:col-span-1 text-lg">
          {navigationList()}
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
