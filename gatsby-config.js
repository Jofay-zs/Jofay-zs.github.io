require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: "I change the name",
    siteUrl: `https://jofay-zs.netlify.app/`,
    description: "Portfolio, blog and personal website of Jofay",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Jofay-zs",
        short_name: "Jofay-zs",
        start_url: "/",
        background_color: "#141821",
        theme_color: "#141821",
        display: "standalone",
        icon: "src/images/j.png",
      },
    },
  ],
};
