import { LoadBase } from '@jollywise/jollygoodgame';
import { KEYS } from 'game/constants/SceneConstants';
import { FONTS } from 'game/constants/AppFonts';
import LoadScreen from 'game/display/ui/loading/LoadScreen';
import { ASSETPACK_KEYS } from '../constants/LoadConstants';

export default class Load extends LoadBase {
  constructor() {
    super({ key: KEYS.Load, active: false, debug: false });
  }

  renderScene() {
    this.loadScreen = new LoadScreen(this);
  }

  preload() {
    super.preload({ fonts: FONTS.APP });
    const assetPack = require('../../../assets/assetpack.json');
    this.load.setBaseURL(this.game.appUrls.getBaseDirectory());
    ASSETPACK_KEYS.LOAD.forEach((key) => this.load.addPack(assetPack, key));
    this.load.on('progress', this.loadScreen.setProgress, this.loadScreen);
  }

  create() {
    super.create();
    this.load.off('progress', this.loadScreen.setProgress, this.loadScreen);
    this.game.assetsLoaded();
  }

  shutdown() {
    if (this.loadScreen) {
      this.loadScreen.destroy(true);
      this.loadScreen = null;
    }
  }
}
