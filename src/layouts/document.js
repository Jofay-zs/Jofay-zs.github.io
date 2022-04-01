import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { Helmet } from "react-helmet";

const getSiteMetaData = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const Document = ({ children, pageTitle, title, subtitle, image }) => {
  const data = useStaticQuery(getSiteMetaData);

  return (
    <div className="h-auto min-h-screen w-auto min-w-screen max-w-screen bg-main text-gray-100 pb-12">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{pageTitle ? pageTitle : data.site.getSiteMetaData.title}</title>
        <meta
          name="description"
          content="Jofay-zs's blog, portfolio and website. Jofay is a web developer and learning enthusiast"
        />
        <meta
          name="keywords"
          content="Portfolio, Blog, Jofay-zs, Jofay Zhan Segura, Web developer, Frontend developer, Fullstack developer, Developer"
        />
        <meta name="author" content="Jofay-zs" />
      </Helmet>
      <Contact />
      <Navbar />
      <main>
        <header className="py-5">
          <h3 className="text-center text-4xl font-bold">{title}</h3>
          <div className="w-full h-1 flex justify-center items-center my-2">
            <div className="w-52 sm:w-80 h-1/6 bg-gradient-to-r from-red-500 to bg-fuchsia-500"></div>
          </div>
          <div className="w-full flex justify-center items-center">
            {subtitle}
          </div>
        </header>
        <section className="md:px-20 xl:px-60 mb-5">{image}</section>
        <article className="px-4 sm:px-24 md:px-32 lg:px-52 xl:px-80 text-lg">
          {children}
        </article>
      </main>
      <Footer />
    </div>
  );
};

export const renderers = {
  h1: ({ children }) => <h1 className="text-4xl mt-14">{children}</h1>,
  h2: ({ children }) => <h2 className="text-3xl mt-12">{children}</h2>,
  h3: ({ children }) => <h3 className="text-2xl mt-10">{children}</h3>,
  h4: ({ children }) => <h4 className="text-xl mt-8">{children}</h4>,
  p: ({ children }) => <p className="my-5">{children}</p>,
  a: ({ children, href }) => (
    <a
      className="underline hover:text-blue-500"
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  ),
  table: ({ children }) => (
    <div className="overflow-x-auto my-5">
      <table className="text-base">{children}</table>
    </div>
  ),
  table_head: ({ children }) => <thead className="">{children}</thead>,
  table_header_cell: ({ children }) => (
    <th className="px-2 text-center text-lg font-bold bg-main border">
      {children}
    </th>
  ),
  table_body: ({ children }) => <tbody className="">{children}</tbody>,
  table_row: ({ children }) => (
    <tr className="odd:bg-gray-800 even:bg-gray-700">{children}</tr>
  ),
  table_cell: ({ children }) => <td className="px-2 border">{children}</td>,
  code: ({ children }) => (
    <code className="bg-code overflow-x-auto px-3 py-1 rounded-lg text-sm my-5">
      {children}
    </code>
  ),
  code_block: ({ children }) => (
    <pre className="bg-code overflow-x-auto p-3 rounded-lg text-sm my-5">
      {children}
    </pre>
  ),
  ul: ({ children }) => <ul className="list-disc ml-5 my-5">{children}</ul>,
  ol: ({ children }) => <ol className="list-decimal ml-5 my-5">{children}</ol>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 pl-4 bg-gray-800 rounded-r-full font-mono my-5">
      {children}
    </blockquote>
  ),
};

export default Document;
