import React from "react";
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
import { Link } from "gatsby";

const Contact = ({ currentPage }) => {
  const navigationListSmall = () => {
    if (currentPage === "Jofay's blog") {
      return (
        <div className="flex w-full justify-around text-xl z-50">
          <div className="border-b-2 border-gray-100">
            <Link to="/">
              <FontAwesomeIcon icon={faHome} />
            </Link>
          </div>
          <div className="border-b-2 border-gray-100">
            <FontAwesomeIcon icon={faMoon} />
          </div>
        </div>
      );
    } else {
      return (
        <div className="flex w-full justify-around text-xl z-50">
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
            <Link to="/blog">
              <FontAwesomeIcon icon={faParagraph} />
            </Link>
          </div>
          <div className="border-b-2 border-gray-100">
            <FontAwesomeIcon icon={faMoon} />
          </div>
        </div>
      );
    }
  };
  return (
    <aside className="w-auto h-auto max-h-screen fixed top-0 z-50">
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
              <a
                href="https://github.com/Jofay-zs"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/jofay-zs-174369217"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/Jofay_zs"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li>
              <a href="mailto:jofayzs19@gmail.com">
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="sm:hidden fixed bottom-0 j py-4 w-full h-16 bg-gray-900/75">
        {navigationListSmall()}
      </section>
    </aside>
  );
};

export default Contact;
