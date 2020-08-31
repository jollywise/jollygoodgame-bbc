export class SettingsModel {
  constructor({ audio, motion, muted, subtitles }) {
    this._audio = audio;
    this._motion = motion;
    this._muted = muted;
    this._subtitles = subtitles;
  }
}
