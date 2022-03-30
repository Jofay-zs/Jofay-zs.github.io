import React from "react";
import { faHome, faBriefcase, faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "gatsby";

const Navbar = () => {
  return (
    <nav className="h-auto max-h-screen z-50 fixed bottom-0 sm:top-0 right-0 w-full sm:w-20">
      <section className="sm:h-screen px-4 flex flex-col justify-center items-center w-full sm:w-20">
        <div>
          <ul className="text-lg flex sm:flex-col w-full justify-center items-center">
            <li className="bg-gray-800 hover:bg-gradient-to-b from-red-500 to to-fuchsia-500 w-10 h-10 flex justify-center items-center rounded-full my-2 mx-2">
              <Link to="/">
                <FontAwesomeIcon icon={faHome} title="Home" className="hover:rotate-12"/>
              </Link>
            </li>
            <li className="bg-gray-800 hover:bg-gradient-to-b from-red-500 to to-fuchsia-500 w-10 h-10 flex justify-center items-center rounded-full my-2 mx-2">
              <Link to="/portfolio/" title="Portfolio">
                <FontAwesomeIcon icon={faBriefcase} className="hover:rotate-12"/>
              </Link>
            </li>
            <li className="bg-gray-800 hover:bg-gradient-to-b active:bg-gradient-to-b from-red-500 to to-fuchsia-500 w-10 h-10 flex justify-center items-center rounded-full my-2 mx-2">
              <Link to="/blog/">
                <FontAwesomeIcon icon={faBook} title="Blog" className="hover:rotate-12"/>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
