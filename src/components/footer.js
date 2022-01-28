import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="w-full h-full sm:px-20 px-3 text-gray-300">
      <section className="border-t-2 flex flex-col sm:flex-row justify-center items-center sm:justify-between sm:px-10 pt-4 sm:pt-10">
        <div className="font-bold pb-2 sm:pb-0">
          © 2022 by @Jofay-zs. All rights reserved.
        </div>
        <div className="text-2xl">
          <span>
            <a
              href="https://github.com/Jofay-zs"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-100/50 hover:text-2xl mx-2"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </span>
          <span>
            <a
              href="https://www.linkedin.com/in/jofay-zs-174369217"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-100/50 hover:text-2xl mx-2"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </span>
          <span>
            <a
              href="https://twitter.com/Jofay_zs"
              target="_blank"
              rel="noreferrer"
              className="hover:text-gray-100/50 hover:text-2xl mx-2"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </span>
          <span>
            <a
              href="mailto:jofayzs19@gmail.com"
              className="hover:text-gray-100/50 hover:text-2xl mx-2"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </span>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
