import { ButtonSimple } from '@jollywise/jollygoodgame';

export class ButtonBBC extends ButtonSimple {
  constructor(scene, opts) {
    super(scene, opts);

    const {
      enabled = true,
    } = opts;

    this.calculateSize();

    if (enabled) {
      enabled && this.enable();
      this.enterButtonRestState();
    } else {
      this.disable();
    }
  }

  calculateSize() {
    const baseSize = window.screen.width < 770 ? 42 : 64;
    const padding = window.screen.width < 770 ? 9 : 3;
    const canvasScale = this.scene.game.canvas.clientHeight / 720;
    const targetSize = baseSize / canvasScale;
    const currentSize = Math.max(this.width, this.height);
    if (currentSize < targetSize) {
      this.setData('hitarea', [
        -padding,
        -padding,
        this.width + padding * 2,
        this.height + padding * 2,
      ]);
      this.setData('targetscale', targetSize / currentSize);
      this.setScale(this.getData('targetscale'));
    } else {
      this.setScale(1);
      this.setData('targetscale', 1);
      this.setData('hitarea', [0, 0, this.width, this.height]);
    }
  }

  enable() {
    if (!this.buttonEnabled) {
      super.enable();
      if (this.getData('hitarea')) {
        this.input.hitArea.setTo(...this.getData('hitarea'));
      }
    }
  }

  // button events
  enterButtonHoverState() {
    if (this.buttonEnabled) {
      super.enterButtonHoverState();
      this.scale = this.getData('targetscale') + 0.2;
    }
  }

  enterButtonRestState() {
    this.scale = this.getData('targetscale');
    this.setFrame(this.costume);
  }

  enterButtonActiveState() {
    super.enterButtonActiveState();
    this.scale = this.getData('targetscale') + 0.2;
  }
}
