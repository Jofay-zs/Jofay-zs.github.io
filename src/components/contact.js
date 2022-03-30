import React from "react";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
  return (
    <aside className="w-20 h-auto max-h-screen z-50 fixed top-0">
      <section className="hidden h-screen px-4 sm:flex flex-col justify-center items-center w-20">
        <div>
          <ul className="text-3xl flex flex-col w-full justify-center items-center">
            <li>
              <a
                href="https://github.com/Jofay-zs"
                target="_blank"
                rel="noreferrer"
                className="hover:text-gray-100/60"
                title="Jofay's Github"
              >
                <FontAwesomeIcon icon={faGithub} className="hover:rotate-12" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/jofay-zs-174369217"
                target="_blank"
                rel="noreferrer"
                className="hover:text-gray-100/60"
                title="Jofay's Linkedin"
              >
                <FontAwesomeIcon icon={faLinkedin} className="hover:rotate-12" />
              </a>
            </li>
            <div className="w-1 flex justify-center items-center my-5">
              <div className="w-1/2 h-20 bg-gradient-to-b from-red-500 to-fuchsia-500"></div>
            </div>
            <li>
              <a
                href="https://twitter.com/Jofay_zs"
                target="_blank"
                rel="noreferrer"
                className="hover:text-gray-100/60"
                title="Jofay's Twitter"
              >
                <FontAwesomeIcon icon={faTwitter} className="hover:rotate-12" />
              </a>
            </li>
            <li>
              <a
                href="mailto:jofayzs19@gmail.com"
                className="hover:text-gray-100/60"
                title="Jofay's mail"
              >
                <FontAwesomeIcon icon={faEnvelope} className="hover:rotate-12" />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </aside>
  );
};

export default Contact;
