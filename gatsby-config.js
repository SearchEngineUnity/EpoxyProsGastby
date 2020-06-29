require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`,
});

const isProd = process.env.NODE_ENV === 'production';

const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://www.techquanimous.com/',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === 'production';
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

module.exports = {
  siteMetadata: {
    // siteUrl: 'http://www.techquanimous.com/',
    // siteUrl: 'http://cocky-jennings-94427f.netlify.com',
    siteUrl,
  },
  plugins: [
    `gatsby-plugin-netlify`,
    // {
    //   resolve: `gatsby-plugin-netlify`,
    //   options: {
    //     headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
    //     allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
    //     mergeSecurityHeaders: true, // boolean to turn off the default security headers
    //     mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
    //     mergeCachingHeaders: true, // boolean to turn off the default caching headers
    //     transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
    //     generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
    //   },
    // },
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'irxu5yey',
        dataset: 'epoxypro',
        // To enable preview of drafts, copy .env-example into .env,
        // and add a token with read permissions
        token: process.env.SANITY_TOKEN,
        watchMode: !isProd,
        overlayDrafts: !isProd,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
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
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/cp-favicon-270x270.png`, // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: 'gatsby-plugin-robots-txt',
    //   options: {
    //     policy: [{ userAgent: '*', disallow: '/' }]
    //   }
    // },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => NETLIFY_ENV,
        env: {
          production: {
            policy: [{ userAgent: '*', disallow: ['/'] }],
          },
          'branch-deploy': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
          'deploy-preview': {
            policy: [{ userAgent: '*', disallow: ['/'] }],
            sitemap: null,
            host: null,
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        sitemapSize: 5000,
        //     output: `/some-other-sitemap.xml`,
        //     // Exclude specific pages or groups of pages using glob parameters
        //     // See: https://github.com/isaacs/minimatch
        //     // The example below will exclude the single `path/to/page` and all routes beginning with `category`
        //     exclude: [`/category/*`, `/path/to/page`],
        //     query: `
        //       {
        //         site {
        //           siteMetadata {
        //             siteUrl
        //           }
        //         }

        //         allSitePage {
        //           edges {
        //             node {
        //               path
        //             }
        //           }
        //         }
        //     }`,
        // serialize: ({ site, allSitePage }) =>
        //   allSitePage.edges.map(edge => {
        //     return {
        //       url: site.siteMetadata.siteUrl + edge.node.path,
        //       changefreq: `daily`,
        //       priority: 0.7,
        //     }
        //   })
      },
    },
    // `gatsby-source-sanity-transform-images`,
    // {
    //   resolve: `gatsby-plugin-remote-images`,
    //   options: {
    //     // The node type that has the images you want to grab.
    //     // This is generally the camelcased version of the word
    //     // after the 'all' in GraphQL ie. allMyImages type is myImages
    //     nodeType: 'myNodes',
    //     // For simple object traversal, this is the string path to the image you
    //     // want to use, relative to the node.
    //     // This uses lodash .get, see [docs for accepted formats here](https://lodash.com/docs/4.17.11#get).
    //     // For traversing objects with arrays at given depths, see [how to handle arrays below](#traversing-objects-with-arrays)
    //     imagePath: 'imageUrl',
    //     // ** ALL OPTIONAL BELOW HERE: **
    //     // Name you want to give new image field on the node.
    //     // Defaults to 'localImage'.
    //     name: 'localImage',
    //     // Adds htaccess authentication to the download request if passed in.
    //     auth: { htaccess_user: `USER`, htaccess_pass: `PASSWORD` },
    //     // Sets the file extension. Useful for APIs that separate the image file path
    //     // from its extension. Or for changing the extention.  Defaults to existing
    //     // file extension.
    //     ext: '.jpg',
    //     // Allows modification of the URL per image if needed. Expects a function
    //     // taking the original URL as a parameter and returning the desired URL.
    //     prepareUrl: url => (url.startsWith('//') ? `https:${url}` : url),
    //   },
    // },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
