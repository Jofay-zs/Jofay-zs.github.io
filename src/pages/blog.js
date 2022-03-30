import { graphql, useStaticQuery, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import React from "react";
import General from "../layouts/general";

const pageQuery = graphql`
  query BlogPageQuery {
    allGraphCmsPost {
      nodes {
        coverImage {
          gatsbyImageData
          url
        }
        date
        id
        slug
        title
        description
      }
    }
  }
`;

const Blog = () => {
  const {
    allGraphCmsPost: { nodes: posts },
  } = useStaticQuery(pageQuery);

  return (
    <General pageTitle="Jofay-zs | Blog">
      <header>
        <h2 className="font-mono font-bold text-center text-5xl mb-3">Blog</h2>
        <p className="text-center font-mono font-bold">
          I start writing because I think it is a skill that everyone should
          develop. With my blog I want to express my experiences, knowledge and
          help those who need it. ✍️
        </p>
      </header>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
        {posts.map(({ slug, ...post }) => {
          const image = getImage(post.coverImage);

          return (
            <article
              className="p-2 transition duration-500 ease-in-out hover:-translate-y-4 group"
              key={post.id}
            >
              <Link to={`/blog/${slug}`}>
                <p className="text-right text-xs bg-gray-800 w-fit p-1 rounded-t-lg font-mono">
                  {post.date}
                </p>
                <GatsbyImage
                  image={image}
                  alt={post.coverImage.url}
                  className="rounded-sm grayscale transition duration-700 ease-in-out group-hover:grayscale-0"
                />
                <div className="w-full bg-gradient-to-r from-red-500 to-fuchsia-500 h-1"></div>
                <h5 className="w-fit text-xl font-bold">{post.title}</h5>
                <p className="text-base text-gray-300">{post.description}</p>
              </Link>
            </article>
          );
        })}
      </section>
    </General>
  );
};

export default Blog;
