export const BBC_STATS_BASE;
export const SETTINGS_EVENTS;
export const GMI_CONFIG_BASE;

export function bootstrapBBC(o: object);

export class SettingsModel {
  constructor(o: object);
}

export class Settings {
  constructor(gmi: any, model: SettingsModel);
}

export class StoragePlugin {
  constructor(gmi: any);
  key;
}

export class TrackingPlugin {
  constructor(gmi: any, debug: boolean);
  addStats();
}
