const SERIALISE_KEYS = [];
const MODEL_ID = 'player';

export default class PlayerModel {
  constructor(saves, id) {
    this.saves = saves;
    this.load();
  }

  /*
   * Save Methods
   */
  load() {
    this.saves.deserialize(this, MODEL_ID);
    this.save();
  }

  save() {
    const data = this.saves.serialize(this, MODEL_ID, SERIALISE_KEYS);
    this.saves.save({ data });
  }
}
