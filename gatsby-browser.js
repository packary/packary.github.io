/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

module.exports.onClientEntry = () => {
  require('whatwg-fetch');

  const Sidecar = require('gitter-sidecar');

  new Sidecar({
    room: 'packary/Lobby'
  });
};