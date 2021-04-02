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
    this.showWelcome();
  }

  showWelcome() {
    this.sceneController.switchScene(KEYS.Welcome, { data: {} });
  }
}
