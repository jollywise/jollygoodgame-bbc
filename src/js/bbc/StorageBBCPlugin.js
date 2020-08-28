export class StorageBBCPlugin {
  constructor(gmi) {
    this.gmi = gmi;
    return this.isSupported();
  }

  get key() {
    return null;
  }
  set key(val) {}

  deleteGameData(saveId) {
    if (this.gmi) {
      this.gmi.setGameData(saveId, JSON.stringify({}));
    } else {
      console.warn('GMI not available');
    }
  }

  setGameData(saveId, value) {
    const savesString = JSON.stringify(value);
    if (this.gmi) {
      this.gmi.setGameData(saveId, savesString);
    } else {
      console.warn('GMI not available');
    }
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
    if (this.gmi) {
      const settings = this.gmi.getAllSettings();
      return settings || {};
    } else {
      console.warn('GMI not available');
    }
    return {};
  }

  destroy() {
    this.gmi = '';
    this.data = null;
  }
}
