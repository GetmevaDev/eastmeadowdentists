const path = require(`path`)

exports.createPages = async function ({ actions, graphql }) {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      allStrapiOurDoctors {
        edges {
          node {
            Slug
          }
        }
      }
    }
  `)

  data.allStrapiOurDoctors.edges.forEach(({ node }) => {
    createPage({
      path: `/team/${node.Slug}`,
      component: path.resolve(`./src/pages/team.js`),
      context: {
        slug: node.Slug,
      },
    })
  })
}
