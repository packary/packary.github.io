/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

module.exports.modifyWebpackConfig = ({ config, stage }) => {
  config.removeLoader('url-loader').loader(`url-loader`, {
    test: /\.(svg|jpg|jpeg|png|gif|mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
    loader: `url`,
    query: {
      limit: 14000,
      name: `static/[name].[hash:8].[ext]`,
    },
  })
};