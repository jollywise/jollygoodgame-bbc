export class StorageBBCPlugin {
  constructor(gmi) {
    this.gmi = gmi;
    return this.isSupported();
  }

  get key() {
    return this._key;
  }
  set key(val) {
    this._key = val;
  }

  deleteGameData() {
    try {
      window.localStorage.removeItem(this.key);
    } catch (e) {}
  }

  setGameData(saveId, value) {
    const savesString = JSON.stringify(value);
    this.gmi.setGameData(saveId, savesString);
  }

  getGameData() {
    const settings = this.loadData();
    return settings.gameData || {};
  }

  // internal

  isSupported() {
    return true;
  }

  loadData() {
    const settings = this.gmi && this.gmi.getAllSettings();
    return settings || {};
  }

  destroy() {
    this.gmi = '';
    this.data = null;
  }
}
