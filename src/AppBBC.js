// import { AppBase, getStorage } from '@jollywise/jollygoodgame';
// import { StoragePlugin, TrackingPlugin } from './bbc/plugins';
// import { Settings, SettingsModel } from './bbc/settings';
//
// export class AppBBC extends AppBase {
//   constructor(opts) {
//     super(opts);
//     const { gmi } = opts;
//     this._gmi = gmi;
//
//     // BBC Saves via GMI to localstorage
//     const storage = getStorage();
//     storage.plugin = new StoragePlugin(this.gmi);
//     this.saves.storage = storage;
//
//     // BBC Tracking
//     this.tracking.plugin = new TrackingPlugin(this.gmi, true);
//
//     /*
//      * BBC Settings
//      */
//     this._settings = new Settings(this.gmi, new SettingsModel(this.gmi.getAllSettings()));
//   }
//
//   get gmi() {
//     return this._gmi;
//   }
//
//   get settings() {
//     return this._settings;
//   }
// }
