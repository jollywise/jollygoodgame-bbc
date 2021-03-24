import { AppBase } from '@jollywise/jollygoodgame';

export class BBCAppBase extends AppBase {
  constructor(opts) {
    super(opts);
    this._gmi = opts.gmi;
  }

  get gmi() {
    return this._gmi;
  }
}
