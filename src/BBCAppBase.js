import { AppBase } from '@jollywise/jollygoodgame';
import { StoragePlugin } from './bbc/plugins/StoragePlugin';

export class BBCAppBase extends AppBase {
  constructor(opts) {
    super(opts);

    // base url
    this.gmi = opts.gmi;

    // BBC Saves
    this.saves.storagePlugin = new StoragePlugin(opts.gmi);
  }
}
