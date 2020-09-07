import EventEmitter from 'eventemitter3';
import { SETTINGS_EVENTS } from '@jollybase/jollygoodgame';

export class SettingsPlugin extends EventEmitter {
  constructor(gmi) {
    super();
    this.gmi = gmi;
    this.supported = this.isSupported();
  }

  set audio(audio) {
    if (this.supported) {
      this.gmi.setAudio(audio); // GMI save
    }
  }

  set motion(motion) {
    if (this.supported) {
      this.gmi.setMotion(motion); // GMI save
    }
  }

  set captions(captions) {
    if (this.supported) {
      this.gmi.setSubtitles(captions); // GMI save
    }
  }

  showSettings() {
    if (!this.supported) {
      return false;
    }
    return this.gmi.showSettings(
      this.onSettingChanged.bind(this),
      this.onSettingsClosed.bind(this)
    );
  }

  onSettingChanged(key, value) {
    switch (key) {
      case 'audio':
        this.emit(SETTINGS_EVENTS.CHANGED, { key, value });
        break;
      case 'motion':
        this.emit(SETTINGS_EVENTS.CHANGED, { key, value });
        break;
      case 'subtitles':
        this.emit(SETTINGS_EVENTS.CHANGED, { key: 'captions', value });
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
