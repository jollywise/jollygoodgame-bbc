'use strict';

const path = require('path');

function buildConfig(target, buildtype, minimize, title, statsCounterName, gameId) {
  const constantsPath = path.resolve(__dirname, `webpack_config/constants/${target}/`);
  const paths = require(`${constantsPath}/paths`);
  const project = require(`${constantsPath}/project`);
  project.title = title;
  project.statsCounterName = statsCounterName;
  project.gameId = gameId;

  const environmentVars = {
    __DEBUG__: JSON.stringify(project.environmentVars.debug),
    __DEBUG_BOUNDS__: JSON.stringify(project.environmentVars.debugBounds),
    __WATCH__: JSON.stringify(project.environmentVars.watch),
    __SHORTCUTS_ENABLED__: JSON.stringify(project.environmentVars.shortcuts),
    __ENV_IS_BBC__: JSON.stringify(project.environmentVars.isBBC),
  };

  console.log('[WEBPACK] Building', target, buildtype, ' | minimize = ', minimize);

  const configPath = path.resolve(__dirname, `webpack_config/${buildtype}.js`);
  const config = require(configPath)({
    paths,
    project,
    environmentVars,
    minimize,
  });
  return config;
}

module.exports = function ({
  target = '',
  buildtype = '',
  minimize = 'true',
  title = 'JollyGoodGame-BBC',
  statsCounterName = 'test',
  gameId = 'test-game',
}) {
  return buildConfig(target, buildtype, minimize === 'true', title, statsCounterName, gameId);
};
