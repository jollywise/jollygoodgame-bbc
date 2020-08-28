import AppBBC from 'AppBBC';
import { adjustDOM, dOMReady } from 'bbc/Bootstrap';

export const bootstrap = (renderer, appConf, gmiConf) => {
  const gmi = window.getGMI({ settingsConfig: gmiConf });
  adjustDOM(gmi, true).then((response) => {
    if (response.success) {
      /*
       * Start app
       */

      gmi && gmi.gameLoaded();
      const paths = { base: './', assets: 'assets/' };
      new AppBBC({ gmi, config, gameMode: '', paths });
    } else {
      console.error('No domElement returned');
    }
  });
};

dOMReady(() => {
  bootstrap();
});
