import { TrackingPlugin } from './tracking/TrackingPlugin';

export const ComponentMap = {
  CORE: [
    {
      key: 'tracking',
      component: TrackingPlugin,
      gameKey: true,
      sceneKey: true,
    },
  ],
};
