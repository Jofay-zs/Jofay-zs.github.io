import React from "react";

const About = () => {
  return (
    <section className="flex h-screen min-h-screen w-full px-2 sm:px-10" id="about">
      <div className="absolute">
        <div className="absolute top-10 left-0 font-extrabold text-6xl sm:text-9xl opacity-5">
          About
        </div>
      </div>
      <div className="w-full h-full flex flex-col md:grid md:grid-cols-4 items-center justify-center">
        <section className="md:col-span-1 w-full h-auto flex justify-center items-center mb-5">
          <ul className="text-2xl text-center grid grid-cols-2 sm:flex sm:flex-row md:flex-col justify-around w-full">
            <li className="my-2">Profile</li>
            <li className="my-2">Skills</li>
            <li className="my-2">Hobbies</li>
            <li className="my-2">Studies</li>
          </ul>
        </section>
        <section className="md:col-span-3 w-full h-auto flex flex-col justify-center">
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

export default About;
