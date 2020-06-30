/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path');

// create all structured pages except for /guides
async function creteStructuredPages(actions, graphql) {
  const { data } = await graphql(`
    {
      allSanityPage(filter: { slug: { current: { ne: "guide" } } }) {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
    }
  `);

  const pages = data.allSanityPage.edges;
  pages.forEach((page) => {
    actions.createPage({
      path: page.node.slug.current === '/' ? '/' : `/${page.node.slug.current}`,
      component: path.resolve(`./src/templates/structuredPage.js`),
      context: {
        slug: page.node.slug.current,
      },
    });
  });
}

// creat guides listing page
async function createGuidesPage(actions, graphql) {
  const { data } = await graphql(`
    {
      allSanityPage(filter: { slug: { current: { eq: "guide" } } }) {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
    }
  `);

  const pages = data.allSanityPage.edges;
  pages.forEach((page) => {
    actions.createPage({
      path: `/${page.node.slug.current}`,
      component: path.resolve(`./src/templates/guide-page.js`),
      context: {
        slug: page.node.slug.current,
      },
    });
  });
}

// create individual guide
async function createGuide(actions, graphql) {
  const { data } = await graphql(`
    {
      allSanityGuide(filter: { isChapter: { ne: true } }) {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
    }
  `);

  const guides = data.allSanityGuide.edges;
  guides.forEach((guide) => {
    actions.createPage({
      path: `/${guide.node.slug.current}`,
      component: path.resolve(`./src/templates/guide.js`),
      context: {
        slug: guide.node.slug.current,
      },
    });
  });
}

// create redirect
async function createPageRedirects(actions, graphql) {
  const { data } = await graphql(`
    {
      allSanityRedirect {
        edges {
          node {
            redirectPaths
            redirectTo {
              ... on SanityGuide {
                slug {
                  current
                }
              }
              ... on SanityPage {
                slug {
                  current
                }
              }
            }
          }
        }
      }
    }
  `);

  const redirectEdges = data.allSanityRedirect.edges;
  redirectEdges.forEach((edge) => {
    const { redirectPaths, redirectTo } = edge.node;
    const toPath = redirectTo.slug.current === '/' ? '/' : `/${redirectTo.slug.current}`;

    redirectPaths.forEach((fromPath) => {
      actions.createRedirect({
        fromPath,
        toPath,
        isPermanent: true,
        redirectInBrowser: true,
      });
    });
  });
}

exports.createPages = async ({ actions, graphql }) => {
  await creteStructuredPages(actions, graphql);
  await createGuidesPage(actions, graphql);
  await createGuide(actions, graphql);
  await createPageRedirects(actions, graphql);
};
