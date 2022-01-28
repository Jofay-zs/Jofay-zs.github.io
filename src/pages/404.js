import { Link } from "gatsby";
import * as React from "react";
import { Error404 } from "../images/svg";
import { Helmet } from "react-helmet";
import "../styles/global.css";

const NotFoundPage = () => {
  return (
    <main className="bg-main w-screen h-screen flex flex-col justify-center items-center text-gray-100">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Jofay-zs | Page not found</title>
      </Helmet>
      <section>
        <Error404 />
      </section>
      <section className="flex items-center justify-center flex-col">
        <h4 className="font-bold text-xl mb-7">
          ...Sorry 😔 we couldn’t find what you were looking for.
        </h4>
        <Link
          to="/"
          className="px-4 py-2 underline rounded-lg text-xl font-bold animate-bounce hover:bg-gradient-to-r hover:from-red-500 hover:to-fuchsia-500 hover:bg-clip-text hover:text-transparent"
        >
          Go to home
        </Link>
      </section>
    </main>
  );
};

export default NotFoundPage;
