import { AppBase, StorageGame, ComponentManager } from '@jollywise/jollygoodgame';
import { ComponentConfig } from './bbc/components/ComponentConfig';
import { ComponentMap } from './bbc/components/ComponentMap';
import { StoragePlugin } from './bbc/plugins/StoragePlugin';

export class BBCAppBase extends AppBase {
  constructor(opts) {
    opts.components = {
      ...ComponentConfig,
      ...opts.components,
    };
    opts.componentMap = ComponentManager.MergeComponentMaps(ComponentMap, opts.componentMap || {});
    super(opts);

    // base url
    this.gmi = opts.gmi;

    // BBC Saves
    const storage = new StorageGame('');
    storage.plugin = new StoragePlugin(opts.gmi);
    this.saves.storage = storage;
  }
}
