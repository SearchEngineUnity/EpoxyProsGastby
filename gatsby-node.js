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

// creat guides page
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
      allSanityGuide {
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

exports.createPages = async ({ actions, graphql }) => {
  await creteStructuredPages(actions, graphql);
  await createGuidesPage(actions, graphql);
  await createGuide(actions, graphql);
};
