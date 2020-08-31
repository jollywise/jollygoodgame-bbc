import { AppBase, getStorage } from '@jollywise/jollygoodgame';
import { StoragePlugin, TrackingPlugin } from './bbc/plugins/';
import { Settings, SettingsModel } from './bbc/settings/';

export class AppBBC extends AppBase {
  constructor(opts) {
    super(opts);
    const { gmi } = opts;
    this._gmi = gmi;

    // storage test : localstorage
    // const storage = getStorage('hey-duggee-2');
    // storage.plugin = new StoragePlugin();

    // BBC Saves via GMI to localstorage
    const storage = getStorage();
    storage.plugin = new StoragePlugin(this.gmi);
    this.saves.storagePlugin = storage;

    // BBC Tracking
    this.tracking.plugin = new TrackingPlugin(this.gmi, true);

    /*
     * BBC Settings
     */
    console.log('GMI Settings', this.gmi.getAllSettings());
    this._settings = new Settings(this.gmi, new SettingsModel(this.gmi.getAllSettings()));
  }

  get gmi() {
    return this._gmi;
  }
}
