import { AppBase, StorageGame } from '@jollywise/jollygoodgame';
import { TrackingPlugin } from './bbc/plugins/TrackingPlugin';
import { StoragePlugin } from './bbc/plugins/StoragePlugin';

export default class BBCAppBase extends AppBase {
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
