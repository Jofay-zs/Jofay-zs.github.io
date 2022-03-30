require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: "Jofay-zs",
    siteUrl: `https://jofay-zs.netlify.app/`,
    description: "Portfolio, blog and personal website of Jofay",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-source-graphcms",
      options: {
        endpoint:
          "https://api-us-west-2.graphcms.com/v2/cl0zylzru5fn401xmg9ez11zu/master",
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
