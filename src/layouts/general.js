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

const General = ({ children, pageTitle }) => {
  const data = useStaticQuery(getSiteMetaData);

  return (
    <div
      className="h-auto min-h-screen w-auto min-w-screen max-w-screen bg-main text-gray-100 pb-12"
      id="background"
    >
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
      <div id="stars1"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <Contact />
      <Navbar />
      <main className="px-2 sm:px-20 text-lg pt-8">{children}</main>
      <Footer />
    </div>
  );
};

export default General;
