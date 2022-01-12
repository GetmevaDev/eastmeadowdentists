module.exports = {
  siteMetadata: {
    description: `Cosmetic & Implant Dentistry: Massapequa, NY.`,
    image: "/image/share.png",
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-pdf`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: "http://localhost:1337",
        // ? "https://cms-all-smiles-dental-spa.herokuapp.com"
        // : "http://localhost:1337",
        queryLimit: 1000, // Default to 100
        contentTypes: [
          `users`,
          `reasons`,
          `comments`,
          `commets-videos`,
          `why-choose-uses`,
          `services`,
          `our-doctors`,
          `faqs`,
          `posts`,
        ],
        singleTypes: [
          `home-page`,
          "emergency-services",
          "navigation-menu",
          "contacts",
          "common-meta-data",
          "photo-our-team",
          "working-hours",
          "about-us",
          "insurance",
          "promotions",
          "testimonials",
          "galleryb-before-after",
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-inline-svg`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: `/images/`, // See below to configure properly
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `All Smiles Dental Spa`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/android-chrome-512x512.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
