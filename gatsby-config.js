require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
process.env. RESTAPI = 'test'
console.log(`Enviroment .env.${process.env.NODE_ENV}`)
console.log(`Api url ${process.env.GATSBY_API_URL}`)
module.exports = {
  siteMetadata: {
    title: `Gatsby IPFS Adminlte Starter`,
    description: `A gatsbyjs app with adminlte2 integration.`,
    author: `@gatsbyjs`,
  },
  pathPrefix: '__GATSBY_IPFS_PATH_PREFIX__',
  plugins: [
    'gatsby-plugin-ipfs',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        start_url: '__GATSBY_IPFS_PATH_PREFIX__',
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: '__GATSBY_IPFS_PATH_PREFIX__',
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
