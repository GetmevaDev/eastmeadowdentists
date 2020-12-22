const path = require(`path`)

exports.createPages = async function ({ actions, graphql }) {
  const { createPage } = actions

  const team = await graphql(`
    query {
      allStrapiOurDoctors {
        edges {
          node {
            Specialization
            Name
            About_Doctor_Team
            Slug
            Photo_Team {
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
  const services = await graphql(`
    query {
      allStrapiServices {
        edges {
          node {
            Name_services
            Link_services
            Description_services
            Image_services {
              publicURL
            }
          }
        }
      }
    }
  `)

  services.data.allStrapiServices.edges.forEach(({ node }, idx, array) => {
    createPage({
      path: `/services${node.Link_services}`,
      component: path.resolve(`./src/pages/services.js`),
      context: {
        service: node,
        services: array,
      },
    })
  })

  team.data.allStrapiOurDoctors.edges.forEach(({ node }) => {
    createPage({
      path: `/team/${node.Slug}`,
      component: path.resolve(`./src/pages/team.js`),
      context: {
        doctor: node,
      },
    })
  })
}
