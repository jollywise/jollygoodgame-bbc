import { AppBase, StorageGame } from '@jollywise/jollygoodgame';
import { TrackingPlugin } from './plugins/TrackingPlugin';
import { StoragePlugin } from './plugins/StoragePlugin';

export default class AppBaseBBC extends AppBase {
  constructor(opts) {
    super(opts);

    // base url
    this.gmi = opts.gmi;

    // BBC Saves
    const storage = new StorageGame('');
    storage.plugin = new StoragePlugin(opts.gmi);
    this.saves.storage = storage;

    // BBC Tracking
    this.tracking.plugin = new TrackingPlugin(opts.gmi, true);
  }
}
