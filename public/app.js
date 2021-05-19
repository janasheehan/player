(function() {
  'use strict';

  var globals = typeof global === 'undefined' ? self : global;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};
  var aliases = {};
  var has = {}.hasOwnProperty;

  var expRe = /^\.\.?(\/|$)/;
  var expand = function(root, name) {
    var results = [], part;
    var parts = (expRe.test(name) ? root + '/' + name : name).split('/');
    for (var i = 0, length = parts.length; i < length; i++) {
      part = parts[i];
      if (part === '..') {
        results.pop();
      } else if (part !== '.' && part !== '') {
        results.push(part);
      }
    }
    return results.join('/');
  };

  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function expanded(name) {
      var absolute = expand(dirname(path), name);
      return globals.require(absolute, path);
    };
  };

  var initModule = function(name, definition) {
    var hot = hmr && hmr.createHot(name);
    var module = {id: name, exports: {}, hot: hot};
    cache[name] = module;
    definition(module.exports, localRequire(name), module);
    return module.exports;
  };

  var expandAlias = function(name) {
    var val = aliases[name];
    return (val && name !== val) ? expandAlias(val) : name;
  };

  var _resolve = function(name, dep) {
    return expandAlias(expand(dirname(name), dep));
  };

  var require = function(name, loaderPath) {
    if (loaderPath == null) loaderPath = '/';
    var path = expandAlias(name);

    if (has.call(cache, path)) return cache[path].exports;
    if (has.call(modules, path)) return initModule(path, modules[path]);

    throw new Error("Cannot find module '" + name + "' from '" + loaderPath + "'");
  };

  require.alias = function(from, to) {
    aliases[to] = from;
  };

  var extRe = /\.[^.\/]+$/;
  var indexRe = /\/index(\.[^\/]+)?$/;
  var addExtensions = function(bundle) {
    if (extRe.test(bundle)) {
      var alias = bundle.replace(extRe, '');
      if (!has.call(aliases, alias) || aliases[alias].replace(extRe, '') === alias + '/index') {
        aliases[alias] = bundle;
      }
    }

    if (indexRe.test(bundle)) {
      var iAlias = bundle.replace(indexRe, '');
      if (!has.call(aliases, iAlias)) {
        aliases[iAlias] = bundle;
      }
    }
  };

  require.register = require.define = function(bundle, fn) {
    if (bundle && typeof bundle === 'object') {
      for (var key in bundle) {
        if (has.call(bundle, key)) {
          require.register(key, bundle[key]);
        }
      }
    } else {
      modules[bundle] = fn;
      delete cache[bundle];
      addExtensions(bundle);
    }
  };

  require.list = function() {
    var list = [];
    for (var item in modules) {
      if (has.call(modules, item)) {
        list.push(item);
      }
    }
    return list;
  };

  var hmr = globals._hmr && new globals._hmr(_resolve, require, modules, cache);
  require._cache = cache;
  require.hmr = hmr && hmr.wrap;
  require.brunch = true;
  globals.require = require;
})();

(function() {
var global = typeof window === 'undefined' ? this : window;require.register("fs", function(exports, require, module) {
  module.exports = {};
});
require.register("net", function(exports, require, module) {
  module.exports = {};
});
require.register("child_process", function(exports, require, module) {
  module.exports = {};
});
require.register("tls", function(exports, require, module) {
  module.exports = {};
});
require.register("repl", function(exports, require, module) {
  module.exports = {};
});
require.register("readline", function(exports, require, module) {
  module.exports = {};
});
var process;
var __makeRelativeRequire = function(require, mappings, pref) {
  var none = {};
  var tryReq = function(name, pref) {
    var val;
    try {
      val = require(pref + '/node_modules/' + name);
      return val;
    } catch (e) {
      if (e.toString().indexOf('Cannot find module') === -1) {
        throw e;
      }

      if (pref.indexOf('node_modules') !== -1) {
        var s = pref.split('/');
        var i = s.lastIndexOf('node_modules');
        var newPref = s.slice(0, i).join('/');
        return tryReq(name, newPref);
      }
    }
    return none;
  };
  return function(name) {
    if (name in mappings) name = mappings[name];
    if (!name) return;
    if (name[0] !== '.' && pref) {
      var val = tryReq(name, pref);
      if (val !== none) return val;
    }
    return require(name);
  }
};
require.register("components/AlbumArt.jsx", function(exports, require, module) {
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var AlbumArt = function AlbumArt(_ref) {
  var image = _ref.image,
      album = _ref.album,
      artist = _ref.artist;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      showDefault = _useState2[0],
      setShowDefault = _useState2[1];

  var defaultImage = '/images/unavailable.jpg';
  var text = "Vinyl cover look for ".concat(album, " by ").concat(artist);

  var handleError = function handleError() {
    setShowDefault(true);
  };

  (0, _react.useEffect)(function () {
    setShowDefault(false);
  }, [artist]);
  return /*#__PURE__*/_react["default"].createElement("img", {
    className: "album-cover",
    src: showDefault ? defaultImage : image,
    alt: text,
    onError: handleError
  });
};

var _default = AlbumArt;
exports["default"] = _default;
});

require.register("components/Controls.jsx", function(exports, require, module) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactResponsive = require("react-responsive");

var _Icons = require("./Icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Controls = function Controls(_ref) {
  var isPlaying = _ref.isPlaying,
      isShuffle = _ref.isShuffle,
      onPlayPauseClick = _ref.onPlayPauseClick,
      onPrevClick = _ref.onPrevClick,
      onNextClick = _ref.onNextClick,
      onShuffleClick = _ref.onShuffleClick;
  // for narrow viewport, 
  var isMobile = (0, _reactResponsive.useMediaQuery)({
    maxWidth: 414
  });
  var playerStyle = isShuffle ? {
    'opacity': '0.2'
  } : {
    'opacity': '1'
  };
  var shuffleStyle = isShuffle ? {
    'opacity': '1'
  } : {
    'opacity': '0.2'
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: isMobile ? "controls-mobile" : "controls"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: isMobile ? "player-mobile" : "player"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "prev",
    "aria-label": "Previous",
    onClick: onPrevClick,
    style: playerStyle
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Prev, null)), isPlaying ? /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "pause",
    onClick: function onClick() {
      return onPlayPauseClick(false);
    },
    "aria-label": "Pause",
    style: playerStyle
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Pause, null)) : /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "play",
    onClick: function onClick() {
      return onPlayPauseClick(true);
    },
    "aria-label": "Play",
    style: playerStyle
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Play, null)), isMobile && /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "shuffle",
    "aria-label": "Shuffle",
    onClick: onShuffleClick,
    style: shuffleStyle
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Shuffle, null)), /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "next",
    "aria-label": "Next",
    onClick: onNextClick,
    style: playerStyle
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Next, null))), !isMobile && /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "shuffle",
    "aria-label": "Shuffle",
    onClick: onShuffleClick,
    style: shuffleStyle
  }, /*#__PURE__*/_react["default"].createElement(_Icons.Shuffle, null)));
};

var _default = Controls;
exports["default"] = _default;
});

require.register("components/Icons.jsx", function(exports, require, module) {
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Shuffle = exports.Prev = exports.Pause = exports.Play = exports.Next = void 0;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Next = function Next(props) {
  return /*#__PURE__*/React.createElement("svg", {
    width: 131,
    height: 147,
    viewBox: "0 0 131 147",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("title", null, "next"), /*#__PURE__*/React.createElement("g", {
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M117 73.5L0 147V0zM126 0h5v147h-5z"
  })));
};

exports.Next = Next;

var Play = function Play(props) {
  return /*#__PURE__*/React.createElement("svg", {
    width: 190,
    height: 239,
    viewBox: "0 0 190 239",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("title", null, "play"), /*#__PURE__*/React.createElement("path", {
    d: "M189.714 119.714l-189.428 119v-238z",
    fillRule: "evenodd"
  }));
};

exports.Play = Play;

var Pause = function Pause(props) {
  return /*#__PURE__*/React.createElement("svg", {
    width: 133,
    height: 238,
    viewBox: "0 0 133 238",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("title", null, "pause"), /*#__PURE__*/React.createElement("g", {
    fill: "#D8D8D8",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M83 0h50v238H83zM0 0h50v238H0z"
  })));
};

exports.Pause = Pause;

var Prev = function Prev(props) {
  return /*#__PURE__*/React.createElement("svg", {
    width: 132,
    height: 147,
    viewBox: "0 0 132 147",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("title", null, "prev"), /*#__PURE__*/React.createElement("g", {
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 0h5v147H0zM15 73.5L132 0v147z"
  })));
};

exports.Prev = Prev;

var Shuffle = function Shuffle(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 256,
    height: 179,
    viewBox: "0 0 256 179",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), /*#__PURE__*/React.createElement("title", null, "shuffle"), /*#__PURE__*/React.createElement("g", {
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M239.8 35.846c0 2.5-1.2 4.9-3.2 6.5l-28.6 23.3c-1.1.9-2.5 1.4-3.8 1.4-1.8 0-3.5-.8-4.7-2.2-2.1-2.6-1.7-6.4.9-8.4l17.8-14.4h-6.4c-29.2 0-56.9 11.4-74 30.5-1.2 1.3-2.8 2-4.5 2-1.4 0-2.8-.5-4-1.5-2.5-2.2-2.7-6-.5-8.5 19.3-21.6 50.3-34.5 82.9-34.5h6.4l-17.8-14.4c-2.6-2.1-3-5.8-.9-8.4 2.1-2.6 5.9-3 8.5-.9l28.6 23.2c2.1 1.5 3.3 3.8 3.3 6.3z",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M239.8 139.31c0 2.43-1.2 4.763-3.2 6.319L208 168.182c-1.1.875-2.4 1.264-3.8 1.264-1.8 0-3.5-.778-4.7-2.139-2.1-2.527-1.7-6.221.9-8.166l17.8-13.999h-6.4c-43.7 0-82.8-22.262-97.2-55.412C102 60.955 67.3 41.512 28.3 41.512H6.6c-3.3 0-6-2.625-6-5.833s2.7-5.833 6-5.833h21.7c43.8 0 82.8 22.262 97.3 55.412 12.6 28.873 47.2 48.219 86.2 48.219h6.4l-17.8-14c-2.6-2.04-3-5.735-.9-8.165 2.1-2.528 5.9-2.917 8.5-.875l28.6 22.554c2 1.652 3.2 3.985 3.2 6.319z",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M28.3 148.446H6.6c-3.3 0-6-2.7-6-6s2.7-6 6-6h21.7c29.2 0 56.9-11.4 74-30.5 2.2-2.5 6-2.7 8.5-.5s2.7 6 .5 8.5c-19.4 21.6-50.4 34.5-83 34.5z",
    fillRule: "nonzero"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M255.952 37.112l-59 37.064V.048zM255.952 141.112l-59 37.064v-74.128z"
  })));
};

exports.Shuffle = Shuffle;
});

;require.register("components/ListedSong.jsx", function(exports, require, module) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _AlbumArt = _interopRequireDefault(require("./AlbumArt"));

var _reactResponsive = require("react-responsive");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ListedSong = function ListedSong(_ref) {
  var data = _ref.data,
      isCurrent = _ref.isCurrent,
      onSongClick = _ref.onSongClick;
  var artist = data.artist,
      album = data.album,
      track = data.track,
      id = data.id;
  var image = '/images/' + id + '.jpg';
  var isMobile = (0, _reactResponsive.useMediaQuery)({
    maxWidth: 1024
  });
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "track",
    onClick: onSongClick,
    style: isCurrent ? {
      'opacity': 1
    } : {
      'opacity': 0.4
    }
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "info"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "title"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "highlight-left"
  }), track), /*#__PURE__*/_react["default"].createElement("span", {
    className: "artist"
  }, artist, " - ", album, /*#__PURE__*/_react["default"].createElement("span", {
    className: "highlight-right"
  }))), isMobile && /*#__PURE__*/_react["default"].createElement(_AlbumArt["default"], {
    image: image,
    album: album,
    artist: artist
  }));
};

var _default = ListedSong;
exports["default"] = _default;
});

require.register("components/MusicPlayer.jsx", function(exports, require, module) {
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Controls = _interopRequireDefault(require("./Controls"));

var _ListedSong = _interopRequireDefault(require("./ListedSong"));

var _AlbumArt = _interopRequireDefault(require("./AlbumArt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var MusicPlayer = function MusicPlayer(_ref) {
  var playlist = _ref.playlist,
      allSongs = _ref.allSongs;

  // state
  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      currentIndex = _useState2[0],
      setCurrentIndex = _useState2[1];

  var _useState3 = (0, _react.useState)(0),
      _useState4 = _slicedToArray(_useState3, 2),
      progress = _useState4[0],
      setProgress = _useState4[1];

  var _useState5 = (0, _react.useState)(0),
      _useState6 = _slicedToArray(_useState5, 2),
      lastSong = _useState6[0],
      setLastSong = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      isPlaying = _useState8[0],
      setIsPlaying = _useState8[1];

  var _useState9 = (0, _react.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      isError = _useState10[0],
      setIsError = _useState10[1];

  var _useState11 = (0, _react.useState)(false),
      _useState12 = _slicedToArray(_useState11, 2),
      isShuffle = _useState12[0],
      setIsShuffle = _useState12[1];

  var _useState13 = (0, _react.useState)(allSongs),
      _useState14 = _slicedToArray(_useState13, 2),
      availableShuffleChoice = _useState14[0],
      setShuffleSongs = _useState14[1]; // selected song details


  var _playlist$currentInde = playlist[currentIndex],
      artist = _playlist$currentInde.artist,
      album = _playlist$currentInde.album,
      url = _playlist$currentInde.url,
      id = _playlist$currentInde.id,
      _playlist$currentInde2 = _playlist$currentInde.color,
      color = _playlist$currentInde2 === void 0 ? 'rgba(255,255,255,0.3)' : _playlist$currentInde2;
  var image = '/images/' + id + '.jpg'; // refs 

  var audioRef = (0, _react.useRef)(new Audio(url));
  var intervalRef = (0, _react.useRef)();
  var duration = audioRef.current.duration;
  var currentPercentage = duration ? "".concat(progress / duration * 100, "%") : "0%";
  var progressBarLook = "\n    -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(".concat(currentPercentage, ", ").concat(color, "), color-stop(").concat(currentPercentage, ", rgba(255,255,255,0.3)\n  ");

  var newSong = function newSong() {
    if (isShuffle) {
      selectSongForShuffle();
    } else if (currentIndex < playlist.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  var startTimer = function startTimer() {
    // clear any timers already running
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(function () {
      if (audioRef.current.ended) {
        nextSong();
      } else {
        setProgress(audioRef.current.currentTime);
      }
    }, [1000]);
  };

  var onScrub = function onScrub(value) {
    // clear any timers already running
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setProgress(audioRef.current.currentTime);
  };

  var onScrubEnd = function onScrubEnd() {
    // if not already playing, start
    if (!isPlaying) {
      setIsPlaying(true);
    }

    startTimer();
  };

  var prevSong = function prevSong() {
    // this follow the requirements, but will cause a loop
    setLastSong(currentIndex);
    setCurrentIndex(lastSong);
  };

  var nextSong = function nextSong() {
    setLastSong(currentIndex);
    newSong();
  };

  var handleSongClick = function handleSongClick(newIndex) {
    setIsPlaying(false);
    setLastSong(currentIndex);
    setCurrentIndex(newIndex); // if in shuffle mode, remove the selected song index from the shuffle array

    if (isShuffle) setShuffleSongs(availableShuffleChoice.filter(function (item) {
      return item !== currentIndex;
    }));
    setIsPlaying(true);
  };

  var handleShuffleClick = function handleShuffleClick() {
    setIsShuffle(!isShuffle); // remove the currently playing song index from the shuffle array

    if (isPlaying) setShuffleSongs(availableShuffleChoice.filter(function (item) {
      return item !== currentIndex;
    }));
  };

  var selectSongForShuffle = function selectSongForShuffle() {
    // choose a song from those that have not yet played      
    var randomIndex = Math.floor(Math.random() * availableShuffleChoice.length);
    setCurrentIndex(availableShuffleChoice[randomIndex]);
  };

  (0, _react.useEffect)(function () {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]); // handle cleanup and setup when changing a song (represented by currentIndex)

  (0, _react.useEffect)(function () {
    // remove the song that is about to play from possible shuffle choices
    if (isShuffle) setShuffleSongs(availableShuffleChoice.filter(function (item) {
      return item !== currentIndex;
    }));
    audioRef.current.pause();
    audioRef.current = new Audio(url); //  if error, skip to the next song, and do not store this one as the last song played

    audioRef.current.onerror = function () {
      newSong();
    };

    audioRef.current.oncanplay = function () {
      setProgress(audioRef.current.currentTime);
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    };
  }, [currentIndex]); // monitor the shuffle array to replenish it once empty (all songs have been played)

  (0, _react.useEffect)(function () {
    if (availableShuffleChoice.length === 0) {
      setShuffleSongs(allSongs);
    }
  }, [availableShuffleChoice.length]);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("section", {
    className: "header"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "details"
  }, /*#__PURE__*/_react["default"].createElement(_AlbumArt["default"], {
    image: image,
    album: album,
    artist: artist
  }), /*#__PURE__*/_react["default"].createElement(_Controls["default"], {
    isPlaying: isPlaying,
    isShuffle: isShuffle,
    onPrevClick: prevSong,
    onNextClick: nextSong,
    onPlayPauseClick: setIsPlaying,
    onShuffleClick: handleShuffleClick
  }), /*#__PURE__*/_react["default"].createElement("input", {
    type: "range",
    value: progress,
    step: "1",
    min: "0",
    max: duration ? duration : "".concat(duration),
    className: "progress",
    onChange: function onChange(e) {
      return onScrub(e.target.value);
    },
    onMouseUp: onScrubEnd,
    onKeyUp: onScrubEnd,
    style: {
      background: progressBarLook
    }
  }))), /*#__PURE__*/_react["default"].createElement("section", {
    className: "songList"
  }, playlist.map(function (value, index) {
    return /*#__PURE__*/_react["default"].createElement(_ListedSong["default"], {
      data: value,
      isCurrent: index === currentIndex,
      onSongClick: function onSongClick() {
        return handleSongClick(index);
      },
      key: index
    });
  })));
};

var _default = MusicPlayer;
exports["default"] = _default;
});

require.register("initialize.js", function(exports, require, module) {
"use strict";

var _reactDom = _interopRequireDefault(require("react-dom"));

var _react = _interopRequireDefault(require("react"));

var _MusicPlayer = _interopRequireDefault(require("./components/MusicPlayer"));

var _playlist = _interopRequireDefault(require("./playlist"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

document.addEventListener('DOMContentLoaded', function () {
  var shuffleSetup = _playlist["default"].map(function (item, index) {
    return index;
  });

  _reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(_MusicPlayer["default"], {
    playlist: _playlist["default"],
    allSongs: shuffleSetup
  }), document.querySelector('#app'));
});
});

;require.register("playlist.js", function(exports, require, module) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = [{
  artist: 'Frank Ocean',
  album: 'channel ORANGE',
  track: 'Sweet Life',
  url: 'https://s3.us-east-2.amazonaws.com/react-challenge/tracks/frank_ocean_sweet_life.mp3',
  id: '7a187a2c-e6fe-46a6-a8d4-5b5984da3de3',
  color: '#F3760F'
}, {
  artist: 'Grace Jones',
  album: 'Bulletproof Heart',
  track: 'On My Way',
  url: 'https://s3.us-east-2.amazonaws.com/react-challenge/tracks/grace_jones_on_my_way.mp3',
  id: '9f6b44a3-0d57-4ae1-bfab-2447adf6eaf0',
  color: '#4F64CF'
}, {
  artist: 'ERROR TESTER',
  album: 'image url is corrupt',
  track: 'track url is corrupt',
  url: 'https://s3.us-east-2.amazonaws.com/react-challenge/tracks/junior_boys_you_say_that.mp1',
  id: '1c8d7409-59fb-4bf8-9ee6-8a32',
  color: '#4D89A1'
}, {
  artist: 'Junior Boys',
  album: 'Big Black Coat',
  track: 'You Say That',
  url: 'https://s3.us-east-2.amazonaws.com/react-challenge/tracks/junior_boys_you_say_that.mp3',
  id: '1c8d7409-59fb-4bf8-9ee6-8a328559754a',
  color: '#4D89A1'
}, {
  artist: 'Kate Bush',
  album: 'Hounds of Love',
  track: 'Running Up That Hill',
  url: 'https://s3.us-east-2.amazonaws.com/react-challenge/tracks/kate_bush_running_up_that_hill.mp3',
  id: 'a27f140e-082d-4004-9368-1c7bfd84e9d0',
  color: '#F16971'
}, {
  artist: 'King',
  album: 'We Are King',
  track: 'Supernatural',
  url: 'https://s3.us-east-2.amazonaws.com/react-challenge/tracks/king_supernatural.mp3',
  id: '0a78d3b2-7dc6-462b-8d8c-a5310ccb6451',
  color: '#63A00F'
}, {
  artist: 'Terry Riley',
  album: 'Persian Surgery Dervishes',
  track: 'Performance 1, part 1',
  url: 'https://s3.us-east-2.amazonaws.com/react-challenge/tracks/terry_riley_persian_surgery_dervises_performance_1_part_1.mp3',
  id: 'd7e10f3c-e967-43f8-babc-14ce537a2578',
  color: '#3A95D3'
}];
exports["default"] = _default;
});

;require.alias("readable-stream/lib/_stream_duplex.js", "_stream_duplex");
require.alias("readable-stream/lib/_stream_passthrough.js", "_stream_passthrough");
require.alias("readable-stream/lib/_stream_readable.js", "_stream_readable");
require.alias("readable-stream/lib/_stream_transform.js", "_stream_transform");
require.alias("readable-stream/lib/_stream_writable.js", "_stream_writable");
require.alias("assert/build/assert.js", "assert");
require.alias("buffer/index.js", "buffer");
require.alias("crypto-browserify/index.js", "crypto");
require.alias("events/events.js", "events");
require.alias("stream-http/index.js", "http");
require.alias("https-browserify/index.js", "https");
require.alias("os-browserify/browser.js", "os");
require.alias("path-browserify/index.js", "path");
require.alias("process/browser.js", "process");
require.alias("punycode/punycode.js", "punycode");
require.alias("querystring-es3/index.js", "querystring");
require.alias("stream-browserify/index.js", "stream");
require.alias("string_decoder/lib/string_decoder.js", "string_decoder");
require.alias("util/util.js", "sys");
require.alias("url/url.js", "url");
require.alias("vm-browserify/index.js", "vm");process = require('process');require.register("___globals___", function(exports, require, module) {
  
});})();require('___globals___');


//# sourceMappingURL=app.js.map