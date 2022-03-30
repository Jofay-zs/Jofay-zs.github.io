

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const {
    data: {
      allGraphCmsProject: { nodes: projects },
    },
  } = await graphql(`
    {
      allGraphCmsProject {
        nodes {
          id
          slug
        }
      }
    }
  `);

  const {
    data: {
      allGraphCmsPost: { nodes: posts },
    },
  } = await graphql(
    `
      {
        allGraphCmsPost {
          nodes {
            id
            slug
          }
        }
      }
    `
  );



  projects.forEach(({ id, slug }) =>
    createPage({
      path: `/projects/${slug}`,
      component: require.resolve(`./src/templates/projectpage.js`),
      context: {
        id: { eq: id },
      },
    })
  );

  posts.forEach(({ id, slug }) =>
    createPage({
      path: `/blog/${slug}`,
      component: require.resolve(`./src/templates/postpage.js`),
      context: {
        id: { eq: id },
      },
    })
  );
};
