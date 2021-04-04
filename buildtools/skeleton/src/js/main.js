import './../scss/main.scss';
import App from 'App';
import Boot from 'game/scenes/Boot';
import Load from 'game/scenes/Load';
import { DomReady } from '@jollywise/jollygoodgame';
import { bootstrapBBC, getConfigGMI, getConfigBBC } from '@jollywise/jollygoodgame-bbc';

const gmi = window.getGMI ? window.getGMI({ settingsConfig: getConfigGMI() }) : false;
const paths = { base: gmi.gameDir || './', assets: 'assets/' };
const config = getConfigBBC({ gmi });

config.scene = [Boot, Load];

DomReady(() => {
  bootstrapBBC({ gameDir: gmi.gameDir }).then((response) => {
    if (response.success) {
      gmi && gmi.gameLoaded();
      new App({ gmi, config, paths });
    } else {
      console.error('Bootstrap failed');
    }
  });
});
