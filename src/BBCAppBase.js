import { AppBase, StorageGame } from '@jollywise/jollygoodgame';
import { ComponentConfig } from './bbc/components/ComponentConfig';
import { ComponentMap } from './bbc/components/ComponentMap';
import { StoragePlugin } from './bbc/plugins/StoragePlugin';

export class BBCAppBase extends AppBase {
  constructor(opts) {
    opts.components = { ...ComponentConfig, ...opts.components };
    opts.componentMap = { ...opts.componentMap, ...ComponentMap}
    super(opts);

    // base url
    this.gmi = opts.gmi;

    // BBC Saves
    const storage = new StorageGame('');
    storage.plugin = new StoragePlugin(opts.gmi);
    this.saves.storage = storage;
  }
}
