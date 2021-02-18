import { Hud, ButtonSound } from '@jollywise/jollygoodgame';
import { ButtonBBC } from '@jollywise/jollygoodgame-bbc/src/bbc/hud/ButtonBBC';

export default class HudBBC extends Hud {
  createStateButton(config, overwrite = false) {
    // button already exists
    if (this._stateButtons[config.id]) {
      if (overwrite) {
        // overwrite is enable, destroy current button
        this.removeStateButton(config.id);
      } else {
        // overwrite is disabled, return
        return false;
      }
    }

    let btn;
    switch (config.id) {
      case 'btn_sound':
        btn = new ButtonSound(this, config);
        break;
      default:
        btn = new ButtonBBC(this, config);
    }

    btn.on('click', this.handleButtonInteraction, this);
    this.add.existing(btn);

    // add button to group if desired
    if (config.buttongroup) {
      this.addToButtonGroup(btn, config.buttongroup);
    }

    // register button
    this._stateButtons[config.id] = btn;
  }
}
