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
            SEO {
              Description
              Image_Height
              Image_Url
              Image_Width
              Title
            }
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
            SEO {
              Description
              Image_Height
              Image_Url
              Image_Width
              Title
            }
          }
        }
      }
    }
  `)
  const blog = await graphql(`
    query {
      allStrapiPosts(sort: { fields: createdAt, order: DESC }, limit: 1000) {
        edges {
          node {
            Body
            Slug
            Title
            Published_Date
            SEO {
              Description
              Title
            }
          }
        }
      }
    }
  `)

  // Create blog-list pages
  const posts = blog.data.allStrapiPosts.edges
  const postsPerPage = 6
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/page/${i + 1}`,
      component: path.resolve("./src/components/blog.js"),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
        posts: posts.slice(i * postsPerPage, i * postsPerPage + 6),
      },
    })
  })

  //Create pages for each blogpost

  posts.forEach(({ node }, idx) => {
    createPage({
      path: `/${node.Published_Date}/${node.Slug}`,
      component: path.resolve("./src/pages/post.js"),
      context: {
        post: node,
      },
    })
  })

  //Create service pages
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

  //Create doctor pages
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
