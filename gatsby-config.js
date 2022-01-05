module.exports = {
  siteMetadata: {
    title: "Jofay",
    siteUrl: `https://www.yourdomain.tld`,
    description: "Portfolio, blog and personal website of Jofay",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog/`,
        ignore: [`**/pexels-photo-943096`],
      },
    },
  ],
};
