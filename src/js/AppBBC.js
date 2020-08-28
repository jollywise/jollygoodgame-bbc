import { AppBase } from '@jollywise/jollygoodgame';

export class AppBBC extends AppBase {
  constructor(opts) {
    super(opts);
    const { gmi } = opts;
    this._gmi = gmi;

    /*
     * Set up BBC Stats and Settings here
     */
  }

  get gmi() {
    return this._gmi;
  }
}
