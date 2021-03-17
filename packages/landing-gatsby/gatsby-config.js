module.exports = {
  siteMetadata: {
    title: `A react next landing page`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://hakukonestudio.fi/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-mdx`,
    `gatsby-remark-images`,   
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        minify: false, // Breaks styles if not set to false
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `common`,
        path: `../common/src/assets/`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `../common/src/data/`,
      },
    }, 
    // {
    //   /**
    //    * First up is the WordPress source plugin that connects Gatsby
    //    * to your WordPress site.
    //    *
    //    * visit the plugin docs to learn more
    //    * https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-wordpress/README.md
    //    *
    //    */
    //   resolve: `gatsby-source-wordpress`,
    //   options: {
    //     // the only required plugin option for WordPress is the GraphQL url.
    //     url:
    //       process.env.WPGRAPHQL_URL ||
    //       `https://advanced.artbachmann.fi/mgstudio/graphql`,
    //   },
    // },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        exclude: [
          `/dev-404-page`,
          `/404`,
          `/404.html`,
          `/offline-plugin-app-shell-fallback`,
        ],
        createLinkInHead: true,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://hakukonestudio.fi/',
        sitemap: 'https://hakukonestudio.fi/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://hakukonestudio.fi/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-180499768-1',
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `Roboto`,
              variants: [
                `100`,
                `100i`,
                `300`,
                `300i`,
                `400`,
                `400i`,
                `500`,
                `500i`,
                `700`,
                `700i`,
                `900`,
                `900i`,
              ],
            },
            {
              family: `Poppins`,
              variants: [`300`, `400`, `500`, `600`, `700`],
            },
            {
              family: `Lato`,
              variants: [`300`, `400`, `700`],
            },
            {
              family: `Open Sans`,
              variants: [`300`, `400`, `600`, `700`, `800`],
            },
            {
              family: `Raleway`,
              variants: [`500`, `600`],
            },
            {
              family: `Heebo`,
              variants: [`300`, `400`, `500`, `600`, `700`, `800`],
            },
            {
              family: `B612`,
              variants: [`400`, `400i`, `700`, `700i`],
            },
            {
              family: `DM Sans`,
              variants: [`400`, `400i`, `500`, `500i`, `700`, `700i`],
            },
            {
              family: `Playfair Display`,
              variants: [`400`, `400i`, `500`, `500i`, `700`, `700i`],
            },
          ],
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
