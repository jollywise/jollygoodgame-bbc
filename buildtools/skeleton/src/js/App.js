import { BBCAppBase } from '@jollywise/jollygoodgame-bbc';
import GameController from 'game/controller/GameController';

export default class App extends BBCAppBase {
  constructor(opts) {
    super(opts);

    this.controller = new GameController({
      game: this,
    });
  }
}
