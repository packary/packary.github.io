/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require("path");

exports.modifyWebpackConfig = ({ config }) => {
  config.removeLoader('url-loader').loader(`url-loader`, {
    test: /\.(svg|jpg|jpeg|png|gif|mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
    loader: `url`,
    query: {
      limit: 14000,
      name: `static/[name].[hash:8].[ext]`,
    },
  })
};

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const MarkdownTemplate = path.resolve(`src/templates/MarkdownTemplate.js`);

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: MarkdownTemplate,
        context: {}, // additional data can be passed via context
      });
    });
  });
};