/**
 * @type {import('@remix-run/dev/config').AppConfig}
 */
module.exports = {
  appDirectory: 'app',
  assetsBuildDirectory: 'public/build',
  publicPath: '/build/',
  serverBuildPath: 'netlify/functions/server/build/index.js',
  dev: {
    port: 8002,
  },
  ignoredRouteFiles: ['.*'],
};
