import React from "react";
import General from "../../layouts/general";
import "../../styles/global.css";
import { graphql } from "gatsby";
import Post from "../../components/blogComponents/post";

const blog = ({ data }) => {
  return (
    <General pageTitle={"Jofay's blog"}>
      <main className="h-full w-full flex flex-col justify-start items-start pt-20 lg:grid lg:grid-cols-2 gap-y-5">
        {data.allMdx.nodes.map((p) => {
          return (
            <Post
              postLink={p.slug}
              postTitle={p.frontmatter.title}
              postDescription={p.frontmatter.description}
              postDate={p.frontmatter.datePublished}
              key={p.id}
            />
          );
        })}
      </main>
    </General>
  );
};
export const getPosts = graphql`
  query getPosts {
    allMdx(sort: { fields: frontmatter___datePublished, order: DESC }) {
      nodes {
        frontmatter {
          datePublished(formatString: "YYYY/MMMM/D")
          description
          title
        }
        id
        slug
      }
    }
  }
`;

export default blog;
