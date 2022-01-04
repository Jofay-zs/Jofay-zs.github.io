import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Home = () => {
  return (
    <section
      className="flex w-full h-screen items-center justify-center"
      id="home"
    >
      <div className="absolute top-0 left-0 bg-cover z-10 h-full w-full">
        <StaticImage
          className="bg-cover h-full w-full"
          alt="A nice photo taken in Gablenz, Germany. By Martin Damboldt (Pexels)"
          src="https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        />
      </div>
      <div className="absolute top-0 left-0 z-20 h-full w-full bg-gradient-to-r from-main via-gray-900/75 to-transparent"></div>
      <div className="z-30 flex flex-col w-full h-full justify-center items-start sm:px-20">
        <div className="w-20 h-1 flex bg-gradient-to-r from-red-500 to-fuchsia-500"></div>
        <div>
          <p className="text-3xl mb-2">Hi!</p>
          <p className="flex text-4xl my-2">
            I'm <h1 className="font-bold ml-2">Jofay</h1>
          </p>
          <p className="text-2xl font-bold">{`Web developer & Study lover`}</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
