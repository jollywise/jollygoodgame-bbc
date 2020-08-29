(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jollygoodgame"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["jollygoodgame-bbc"] = factory(require("jollygoodgame"));
	else
		root["jollygoodgame-bbc"] = factory(root["jollygoodgame"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__jollywise_jollygoodgame__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/AppBBC.js":
/*!**************************!*\
  !*** ./src/js/AppBBC.js ***!
  \**************************/
/*! exports provided: AppBBC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBBC", function() { return AppBBC; });
/* harmony import */ var _jollywise_jollygoodgame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jollywise/jollygoodgame */ "@jollywise/jollygoodgame");
/* harmony import */ var _jollywise_jollygoodgame__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jollywise_jollygoodgame__WEBPACK_IMPORTED_MODULE_0__);


class AppBBC extends _jollywise_jollygoodgame__WEBPACK_IMPORTED_MODULE_0__["AppBase"] {
  constructor(opts) {
    super(opts);
    const { gmi } = opts;
    this._gmi = gmi;

    /*
     * Set up BBC Stats and Settings here
     *
     * Will leave this for you Chris :D
     *
     */
  }

  get gmi() {
    return this._gmi;
  }
}


/***/ }),

/***/ "./src/js/bbc/StorageBBCPlugin.js":
/*!****************************************!*\
  !*** ./src/js/bbc/StorageBBCPlugin.js ***!
  \****************************************/
/*! exports provided: StorageBBCPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageBBCPlugin", function() { return StorageBBCPlugin; });
class StorageBBCPlugin {
  constructor(gmi) {
    this.gmi = gmi;
    return this.isSupported();
  }

  get key() {
    return null;
  }
  set key(val) {}

  deleteGameData(saveId) {
    if (this.gmi) {
      this.gmi.setGameData(saveId, JSON.stringify({}));
    } else {
      console.warn('GMI not available');
    }
  }

  setGameData(saveId, value) {
    const savesString = JSON.stringify(value);
    if (this.gmi) {
      this.gmi.setGameData(saveId, savesString);
    } else {
      console.warn('GMI not available');
    }
  }

  getGameData() {
    const settings = this.loadData();
    return settings.gameData || {};
  }

  // internal

  isSupported() {
    return true;
  }

  loadData() {
    if (this.gmi) {
      const settings = this.gmi.getAllSettings();
      return settings || {};
    } else {
      console.warn('GMI not available');
    }
    return {};
  }

  destroy() {
    this.gmi = '';
    this.data = null;
  }
}


/***/ }),

/***/ "./src/js/bbc/bootstrap.js":
/*!*********************************!*\
  !*** ./src/js/bbc/bootstrap.js ***!
  \*********************************/
/*! exports provided: bootstrapBBC, dOMReady */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bootstrapBBC", function() { return bootstrapBBC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dOMReady", function() { return dOMReady; });
const bootstrapBBC = (gameDir) => {
  const promise = new Promise((resolve) => {
      // Add css to html head
      const ss = document.createElement('link');
      ss.type = 'text/css';
      ss.rel = 'stylesheet';
      ss.href = gameDir + 'css/main.css';
      document.getElementsByTagName('head')[0].appendChild(ss);
      resolve({ success: true });
  });
  return promise;
};

/*
 * https://stackoverflow.com/questions/3698200/window-onload-vs-document-ready
 * https://stackoverflow.com/questions/799981/document-ready-equivalent-without-jquery/55649686#55649686
 */

/*
 * TODO: Move this into base
 */
const dOMReady = function (callback) {
  if (document.readyState === 'interactive' || document.readyState === 'complete') {
    callback();
  } else if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', callback());
  } else if (document.attachEvent) {
    document.attachEvent('onreadystatechange', function () {
      if (document.readyState !== 'loading') {
        callback();
      }
    });
  }
};


/***/ }),

/***/ "./src/js/bbc/config.js":
/*!******************************!*\
  !*** ./src/js/bbc/config.js ***!
  \******************************/
/*! exports provided: GMI_CONFIG_BASE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GMI_CONFIG_BASE", function() { return GMI_CONFIG_BASE; });
const GMI_CONFIG_BASE = {
  pages: [
    {
      title: 'Game Settings',
      settings: [
        {
          key: 'audio',
          type: 'toggle',
          title: 'Audio',
          description: 'Turn off/on sound and music',
        },
        {
          key: 'motion',
          type: 'toggle',
          title: 'Motion',
          description: 'Turn off/on motion',
        },
      ],
    },
  ],
};



/***/ }),

/***/ "./src/js/bbc/index.js":
/*!*****************************!*\
  !*** ./src/js/bbc/index.js ***!
  \*****************************/
/*! exports provided: bootstrapBBC, dOMReady, GMI_CONFIG_BASE, BBC_STATS_BASE, StorageBBCPlugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap */ "./src/js/bbc/bootstrap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bootstrapBBC", function() { return _bootstrap__WEBPACK_IMPORTED_MODULE_0__["bootstrapBBC"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dOMReady", function() { return _bootstrap__WEBPACK_IMPORTED_MODULE_0__["dOMReady"]; });

/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./src/js/bbc/config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GMI_CONFIG_BASE", function() { return _config__WEBPACK_IMPORTED_MODULE_1__["GMI_CONFIG_BASE"]; });

/* harmony import */ var _stats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stats */ "./src/js/bbc/stats.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BBC_STATS_BASE", function() { return _stats__WEBPACK_IMPORTED_MODULE_2__["BBC_STATS_BASE"]; });

/* harmony import */ var _StorageBBCPlugin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StorageBBCPlugin */ "./src/js/bbc/StorageBBCPlugin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StorageBBCPlugin", function() { return _StorageBBCPlugin__WEBPACK_IMPORTED_MODULE_3__["StorageBBCPlugin"]; });







/***/ }),

/***/ "./src/js/bbc/stats.js":
/*!*****************************!*\
  !*** ./src/js/bbc/stats.js ***!
  \*****************************/
/*! exports provided: BBC_STATS_BASE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BBC_STATS_BASE", function() { return BBC_STATS_BASE; });
const BBC_STATS_BASE = {
  APP_NAME: '',
  APP_TYPE: '',
  CONTAINER: '',

  /**
   * actionTypes
   */
  GAME_CLICK: 'click',
  SETTINGS_OPEN: 'open',
  SETTINGS_CLOSE: 'close',
  SETTINGS_ON: 'on',
  SETTINGS_OFF: 'off',

  /**
   * actionNames
   */
  SETTINGS: 'settings',
  GAME_LOADED: 'gameloaded',
  PLAY: 'play',
  AUDIO: 'audio',         // [on / off]
  SUBTITLES: 'subtitles', // [on / off]
  MOTION: 'motion',       // [on / off]

  /**
   * Page Views
   */
  PAGE_HOME: 'home',
  PAGE_SETTINGS: 'settings',
  // extend these as required
}


/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! exports provided: bootstrapBBC, dOMReady, GMI_CONFIG_BASE, BBC_STATS_BASE, StorageBBCPlugin, AppBBC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bbc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bbc */ "./src/js/bbc/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bootstrapBBC", function() { return _bbc__WEBPACK_IMPORTED_MODULE_0__["bootstrapBBC"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dOMReady", function() { return _bbc__WEBPACK_IMPORTED_MODULE_0__["dOMReady"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GMI_CONFIG_BASE", function() { return _bbc__WEBPACK_IMPORTED_MODULE_0__["GMI_CONFIG_BASE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BBC_STATS_BASE", function() { return _bbc__WEBPACK_IMPORTED_MODULE_0__["BBC_STATS_BASE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StorageBBCPlugin", function() { return _bbc__WEBPACK_IMPORTED_MODULE_0__["StorageBBCPlugin"]; });

/* harmony import */ var _AppBBC__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppBBC */ "./src/js/AppBBC.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppBBC", function() { return _AppBBC__WEBPACK_IMPORTED_MODULE_1__["AppBBC"]; });





/***/ }),

/***/ "@jollywise/jollygoodgame":
/*!************************************************************************************************!*\
  !*** external {"commonjs":"jollygoodgame","commonjs2":"jollygoodgame","root":"jollygoodgame"} ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__jollywise_jollygoodgame__;

/***/ })

/******/ });
});