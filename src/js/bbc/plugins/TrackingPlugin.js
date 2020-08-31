export class TrackingPlugin {
  constructor(gmi, stats, debug = false) {
    this.gmi = gmi;
    this.stats = stats;
    this.debug = debug;
    this.supported = this.isSupported();
  }

  /*
   * name, type, params
   */
  track(opts) {
    if (this.supported) {
      this.trackInternal(opts);
    }
  }

  /*
   * id : pageId
   */
  setPage(opts) {
    if (this.supported) {
      this.setPageInternal(opts);
    }
  }

  trackGameLoaded() {
    this.track(this.stats.GAME_LOADED, 'true');
  }

  // internal
  trackInternal(actionName = '', actionType = '', params = {}) {
    // params.container = STATS.CONTAINER;
    this.debug && console.log('[STATS] gmi.sendStatsEvent', actionName, actionType, params);
    this.gmi.sendStatsEvent(actionName, actionType, params);
  }

  setPageInternal({ id }) {
    this.debug && console.log('[STATS] gmi.setStatsScreen', id);
    this.gmi.setStatsScreen(id);
  }

  isSupported() {
    if (typeof this.gmi !== 'undefined') {
      console.log('BBC TrackingPlugin registered');
      return true;
    }
    console.warn('BBC TrackingPlugin : GMI not available');
    return false;
  }

  destroy() {
    this.gmi = '';
    this.stats = null;
  }
}
