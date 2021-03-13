import { GameHudPlugin } from '@jollywise/jollygoodgame';
import { ButtonBBC } from '../..//input/ButtonBBC';
export class GameHudPluginBBC extends GameHudPlugin {
  constructor(pluginManager) {
    super(pluginManager);
  }

  get defaultButton() {
    return this._hudConfig.defaultButton ? this._hudConfig.defaultButton : ButtonBBC;
  }
}
