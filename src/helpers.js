import { StorageGame } from '@jollywise/jollygoodgame';
import { StoragePlugin, TrackingPlugin } from './bbc/plugins';
import { Settings, SettingsModel } from './bbc/settings';

export const addPlugins = (scope, opts) => {
  const { gmi } = opts;
  scope.gmi = gmi;

  // BBC Saves
  const storage = new StorageGame('');
  storage.plugin = new StoragePlugin(gmi);
  scope.saves.storage = storage;

  // BBC Tracking
  scope.tracking.plugin = new TrackingPlugin(gmi, true);

  /*
   * BBC Settings
   */
  scope.settings = new Settings(gmi, new SettingsModel(gmi.getAllSettings()));
};
