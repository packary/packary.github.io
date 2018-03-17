/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

module.exports.onClientEntry = () => {
  ((window.gitter = {}).chat = {}).options = {
    room: 'packary/Lobby'
  };

  const script = document.createElement('script');
  script.setAttribute('src', 'https://sidecar.gitter.im/dist/sidecar.v1.js');
  script.setAttribute('async', true);
  script.setAttribute('defer', true);
  document.body.appendChild(script);
};