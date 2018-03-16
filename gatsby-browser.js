/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
exports.onPreBootstrap = () => {
  // ensure libs are included in the bundle
  require('gitter-sidecar');
};

exports.onClientEntry = () => {
  const Sidecar = require('gitter-sidecar');

  new Sidecar({
    room: 'packary/Lobby'
  });
};