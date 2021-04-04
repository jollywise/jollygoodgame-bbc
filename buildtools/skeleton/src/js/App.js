import { BBCAppBase } from '@jollywise/jollygoodgame-bbc';
import { KEYS, SCENE_MAP } from 'game/constants/SceneConstants';
import PlayerModel from 'game/model/PlayerModel';
import HudConfig from './game/constants/HudConfig';

export default class App extends BBCAppBase {
  constructor(opts) {
    super(opts);
  }

  assetsLoaded() {
    super.assetsLoaded();
    this.hud.setHudConfig(HudConfig);
    this.sceneController.addSceneMap(SCENE_MAP);
    this.playerModel = new PlayerModel(this.saves, this.saves.getSaveId, {});
    this._setHudEvents();
    this.showWelcome();
  }

  // =============================================================================================
  // SCENES
  // =============================================================================================

  returnHome() {
    if (this.paused) this.resumeGame();
    this.showWelcome();
  }

  showWelcome() {
    this.sceneController.switchScene(KEYS.Welcome, { data: {} });
  }

  playGame() {
    console.log('play game');
  }

  // =============================================================================================
  // HUD EVENTS
  // =============================================================================================

  _setHudEvents() {
    this.hud.setHudConfig(HudConfig);
    this.hud.events.on('PAUSE_GAME', this.pauseGame, this);
    this.hud.events.on('RESUME_GAME', this.resumeGame, this);
    this.hud.events.on('RETURN_HOME', this.returnHome, this);
    this.hud.events.on('START_GAME', this.playGame, this);
    this.hud.events.on('SHOW_INSTRUCTIONS', this.showHowToPlay, this);
    this.hud.events.on('CLOSE_INSTRUCTIONS', this.closeHowToPlay, this);
    this.hud.events.on('SHOW_SETTINGS', this.settings.showSettings, this.settings);
    this.hud.events.on('TOGGLE_SOUND', this.settings.toggleAudio, this.settings);
  }

  // =============================================================================================
  // HOW TO PLAY
  // =============================================================================================

  showHowToPlay() {
    // this.sceneController.showOverlayScene(KEYS.HowToPlay, {
    //   data: { content: HudConfig.howtoplay },
    // });
    // this.sceneController.resumeScene(KEYS.HowToPlay);
    this.hud.setState('HOW_TO_PLAY');
  }

  closeHowToPlay() {
    // this.sceneController.pauseScene(KEYS.HowToPlay);
    // this.sceneController.removeOverlayScene();
    this.hud.resumePreviousState();
  }
}
