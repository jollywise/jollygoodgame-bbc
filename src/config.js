import { getConfigBase } from '@jollywise/jollygoodgame';

export const getConfigBBC = (opts) => {
  const conf = getConfigBase(opts);
  if (opts.gmi && opts.gmi.gameContainerId) {
    opts.parent = opts.gmi.gameContainerId;
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
