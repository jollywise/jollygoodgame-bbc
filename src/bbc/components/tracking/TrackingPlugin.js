export class TrackingPlugin extends Phaser.Plugins.BasePlugin {
  constructor(scene, pluginManager) {
    super(scene, pluginManager);
  }

  track(data) {
    console.log('[TrackingPlugin] Unhandled track event', data);
  }

  setPage(data) {
    console.log('[TrackingPlugin] Unhandled setPage event', data);
  }

  trackGameLoaded(data) {
    console.log('[TrackingPlugin] Unhandled trackGameLoaded event', data);
  }

  trackGameClick(data) {
    console.log('[TrackingPlugin] Unhandled trackGameClick event', data);
  }
}
