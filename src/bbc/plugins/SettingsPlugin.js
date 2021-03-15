import { SETTINGS_EVENTS, SettingsBase } from '@jollywise/jollygoodgame';

export class SettingsPlugin extends SettingsBase {
  constructor(gmi) {
    super();
    this.gmi = gmi;
    this.supported = this.isSupported();
  }

  get audio() {
    return this.gmi.getAllSettings().audio;
  }

  get motion() {
    return this.gmi.getAllSettings().motion;
  }

  get captions() {
    return this.gmi.getAllSettings().subtitles;
  }

  set audio(audio) {
    this.gmi.setAudio(audio);
    this.emit(SETTINGS_EVENTS.CHANGED);
    this.emit(SETTINGS_EVENTS.AUDIO_CHANGED);
  }

  set motion(motion) {
    this.gmi.setMotion(motion);
    this.emit(SETTINGS_EVENTS.CHANGED);
  }

  set captions(captions) {
    this.gmi.setSubtitles(captions);
    this.emit(SETTINGS_EVENTS.CHANGED);
  }

  showSettings() {
    return this.gmi.showSettings(
      this.onSettingChanged.bind(this),
      this.onSettingsClosed.bind(this)
    );
  }

  onSettingChanged(key, value) {
    switch (key) {
      case 'audio':
        this.audio = value;
        break;
      case 'motion':
        this.motion = value;
        break;
      case 'subtitles':
        this.captions = value;
        break;
    }
  }

  onSettingsClosed() {
    this.emit(SETTINGS_EVENTS.CLOSED);
  }

  isSupported() {
    if (typeof this.gmi !== 'undefined') {
      console.log('BBC SettingsPlugin registered');
      return true;
    }
    console.warn('BBC SettingsPlugin : GMI not available');
    return false;
  }
}
