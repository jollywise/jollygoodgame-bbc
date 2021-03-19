import { SETTINGS_EVENTS, SettingsModel } from '@jollywise/jollygoodgame';
import { SettingsBase } from '@jollywise/jollygoodgame/src/settings/SettingsBase';

const model = {
  audio : true, 
  motion : true,
  subtitles : false
}

export class SettingsBaseBBC extends SettingsBase {
  constructor({ game }) {
    super({ game });
    const gmisettings = __ENV_IS_BBC__ ? game.gmi.getAllSettings() : false;
    this.game = game;
    this.model = gmisettings ?  { ...gmisettings } || {...model} : {...model};
    if (!gmisettings) {
      const stored = localStorage.getItem('jggsettings');
      if (stored) {
        this.model = { ...this.model, ...JSON.parse(stored) };
      }
    }
    this.gmi = gmisettings ? game.gmi : false;
  }

  get plugin() {
    console.log('plugin not suported via bbc base');
  }
  set plugin(value) {
    value;
    console.log('plugin not suported via bbc base');
  }

  get audio() {
    return this.model.audio;
  }

  get sfx() {
    return this.audio;
  }

  get music() {
    return this.audio;
  }

  get vo() {
    return this.audio;
  }

  get buttonAudio() {
    return this.audio;
  }

  get motion() {
    return this.audio;
  }

  get captions() {
    return this.model.subtitles || this.model.captions;
  }

  set audio(audio) {
    this.changeSetting('audio', audio);
    this.emit(SETTINGS_EVENTS.AUDIO_CHANGED);
  }

  set sfx(value) {
    value, console.log('sfx not supported in bbc base, call audio instead');
  }

  set music(value) {
    value, console.log('music not supported in bbc base, call audio instead');
  }

  set vo(value) {
    value, console.log('vo not supported in bbc base, call audio instead');
  }

  set buttonAudio(value) {
    value, console.log('buttonAudio not supported in bbc base, call audio instead');
  }

  set motion(motion) {
    this.changeSetting('motion', motion);
  }

  set captions(captions) {
    this.changeSetting('subtitles', captions);
  }

  getSetting(key) {
    console.log('getSetting', this.gmi)
    if (this.gmi) {
      console.log('getSetting', key)
      switch (key) {
        case 'audio':
          this.gmi.getAudio();
          break;
        case 'motion':
          this.gmi.getMotion(value);
          break;
        case 'subtitles':
          this.gmi.getSubtitles(value);
          break;
        default:
          return this.gmi.getAllSettings().gameData[key];
      }
    }
    return this.model[key];
  }

  changeSetting(key, value) {
    this.model[key] = value;
    if (this.gmi) {
      switch (key) {
        case 'audio':
          this.gmi.setAudio(value);
          break;
        case 'motion':
          this.gmi.setMotion(value);
          break;
        case 'subtitles':
          this.gmi.setSubtitles(value);
          break;
        default:
          this.gmi.setGameData(key, value);
          break;
      }
    } else {
      localStorage.setItem('jggsettings', JSON.stringify(this.model));
    }
    this.emit(SETTINGS_EVENTS.CHANGED, { key, value });
  }

  showSettings() {
    if (this.gmi) {
      return this.gmi.showSettings(
        this.onSettingsChangedViaGMIMenu.bind(this),
        this.onSettingsClosedViaGMIMenu.bind(this)
      );
    }
  }

  onSettingsChangedViaGMIMenu(key, value) {
    this.model[key] = value;
    this.emit(SETTINGS_EVENTS.CHANGED, { key, value });
    if (key === 'audio') {
      this.emit(SETTINGS_EVENTS.AUDIO_CHANGED, { key, value });
    }
  }

  onSettingsClosedViaGMIMenu() {
    super.onSettingsClosed();
  }
}
