/**
 * Singleton Controller to handle BBC Settings
 */
let instance = null;
export class Settings {
  constructor({ gmi }) {
    if (!instance) {
      instance = this;
      this.gmi = gmi;
      this.onSettingChanged = this.onSettingChanged.bind(this);
      this.onSettingsClosed = this.onSettingsClosed.bind(this);

      this.emitter = new Phaser.Events.EventEmitter();
    }
    return instance;
  }

  getAllSettings() {
    const settings = this.gmi && this.gmi.getAllSettings();
    return settings || {};
  }

  getGameData() {
    const settings = this.getAllSettings();
    return settings.gameData || {};
  }

  getButtonAudio() {
    const gameData = this.getGameData();
    const button_audio = gameData.button_audio;
    if (typeof button_audio !== 'undefined') {
      return button_audio;
    } else {
      return false;
    }
  }

  destroy() {
    this.gmi = null;
    this.emitter = null;
    instance = null;
  }

  setTouchLocked(value) {
    this._touchLocked = value;
  }
  /**
   * AUDIO
   *
   * BBC wants audio to be used (but still supports muted). Audio = true is muted = false
   * see : https://github.com/bbc/childrens-games-starter-pack/blob/master/docs/gmi.md
   */
  toggleAudio() {
    const state = !this.getAudio();
    this.setAudio(state);
    return { isMuted: !state };
  }
  setAudio(value) {
    this.gmi.setAudio(value);
    this.emitter.emit('settingsAudioChanged', { muted: !value });
  }
  getAudio() {
    return this.getAllSettings().audio;
  }
  getIsMuted() {
    return !this.getAllSettings().audio;
  }

  /**
   * MOTION
   */
  toggleMotion() {
    const state = !this.getMotion();
    this.setMotion(state);
    return state;
  }
  setMotion(value) {
    this.gmi.setMotion(value);
    this.emitter.emit('settingsMotionChanged', { motion: value });
  }
  getMotion() {
    return this.getAllSettings().motion;
  }
  getMotionIsDisabled() {
    return !this.getAllSettings().motion;
  }

  /**
   * SUBTITLES
   */
  setSubtitles(value) {
    this.gmi.setSubtitles(value);
    this.emitter.emit('settingsSubtitlesChanged', {});
  }
  getSubtitles() {
    return this.getAllSettings().subtitles;
  }

  /**
   * BUTTON AUDIO
   */
  setButtonAudio(val = true) {
    console.log('setButtonAudio', val);
    this.gmi.setGameData('button_audio', val);
  }
  getButtonAudioIsMuted() {
    const hasButtonAudio = this.getButtonAudio();
    return !hasButtonAudio;
  }

  /**
   * GLOBAL
   */
  getGlobalSettings() {
    return this.getAllSettings();
  }

  showSettings() {
    const gmiSettingsAvailable = this.gmi.showSettings(
      this.onSettingChanged,
      this.onSettingsClosed
    );

    const r = this.getAllSettings();
    this.settingsSnapshot = { audio: r.audio, motion: r.motion, subtitles: r.subtitles };
    return gmiSettingsAvailable;
  }

  onSettingChanged(key, value) {
    if (key === 'audio') {
      this.emitter.emit('settingsAudioChanged', {});
    }
    if (key === 'motion') {
      this.emitter.emit('settingsMotionChanged', {});
    }
    if (key === 'subtitles') {
      this.emitter.emit('settingsSubtitlesChanged', {});
    }
    if (key === 'button_audio') {
    }
    this.emitter.emit('settingsChanged');
  }

  onSettingsClosed() {
    const currentSettings = this.getAllSettings();
    let settingsHasChanged = false;
    const settings_changed = Object.keys(this.settingsSnapshot).reduce((acc, val, ind) => {
      if (currentSettings[val] !== this.settingsSnapshot[val]) {
        acc[val] = currentSettings[val];
        settingsHasChanged = true;
      }
      return acc;
    }, {});
    this.settingsSnapshot = null;
    this.emitter.emit('settingsClosed', {});
  }
}
