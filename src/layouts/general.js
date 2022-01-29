import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Contact from "../components/contact";
import Footer from "../components/footer";
import { Helmet } from "react-helmet";

const getSiteMetaData = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;

const General = ({ children, pageTitle }) => {
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
      <main className="px-5 sm:px-20 lg:px-32">{children}</main>
      <Footer />
    </div>
  );
};

export default General;
