import React from "react";

const Home = () => {
  return (
    <section
      className="flex items-center justify-center h-screen w-full"
      id="home"
    >
      <div className="z-30 flex flex-col w-full h-full justify-center items-start sm:px-20">
        <div className="flex text-7xl my-2 font-extrabold mb-6">Jofay-zs</div>
        <div className="h-1">
          <div className="w-96 h-1/2 flex bg-gradient-to-r from-red-500 to-fuchsia-500"></div>
        </div>
        <div className="text-2xl font-light">
          Web developer and learning enthusiast
        </div>
      </div>
    </section>
  );
};

export default Home;
