import React from "react";

const Projects = () => {
  return (
    <section className="flex h-screen min-h-screen w-full">
      <div className="absolute">
        <div className="absolute top-10 left-0 font-extrabold text-9xl opacity-5">
          Projects
        </div>
      </div>
      <div className="w-full h-full grid grid-cols-4">
        <section className="col-span-1 w-full h-full flex justify-center items-center">
          <ul className="text-2xl text-center">
            <li className="my-2">Profile</li>
            <li className="my-2">Skills</li>
            <li className="my-2">Hobbies</li>
            <li className="my-2">Studies</li>
          </ul>
        </section>
        <section className="col-span-3 w-full h-full flex flex-col justify-center">
          <header className="font-bold text-4xl mb-5">Profile</header>
          <div className="w-full h-1 bg-gradient-to-r from-red-500 to-fuchsia-500" />
          <div className="mt-3 text-lg">
            👋 My name is Jofay Zhan Segura, I'm from Colombia. I'm a web
            developer, with knowledge in both front-end and back-end. Passionate
            about code, tech and always learning 😎. I like to develop projects,
            face challenges and share my knowledge. 😀
          </div>
        </section>
      </div>
    </section>
  );
};

export default Projects;
