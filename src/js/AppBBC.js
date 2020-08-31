import { AppBase, getStorage } from '@jollywise/jollygoodgame';
import { StoragePlugin } from './bbc/plugins/StoragePlugin';
import { TrackingPlugin } from './bbc/plugins/TrackingPlugin';

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
  }

  get gmi() {
    return this._gmi;
  }
}
