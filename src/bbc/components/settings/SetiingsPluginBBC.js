import { SETTINGS_EVENTS } from '@jollywise/jollygoodgame';
import { SettingsPlugin } from '@jollywise/jollygoodgame/src/components';

class SettingsPluginBBC extends SettingsPlugin {
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
      return this.gmi.getAllSettings()[settingid];
    } else {
      return super.getSettingValue(settingid);
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

  closeSettings() {
    if (!this.gmi) {
      super.closeSettings();
    }
  }

  _saveSettings() {
    if (!this.gmi) {
      super._saveSettings();
    }
  }

  _loadSettings() {
    if (!this.gmi) {
      super._loadSettings();
    }
  }
}

export { SettingsPluginBBC };
