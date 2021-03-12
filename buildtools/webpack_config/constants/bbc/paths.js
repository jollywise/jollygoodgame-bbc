const path = require('path');
const CONTENT_BASE = 'src';
const TEMPLATES = path.resolve(__dirname, '../../templates/local');
const projectRoot = path.resolve(__dirname, '../../../../'); // used in jollyapps to target correct folders
const root = path.resolve('.');
const dist = path.join(projectRoot, 'output/');
const htmlOutPath = path.join(projectRoot, 'output/');
const src = path.join(root, CONTENT_BASE);
const libsDir = path.join(src, 'libs');
const nodeDir = path.join(root, 'node_modules');

const PATHS = {
  projectRoot,
  root,
  dist,
  nodeDir,
  src,
  libsDir,
  templateDir: path.join(root, TEMPLATES),
  fonts: 'css/fonts/[name].[ext]',
  images: 'images/[name].[ext]',
  entryFile: src + '/js/main.js',
  contentBase: CONTENT_BASE,
  htmlOutPath: htmlOutPath,
  htmlOutName: 'game.html',
  cssOut: 'css/',
  jsOut: '',
};

module.exports = PATHS;
