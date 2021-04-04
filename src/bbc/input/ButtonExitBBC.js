import { ButtonBBC } from './ButtonBBC';

export class ButtonExitBBC extends ButtonBBC {
  constructor(scene, opts) {
    super(scene, opts);
    if (!this._supported) {
      this.setActive(false);
      this.setVisible(false);
      this.setSize(0, 0);
      this.disable();
      this.displayWidth = this.displayHeight = 0;
      this.setData('hitarea', [0, 0, 0, 0]);
    }
  }

  get _supported() {
    return this.scene.game.gmi && this.scene.game.gmi.shouldShowExitButton;
  }

  calculateSize() {
    if (this._supported) super.calculateSize();
    else {
      this.setData('hitarea', [0, 0, 0, 0]);
    }
  }

  enable() {
    if (this._supported) super.enable();
  }

  enterButtonClickState() {
    super.enterButtonClickState();
    this.scene.game.gmi ? this.scene.game.gmi.exit() : null;
  }
}
