import { getConfigBase } from '@jollywise/jollygoodgame';
import { VibratePlugin, SubtitlesPlugin } from '@jollywise/jollygoodgame/src/plugins';

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

export const getConfigGMI = () => {
  return {
    pages: [
      {
        title: 'Game Settings',
        settings: [
          {
            key: 'audio',
            type: 'toggle',
            title: 'Audio',
            description: 'Turn off/on sound and music',
          },
          {
            key: 'motion',
            type: 'toggle',
            title: 'Motion',
            description: 'Turn off/on motion',
          },
          {
            key: 'subtitles',
            type: 'toggle',
            title: 'Subtitles',
            description: 'Turn off/on subtitles',
            value: true,
          },
        ],
      },
    ],
  };
};
