import React from "react";
import CircleNavigation from "./SpeedDial";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
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
        <div className="text-2xl">
          <FontAwesomeIcon icon={faCircle} />
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
      <section className="sm:hidden">
        <CircleNavigation />
      </section>
    </aside>
  );
};

export default Contact;
