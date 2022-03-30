import React from "react";
import { graphql } from "gatsby";
import Document from "../layouts/document";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { faCode, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { renderers } from "../layouts/document";

const ProjectPage = ({ data: { graphCmsProject: project } }) => {
  const image = getImage(project.image[0]);

  return (
    <Document
      pageTitle={`Jofay-zs | ${project.name}`}
      title={project.name}
      subtitle={
        <div className="flex text-xs">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="border-2 border-gray-800 w-auto rounded-full px-2 py-1 hover:bg-gradient-to-r from-red-500 to-fuchsia-500 my-1 hover:border-main mx-1"
            >
              {tag}
            </span>
          ))}
        </div>
      }
      image={
        <div>
          <div className="flex">
            <a
              href={project.sourceCode}
              className="bg-gray-800 rounded-t-lg px-2 py-1 mr-5 hover:text-red-500"
            >
              <FontAwesomeIcon icon={faCode} className="hover:rotate-12" />{" "}
              Source code
            </a>
            <a
              href={project.demo}
              className="bg-gray-800 rounded-t-lg px-2 py-1 hover:text-fuchsia-500"
            >
              <FontAwesomeIcon icon={faEye} className="hover:rotate-12" /> Demo
            </a>
          </div>
          <GatsbyImage
            image={image}
            alt={project.image[0].url}
            className="w-full"
          />
        </div>
      }
    >
      <RichText content={project.content.raw} renderers={renderers} />
    </Document>
  );
};

export const pageQuery = graphql`
  query ProjectPageQuery($id: StringQueryOperatorInput) {
    graphCmsProject(id: $id) {
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
      content {
        raw
      }
    }
  }
`;

export default ProjectPage;
