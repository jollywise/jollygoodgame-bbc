import { AppBase } from '@jollywise/jollygoodgame';

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

    // BBC Settings
    this._settings = new Settings({ game: this });
    this._settings.plugin = new SettingsPlugin(opts.gmi);

    this.controller = new GameController({
      game: this,
    });

    this.tracking.plugin.addStats(STATS); // add project specific stats to tracking plugin
  }
}
