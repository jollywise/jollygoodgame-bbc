import { AppBase } from '@jollywise/jollygoodgame';
import { StoragePlugin } from './bbc/plugins/StoragePlugin';
import { SettingsBaseBBC } from '@jollywise/jollygoodgame-bbc/src/bbc/settings/SettingsBaseBBC';

export class BBCAppBase extends AppBase {
  constructor(opts) {
    super(opts);

    // base url
    this.gmi = opts.gmi;

    // settings
    this._settings = new SettingsBaseBBC({game:this});

    // BBC Saves
    // this.saves.storagePlugin = new StoragePlugin(opts.gmi);
  }
}
