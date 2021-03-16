import { getConfigBase, GameHudPlugin } from '@jollywise/jollygoodgame';
import { SettingsPluginBBC } from '@jollywise/jollygoodgame-bbc/src/bbc/components/settings/SetiingsPluginBBC';
import { TrackingPlugin } from '@jollywise/jollygoodgame-bbc/src/bbc/components/tracking/TrackingPlugin';

export const getConfigBBC = (opts) => {
  const conf = getConfigBase(opts);
  if (opts.gmi && opts.gmi.gameContainerId) {
    opts.parent = opts.gmi.gameContainerId;
  }
  // add additional AppBase components
  conf.components.hud = GameHudPlugin;
  conf.components.tracking = TrackingPlugin;
  conf.components.settings = { component: SettingsPluginBBC, data: { gmi: opts.gmi } };
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
