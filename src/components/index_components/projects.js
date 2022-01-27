import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { card, card_list } from "../../styles/projects.module.css";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const getProjects = graphql`
  query getProjects {
    allStrapiProjects {
      nodes {
        data {
          attributes {
            demo
            description
            github_url
            image_url
            title
          }
        }
      }
    }
  }
`;

const Projects = () => {
  const data = useStaticQuery(getProjects);

  return (
    <section className="flex h-screen min-h-screen w-full">
      <div className="absolute">
        <div className="absolute top-10 left-0 font-extrabold text-6xl sm:text-9xl opacity-5 capitalize">
          Projects
        </div>
      </div>
      <div className="flex w-full h-full justify-center items-center pt-10">
        <section className={`${card_list}`}>
          {data.allStrapiProjects.nodes[0].data.map((p) => {
            return (
              <article key={p.attributes.title} className={`${card}`}>
                <header>
                  <h1 className="font-bold text-xl bg-gradient-to-r from-red-500 to-fuchsia-500 bg-clip-text text-transparent">
                    {p.attributes.title}
                  </h1>
                  <img
                    src={p.attributes.image_url}
                    alt=""
                    className="w-full my-4"
                  />
                  <p className=" overflow-hidden h-24 mb-8">
                    {p.attributes.description}
                  </p>
                  <div className="flex">
                    <a
                      href={p.attributes.demo}
                      className="mr-4 hover:text-gray-100/50"
                    >
                      Demo
                    </a>
                    <a
                      href={p.attributes.github_url}
                      className=" hover:text-gray-100/50"
                    >
                      <FontAwesomeIcon
                        icon={faGithub}
                        alt="Repository"
                        title="Repository"
                      />
                    </a>
                  </div>
                </header>
              </article>
            );
          })}
        </section>
      </div>
    </section>
  );
};

export default Projects;
