import { StoragePlugin, TrackingPlugin } from './bbc/plugins';

export const addPlugins = (scope, opts, storage) => {
  const { gmi } = opts;
  scope.gmi = gmi;

  // BBC Saves
  storage.plugin = new StoragePlugin(gmi);
  scope.saves.storage = storage;

  // BBC Tracking
  scope.tracking.plugin = new TrackingPlugin(gmi, true);
};
