import React from "react";
import Navbar from "../components/navbar";
import { graphql, useStaticQuery } from "gatsby";

const General = ({ children, pageTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);
  return (
    <div className="w-auto h-auto min-h-screen min-w-screen max-w-screen bg-main text-gray-100">
      <title>{pageTitle ? pageTitle : data.site.siteMetadata.title}</title>
      <Navbar
        currentPage={pageTitle ? pageTitle : data.site.siteMetadata.title}
      />
      <div className="px-5 sm:px-12 md:px-22 lg:px-32">{children}</div>
    </div>
  );
};

export default General;
