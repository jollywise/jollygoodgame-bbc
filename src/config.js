import { getConfigBase, VibratePlugin, SubtitlesPlugin } from '@jollywise/jollygoodgame';

export const getConfigBBC = (opts = {}) => {
  const conf = getConfigBase(opts);
  conf.plugins.scene.push({
    key: 'VibratePlugin',
    plugin: VibratePlugin,
    mapping: 'vibrate',
    start: true,
  });
  conf.plugins.global.push({
    key: 'SubtitlesPlugin',
    plugin: SubtitlesPlugin,
    mapping: 'subtitles',
    start: true,
  });
  if (opts.gmi && opts.gmi.gameContainerId) {
    conf.parent = opts.gmi.gameContainerId;
  }
  return conf;
};

export const getConfigGMI = ({ audio = true, motion = true, subtitles = true } = {}) => {
  const settings = [];
  if (audio) {
    settings.push({
      key: 'audio',
      type: 'toggle',
      title: 'Audio',
      description: 'Turn off/on sound and music',
    });
  }
  if (motion) {
    settings.push({
      key: 'motion',
      type: 'toggle',
      title: 'Motion',
      description: 'Turn off/on motion',
    });
  }
  if (subtitles) {
    settings.push({
      key: 'subtitles',
      type: 'toggle',
      title: 'Subtitles',
      description: 'Turn off/on subtitles',
      value: true,
    });
  }
  return {
    pages: [
      {
        title: 'Game Settings',
        settings: settings,
      },
    ],
  };
};
