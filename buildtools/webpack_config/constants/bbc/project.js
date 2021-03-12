const DEVSERVER_HOST = 'localhost'; // 'mini.prhap' '192.168.1.80' set to your localhost ip if you want to test on ios device etc
const DEVSERVER_PORT = 3000;
const BROWSERSYNC_PORT = 4000;

const PROJECT = {
  title: 'JollyGoodGame-BBC',
  devserverHost: DEVSERVER_HOST,
  devserverPort: DEVSERVER_PORT,
  devserverURL: `http://${DEVSERVER_HOST}:${DEVSERVER_PORT}`,
  devServer: `webpack-dev-server/client?http://${DEVSERVER_HOST}:${DEVSERVER_PORT}`,
  browserSyncPort: BROWSERSYNC_PORT,
  manifestName: 'webpackmanifest',
  vendorName: 'vendor',
  generateHTML: false,
  generateSourcemaps: false,
  isHashed: false,
  dropConsole: false,
  isVendorChunked: false,
  environmentVars: {
    isBBC: true,
    debug: false,
    debugBounds: false,
    watch: false,
    shortcuts: true,
  },
  containerId: 'game-holder',
};

module.exports = PROJECT;
