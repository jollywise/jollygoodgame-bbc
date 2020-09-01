import EventEmitter from 'eventemitter3';
import { SETTINGS_EVENTS } from './Events';

export class Settings extends EventEmitter {
  constructor(gmi, model) {
    super();
    this.gmi = gmi;
    this.model = model;
    this.onSettingChanged = this.onSettingChanged.bind(this);
    this.onSettingsClosed = this.onSettingsClosed.bind(this);
  }

  get audio() {
    return this.model._audio;
  }
  set audio(audio) {
    this.model._audio = audio;
    this.gmi.setAudio(audio); // GMI save
    this.emit(SETTINGS_EVENTS.CHANGED);
  }

  get motion() {
    return this.model._motion;
  }
  set motion(motion) {
    this.model._motion = motion;
    this.gmi.setMotion(motion); // GMI save
    this.emit(SETTINGS_EVENTS.CHANGED);
  }

  get subtitles() {
    return this.model._subtitles;
  }
  set subtitles(subtitles) {
    this.model._subtitles = subtitles;
    this.gmi.setSubtitles(subtitles); // GMI save
    this.emit(SETTINGS_EVENTS.CHANGED);
  }

  // Triggered from HUD settings button
  showSettings() {
    const gmiSettingsAvailable = this.gmi.showSettings(
      this.onSettingChanged,
      this.onSettingsClosed
    );
    return gmiSettingsAvailable;
  }

  // Received from GMI - external settings change
  onSettingChanged(key, value) {
    switch (key) {
      case 'audio':
        this.audio = value;
        break;
      case 'motion':
        this.motion = value;
        break;
      case 'subtitles':
        this.subtitles = value;
        break;
    }
  }

  onSettingsClosed() {
    this.emitter.emit('settingsClosed', {});
  }
}

// /**
//  * Singleton Controller to handle BBC Settings
//  */
// let instance = null;
// export class Settings {
//   constructor({ gmi }) {
//     if (!instance) {
//       instance = this;
//       this.gmi = gmi;
//       this.onSettingChanged = this.onSettingChanged.bind(this);
//       this.onSettingsClosed = this.onSettingsClosed.bind(this);
//
//       this.emitter = new Phaser.Events.EventEmitter();
//     }
//     return instance;
//   }
//
//   getAllSettings() {
//     const settings = this.gmi && this.gmi.getAllSettings();
//     return settings || {};
//   }
//
//   getGameData() {
//     const settings = this.getAllSettings();
//     return settings.gameData || {};
//   }
//
//   getButtonAudio() {
//     const gameData = this.getGameData();
//     const button_audio = gameData.button_audio;
//     if (typeof button_audio !== 'undefined') {
//       return button_audio;
//     } else {
//       return false;
//     }
//   }
//
//   destroy() {
//     this.gmi = null;
//     this.emitter = null;
//     instance = null;
//   }
//
//   setTouchLocked(value) {
//     this._touchLocked = value;
//   }
//   /**
//    * AUDIO
//    *
//    * BBC wants audio to be used (but still supports muted). Audio = true is muted = false
//    * see : https://github.com/bbc/childrens-games-starter-pack/blob/master/docs/gmi.md
//    */
//   toggleAudio() {
//     const state = !this.getAudio();
//     this.setAudio(state);
//     return { isMuted: !state };
//   }
//   setAudio(value) {
//     this.gmi.setAudio(value);
//     this.emitter.emit('settingsAudioChanged', { muted: !value });
//   }
//   getAudio() {
//     return this.getAllSettings().audio;
//   }
//   getIsMuted() {
//     return !this.getAllSettings().audio;
//   }
//
//   /**
//    * MOTION
//    */
//   toggleMotion() {
//     const state = !this.getMotion();
//     this.setMotion(state);
//     return state;
//   }
//   setMotion(value) {
//     this.gmi.setMotion(value);
//     this.emitter.emit('settingsMotionChanged', { motion: value });
//   }
//   getMotion() {
//     return this.getAllSettings().motion;
//   }
//   getMotionIsDisabled() {
//     return !this.getAllSettings().motion;
//   }
//
//   /**
//    * SUBTITLES
//    */
//   setSubtitles(value) {
//     this.gmi.setSubtitles(value);
//     this.emitter.emit('settingsSubtitlesChanged', {});
//   }
//   getSubtitles() {
//     return this.getAllSettings().subtitles;
//   }
//
//   /**
//    * BUTTON AUDIO
//    */
//   setButtonAudio(val = true) {
//     console.log('setButtonAudio', val);
//     this.gmi.setGameData('button_audio', val);
//   }
//   getButtonAudioIsMuted() {
//     const hasButtonAudio = this.getButtonAudio();
//     return !hasButtonAudio;
//   }
//
//   /**
//    * GLOBAL
//    */
//   getGlobalSettings() {
//     return this.getAllSettings();
//   }
//
//   showSettings() {
//     const gmiSettingsAvailable = this.gmi.showSettings(
//       this.onSettingChanged,
//       this.onSettingsClosed
//     );
//
//     const r = this.getAllSettings();
//     this.settingsSnapshot = { audio: r.audio, motion: r.motion, subtitles: r.subtitles };
//     return gmiSettingsAvailable;
//   }
//
//   onSettingChanged(key, value) {
//     if (key === 'audio') {
//       this.emitter.emit('settingsAudioChanged', {});
//     }
//     if (key === 'motion') {
//       this.emitter.emit('settingsMotionChanged', {});
//     }
//     if (key === 'subtitles') {
//       this.emitter.emit('settingsSubtitlesChanged', {});
//     }
//     if (key === 'button_audio') {
//     }
//     this.emitter.emit('settingsChanged');
//   }
//
//   onSettingsClosed() {
//     const currentSettings = this.getAllSettings();
//     let settingsHasChanged = false;
//     const settings_changed = Object.keys(this.settingsSnapshot).reduce((acc, val, ind) => {
//       if (currentSettings[val] !== this.settingsSnapshot[val]) {
//         acc[val] = currentSettings[val];
//         settingsHasChanged = true;
//       }
//       return acc;
//     }, {});
//     this.settingsSnapshot = null;
//     this.emitter.emit('settingsClosed', {});
//   }
// }
