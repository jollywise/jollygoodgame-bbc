import { getConfigBase, GameHudPlugin, AccessibilityPlugin } from '@jollywise/jollygoodgame';
import { SavesPluginBBC } from '@jollywise/jollygoodgame-bbc/src/bbc/components/saves/SavesPluginBBC';
import { SettingsPluginBBC } from '@jollywise/jollygoodgame-bbc/src/bbc/components/settings/SetiingsPluginBBC';
import { TrackingPlugin } from '@jollywise/jollygoodgame-bbc/src/bbc/components/tracking/TrackingPlugin';

const BBC_COMPONENTS = {
  hud: GameHudPlugin,
  saves: SavesPluginBBC,
  tracking: TrackingPlugin,
  settings: SettingsPluginBBC,
  accessibility : AccessibilityPlugin
};

export const getConfigBBC = (opts) => {
  // merge option components and pass through with options
  opts.components = opts.components ? { ...BBC_COMPONENTS, ...opts.components } : BBC_COMPONENTS;
  const conf = getConfigBase(opts);
  if (opts.gmi && opts.gmi.gameContainerId) {
    conf.parent = opts.gmi.gameContainerId;
  }
  conf.input = conf.input || {}
  conf.input.windowEvents = false;

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
