import React, { useState } from "react";
import {
  JsSVG,
  HtmlSVG,
  CssSVG,
  NodejsSVG,
  TailwindSVG,
  TypeScriptSVG,
  ReactSVG,
  GitSVG,
  GatsbySVG,
  GraphqlSVG,
} from "../../images/svg.js";

const About = () => {
  const [whatInformation, setWhatInformation] = useState(true);

  const skills = [
    { skillName: "JavaScript", skillImage: <JsSVG /> },
    { skillName: "HTML", skillImage: <HtmlSVG /> },
    { skillName: "CSS", skillImage: <CssSVG /> },
    { skillName: "Nodejs", skillImage: <NodejsSVG /> },
    { skillName: "TailwindCSS", skillImage: <TailwindSVG /> },
    { skillName: "Graphql", skillImage: <GraphqlSVG /> },
    { skillName: "TypeScript", skillImage: <TypeScriptSVG /> },
    { skillName: "React", skillImage: <ReactSVG /> },
    { skillName: "Git", skillImage: <GitSVG /> },
    { skillName: "Gatsby", skillImage: <GatsbySVG /> },
    { skillName: "Scrum ", skillImage: "🔁" },
    { skillName: "English", skillImage: "🔡" },
    { skillName: "Spanish", skillImage: "🔠" },
  ];

  return (
    <section className="flex h-screen min-h-screen w-full" id="about">
      <div className="absolute">
        <div className="absolute top-10 left-0 font-extrabold text-6xl sm:text-9xl opacity-5 capitalize">
          About
        </div>
      </div>
      <div className="w-full h-full flex flex-col md:grid md:grid-cols-4 items-center justify-center">
        <section className="md:col-span-1 w-full h-auto flex justify-center items-center mb-5">
          <ul className="text-2xl text-center grid grid-cols-2 sm:flex sm:flex-row md:flex-col justify-around w-full">
            <li
              className={`${
                whatInformation ? "bg-gradient-to-r text-transparent" : ""
              } my-2 hover:bg-gradient-to-r from-red-500 to-fuchsia-500 bg-clip-text hover:text-transparent`}
            >
              <button onClick={() => setWhatInformation(true)}>Profile</button>
            </li>
            <li
              className={`${
                whatInformation ? "" : "bg-gradient-to-r text-transparent"
              } my-2 hover:bg-gradient-to-r from-red-500 to-fuchsia-500 bg-clip-text hover:text-transparent`}
            >
              <button onClick={() => setWhatInformation(false)}>Skills</button>
            </li>
          </ul>
        </section>
        <section className="md:col-span-3 w-full h-auto flex flex-col justify-center">
          <header className="font-bold text-4xl mb-5 capitalize">
            {whatInformation ? "Profile" : "Skills"}
          </header>
          <div className="w-full h-1 bg-gradient-to-r from-red-500 to-fuchsia-500" />
          {whatInformation ? (
            <div className="mt-5 text-lg">
              👋 My name is Jofay, I'm from Colombia. I'm a web
              developer, with knowledge in both front-end and back-end.
              Passionate about code, tech and always learning 😎. I like to
              develop projects, face challenges and share my knowledge. 😀
            </div>
          ) : (
            <section className="grid grid-cols-2 gap-3 mt-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {skills.map((s) => {
                return (
                  <div
                    className="flex w-full h-full justify-center items-center"
                    key={s.skillName}
                  >
                    {s.skillImage}
                    <span className="font-bold">{s.skillName}</span>
                  </div>
                );
              })}
            </section>
          )}
        </section>
      </div>
    </section>
  );
};

export default About;
