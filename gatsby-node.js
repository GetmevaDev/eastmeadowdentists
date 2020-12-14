const path = require(`path`)

exports.createPages = async function ({ actions, graphql }) {
  const { createPage } = actions

  const { data } = await graphql(`
    query {
      allStrapiOurDoctors {
        edges {
          node {
            Specialization
            Name
            About_Doctor_Team
            Slug
            Photo {
              id
              childImageSharp {
                fixed(width: 1000) {
                  src
                }
              }
            }
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
        doctor: node,
      },
    })
  })
}
