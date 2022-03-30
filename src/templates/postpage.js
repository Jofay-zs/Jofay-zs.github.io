import React from "react";
import { graphql, Link } from "gatsby";
import Document, { renderers } from "../layouts/document";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { RichText } from "@graphcms/rich-text-react-renderer";

const Postpage = ({ data: { graphCmsPost: post } }) => {
  const image = getImage(post.coverImage);

  return (
    <Document
      pageTitle={`${post.title}`}
      title={post.title}
      subtitle={<p className="text-xs font-mono">{post.date}</p>}
      image={
        <GatsbyImage
          image={image}
          alt={post.coverImage.url}
          className="w-full"
        />
      }
    >
      <RichText
        content={post.content.raw}
        renderers={renderers}
      />
    </Document>
  );
};

export const pageQuery = graphql`
  query PostPageQuery($id: StringQueryOperatorInput) {
    graphCmsPost(id: $id) {
      title
      date
      coverImage {
        gatsbyImageData
        url
      }
      content {
        raw
      }
    }
  }
`;

export default Postpage;
