import React from "react";
import General from "../layouts/general";
import { graphql, useStaticQuery, Link } from "gatsby";
import { faCode, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const pageQuery = graphql`
  {
    allGraphCmsProject {
      nodes {
        id
        name
        slug
        image {
          url
          gatsbyImageData
        }
        demo
        tags
        sourceCode
      }
    }
  }
`;

const Portfolio = () => {
  const {
    allGraphCmsProject: { nodes: projects },
  } = useStaticQuery(pageQuery);

  return (
    <General pageTitle="Jofay-zs | Portfolio">
      <header>
        <h2 className="font-mono font-bold text-center text-5xl mb-3">
          Projects
        </h2>
        <p className="text-center font-mono font-bold">
          I like to continually create new projects and improve existing ones.
          For me one of the best ways to learn and master a skill is by
          developing projects, here are some of them
        </p>
      </header>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
        {projects.map(({ slug, ...project }) => {
          const image = getImage(project.image[0]);

          return (
            <article className="w-full h-60" key={project.id}>
              <div className="relative overflow-hidden bg-no-repeat bg-cover max-w-xs scale-95 transition duration-500 ease-in-out hover:scale-105">
                <GatsbyImage
                  image={image}
                  alt={project.image[0].url}
                  className="max-w-xs"
                />
                <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden opacity-0 transition duration-500 ease-in-out bg-main/80 hover:opacity-100 flex flex-col justify-end p-2">
                  <div className="absolute top-2 right-2 text-base flex">
                    <a
                      href={project.demo}
                      className="bg-gray-main from-red-500 to to-fuchsia-500 w-9 h-8 flex justify-center items-center rounded-full m-1 group hover:w-auto hover:px-2 hover:bg-gradient-to-r"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon icon={faEye} />
                      <span className="hidden group-hover:flex text-sm font-bold ml-1">
                        Visit demo
                      </span>
                    </a>
                    <a
                      href={project.sourceCode}
                      className="bg-gray-main from-red-500 to to-fuchsia-500 w-9 h-8 flex justify-center items-center rounded-full m-1 group hover:w-auto hover:px-2 hover:bg-gradient-to-r "
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FontAwesomeIcon icon={faCode} />
                      <span className="hidden group-hover:flex text-sm font-bold ml-1">
                        View code
                      </span>
                    </a>
                  </div>
                  <Link
                    to={`/projects/${slug}`}
                    className="text-xl font-serif font-bold hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-red-500 to-fuchsia-500 w-fit"
                  >
                    {project.name}
                  </Link>
                  <div className="flex flex-wrap">
                    {project.tags.map((tag) => (
                      <span
                        className="font-extralight text-xs bg-main px-2 py-1 rounded-xl m-1 hover:bg-gradient-to-r from-red-500 to-fuchsia-500"
                        key={tag}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="w-full bg-gradient-to-r from-red-500 to-fuchsia-500 h-1"></div>
              </div>
            </article>
          );
        })}
      </section>
    </General>
  );
};

export default Portfolio;
