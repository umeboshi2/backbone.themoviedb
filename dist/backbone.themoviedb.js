(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Backbone.Themoviedb"] = factory();
	else
		root["Backbone.Themoviedb"] = factory();
})(window, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/base.coffee":
/*!*************************!*\
  !*** ./src/base.coffee ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseMovieDbCollection = exports.BaseMovieDbModel = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _backbone = __webpack_require__(/*! backbone */ "backbone");

var _backbone2 = _interopRequireDefault(_backbone);

var _backbone3 = __webpack_require__(/*! backbone.paginator */ "backbone.paginator");

var _backbone4 = _interopRequireDefault(_backbone3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var baseUri;

baseUri = "https://api.themoviedb.org/3";

var BaseMovieDbModel = exports.BaseMovieDbModel = function () {
  var BaseMovieDbModel = function (_Backbone$Model) {
    _inherits(BaseMovieDbModel, _Backbone$Model);

    function BaseMovieDbModel() {
      _classCallCheck(this, BaseMovieDbModel);

      return _possibleConstructorReturn(this, (BaseMovieDbModel.__proto__ || Object.getPrototypeOf(BaseMovieDbModel)).apply(this, arguments));
    }

    _createClass(BaseMovieDbModel, [{
      key: 'fetch',
      value: function fetch(options) {
        options = options || {};
        options.data = options.data || {};
        options.data.api_key = this.apiKey;
        return _get(BaseMovieDbModel.prototype.__proto__ || Object.getPrototypeOf(BaseMovieDbModel.prototype), 'fetch', this).call(this, options);
      }
    }]);

    return BaseMovieDbModel;
  }(_backbone2.default.Model);

  ;

  BaseMovieDbModel.prototype.baseUri = baseUri;

  return BaseMovieDbModel;
}.call(undefined);

var BaseMovieDbCollection = exports.BaseMovieDbCollection = function () {
  var BaseMovieDbCollection = function (_PageableCollection) {
    _inherits(BaseMovieDbCollection, _PageableCollection);

    function BaseMovieDbCollection() {
      _classCallCheck(this, BaseMovieDbCollection);

      return _possibleConstructorReturn(this, (BaseMovieDbCollection.__proto__ || Object.getPrototypeOf(BaseMovieDbCollection)).apply(this, arguments));
    }

    _createClass(BaseMovieDbCollection, [{
      key: 'fetch',
      value: function fetch(options) {
        options = options || {};
        options.data = options.data || {};
        options.data.api_key = this.apiKey;
        return _get(BaseMovieDbCollection.prototype.__proto__ || Object.getPrototypeOf(BaseMovieDbCollection.prototype), 'fetch', this).call(this, options);
      }
    }, {
      key: 'parse',
      value: function parse(resp) {
        this.state.totalPages = resp.total_pages;
        this.state.lastPage = resp.total_pages;
        this.state.totalRecords = resp.total_results;
        return _get(BaseMovieDbCollection.prototype.__proto__ || Object.getPrototypeOf(BaseMovieDbCollection.prototype), 'parse', this).call(this, resp.results);
      }
    }]);

    return BaseMovieDbCollection;
  }(_backbone4.default);

  ;

  BaseMovieDbCollection.prototype.baseUri = baseUri;

  BaseMovieDbCollection.prototype.mode = 'server';

  BaseMovieDbCollection.prototype.state = {
    currentPage: 1,
    pageSize: 20
  };

  BaseMovieDbCollection.prototype.queryParams = {
    pageSize: void 0
  };

  return BaseMovieDbCollection;
}.call(undefined);

/***/ }),

/***/ "./src/configuration.coffee":
/*!**********************************!*\
  !*** ./src/configuration.coffee ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = __webpack_require__(/*! ./base */ "./src/base.coffee");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ConfigModel;

exports.default = ConfigModel = function (_BaseMovieDbModel) {
  _inherits(ConfigModel, _BaseMovieDbModel);

  function ConfigModel() {
    _classCallCheck(this, ConfigModel);

    return _possibleConstructorReturn(this, (ConfigModel.__proto__ || Object.getPrototypeOf(ConfigModel)).apply(this, arguments));
  }

  _createClass(ConfigModel, [{
    key: 'url',
    value: function url() {
      return this.baseUri + '/configuration';
    }
  }]);

  return ConfigModel;
}(_base.BaseMovieDbModel);

/***/ }),

/***/ "./src/index.coffee":
/*!**************************!*\
  !*** ./src/index.coffee ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TvSearch = exports.Configuration = undefined;

var _configuration = __webpack_require__(/*! ./configuration */ "./src/configuration.coffee");

var _configuration2 = _interopRequireDefault(_configuration);

var _search = __webpack_require__(/*! ./search */ "./src/search.coffee");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Configuration = _configuration2.default;
exports.TvSearch = _search.TvSearch;

/***/ }),

/***/ "./src/search.coffee":
/*!***************************!*\
  !*** ./src/search.coffee ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MovieSearch = exports.TvSearch = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = __webpack_require__(/*! ./base */ "./src/base.coffee");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TvSearch = exports.TvSearch = function (_BaseMovieDbCollectio) {
  _inherits(TvSearch, _BaseMovieDbCollectio);

  function TvSearch() {
    _classCallCheck(this, TvSearch);

    return _possibleConstructorReturn(this, (TvSearch.__proto__ || Object.getPrototypeOf(TvSearch)).apply(this, arguments));
  }

  _createClass(TvSearch, [{
    key: 'url',
    value: function url() {
      return this.baseUri + '/search/tv';
    }
  }]);

  return TvSearch;
}(_base.BaseMovieDbCollection);

var MovieSearch = exports.MovieSearch = function (_BaseMovieDbCollectio2) {
  _inherits(MovieSearch, _BaseMovieDbCollectio2);

  function MovieSearch() {
    _classCallCheck(this, MovieSearch);

    return _possibleConstructorReturn(this, (MovieSearch.__proto__ || Object.getPrototypeOf(MovieSearch)).apply(this, arguments));
  }

  _createClass(MovieSearch, [{
    key: 'url',
    value: function url() {
      return this.baseUri + '/search/movie';
    }
  }]);

  return MovieSearch;
}(_base.BaseMovieDbCollection);

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./src/index.coffee ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/index.coffee */"./src/index.coffee");


/***/ }),

/***/ "backbone":
/*!***************************!*\
  !*** external "backbone" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("backbone");

/***/ }),

/***/ "backbone.paginator":
/*!*************************************!*\
  !*** external "backbone.paginator" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("backbone.paginator");

/***/ })

/******/ });
});
//# sourceMappingURL=backbone.themoviedb.js.map