require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: "Jofay-zs",
    siteUrl: `https://jofay-zs.netlify.app/`,
    description: "Portfolio, blog and personal website of Jofay",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog/`,
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL:
          "https://sheltered-plateau-01320.herokuapp.com" ||
          "http://localhost:1337",
        // collectionTypes: ["projects", "studies"],
        collectionTypes: [
          {
            name: `projects`,
            endpoint: "api/projects",
          },
          {
            name: `studies`,
            endpoint: "api/studies",
          },
        ],
      },
    },
  ],
};
