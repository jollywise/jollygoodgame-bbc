import { ButtonSoundBBC, ButtonBBC } from '@jollywise/jollygoodgame-bbc';

export default {
  defaultButton: ButtonBBC,
  modal: { colour: '0x000000', alpha: 0.8 },
  howtoplay: [],
  buttons: {
    home: {
      id: 'btn_home',
      costume: 'btn_home',
      buttongroup: 'topleft',
      ariaLabel: 'home',
      gelvo: 'home',
      event: 'RETURN_HOME',
    },
    pause: {
      id: 'btn_pause',
      costume: 'btn_pause',
      buttongroup: 'topright',
      ariaLabel: 'pause',
      gelvo: 'pause',
      event: 'PAUSE_GAME',
    },
    howtoplay: {
      id: 'btn_howtoplay',
      costume: 'btn_howtoplay',
      buttongroup: 'bottomright',
      ariaLabel: 'how to play',
      gelvo: 'how_to_play',
      event: 'SHOW_INSTRUCTIONS',
    },
    howtoplay_back: {
      id: 'btn_back',
      costume: 'btn_back',
      buttongroup: 'topleft',
      ariaLabel: 'back',
      gelvo: 'ui_back',
      event: 'CLOSE_INSTRUCTIONS',
    },
    exit_game: {
      id: 'btn_exit',
      costume: 'btn_exit',
      buttongroup: 'topleft',
      ariaLabel: 'exit',
      gelvo: 'exit',
      event: 'EXIT_GAME',
    },
    settings: {
      id: 'btn_settings',
      costume: 'btn_settings',
      buttongroup: 'topright',
      ariaLabel: 'settings',
      gelvo: 'settings',
      event: 'SHOW_SETTINGS',
    },
    sound: {
      id: 'btn_sound',
      costume: 'btn_sound',
      buttongroup: 'topright',
      ariaLabel: 'toggle sound',
      event: 'TOGGLE_SOUND',
      buttonClass: ButtonSoundBBC,
    },
    pause_resume: {
      id: 'btn_resume',
      costume: 'btn_play',
      buttongroup: 'center',
      ariaLabel: 'resume',
      gelvo: 'resume',
      event: 'RESUME_GAME',
    },
    start_game: {
      id: 'btn_play',
      costume: 'btn_play',
      buttongroup: 'welcome',
      ariaLabel: 'start game',
      gelvo: 'play',
      event: 'START_GAME',
    },
  },
  states: {
    EMPTY: {
      modal: false,
      buttons: [],
    },
    WELCOME: {
      buttons: ['exit_game', 'sound', 'settings', 'start_game', 'howtoplay'],
    },
    BASIC: {
      modal: false,
      buttons: ['pause'],
    },
    PAUSE: {
      modal: true,
      buttons: ['home', 'sound', 'settings', 'pause_resume', 'howtoplay'],
    },
    HOW_TO_PLAY: {
      modal: false,
      buttons: ['howtoplay_back'],
    },
  },
  buttongroups: {
    center: {
      anchor_group: { x: 0.5, y: 0.5 },
      anchor_screen: { x: 0.5, y: 0.5 },
      align_buttons: 'center',
    },
    welcome: {
      anchor_group: { x: 0.5, y: 0.5 },
      anchor_screen: { x: 0.5, y: 0.65 },
      align_buttons: 'center',
    },
    topright: {
      anchor_group: { x: 1, y: 0 },
      anchor_screen: { x: 1, y: 0 },
      align_buttons: 0,
    },
    topleft: {
      anchor_group: { x: 0, y: 0 },
      anchor_screen: { x: 0, y: 0 },
      align_buttons: 0,
    },
    bottomleft: {
      anchor_group: { x: 0, y: 1 },
      anchor_screen: { x: 0, y: 1 },
      align_buttons: 1,
    },
    bottomright: {
      anchor_group: { x: 1, y: 1 },
      anchor_screen: { x: 1, y: 1 },
      align_buttons: 1,
    },
  },
};
