import { Hud, SETTINGS_EVENTS } from '@jollywise/jollygoodgame';
import { ButtonBBC } from './ButtonBBC';
import { ButtonSoundBBC } from './ButtonSoundBBC';

export class HudBBC extends Hud {
  constructor() {
    super({ key: 'Hud', active: true });
  }

  create() {
    super.create();
    this.game.settings.on(SETTINGS_EVENTS.CHANGED, this.setSettingsIcons, this);
  }

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
        btn = new ButtonSoundBBC(this, config);
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

  setState(hudid, save = true) {
    super.setState(hudid, save);
    this.setSettingsIcons();
  }

  updatePosition() {
    super.updatePosition();
    this.setSettingsIcons();
  }

  setSettingsIcons() {
    if (!this._hudConfig || !this._hudConfig.settings_icons) return;

    if (!this.settingsIcons) {
      const icons = this._hudConfig.settings_icons;
      if (icons) {
        const keys = Object.keys(icons);
        this.settingsIcons = keys.map((key) => {
          const data = icons[key];
          const icon = this.add.image(0, 0, data.sprite || 'buttons', data.id).setOrigin(0, 0.5);
          icon.setData('config', data);
          return icon;
        });
      }
    }

    const group = this.getButtonGroup('topright');
    let width = group ? group.groupwidth + 20 : 0;
    let height = group ? group.groupheight : 0;
    this.settingsIcons.forEach((icon) => {
      const { hide_if_button, hide_if_setting } = icon.getData('config');
      if (hide_if_button) {
        const hide = hide_if_button.find((a) => this._stateButtons[a]);
        if (hide) {
          icon.visible = false;
          return;
        }
      }
      if (hide_if_setting) {
        const hide = hide_if_setting.find((a) => this.game.settings.getSetting(a));
        if (hide) {
          icon.visible = false;
          return;
        }
      }

      icon.visible = true;
      icon.y = this.game.viewportController.topPadded + height * 0.5;
      icon.x = this.game.viewportController.rightPadded - width - icon.displayWidth;
      width += icon.displayWidth + 20;
    });
  }
}
