'use strict';
let instance = null;
import * as STATS from './Stats';

export class TrackingBBC {
  constructor({ gmi }) {
    if (!instance) {
      instance = this;
      this.game_paused = false;
      this.game_screen_id = STATS.PAGE_HOME;
      this.mini_game = { id: '', name: '', eraName: '' };
      this.saved_game_screen_id = null;
      this.running = false;
      this.gmi = gmi;
    }
    return instance;
  }

  destroy() {
    this.gmi = null;
    instance = null;
  }

  init() {}

  trackGameLoaded() {
    this.track(STATS.GAME_LOADED, 'true');
  }

  reset(id) {
    this.game_paused = false;
    this.game_screen_id = id;
    this.mini_game = { id: '', name: '', eraName: '' };
  }

  openSettings() {
    this.settings_saved_game_screen_id = this.game_screen_id;
    this.trackCustom({ name: STATS.SETTINGS, type: STATS.SETTINGS_OPEN });
  }

  closeSettings() {
    this.game_screen_id = this.settings_saved_game_screen_id;
    this.trackCustom({ name: STATS.SETTINGS, type: STATS.SETTINGS_CLOSE });
  }

  setGamePaused() {
    this.game_paused = true;
    // this.saveGameScreenID();
    // this.game_screen_id = STATS.SCREEN_PAUSED;
  }
  setGameResumed() {
    this.game_paused = false;
    // this.restoreGameScreenID();
  }

  saveGameScreenID() {
    this.saved_game_screen_id = this.game_screen_id;
  }

  restoreGameScreenID() {
    this.game_screen_id = this.saved_game_screen_id;
  }

  setGameScreen({ id }) {
    // console.log('setGameScreen', id);
    this.saved_game_screen_id = this.game_screen_id = id;
    this.trackPageView({ id });
  }

  trackPageView({ id }) {
    console.log('[STATS] gmi.setStatsScreen', id);
    this.gmi.setStatsScreen(id);
  }

  trackClick({ name = '', params = {} }) {
    this.track(name, STATS.GAME_CLICK, params);
  }

  trackCustom({ name = '', type = '', params = {} }) {
    this.track(name, type, params);
  }

  track(actionName = '', actionType = '', params = {}) {
    // params.container = STATS.CONTAINER;
    console.log('[STATS] gmi.sendStatsEvent', actionName, actionType, params);
    this.gmi.sendStatsEvent(actionName, actionType, params);
  }
}
