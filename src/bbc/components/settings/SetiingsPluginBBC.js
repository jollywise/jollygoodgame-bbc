import { SETTINGS_EVENTS } from '@jollywise/jollygoodgame';
import { SettingsPlugin } from '@jollywise/jollygoodgame/src/components';

class SettingsPluginBBC extends SettingsPlugin {
  init() {}

  get gmi() {
    return this.game.gmi && this.game.gmi.getAllSettings ? this.game.gmi : false;
  }

  get vo() {
    return this.audio;
  }
  set vo(value) {
    this.audio = value;
  }
  get sfx() {
    return this.audio;
  }
  set sfx(value) {
    this.audio = value;
  }
  get music() {
    return this.audio;
  }
  set music(value) {
    this.audio = value;
  }

  getSettingValue(settingid) {
    if (this.gmi) {
      if (settingid === 'captions') settingid = 'subtitles';
      this.gmi.getAllSettings()[settingid];
    } else {
      super.getSettingValue(settingid);
    }
  }

  setSettingValue(settingid, value) {
    if (this.gmi) {
      switch (settingid) {
        case 'audio':
          this.gmi.setAudio(value);
          break;
        case 'motion':
          this.gmi.setMotion(value);
          break;
        case 'captions':
          this.gmi.setSubtitles(value);
          break;
        default:
          this.gmi.setGameData(settingid, value);
          break;
      }
      this._events.emit(SETTINGS_EVENTS.CHANGED, { setting: settingid, value });
      this._saveSettings();
    } else {
      super.setSettingValue(settingid, value);
    }
  }

  getAllSettings() {
    if (this.gmi) {
      return this.gmi.getAllSettings();
    } else {
      super.getAllSettings();
    }
  }

  showSettings() {
    if (this.gmi) {
      this.gmi.showSettings(this.onSettingChanged.bind(this), this.onSettingsClosed.bind(this));
    } else {
      super.showSettings();
    }
  }

  onSettingChanged(key, value) {
    if (key === 'subtitles') key = 'captions';
    if (this[key]) this[key] = value;
  }

  onSettingsClosed() {
    this.events.emit(SETTINGS_EVENTS.CLOSED);
  }

  closeSettings() {}
  _saveSettings() {}
  _loadSettings() {}
}

export { SettingsPluginBBC };

const GMIStub = {
  getAudio: () => {
    return true;
  },
  getSubtitles: () => false,
  getMotion: () => true,
  showSettings: () => {},
  setGameData: () => {},
  getGameData: () => {},
  getAllSettings: () => {
    return { audio: true };
  },
};
