import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import "../../styles/global.css";
import General from "../../layouts/general";

const BlogPost = ({ data }) => {
  return (
    <General pageTitle={data.mdx.frontmatter.title}>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </General>
  );
};

export const getPost = graphql`
  query getPost($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        datePublished(formatString: "YYYY/MMMM/D")
        description
      }
      body
    }
  }
`;

export default BlogPost;
