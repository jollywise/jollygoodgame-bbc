export class TrackingPlugin {
  constructor(gmi, debug = false) {
    this.gmi = gmi;
    this.debug = debug;
    this.stats = {};
    this.supported = this.isSupported();
  }

  track(opts) {
    if (this.supported) {
      this.trackInternal(opts);
    }
  }

  setPage(opts) {
    if (this.supported) {
      this.setPageInternal(opts);
    }
  }

  trackGameLoaded() {
    if (this.supported) {
      this.trackInternal({ actionName: 'gameLoaded', actionType: 'true' });
    }
  }

  trackGameClick(name, params) {
    if (this.supported) {
      this.trackInternal({ actionName: name, actionType: 'click', params });
    }
  }

  addStats(stats) {
    this.stats = stats;
  }

  // internal
  trackInternal({ actionName = '', actionType = '', params = {} }) {
    // params.container = STATS.CONTAINER;
    this.debug && console.log('[STATS] gmi.sendStatsEvent', actionName, actionType, params);
    this.gmi.sendStatsEvent(actionName, actionType, params);
  }

  setPageInternal({ id }) {
    this.debug && console.log('[STATS] gmi.setStatsScreen', id);
    this.gmi.setStatsScreen(id);
  }

  isSupported() {
    if (typeof this.gmi !== 'undefined' && this.gmi !== null) {
      console.log('BBC TrackingPlugin registered');
      return true;
    }
    console.warn('BBC TrackingPlugin : GMI not available');
    return false;
  }

  destroy() {
    this.gmi = null;
    this.stats = {};
  }
}
