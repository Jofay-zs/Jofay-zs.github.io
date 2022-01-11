import React, { useState } from "react";
import { faCode, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faParagraph } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const actions = [
  {
    icon: <FontAwesomeIcon className="text-red-500" icon={faHome} />,
    name: "home",
  },
  {
    icon: <FontAwesomeIcon className="text-red-500/75" icon={faUser} />,
    name: "about",
  },
  {
    icon: <FontAwesomeIcon className="text-fuchsia-500/75" icon={faCode} />,
    name: "projects",
  },
  {
    icon: <FontAwesomeIcon className="text-fuchsia-500" icon={faParagraph} />,
    name: "blog",
  },
];

const SpeedDial = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-12 h-12 flex flex-col justify-center items-center sm:hidden">
      {isOpen ? (
        <ul className="fixed bottom-16 right-6 flex flex-col justify-center items-center">
          {actions.map((a) => {
            return (
              <li className="font-bold text-2xl mb-2">
                <a href={`#${a.name}`}>{a.icon}</a>
              </li>
            );
          })}
        </ul>
      ) : (
        <></>
      )}
      <button
        className="fixed bottom-5 right-5 bg-gradient-to-r from-red-500 to-fuchsia-500 bg-clip-text text-transparent font-bold text-5xl flex justify-center items-center"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        +
      </button>
    </div>
  );
};

export default SpeedDial;
