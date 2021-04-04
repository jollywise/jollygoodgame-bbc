import { SavesPlugin } from '@jollywise/jollygoodgame/src/components';

export class SavesPluginBBC extends SavesPlugin {
  get gmi() {
    return this.game.gmi && this.game.gmi.getAllSettings ? this.game.gmi : false;
  }
  loadFromStorage() {
    if (!this.gmi) return super.loadFromStorage();
    const settings = this.gmi.getAllSettings();
    const loadedData = settings.gameData[this.storageId]
      ? JSON.parse(settings.gameData[this.storageId])
      : {};
    return loadedData || {};
  }
  deleteFromStorage() {
    if (!this.gmi) return super.deleteFromStorage();
    this.gmi.setGameData(this.storageId, JSON.stringify({}));
  }
  saveToStorage(data) {
    if (!this.gmi) return super.saveToStorage(data);
    const savesString = JSON.stringify(data);
    this.gmi.setGameData(this.storageId, savesString);
  }
}
