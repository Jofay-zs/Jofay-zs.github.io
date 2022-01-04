import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faEnvelope,
  faHome,
  faParagraph,
  faUser,
  faMoon,
  faBlind,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ currentPage }) => {
  const navigationList = () => {
    if (currentPage === "Jofay's blog") {
      return (
        <ul className="w-full flex justify-end">
          <li>
            <a href="#home">Back to home</a>
          </li>
        </ul>
      );
    } else {
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
            <a href="#blog">Blog</a>
          </li>
        </ul>
      );
    }
  };

  const navigationListSmall = () => {
    if (currentPage === "Jofay's blog") {
      return (
        <div className="flex w-full justify-around text-xl">
          <div className="border-b-2 border-gray-100">
            <a href="#home">
              <FontAwesomeIcon icon={faHome} />
            </a>
          </div>
          <div className="border-b-2 border-gray-100">
            <FontAwesomeIcon icon={faMoon} />
          </div>
        </div>
      );
    } else {
      return (
        <div className="flex w-full justify-around text-xl">
          <div className="border-b-2 border-gray-100">
            <a href="#home">
              <FontAwesomeIcon icon={faHome} />
            </a>
          </div>
          <div className="border-b-2 border-gray-100">
            <a href="#about">
              <FontAwesomeIcon icon={faUser} />
            </a>
          </div>
          <div className="border-b-2 border-gray-100">
            <a href="#projects">
              <FontAwesomeIcon icon={faCode} />
            </a>
          </div>
          <div className="border-b-2 border-gray-100">
            <a href="#blog">
              <FontAwesomeIcon icon={faParagraph} />
            </a>
          </div>
          <div className="border-b-2 border-gray-100">
            <FontAwesomeIcon icon={faMoon} />
          </div>
        </div>
      );
    }
  };
  return (
    <nav className="w-full h-full max-h-screen fixed top-0 z-50">
      <section className="flex justify-center items-center sm:grid w-full h-auto py-5 sm:grid-cols-3 sm:px-3 md:px-18 lg:px-28 lg:grid-cols-2">
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
      <section className="hidden h-screen px-4 sm:flex flex-col justify-center items-center w-20">
        <div className="text-2xl">
          <FontAwesomeIcon icon={faBlind} />
        </div>
        <div className="w-1 flex justify-center items-center my-5">
          <div className="w-1/2 h-20 bg-gradient-to-b from-red-500 to-fuchsia-500"></div>
        </div>
        <div>
          <ul className="text-3xl">
            <li>
              <Link to="https://github.com/Jofay-zs" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </Link>
            </li>
            <li>
              <Link
                to="https://www.linkedin.com/in/jofay-zs-174369217"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </Link>
            </li>
            <li>
              <Link to="https://twitter.com/Jofay_zs" target="_blank">
                <FontAwesomeIcon icon={faTwitter} />
              </Link>
            </li>
            <li>
              <a href="mailto:jofayzs19@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="sm:hidden fixed bottom-0 j py-4 w-full h-20">
        {navigationListSmall()}
      </section>
    </nav>
  );
};

export default Navbar;
