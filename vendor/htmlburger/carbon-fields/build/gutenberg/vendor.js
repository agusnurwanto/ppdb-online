/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./packages/vendor/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _arrayLikeToArray(arr, len) {\n  if (len == null || len > arr.length) len = arr.length;\n  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];\n  return arr2;\n}\nmodule.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/arrayLikeToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _arrayWithHoles(arr) {\n  if (Array.isArray(arr)) return arr;\n}\nmodule.exports = _arrayWithHoles, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/arrayWithHoles.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _iterableToArrayLimit(arr, i) {\n  var _i = null == arr ? null : \"undefined\" != typeof Symbol && arr[Symbol.iterator] || arr[\"@@iterator\"];\n  if (null != _i) {\n    var _s,\n      _e,\n      _x,\n      _r,\n      _arr = [],\n      _n = !0,\n      _d = !1;\n    try {\n      if (_x = (_i = _i.call(arr)).next, 0 === i) {\n        if (Object(_i) !== _i) return;\n        _n = !1;\n      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);\n    } catch (err) {\n      _d = !0, _e = err;\n    } finally {\n      try {\n        if (!_n && null != _i[\"return\"] && (_r = _i[\"return\"](), Object(_r) !== _r)) return;\n      } finally {\n        if (_d) throw _e;\n      }\n    }\n    return _arr;\n  }\n}\nmodule.exports = _iterableToArrayLimit, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _nonIterableRest() {\n  throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nmodule.exports = _nonIterableRest, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/nonIterableRest.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ \"./node_modules/@babel/runtime/helpers/arrayWithHoles.js\");\nvar iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ \"./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js\");\nvar unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ \"./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js\");\nvar nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ \"./node_modules/@babel/runtime/helpers/nonIterableRest.js\");\nfunction _slicedToArray(arr, i) {\n  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();\n}\nmodule.exports = _slicedToArray, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/slicedToArray.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ \"./node_modules/@babel/runtime/helpers/arrayLikeToArray.js\");\nfunction _unsupportedIterableToArray(o, minLen) {\n  if (!o) return;\n  if (typeof o === \"string\") return arrayLikeToArray(o, minLen);\n  var n = Object.prototype.toString.call(o).slice(8, -1);\n  if (n === \"Object\" && o.constructor) n = o.constructor.name;\n  if (n === \"Map\" || n === \"Set\") return Array.from(o);\n  if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);\n}\nmodule.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js?");

/***/ }),

/***/ "./node_modules/@wordpress/api-fetch/build-module/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@wordpress/api-fetch/build-module/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _middlewares_nonce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./middlewares/nonce */ \"./node_modules/@wordpress/api-fetch/build-module/middlewares/nonce.js\");\n/* harmony import */ var _middlewares_root_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./middlewares/root-url */ \"./node_modules/@wordpress/api-fetch/build-module/middlewares/root-url.js\");\n/* harmony import */ var _middlewares_preloading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./middlewares/preloading */ \"./node_modules/@wordpress/api-fetch/build-module/middlewares/preloading.js\");\n/* harmony import */ var _middlewares_fetch_all_middleware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./middlewares/fetch-all-middleware */ \"./node_modules/@wordpress/api-fetch/build-module/middlewares/fetch-all-middleware.js\");\n/* harmony import */ var _middlewares_namespace_endpoint__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./middlewares/namespace-endpoint */ \"./node_modules/@wordpress/api-fetch/build-module/middlewares/namespace-endpoint.js\");\n/* harmony import */ var _middlewares_http_v1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./middlewares/http-v1 */ \"./node_modules/@wordpress/api-fetch/build-module/middlewares/http-v1.js\");\n/* harmony import */ var _middlewares_user_locale__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./middlewares/user-locale */ \"./node_modules/@wordpress/api-fetch/build-module/middlewares/user-locale.js\");\n/* harmony import */ var _middlewares_media_upload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./middlewares/media-upload */ \"./node_modules/@wordpress/api-fetch/build-module/middlewares/media-upload.js\");\n/* harmony import */ var _utils_response__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/response */ \"./node_modules/@wordpress/api-fetch/build-module/utils/response.js\");\n/**\n * WordPress dependencies\n */\n\n/**\n * Internal dependencies\n */\n\n\n\n\n\n\n\n\n\n\n/**\n * Default set of header values which should be sent with every request unless\n * explicitly provided through apiFetch options.\n *\n * @type {Record<string, string>}\n */\n\nconst DEFAULT_HEADERS = {\n  // The backend uses the Accept header as a condition for considering an\n  // incoming request as a REST request.\n  //\n  // See: https://core.trac.wordpress.org/ticket/44534\n  Accept: 'application/json, */*;q=0.1'\n};\n/**\n * Default set of fetch option values which should be sent with every request\n * unless explicitly provided through apiFetch options.\n *\n * @type {Object}\n */\n\nconst DEFAULT_OPTIONS = {\n  credentials: 'include'\n};\n/** @typedef {import('./types').APIFetchMiddleware} APIFetchMiddleware */\n\n/** @typedef {import('./types').APIFetchOptions} APIFetchOptions */\n\n/**\n * @type {import('./types').APIFetchMiddleware[]}\n */\n\nconst middlewares = [_middlewares_user_locale__WEBPACK_IMPORTED_MODULE_7__[\"default\"], _middlewares_namespace_endpoint__WEBPACK_IMPORTED_MODULE_5__[\"default\"], _middlewares_http_v1__WEBPACK_IMPORTED_MODULE_6__[\"default\"], _middlewares_fetch_all_middleware__WEBPACK_IMPORTED_MODULE_4__[\"default\"]];\n/**\n * Register a middleware\n *\n * @param {import('./types').APIFetchMiddleware} middleware\n */\n\nfunction registerMiddleware(middleware) {\n  middlewares.unshift(middleware);\n}\n/**\n * Checks the status of a response, throwing the Response as an error if\n * it is outside the 200 range.\n *\n * @param {Response} response\n * @return {Response} The response if the status is in the 200 range.\n */\n\n\nconst checkStatus = response => {\n  if (response.status >= 200 && response.status < 300) {\n    return response;\n  }\n\n  throw response;\n};\n/** @typedef {(options: import('./types').APIFetchOptions) => Promise<any>} FetchHandler*/\n\n/**\n * @type {FetchHandler}\n */\n\n\nconst defaultFetchHandler = nextOptions => {\n  const {\n    url,\n    path,\n    data,\n    parse = true,\n    ...remainingOptions\n  } = nextOptions;\n  let {\n    body,\n    headers\n  } = nextOptions; // Merge explicitly-provided headers with default values.\n\n  headers = { ...DEFAULT_HEADERS,\n    ...headers\n  }; // The `data` property is a shorthand for sending a JSON body.\n\n  if (data) {\n    body = JSON.stringify(data);\n    headers['Content-Type'] = 'application/json';\n  }\n\n  const responsePromise = window.fetch( // Fall back to explicitly passing `window.location` which is the behavior if `undefined` is passed.\n  url || path || window.location.href, { ...DEFAULT_OPTIONS,\n    ...remainingOptions,\n    body,\n    headers\n  });\n  return responsePromise.then(value => Promise.resolve(value).then(checkStatus).catch(response => Object(_utils_response__WEBPACK_IMPORTED_MODULE_9__[\"parseAndThrowError\"])(response, parse)).then(response => Object(_utils_response__WEBPACK_IMPORTED_MODULE_9__[\"parseResponseAndNormalizeError\"])(response, parse)), err => {\n    // Re-throw AbortError for the users to handle it themselves.\n    if (err && err.name === 'AbortError') {\n      throw err;\n    } // Otherwise, there is most likely no network connection.\n    // Unfortunately the message might depend on the browser.\n\n\n    throw {\n      code: 'fetch_error',\n      message: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__[\"__\"])('You are probably offline.')\n    };\n  });\n};\n/** @type {FetchHandler} */\n\n\nlet fetchHandler = defaultFetchHandler;\n/**\n * Defines a custom fetch handler for making the requests that will override\n * the default one using window.fetch\n *\n * @param {FetchHandler} newFetchHandler The new fetch handler\n */\n\nfunction setFetchHandler(newFetchHandler) {\n  fetchHandler = newFetchHandler;\n}\n/**\n * @template T\n * @param {import('./types').APIFetchOptions} options\n * @return {Promise<T>} A promise representing the request processed via the registered middlewares.\n */\n\n\nfunction apiFetch(options) {\n  // creates a nested function chain that calls all middlewares and finally the `fetchHandler`,\n  // converting `middlewares = [ m1, m2, m3 ]` into:\n  // ```\n  // opts1 => m1( opts1, opts2 => m2( opts2, opts3 => m3( opts3, fetchHandler ) ) );\n  // ```\n  const enhancedHandler = middlewares.reduceRight((\n  /** @type {FetchHandler} */\n  next, middleware) => {\n    return workingOptions => middleware(workingOptions, next);\n  }, fetchHandler);\n  return enhancedHandler(options).catch(error => {\n    if (error.code !== 'rest_cookie_invalid_nonce') {\n      return Promise.reject(error);\n    } // If the nonce is invalid, refresh it and try again.\n\n\n    return window // @ts-ignore\n    .fetch(apiFetch.nonceEndpoint).then(checkStatus).then(data => data.text()).then(text => {\n      // @ts-ignore\n      apiFetch.nonceMiddleware.nonce = text;\n      return apiFetch(options);\n    });\n  });\n}\n\napiFetch.use = registerMiddleware;\napiFetch.setFetchHandler = setFetchHandler;\napiFetch.createNonceMiddleware = _middlewares_nonce__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\napiFetch.createPreloadingMiddleware = _middlewares_preloading__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\napiFetch.createRootURLMiddleware = _middlewares_root_url__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\napiFetch.fetchAllMiddleware = _middlewares_fetch_all_middleware__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\napiFetch.mediaUploadMiddleware = _middlewares_media_upload__WEBPACK_IMPORTED_MODULE_8__[\"default\"];\n/* harmony default export */ __webpack_exports__[\"default\"] = (apiFetch);\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///./node_modules/@wordpress/api-fetch/build-module/index.js?");

/***/ }),

/***/ "./node_modules/@wordpress/api-fetch/build-module/middlewares/fetch-all-middleware.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@wordpress/api-fetch/build-module/middlewares/fetch-all-middleware.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/url */ \"./node_modules/@wordpress/url/build-module/index.js\");\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .. */ \"./node_modules/@wordpress/api-fetch/build-module/index.js\");\n/**\n * WordPress dependencies\n */\n\n/**\n * Internal dependencies\n */\n\n\n/**\n * Apply query arguments to both URL and Path, whichever is present.\n *\n * @param {import('../types').APIFetchOptions} props\n * @param {Record<string, string | number>}    queryArgs\n * @return {import('../types').APIFetchOptions} The request with the modified query args\n */\n\nconst modifyQuery = (_ref, queryArgs) => {\n  let {\n    path,\n    url,\n    ...options\n  } = _ref;\n  return { ...options,\n    url: url && Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_0__[\"addQueryArgs\"])(url, queryArgs),\n    path: path && Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_0__[\"addQueryArgs\"])(path, queryArgs)\n  };\n};\n/**\n * Duplicates parsing functionality from apiFetch.\n *\n * @param {Response} response\n * @return {Promise<any>} Parsed response json.\n */\n\n\nconst parseResponse = response => response.json ? response.json() : Promise.reject(response);\n/**\n * @param {string | null} linkHeader\n * @return {{ next?: string }} The parsed link header.\n */\n\n\nconst parseLinkHeader = linkHeader => {\n  if (!linkHeader) {\n    return {};\n  }\n\n  const match = linkHeader.match(/<([^>]+)>; rel=\"next\"/);\n  return match ? {\n    next: match[1]\n  } : {};\n};\n/**\n * @param {Response} response\n * @return {string | undefined} The next page URL.\n */\n\n\nconst getNextPageUrl = response => {\n  const {\n    next\n  } = parseLinkHeader(response.headers.get('link'));\n  return next;\n};\n/**\n * @param {import('../types').APIFetchOptions} options\n * @return {boolean} True if the request contains an unbounded query.\n */\n\n\nconst requestContainsUnboundedQuery = options => {\n  const pathIsUnbounded = !!options.path && options.path.indexOf('per_page=-1') !== -1;\n  const urlIsUnbounded = !!options.url && options.url.indexOf('per_page=-1') !== -1;\n  return pathIsUnbounded || urlIsUnbounded;\n};\n/**\n * The REST API enforces an upper limit on the per_page option. To handle large\n * collections, apiFetch consumers can pass `per_page=-1`; this middleware will\n * then recursively assemble a full response array from all available pages.\n *\n * @type {import('../types').APIFetchMiddleware}\n */\n\n\nconst fetchAllMiddleware = async (options, next) => {\n  if (options.parse === false) {\n    // If a consumer has opted out of parsing, do not apply middleware.\n    return next(options);\n  }\n\n  if (!requestContainsUnboundedQuery(options)) {\n    // If neither url nor path is requesting all items, do not apply middleware.\n    return next(options);\n  } // Retrieve requested page of results.\n\n\n  const response = await Object(___WEBPACK_IMPORTED_MODULE_1__[\"default\"])({ ...modifyQuery(options, {\n      per_page: 100\n    }),\n    // Ensure headers are returned for page 1.\n    parse: false\n  });\n  const results = await parseResponse(response);\n\n  if (!Array.isArray(results)) {\n    // We have no reliable way of merging non-array results.\n    return results;\n  }\n\n  let nextPage = getNextPageUrl(response);\n\n  if (!nextPage) {\n    // There are no further pages to request.\n    return results;\n  } // Iteratively fetch all remaining pages until no \"next\" header is found.\n\n\n  let mergedResults =\n  /** @type {any[]} */\n  [].concat(results);\n\n  while (nextPage) {\n    const nextResponse = await Object(___WEBPACK_IMPORTED_MODULE_1__[\"default\"])({ ...options,\n      // Ensure the URL for the next page is used instead of any provided path.\n      path: undefined,\n      url: nextPage,\n      // Ensure we still get headers so we can identify the next page.\n      parse: false\n    });\n    const nextResults = await parseResponse(nextResponse);\n    mergedResults = mergedResults.concat(nextResults);\n    nextPage = getNextPageUrl(nextResponse);\n  }\n\n  return mergedResults;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (fetchAllMiddleware);\n//# sourceMappingURL=fetch-all-middleware.js.map\n\n//# sourceURL=webpack:///./node_modules/@wordpress/api-fetch/build-module/middlewares/fetch-all-middleware.js?");

/***/ }),

/***/ "./node_modules/@wordpress/api-fetch/build-module/middlewares/http-v1.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@wordpress/api-fetch/build-module/middlewares/http-v1.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * Set of HTTP methods which are eligible to be overridden.\n *\n * @type {Set<string>}\n */\nconst OVERRIDE_METHODS = new Set(['PATCH', 'PUT', 'DELETE']);\n/**\n * Default request method.\n *\n * \"A request has an associated method (a method). Unless stated otherwise it\n * is `GET`.\"\n *\n * @see  https://fetch.spec.whatwg.org/#requests\n *\n * @type {string}\n */\n\nconst DEFAULT_METHOD = 'GET';\n/**\n * API Fetch middleware which overrides the request method for HTTP v1\n * compatibility leveraging the REST API X-HTTP-Method-Override header.\n *\n * @type {import('../types').APIFetchMiddleware}\n */\n\nconst httpV1Middleware = (options, next) => {\n  const {\n    method = DEFAULT_METHOD\n  } = options;\n\n  if (OVERRIDE_METHODS.has(method.toUpperCase())) {\n    options = { ...options,\n      headers: { ...options.headers,\n        'X-HTTP-Method-Override': method,\n        'Content-Type': 'application/json'\n      },\n      method: 'POST'\n    };\n  }\n\n  return next(options);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (httpV1Middleware);\n//# sourceMappingURL=http-v1.js.map\n\n//# sourceURL=webpack:///./node_modules/@wordpress/api-fetch/build-module/middlewares/http-v1.js?");

/***/ }),

/***/ "./node_modules/@wordpress/api-fetch/build-module/middlewares/media-upload.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@wordpress/api-fetch/build-module/middlewares/media-upload.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/response */ \"./node_modules/@wordpress/api-fetch/build-module/utils/response.js\");\n/**\n * WordPress dependencies\n */\n\n/**\n * Internal dependencies\n */\n\n\n/**\n * @param {import('../types').APIFetchOptions} options\n * @return {boolean} True if the request is for media upload.\n */\n\nfunction isMediaUploadRequest(options) {\n  const isCreateMethod = !!options.method && options.method === 'POST';\n  const isMediaEndpoint = !!options.path && options.path.indexOf('/wp/v2/media') !== -1 || !!options.url && options.url.indexOf('/wp/v2/media') !== -1;\n  return isMediaEndpoint && isCreateMethod;\n}\n/**\n * Middleware handling media upload failures and retries.\n *\n * @type {import('../types').APIFetchMiddleware}\n */\n\n\nconst mediaUploadMiddleware = (options, next) => {\n  if (!isMediaUploadRequest(options)) {\n    return next(options);\n  }\n\n  let retries = 0;\n  const maxRetries = 5;\n  /**\n   * @param {string} attachmentId\n   * @return {Promise<any>} Processed post response.\n   */\n\n  const postProcess = attachmentId => {\n    retries++;\n    return next({\n      path: `/wp/v2/media/${attachmentId}/post-process`,\n      method: 'POST',\n      data: {\n        action: 'create-image-subsizes'\n      },\n      parse: false\n    }).catch(() => {\n      if (retries < maxRetries) {\n        return postProcess(attachmentId);\n      }\n\n      next({\n        path: `/wp/v2/media/${attachmentId}?force=true`,\n        method: 'DELETE'\n      });\n      return Promise.reject();\n    });\n  };\n\n  return next({ ...options,\n    parse: false\n  }).catch(response => {\n    const attachmentId = response.headers.get('x-wp-upload-attachment-id');\n\n    if (response.status >= 500 && response.status < 600 && attachmentId) {\n      return postProcess(attachmentId).catch(() => {\n        if (options.parse !== false) {\n          return Promise.reject({\n            code: 'post_process',\n            message: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__[\"__\"])('Media upload failed. If this is a photo or a large image, please scale it down and try again.')\n          });\n        }\n\n        return Promise.reject(response);\n      });\n    }\n\n    return Object(_utils_response__WEBPACK_IMPORTED_MODULE_1__[\"parseAndThrowError\"])(response, options.parse);\n  }).then(response => Object(_utils_response__WEBPACK_IMPORTED_MODULE_1__[\"parseResponseAndNormalizeError\"])(response, options.parse));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (mediaUploadMiddleware);\n//# sourceMappingURL=media-upload.js.map\n\n//# sourceURL=webpack:///./node_modules/@wordpress/api-fetch/build-module/middlewares/media-upload.js?");

/***/ }),

/***/ "./node_modules/@wordpress/api-fetch/build-module/middlewares/namespace-endpoint.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@wordpress/api-fetch/build-module/middlewares/namespace-endpoint.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * @type {import('../types').APIFetchMiddleware}\n */\nconst namespaceAndEndpointMiddleware = (options, next) => {\n  let path = options.path;\n  let namespaceTrimmed, endpointTrimmed;\n\n  if (typeof options.namespace === 'string' && typeof options.endpoint === 'string') {\n    namespaceTrimmed = options.namespace.replace(/^\\/|\\/$/g, '');\n    endpointTrimmed = options.endpoint.replace(/^\\//, '');\n\n    if (endpointTrimmed) {\n      path = namespaceTrimmed + '/' + endpointTrimmed;\n    } else {\n      path = namespaceTrimmed;\n    }\n  }\n\n  delete options.namespace;\n  delete options.endpoint;\n  return next({ ...options,\n    path\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (namespaceAndEndpointMiddleware);\n//# sourceMappingURL=namespace-endpoint.js.map\n\n//# sourceURL=webpack:///./node_modules/@wordpress/api-fetch/build-module/middlewares/namespace-endpoint.js?");

/***/ }),

/***/ "./node_modules/@wordpress/api-fetch/build-module/middlewares/nonce.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@wordpress/api-fetch/build-module/middlewares/nonce.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * @param {string} nonce\n * @return {import('../types').APIFetchMiddleware & { nonce: string }} A middleware to enhance a request with a nonce.\n */\nfunction createNonceMiddleware(nonce) {\n  /**\n   * @type {import('../types').APIFetchMiddleware & { nonce: string }}\n   */\n  const middleware = (options, next) => {\n    const {\n      headers = {}\n    } = options; // If an 'X-WP-Nonce' header (or any case-insensitive variation\n    // thereof) was specified, no need to add a nonce header.\n\n    for (const headerName in headers) {\n      if (headerName.toLowerCase() === 'x-wp-nonce' && headers[headerName] === middleware.nonce) {\n        return next(options);\n      }\n    }\n\n    return next({ ...options,\n      headers: { ...headers,\n        'X-WP-Nonce': middleware.nonce\n      }\n    });\n  };\n\n  middleware.nonce = nonce;\n  return middleware;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createNonceMiddleware);\n//# sourceMappingURL=nonce.js.map\n\n//# sourceURL=webpack:///./node_modules/@wordpress/api-fetch/build-module/middlewares/nonce.js?");

/***/ }),

/***/ "./node_modules/@wordpress/api-fetch/build-module/middlewares/preloading.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@wordpress/api-fetch/build-module/middlewares/preloading.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/url */ \"./node_modules/@wordpress/url/build-module/index.js\");\n/**\n * WordPress dependencies\n */\n\n/**\n * @param {Record<string, any>} preloadedData\n * @return {import('../types').APIFetchMiddleware} Preloading middleware.\n */\n\nfunction createPreloadingMiddleware(preloadedData) {\n  const cache = Object.fromEntries(Object.entries(preloadedData).map(_ref => {\n    let [path, data] = _ref;\n    return [Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_0__[\"normalizePath\"])(path), data];\n  }));\n  return (options, next) => {\n    const {\n      parse = true\n    } = options;\n    /** @type {string | void} */\n\n    let rawPath = options.path;\n\n    if (!rawPath && options.url) {\n      const {\n        rest_route: pathFromQuery,\n        ...queryArgs\n      } = Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_0__[\"getQueryArgs\"])(options.url);\n\n      if (typeof pathFromQuery === 'string') {\n        rawPath = Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_0__[\"addQueryArgs\"])(pathFromQuery, queryArgs);\n      }\n    }\n\n    if (typeof rawPath !== 'string') {\n      return next(options);\n    }\n\n    const method = options.method || 'GET';\n    const path = Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_0__[\"normalizePath\"])(rawPath);\n\n    if ('GET' === method && cache[path]) {\n      const cacheData = cache[path]; // Unsetting the cache key ensures that the data is only used a single time.\n\n      delete cache[path];\n      return prepareResponse(cacheData, !!parse);\n    } else if ('OPTIONS' === method && cache[method] && cache[method][path]) {\n      const cacheData = cache[method][path]; // Unsetting the cache key ensures that the data is only used a single time.\n\n      delete cache[method][path];\n      return prepareResponse(cacheData, !!parse);\n    }\n\n    return next(options);\n  };\n}\n/**\n * This is a helper function that sends a success response.\n *\n * @param {Record<string, any>} responseData\n * @param {boolean}             parse\n * @return {Promise<any>} Promise with the response.\n */\n\n\nfunction prepareResponse(responseData, parse) {\n  return Promise.resolve(parse ? responseData.body : new window.Response(JSON.stringify(responseData.body), {\n    status: 200,\n    statusText: 'OK',\n    headers: responseData.headers\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createPreloadingMiddleware);\n//# sourceMappingURL=preloading.js.map\n\n//# sourceURL=webpack:///./node_modules/@wordpress/api-fetch/build-module/middlewares/preloading.js?");

/***/ }),

/***/ "./node_modules/@wordpress/api-fetch/build-module/middlewares/root-url.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@wordpress/api-fetch/build-module/middlewares/root-url.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _namespace_endpoint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./namespace-endpoint */ \"./node_modules/@wordpress/api-fetch/build-module/middlewares/namespace-endpoint.js\");\n/**\n * Internal dependencies\n */\n\n/**\n * @param {string} rootURL\n * @return {import('../types').APIFetchMiddleware} Root URL middleware.\n */\n\nconst createRootURLMiddleware = rootURL => (options, next) => {\n  return Object(_namespace_endpoint__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(options, optionsWithPath => {\n    let url = optionsWithPath.url;\n    let path = optionsWithPath.path;\n    let apiRoot;\n\n    if (typeof path === 'string') {\n      apiRoot = rootURL;\n\n      if (-1 !== rootURL.indexOf('?')) {\n        path = path.replace('?', '&');\n      }\n\n      path = path.replace(/^\\//, ''); // API root may already include query parameter prefix if site is\n      // configured to use plain permalinks.\n\n      if ('string' === typeof apiRoot && -1 !== apiRoot.indexOf('?')) {\n        path = path.replace('?', '&');\n      }\n\n      url = apiRoot + path;\n    }\n\n    return next({ ...optionsWithPath,\n      url\n    });\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createRootURLMiddleware);\n//# sourceMappingURL=root-url.js.map\n\n//# sourceURL=webpack:///./node_modules/@wordpress/api-fetch/build-module/middlewares/root-url.js?");

/***/ }),

/***/ "./node_modules/@wordpress/api-fetch/build-module/middlewares/user-locale.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@wordpress/api-fetch/build-module/middlewares/user-locale.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wordpress_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/url */ \"./node_modules/@wordpress/url/build-module/index.js\");\n/**\n * WordPress dependencies\n */\n\n/**\n * @type {import('../types').APIFetchMiddleware}\n */\n\nconst userLocaleMiddleware = (options, next) => {\n  if (typeof options.url === 'string' && !Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_0__[\"hasQueryArg\"])(options.url, '_locale')) {\n    options.url = Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_0__[\"addQueryArgs\"])(options.url, {\n      _locale: 'user'\n    });\n  }\n\n  if (typeof options.path === 'string' && !Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_0__[\"hasQueryArg\"])(options.path, '_locale')) {\n    options.path = Object(_wordpress_url__WEBPACK_IMPORTED_MODULE_0__[\"addQueryArgs\"])(options.path, {\n      _locale: 'user'\n    });\n  }\n\n  return next(options);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (userLocaleMiddleware);\n//# sourceMappingURL=user-locale.js.map\n\n//# sourceURL=webpack:///./node_modules/@wordpress/api-fetch/build-module/middlewares/user-locale.js?");

/***/ }),

/***/ "./node_modules/@wordpress/api-fetch/build-module/utils/response.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@wordpress/api-fetch/build-module/utils/response.js ***!
  \**************************************************************************/
/*! exports provided: parseResponseAndNormalizeError, parseAndThrowError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseResponseAndNormalizeError\", function() { return parseResponseAndNormalizeError; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"parseAndThrowError\", function() { return parseAndThrowError; });\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * WordPress dependencies\n */\n\n/**\n * Parses the apiFetch response.\n *\n * @param {Response} response\n * @param {boolean}  shouldParseResponse\n *\n * @return {Promise<any> | null | Response} Parsed response.\n */\n\nconst parseResponse = function (response) {\n  let shouldParseResponse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n\n  if (shouldParseResponse) {\n    if (response.status === 204) {\n      return null;\n    }\n\n    return response.json ? response.json() : Promise.reject(response);\n  }\n\n  return response;\n};\n/**\n * Calls the `json` function on the Response, throwing an error if the response\n * doesn't have a json function or if parsing the json itself fails.\n *\n * @param {Response} response\n * @return {Promise<any>} Parsed response.\n */\n\n\nconst parseJsonAndNormalizeError = response => {\n  const invalidJsonError = {\n    code: 'invalid_json',\n    message: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__[\"__\"])('The response is not a valid JSON response.')\n  };\n\n  if (!response || !response.json) {\n    throw invalidJsonError;\n  }\n\n  return response.json().catch(() => {\n    throw invalidJsonError;\n  });\n};\n/**\n * Parses the apiFetch response properly and normalize response errors.\n *\n * @param {Response} response\n * @param {boolean}  shouldParseResponse\n *\n * @return {Promise<any>} Parsed response.\n */\n\n\nconst parseResponseAndNormalizeError = function (response) {\n  let shouldParseResponse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n  return Promise.resolve(parseResponse(response, shouldParseResponse)).catch(res => parseAndThrowError(res, shouldParseResponse));\n};\n/**\n * Parses a response, throwing an error if parsing the response fails.\n *\n * @param {Response} response\n * @param {boolean}  shouldParseResponse\n * @return {Promise<any>} Parsed response.\n */\n\nfunction parseAndThrowError(response) {\n  let shouldParseResponse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n\n  if (!shouldParseResponse) {\n    throw response;\n  }\n\n  return parseJsonAndNormalizeError(response).then(error => {\n    const unknownError = {\n      code: 'unknown_error',\n      message: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__[\"__\"])('An unknown error occurred.')\n    };\n    throw error || unknownError;\n  });\n}\n//# sourceMappingURL=response.js.map\n\n//# sourceURL=webpack:///./node_modules/@wordpress/api-fetch/build-module/utils/response.js?");

/***/ }),

/***/ "./node_modules/@wordpress/url/build-module/add-query-args.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/url/build-module/add-query-args.js ***!
  \********************************************************************/
/*! exports provided: addQueryArgs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addQueryArgs\", function() { return addQueryArgs; });\n/* harmony import */ var _get_query_args__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-query-args */ \"./node_modules/@wordpress/url/build-module/get-query-args.js\");\n/* harmony import */ var _build_query_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./build-query-string */ \"./node_modules/@wordpress/url/build-module/build-query-string.js\");\n/**\n * Internal dependencies\n */\n\n\n/**\n * Appends arguments as querystring to the provided URL. If the URL already\n * includes query arguments, the arguments are merged with (and take precedent\n * over) the existing set.\n *\n * @param {string} [url=''] URL to which arguments should be appended. If omitted,\n *                          only the resulting querystring is returned.\n * @param {Object} [args]   Query arguments to apply to URL.\n *\n * @example\n * ```js\n * const newURL = addQueryArgs( 'https://google.com', { q: 'test' } ); // https://google.com/?q=test\n * ```\n *\n * @return {string} URL with arguments applied.\n */\n\nfunction addQueryArgs() {\n  let url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';\n  let args = arguments.length > 1 ? arguments[1] : undefined;\n\n  // If no arguments are to be appended, return original URL.\n  if (!args || !Object.keys(args).length) {\n    return url;\n  }\n\n  let baseUrl = url; // Determine whether URL already had query arguments.\n\n  const queryStringIndex = url.indexOf('?');\n\n  if (queryStringIndex !== -1) {\n    // Merge into existing query arguments.\n    args = Object.assign(Object(_get_query_args__WEBPACK_IMPORTED_MODULE_0__[\"getQueryArgs\"])(url), args); // Change working base URL to omit previous query arguments.\n\n    baseUrl = baseUrl.substr(0, queryStringIndex);\n  }\n\n  return baseUrl + '?' + Object(_build_query_string__WEBPACK_IMPORTED_MODULE_1__[\"buildQueryString\"])(args);\n}\n//# sourceMappingURL=add-query-args.js.map\n\n//# sourceURL=webpack:///./node_modules/@wordpress/url/build-module/add-query-args.js?");

/***/ }),

/***/ "./node_modules/@wordpress/url/build-module/build-query-string.js":
/*!************************************************************************!*\
  !*** ./node_modules/@wordpress/url/build-module/build-query-string.js ***!
  \************************************************************************/
/*! exports provided: buildQueryString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"buildQueryString\", function() { return buildQueryString; });\n/**\n * Generates URL-encoded query string using input query data.\n *\n * It is intended to behave equivalent as PHP's `http_build_query`, configured\n * with encoding type PHP_QUERY_RFC3986 (spaces as `%20`).\n *\n * @example\n * ```js\n * const queryString = buildQueryString( {\n *    simple: 'is ok',\n *    arrays: [ 'are', 'fine', 'too' ],\n *    objects: {\n *       evenNested: {\n *          ok: 'yes',\n *       },\n *    },\n * } );\n * // \"simple=is%20ok&arrays%5B0%5D=are&arrays%5B1%5D=fine&arrays%5B2%5D=too&objects%5BevenNested%5D%5Bok%5D=yes\"\n * ```\n *\n * @param {Record<string,*>} data Data to encode.\n *\n * @return {string} Query string.\n */\nfunction buildQueryString(data) {\n  let string = '';\n  const stack = Object.entries(data);\n  let pair;\n\n  while (pair = stack.shift()) {\n    let [key, value] = pair; // Support building deeply nested data, from array or object values.\n\n    const hasNestedData = Array.isArray(value) || value && value.constructor === Object;\n\n    if (hasNestedData) {\n      // Push array or object values onto the stack as composed of their\n      // original key and nested index or key, retaining order by a\n      // combination of Array#reverse and Array#unshift onto the stack.\n      const valuePairs = Object.entries(value).reverse();\n\n      for (const [member, memberValue] of valuePairs) {\n        stack.unshift([`${key}[${member}]`, memberValue]);\n      }\n    } else if (value !== undefined) {\n      // Null is treated as special case, equivalent to empty string.\n      if (value === null) {\n        value = '';\n      }\n\n      string += '&' + [key, value].map(encodeURIComponent).join('=');\n    }\n  } // Loop will concatenate with leading `&`, but it's only expected for all\n  // but the first query parameter. This strips the leading `&`, while still\n  // accounting for the case that the string may in-fact be empty.\n\n\n  return string.substr(1);\n}\n//# sourceMappingURL=build-query-string.js.map\n\n//# sourceURL=webpack:///./node_modules/@wordpress/url/build-module/build-query-string.js?");

/***/ }),

/***/ "./node_modules/@wordpress/url/build-module/clean-for-slug.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/url/build-module/clean-for-slug.js ***!
  \********************************************************************/
/*! exports provided: cleanForSlug */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cleanForSlug\", function() { return cleanForSlug; });\n/* harmony import */ var remove_accents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! remove-accents */ \"./node_modules/remove-accents/index.js\");\n/* harmony import */ var remove_accents__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(remove_accents__WEBPACK_IMPORTED_MODULE_0__);\n/**\n * External dependencies\n */\n\n/**\n * Performs some basic cleanup of a string for use as a post slug.\n *\n * This replicates some of what `sanitize_title()` does in WordPress core, but\n * is only designed to approximate what the slug will be.\n *\n * Converts Latin-1 Supplement and Latin Extended-A letters to basic Latin\n * letters. Removes combining diacritical marks. Converts whitespace, periods,\n * and forward slashes to hyphens. Removes any remaining non-word characters\n * except hyphens. Converts remaining string to lowercase. It does not account\n * for octets, HTML entities, or other encoded characters.\n *\n * @param {string} string Title or slug to be processed.\n *\n * @return {string} Processed string.\n */\n\nfunction cleanForSlug(string) {\n  if (!string) {\n    return '';\n  }\n\n  return remove_accents__WEBPACK_IMPORTED_MODULE_0___default()(string) // Convert each group of whitespace, periods, and forward slashes to a hyphen.\n  .replace(/[\\s\\./]+/g, '-') // Remove anything that's not a letter, number, underscore or hyphen.\n  .replace(/[^\\p{L}\\p{N}_-]+/gu, '') // Convert to lowercase\n  .toLowerCase() // Replace multiple hyphens with a single one.\n  .replace(/-+/g, '-') // Remove any remaining leading or trailing hyphens.\n  .replace(/(^-+)|(-+$)/g, '');\n}\n//# sourceMappingURL=clean-for-slug.js.map\n\n//# sourceURL=webpack:///./node_modules/@wordpress/url/build-module/clean-for-slug.js?");

/***/ }),

/***/ "./node_modules/@wordpress/url/build-module/filter-url-for-display.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@wordpress/url/build-module/filter-url-for-display.js ***!
  \****************************************************************************/
/*! exports provided: filterURLForDisplay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"filterURLForDisplay\", function() { return filterURLForDisplay; });\n/**\n * Returns a URL for display.\n *\n * @param {string}      url       Original URL.\n * @param {number|null} maxLength URL length.\n *\n * @example\n * ```js\n * const displayUrl = filterURLForDisplay( 'https://www.wordpress.org/gutenberg/' ); // wordpress.org/gutenberg\n * const imageUrl = filterURLForDisplay( 'https://www.wordpress.org/wp-content/uploads/img.png', 20 ); // …ent/uploads/img.png\n * ```\n *\n * @return {string} Displayed URL.\n */\nfunction filterURLForDisplay(url) {\n  let maxLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n  // Remove protocol and www prefixes.\n  let filteredURL = url.replace(/^(?:https?:)\\/\\/(?:www\\.)?/, ''); // Ends with / and only has that single slash, strip it.\n\n  if (filteredURL.match(/^[^\\/]+\\/$/)) {\n    filteredURL = filteredURL.replace('/', '');\n  }\n\n  const mediaRegexp = /([\\w|:])*\\.(?:jpg|jpeg|gif|png|svg)/;\n\n  if (!maxLength || filteredURL.length <= maxLength || !filteredURL.match(mediaRegexp)) {\n    return filteredURL;\n  } // If the file is not greater than max length, return last portion of URL.\n\n\n  filteredURL = filteredURL.split('?')[0];\n  const urlPieces = filteredURL.split('/');\n  const file = urlPieces[urlPieces.length - 1];\n\n  if (file.length <= maxLength) {\n    return '…' + filteredURL.slice(-maxLength);\n  } // If the file is greater than max length, truncate the file.\n\n\n  const index = file.lastIndexOf('.');\n  const [fileName, extension] = [file.slice(0, index), file.slice(index + 1)];\n  const truncatedFile = fileName.slice(-3) + '.' + extension;\n  return file.slice(0, maxLength - truncatedFile.length - 1) + '…' + truncatedFile;\n}\n//# sourceMappingURL=filter-url-for-display.js.map\n\n//# sourceURL=webpack:///./node_modules/@wordpress/url/build-module/filter-url-for-display.js?");

/***/ }),

/***/ "./node_modules/@wordpress/url/build-module/get-authority.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@wordpress/url/build-module/get-authority.js ***!
  \*******************************************************************/
/*! exports provided: getAuthority */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAuthority\", function() { return getAuthority; });\n/**\n * Returns the authority part of the URL.\n *\n * @param {string} url The full URL.\n *\n * @example\n * ```js\n * const authority1 = getAuthority( 'https://wordpress.org/help/' ); // 'wordpress.org'\n * const authority2 = getAuthority( 'https://localhost:8080/test/' ); // 'localhost:8080'\n * ```\n *\n * @return {string|void} The authority part of the URL.\n */\nfunction getAuthority(url) {\n  const matches = /^[^\\/\\s:]+:(?:\\/\\/)?\\/?([^\\/\\s#?]+)[\\/#?]{0,1}\\S*$/.exec(url);\n\n  if (matches) {\n    return matches[1];\n  }\n}\n//# sourceMappingURL=get-authority.js.map\n\n//# sourceURL=webpack:///./node_modules/@wordpress/url/build-module/get-authority.js?");

/***/ }),

/***/ "./node_modules/@wordpress/url/build-module/get-filename.js":
/*!******************************************************************!*\
  !*** ./node_modules/@wordpress/url/build-module/get-filename.js ***!
  \******************************************************************/
/*! exports provided: getFilename */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFilename\", function() { return getFilename; });\n/**\n * Returns the filename part of the URL.\n *\n * @param {string} url The full URL.\n *\n * @example\n * ```js\n * const filename1 = getFilename( 'http://localhost:8080/this/is/a/test.jpg' ); // 'test.jpg'\n * const filename2 = getFilename( '/this/is/a/test.png' ); // 'test.png'\n * ```\n *\n * @return {string|void} The filename part of the URL.\n */\nfunction getFilename(url) {\n  let filename;\n\n  try {\n    filename = new URL(url, 'http://example.com').pathname.split('/').pop();\n  } catch (error) {}\n\n  if (filename) {\n    return filename;\n  }\n}\n//# sourceMappingURL=get-filename.js.map\n\n//# sourceURL=webpack:///./node_modules/@wordpress/url/build-module/get-filename.js?");

/***/ }),

/***/ "./node_modules/@wordpress/url/build-module/get-fragment.js":
/*!******************************************************************!*\
  !*** ./node_modules/@wordpress/url/build-module/get-fragment.js ***!
  \******************************************************************/
/*! exports provided: getFragment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFragment\", function() { return getFragment; });\n/**\n * Returns the fragment part of the URL.\n *\n * @param {string} url The full URL\n *\n * @example\n * ```js\n * const fragment1 = getFragment( 'http://localhost:8080/this/is/a/test?query=true#fragment' ); // '#fragment'\n * const fragment2 = getFragment( 'https://wordpress.org#another-fragment?query=true' ); // '#another-fragment'\n * ```\n *\n * @return {string|void} The fragment part of the URL.\n */\nfunction getFragment(url) {\n  const matches = /^\\S+?(#[^\\s\\?]*)/.exec(url);\n\n  if (matches) {\n    return matches[1];\n  }\n}\n//# sourceMappingURL=get-fragment.js.map\n\n//# sourceURL=webpack:///./node_modules/@wordpress/url/build-module/get-fragment.js?");

/***/ }),

/***/ "./node_modules/@wordpress/url/build-module/get-path-and-query-string.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@wordpress/url/build-module/get-path-and-query-string.js ***!
  \*******************************************************************************/
/*! exports provided: getPathAndQueryString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPathAndQueryString\", function() { return getPathAndQueryString; });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! . */ \"./node_modules/@wordpress/url/build-module/index.js\");\n/**\n * Internal dependencies\n */\n\n/**\n * Returns the path part and query string part of the URL.\n *\n * @param {string} url The full URL.\n *\n * @example\n * ```js\n * const pathAndQueryString1 = getPathAndQueryString( 'http://localhost:8080/this/is/a/test?query=true' ); // '/this/is/a/test?query=true'\n * const pathAndQueryString2 = getPathAndQueryString( 'https://wordpress.org/help/faq/' ); // '/help/faq'\n * ```\n *\n * @return {string} The path part and query string part of the URL.\n */\n\nfunction getPathAndQueryString(url) {\n  const path = Object(___WEBPACK_IMPORTED_MODULE_0__[\"getPath\"])(url);\n  const queryString = Object(___WEBPACK_IMPORTED_MODULE_0__[\"getQueryString\"])(url);\n  let value = '/';\n  if (path) value += path;\n  if (queryString) value += `?${queryString}`;\n  return value;\n}\n//# sourceMappingURL=get-path-and-query-string.js.map\n\n//# sourceURL=webpack:///./node_modules/@wordpress/url/build-module/get-path-and-query-string.js?");

/***/ }),

/***/ "./node_modules/@wordpress/url/build-module/get-path.js":
/*!**************************************************************!*\
  !*** ./node_modules/@wordpress/url/build-module/get-path.js ***!
  \**************************************************************/
/*! exports provided: getPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPath\", function() { return getPath; });\n/**\n * Returns the path part of the URL.\n *\n * @param {string} url The full URL.\n *\n * @example\n * ```js\n * const path1 = getPath( 'http://localhost:8080/this/is/a/test?query=true' ); // 'this/is/a/test'\n * const path2 = getPath( 'https://wordpress.org/help/faq/' ); // 'help/faq'\n * ```\n *\n * @return {string|void} The path part of the URL.\n */\nfunction getPath(url) {\n  const matches = /^[^\\/\\s:]+:(?:\\/\\/)?[^\\/\\s#?]+[\\/]([^\\s#?]+)[#?]{0,1}\\S*$/.exec(url);\n\n  if (matches) {\n    return matches[1];\n  }\n}\n//# sourceMappingURL=get-path.js.map\n\n//# sourceURL=webpack:///./node_modules/@wordpress/url/build-module/get-path.js?");

/***/ }),

/***/ "./node_modules/@wordpress/url/build-module/get-protocol.js":
/*!******************************************************************!*\
  !*** ./node_modules/@wordpress/url/build-module/get-protocol.js ***!
  \******************************************************************/
/*! exports provided: getProtocol */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getProtocol\", function() { return getProtocol; });\n/**\n * Returns the protocol part of the URL.\n *\n * @param {string} url The full URL.\n *\n * @example\n * ```js\n * const protocol1 = getProtocol( 'tel:012345678' ); // 'tel:'\n * const protocol2 = getProtocol( 'https://wordpress.org' ); // 'https:'\n * ```\n *\n * @return {string|void} The protocol part of the URL.\n */\nfunction getProtocol(url) {\n  const matches = /^([^\\s:]+:)/.exec(url);\n\n  if (matches) {\n    return matches[1];\n  }\n}\n//# sourceMappingURL=get-protocol.js.map\n\n//# sourceURL=webpack:///./node_modules/@wordpress/url/build-module/get-protocol.js?");

/***/ }),

/***/ "./node_modules/@wordpress/url/build-module/get-query-arg.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@wordpress/url/build-module/get-query-arg.js ***!
  \*******************************************************************/
/*! exports provided: getQueryArg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getQueryArg\", function() { return getQueryArg; });\n/* harmony import */ var _get_query_args__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-query-args */ \"./node_modules/@wordpress/url/build-module/get-query-args.js\");\n/**\n * Internal dependencies\n */\n\n/**\n * @typedef {{[key: string]: QueryArgParsed}} QueryArgObject\n */\n\n/**\n * @typedef {string|string[]|QueryArgObject} QueryArgParsed\n */\n\n/**\n * Returns a single query argument of the url\n *\n * @param {string} url URL.\n * @param {string} arg Query arg name.\n *\n * @example\n * ```js\n * const foo = getQueryArg( 'https://wordpress.org?foo=bar&bar=baz', 'foo' ); // bar\n * ```\n *\n * @return {QueryArgParsed|void} Query arg value.\n */\n\nfunction getQueryArg(url, arg) {\n  return Object(_get_query_args__WEBPACK_IMPORTED_MODULE_0__[\"getQueryArgs\"])(url)[arg];\n}\n//# sourceMappingURL=get-query-arg.js.map\n\n//# sourceURL=webpack:///./node_modules/@wordpress/url/build-module/get-query-arg.js?");

/***/ }),

/***/ "./node_modules/@wordpress/url/build-module/get-query-args.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/url/build-module/get-query-args.js ***!
  \********************************************************************/
/*! exports provided: getQueryArgs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getQueryArgs\", function() { return getQueryArgs; });\n/* harmony import */ var _safe_decode_uri_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./safe-decode-uri-component */ \"./node_modules/@wordpress/url/build-module/safe-decode-uri-component.js\");\n/* harmony import */ var _get_query_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-query-string */ \"./node_modules/@wordpress/url/build-module/get-query-string.js\");\n/**\n * Internal dependencies\n */\n\n\n/** @typedef {import('./get-query-arg').QueryArgParsed} QueryArgParsed */\n\n/**\n * @typedef {Record<string,QueryArgParsed>} QueryArgs\n */\n\n/**\n * Sets a value in object deeply by a given array of path segments. Mutates the\n * object reference.\n *\n * @param {Record<string,*>} object Object in which to assign.\n * @param {string[]}         path   Path segment at which to set value.\n * @param {*}                value  Value to set.\n */\n\nfunction setPath(object, path, value) {\n  const length = path.length;\n  const lastIndex = length - 1;\n\n  for (let i = 0; i < length; i++) {\n    let key = path[i];\n\n    if (!key && Array.isArray(object)) {\n      // If key is empty string and next value is array, derive key from\n      // the current length of the array.\n      key = object.length.toString();\n    }\n\n    key = ['__proto__', 'constructor', 'prototype'].includes(key) ? key.toUpperCase() : key; // If the next key in the path is numeric (or empty string), it will be\n    // created as an array. Otherwise, it will be created as an object.\n\n    const isNextKeyArrayIndex = !isNaN(Number(path[i + 1]));\n    object[key] = i === lastIndex ? // If at end of path, assign the intended value.\n    value : // Otherwise, advance to the next object in the path, creating\n    // it if it does not yet exist.\n    object[key] || (isNextKeyArrayIndex ? [] : {});\n\n    if (Array.isArray(object[key]) && !isNextKeyArrayIndex) {\n      // If we current key is non-numeric, but the next value is an\n      // array, coerce the value to an object.\n      object[key] = { ...object[key]\n      };\n    } // Update working reference object to the next in the path.\n\n\n    object = object[key];\n  }\n}\n/**\n * Returns an object of query arguments of the given URL. If the given URL is\n * invalid or has no querystring, an empty object is returned.\n *\n * @param {string} url URL.\n *\n * @example\n * ```js\n * const foo = getQueryArgs( 'https://wordpress.org?foo=bar&bar=baz' );\n * // { \"foo\": \"bar\", \"bar\": \"baz\" }\n * ```\n *\n * @return {QueryArgs} Query args object.\n */\n\n\nfunction getQueryArgs(url) {\n  return (Object(_get_query_string__WEBPACK_IMPORTED_MODULE_1__[\"getQueryString\"])(url) || '' // Normalize space encoding, accounting for PHP URL encoding\n  // corresponding to `application/x-www-form-urlencoded`.\n  //\n  // See: https://tools.ietf.org/html/rfc1866#section-8.2.1\n  ).replace(/\\+/g, '%20').split('&').reduce((accumulator, keyValue) => {\n    const [key, value = ''] = keyValue.split('=') // Filtering avoids decoding as `undefined` for value, where\n    // default is restored in destructuring assignment.\n    .filter(Boolean).map(_safe_decode_uri_component__WEBPACK_IMPORTED_MODULE_0__[\"safeDecodeURIComponent\"]);\n\n    if (key) {\n      const segments = key.replace(/\\]/g, '').split('[');\n      setPath(accumulator, segments, value);\n    }\n\n    return accumulator;\n  }, Object.create(null));\n}\n//# sourceMappingURL=get-query-args.js.map\n\n//# sourceURL=webpack:///./node_modules/@wordpress/url/build-module/get-query-args.js?");

/***/ }),

/***/ "./node_modules/@wordpress/url/build-module/get-query-string.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@wordpress/url/build-module/get-query-string.js ***!
  \**********************************************************************/
/*! exports provided: getQueryString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getQueryString\", function() { return getQueryString; });\n/**\n * Returns the query string part of the URL.\n *\n * @param {string} url The full URL.\n *\n * @example\n * ```js\n * const queryString = getQueryString( 'http://localhost:8080/this/is/a/test?query=true#fragment' ); // 'query=true'\n * ```\n *\n * @return {string|void} The query string part of the URL.\n */\nfunction getQueryString(url) {\n  let query;\n\n  try {\n    query = new URL(url, 'http://example.com').search.substring(1);\n  } catch (error) {}\n\n  if (query) {\n    return query;\n  }\n}\n//# sourceMappingURL=get-query-string.js.map\n\n//# sourceURL=webpack:///./node_modules/@wordpress/url/build-module/get-query-string.js?");

/***/ }),

/***/ "./node_modules/@wordpress/url/build-module/has-query-arg.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@wordpress/url/build-module/has-query-arg.js ***!
  \*******************************************************************/
/*! exports provided: hasQueryArg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hasQueryArg\", function() { return hasQueryArg; });\n/* harmony import */ var _get_query_arg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-query-arg */ \"./node_modules/@wordpress/url/build-module/get-query-arg.js\");\n/**\n * Internal dependencies\n */\n\n/**\n * Determines whether the URL contains a given query arg.\n *\n * @param {string} url URL.\n * @param {string} arg Query arg name.\n *\n * @example\n * ```js\n * const hasBar = hasQueryArg( 'https://wordpress.org?foo=bar&bar=baz', 'bar' ); // true\n * ```\n *\n * @return {boolean} Whether or not the URL contains the query arg.\n */\n\nfunction hasQueryArg(url, arg) {\n  return Object(_get_query_arg__WEBPACK_IMPORTED_MODULE_0__[\"getQueryArg\"])(url, arg) !== undefined;\n}\n//# sourceMappingURL=has-query-arg.js.map\n\n//# sourceURL=webpack:///./node_modules/@wordpress/url/build-module/has-query-arg.js?");

/***/ }),

/***/ "./node_modules/@wordpress/url/build-module/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@wordpress/url/build-module/index.js ***!
  \***********************************************************/
/*! exports provided: isURL, isEmail, getProtocol, isValidProtocol, getAuthority, isValidAuthority, getPath, isValidPath, getQueryString, buildQueryString, isValidQueryString, getPathAndQueryString, getFragment, isValidFragment, addQueryArgs, getQueryArg, getQueryArgs, hasQueryArg, removeQueryArgs, prependHTTP, safeDecodeURI, safeDecodeURIComponent, filterURLForDisplay, cleanForSlug, getFilename, normalizePath, prependHTTPS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _is_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-url */ \"./node_modules/@wordpress/url/build-module/is-url.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isURL\", function() { return _is_url__WEBPACK_IMPORTED_MODULE_0__[\"isURL\"]; });\n\n/* harmony import */ var _is_email__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is-email */ \"./node_modules/@wordpress/url/build-module/is-email.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isEmail\", function() { return _is_email__WEBPACK_IMPORTED_MODULE_1__[\"isEmail\"]; });\n\n/* harmony import */ var _get_protocol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-protocol */ \"./node_modules/@wordpress/url/build-module/get-protocol.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getProtocol\", function() { return _get_protocol__WEBPACK_IMPORTED_MODULE_2__[\"getProtocol\"]; });\n\n/* harmony import */ var _is_valid_protocol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./is-valid-protocol */ \"./node_modules/@wordpress/url/build-module/is-valid-protocol.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isValidProtocol\", function() { return _is_valid_protocol__WEBPACK_IMPORTED_MODULE_3__[\"isValidProtocol\"]; });\n\n/* harmony import */ var _get_authority__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./get-authority */ \"./node_modules/@wordpress/url/build-module/get-authority.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getAuthority\", function() { return _get_authority__WEBPACK_IMPORTED_MODULE_4__[\"getAuthority\"]; });\n\n/* harmony import */ var _is_valid_authority__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./is-valid-authority */ \"./node_modules/@wordpress/url/build-module/is-valid-authority.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isValidAuthority\", function() { return _is_valid_authority__WEBPACK_IMPORTED_MODULE_5__[\"isValidAuthority\"]; });\n\n/* harmony import */ var _get_path__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./get-path */ \"./node_modules/@wordpress/url/build-module/get-path.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getPath\", function() { return _get_path__WEBPACK_IMPORTED_MODULE_6__[\"getPath\"]; });\n\n/* harmony import */ var _is_valid_path__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./is-valid-path */ \"./node_modules/@wordpress/url/build-module/is-valid-path.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isValidPath\", function() { return _is_valid_path__WEBPACK_IMPORTED_MODULE_7__[\"isValidPath\"]; });\n\n/* harmony import */ var _get_query_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./get-query-string */ \"./node_modules/@wordpress/url/build-module/get-query-string.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getQueryString\", function() { return _get_query_string__WEBPACK_IMPORTED_MODULE_8__[\"getQueryString\"]; });\n\n/* harmony import */ var _build_query_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./build-query-string */ \"./node_modules/@wordpress/url/build-module/build-query-string.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"buildQueryString\", function() { return _build_query_string__WEBPACK_IMPORTED_MODULE_9__[\"buildQueryString\"]; });\n\n/* harmony import */ var _is_valid_query_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./is-valid-query-string */ \"./node_modules/@wordpress/url/build-module/is-valid-query-string.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isValidQueryString\", function() { return _is_valid_query_string__WEBPACK_IMPORTED_MODULE_10__[\"isValidQueryString\"]; });\n\n/* harmony import */ var _get_path_and_query_string__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./get-path-and-query-string */ \"./node_modules/@wordpress/url/build-module/get-path-and-query-string.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getPathAndQueryString\", function() { return _get_path_and_query_string__WEBPACK_IMPORTED_MODULE_11__[\"getPathAndQueryString\"]; });\n\n/* harmony import */ var _get_fragment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./get-fragment */ \"./node_modules/@wordpress/url/build-module/get-fragment.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getFragment\", function() { return _get_fragment__WEBPACK_IMPORTED_MODULE_12__[\"getFragment\"]; });\n\n/* harmony import */ var _is_valid_fragment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./is-valid-fragment */ \"./node_modules/@wordpress/url/build-module/is-valid-fragment.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"isValidFragment\", function() { return _is_valid_fragment__WEBPACK_IMPORTED_MODULE_13__[\"isValidFragment\"]; });\n\n/* harmony import */ var _add_query_args__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./add-query-args */ \"./node_modules/@wordpress/url/build-module/add-query-args.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"addQueryArgs\", function() { return _add_query_args__WEBPACK_IMPORTED_MODULE_14__[\"addQueryArgs\"]; });\n\n/* harmony import */ var _get_query_arg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./get-query-arg */ \"./node_modules/@wordpress/url/build-module/get-query-arg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getQueryArg\", function() { return _get_query_arg__WEBPACK_IMPORTED_MODULE_15__[\"getQueryArg\"]; });\n\n/* harmony import */ var _get_query_args__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./get-query-args */ \"./node_modules/@wordpress/url/build-module/get-query-args.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getQueryArgs\", function() { return _get_query_args__WEBPACK_IMPORTED_MODULE_16__[\"getQueryArgs\"]; });\n\n/* harmony import */ var _has_query_arg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./has-query-arg */ \"./node_modules/@wordpress/url/build-module/has-query-arg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"hasQueryArg\", function() { return _has_query_arg__WEBPACK_IMPORTED_MODULE_17__[\"hasQueryArg\"]; });\n\n/* harmony import */ var _remove_query_args__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./remove-query-args */ \"./node_modules/@wordpress/url/build-module/remove-query-args.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"removeQueryArgs\", function() { return _remove_query_args__WEBPACK_IMPORTED_MODULE_18__[\"removeQueryArgs\"]; });\n\n/* harmony import */ var _prepend_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./prepend-http */ \"./node_modules/@wordpress/url/build-module/prepend-http.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"prependHTTP\", function() { return _prepend_http__WEBPACK_IMPORTED_MODULE_19__[\"prependHTTP\"]; });\n\n/* harmony import */ var _safe_decode_uri__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./safe-decode-uri */ \"./node_modules/@wordpress/url/build-module/safe-decode-uri.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"safeDecodeURI\", function() { return _safe_decode_uri__WEBPACK_IMPORTED_MODULE_20__[\"safeDecodeURI\"]; });\n\n/* harmony import */ var _safe_decode_uri_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./safe-decode-uri-component */ \"./node_modules/@wordpress/url/build-module/safe-decode-uri-component.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"safeDecodeURIComponent\", function() { return _safe_decode_uri_component__WEBPACK_IMPORTED_MODULE_21__[\"safeDecodeURIComponent\"]; });\n\n/* harmony import */ var _filter_url_for_display__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./filter-url-for-display */ \"./node_modules/@wordpress/url/build-module/filter-url-for-display.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"filterURLForDisplay\", function() { return _filter_url_for_display__WEBPACK_IMPORTED_MODULE_22__[\"filterURLForDisplay\"]; });\n\n/* harmony import */ var _clean_for_slug__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./clean-for-slug */ \"./node_modules/@wordpress/url/build-module/clean-for-slug.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"cleanForSlug\", function() { return _clean_for_slug__WEBPACK_IMPORTED_MODULE_23__[\"cleanForSlug\"]; });\n\n/* harmony import */ var _get_filename__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./get-filename */ \"./node_modules/@wordpress/url/build-module/get-filename.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"getFilename\", function() { return _get_filename__WEBPACK_IMPORTED_MODULE_24__[\"getFilename\"]; });\n\n/* harmony import */ var _normalize_path__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./normalize-path */ \"./node_modules/@wordpress/url/build-module/normalize-path.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"normalizePath\", function() { return _normalize_path__WEBPACK_IMPORTED_MODULE_25__[\"normalizePath\"]; });\n\n/* harmony import */ var _prepend_https__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./prepend-https */ \"./node_modules/@wordpress/url/build-module/prepend-https.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"prependHTTPS\", function() { return _prepend_https__WEBPACK_IMPORTED_MODULE_26__[\"prependHTTPS\"]; });\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack:///./node_modules/@wordpress/url/build-module/index.js?");

/***/ }),

/***/ "./node_modules/@wordpress/url/build-module/is-email.js":
/*!**************************************************************!*\
  !*** ./node_modules/@wordpress/url/build-module/is-email.js ***!
  \**************************************************************/
/*! exports provided: isEmail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isEmail\", function() { return isEmail; });\nconst EMAIL_REGEXP = /^(mailto:)?[a-z0-9._%+-]+@[a-z0-9][a-z0-9.-]*\\.[a-z]{2,63}$/i;\n/**\n * Determines whether the given string looks like an email.\n *\n * @param {string} email The string to scrutinise.\n *\n * @example\n * ```js\n * const isEmail = isEmail( 'hello@wordpress.org' ); // true\n * ```\n *\n * @return {boolean} Whether or not it looks like an email.\n */\n\nfunction isEmail(email) {\n  return EMAIL_REGEXP.test(email);\n}\n//# sourceMappingURL=is-email.js.map\n\n//# sourceURL=webpack:///./node_modules/@wordpress/url/build-module/is-email.js?");

/***/ }),

/***/ "./node_modules/@wordpress/url/build-module/is-url.js":
/*!************************************************************!*\
  !*** ./node_modules/@wordpress/url/build-module/is-url.js ***!
  \************************************************************/
/*! exports provided: isURL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isURL\", function() { return isURL; });\n/**\n * Determines whether the given string looks like a URL.\n *\n * @param {string} url The string to scrutinise.\n *\n * @example\n * ```js\n * const isURL = isURL( 'https://wordpress.org' ); // true\n * ```\n *\n * @see https://url.spec.whatwg.org/\n * @see https://url.spec.whatwg.org/#valid-url-string\n *\n * @return {boolean} Whether or not it looks like a URL.\n */\nfunction isURL(url) {\n  // A URL can be considered value if the `URL` constructor is able to parse\n  // it. The constructor throws an error for an invalid URL.\n  try {\n    new URL(url);\n    return true;\n  } catch {\n    return false;\n  }\n}\n//# sourceMappingURL=is-url.js.map\n\n//# sourceURL=webpack:///./node_modules/@wordpress/url/build-module/is-url.js?");

/***/ }),

/***/ "./node_modules/@wordpress/url/build-module/is-valid-authority.js":
/*!************************************************************************!*\
  !*** ./node_modules/@wordpress/url/build-module/is-valid-authority.js ***!
  \************************************************************************/
/*! exports provided: isValidAuthority */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isValidAuthority\", function() { return isValidAuthority; });\n/**\n * Checks for invalid characters within the provided authority.\n *\n * @param {string} authority A string containing the URL authority.\n *\n * @example\n * ```js\n * const isValid = isValidAuthority( 'wordpress.org' ); // true\n * const isNotValid = isValidAuthority( 'wordpress#org' ); // false\n * ```\n *\n * @return {boolean} True if the argument contains a valid authority.\n */\nfunction isValidAuthority(authority) {\n  if (!authority) {\n    return false;\n  }\n\n  return /^[^\\s#?]+$/.test(authority);\n}\n//# sourceMappingURL=is-valid-authority.js.map\n\n//# sourceURL=webpack:///./node_modules/@wordpress/url/build-module/is-valid-authority.js?");

/***/ }),

/***/ "./node_modules/@wordpress/url/build-module/is-valid-fragment.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@wordpress/url/build-module/is-valid-fragment.js ***!
  \***********************************************************************/
/*! exports provided: isValidFragment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isValidFragment\", function() { return isValidFragment; });\n/**\n * Checks for invalid characters within the provided fragment.\n *\n * @param {string} fragment The url fragment.\n *\n * @example\n * ```js\n * const isValid = isValidFragment( '#valid-fragment' ); // true\n * const isNotValid = isValidFragment( '#invalid-#fragment' ); // false\n * ```\n *\n * @return {boolean} True if the argument contains a valid fragment.\n */\nfunction isValidFragment(fragment) {\n  if (!fragment) {\n    return false;\n  }\n\n  return /^#[^\\s#?\\/]*$/.test(fragment);\n}\n//# sourceMappingURL=is-valid-fragment.js.map\n\n//# sourceURL=webpack:///./node_modules/@wordpress/url/build-module/is-valid-fragment.js?");

/***/ }),

/***/ "./node_modules/@wordpress/url/build-module/is-valid-path.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@wordpress/url/build-module/is-valid-path.js ***!
  \*******************************************************************/
/*! exports provided: isValidPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isValidPath\", function() { return isValidPath; });\n/**\n * Checks for invalid characters within the provided path.\n *\n * @param {string} path The URL path.\n *\n * @example\n * ```js\n * const isValid = isValidPath( 'test/path/' ); // true\n * const isNotValid = isValidPath( '/invalid?test/path/' ); // false\n * ```\n *\n * @return {boolean} True if the argument contains a valid path\n */\nfunction isValidPath(path) {\n  if (!path) {\n    return false;\n  }\n\n  return /^[^\\s#?]+$/.test(path);\n}\n//# sourceMappingURL=is-valid-path.js.map\n\n//# sourceURL=webpack:///./node_modules/@wordpress/url/build-module/is-valid-path.js?");

/***/ }),

/***/ "./node_modules/@wordpress/url/build-module/is-valid-protocol.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@wordpress/url/build-module/is-valid-protocol.js ***!
  \***********************************************************************/
/*! exports provided: isValidProtocol */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isValidProtocol\", function() { return isValidProtocol; });\n/**\n * Tests if a url protocol is valid.\n *\n * @param {string} protocol The url protocol.\n *\n * @example\n * ```js\n * const isValid = isValidProtocol( 'https:' ); // true\n * const isNotValid = isValidProtocol( 'https :' ); // false\n * ```\n *\n * @return {boolean} True if the argument is a valid protocol (e.g. http:, tel:).\n */\nfunction isValidProtocol(protocol) {\n  if (!protocol) {\n    return false;\n  }\n\n  return /^[a-z\\-.\\+]+[0-9]*:$/i.test(protocol);\n}\n//# sourceMappingURL=is-valid-protocol.js.map\n\n//# sourceURL=webpack:///./node_modules/@wordpress/url/build-module/is-valid-protocol.js?");

/***/ }),

/***/ "./node_modules/@wordpress/url/build-module/is-valid-query-string.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@wordpress/url/build-module/is-valid-query-string.js ***!
  \***************************************************************************/
/*! exports provided: isValidQueryString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isValidQueryString\", function() { return isValidQueryString; });\n/**\n * Checks for invalid characters within the provided query string.\n *\n * @param {string} queryString The query string.\n *\n * @example\n * ```js\n * const isValid = isValidQueryString( 'query=true&another=false' ); // true\n * const isNotValid = isValidQueryString( 'query=true?another=false' ); // false\n * ```\n *\n * @return {boolean} True if the argument contains a valid query string.\n */\nfunction isValidQueryString(queryString) {\n  if (!queryString) {\n    return false;\n  }\n\n  return /^[^\\s#?\\/]+$/.test(queryString);\n}\n//# sourceMappingURL=is-valid-query-string.js.map\n\n//# sourceURL=webpack:///./node_modules/@wordpress/url/build-module/is-valid-query-string.js?");

/***/ }),

/***/ "./node_modules/@wordpress/url/build-module/normalize-path.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/url/build-module/normalize-path.js ***!
  \********************************************************************/
/*! exports provided: normalizePath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"normalizePath\", function() { return normalizePath; });\n/**\n * Given a path, returns a normalized path where equal query parameter values\n * will be treated as identical, regardless of order they appear in the original\n * text.\n *\n * @param {string} path Original path.\n *\n * @return {string} Normalized path.\n */\nfunction normalizePath(path) {\n  const splitted = path.split('?');\n  const query = splitted[1];\n  const base = splitted[0];\n\n  if (!query) {\n    return base;\n  } // 'b=1%2C2&c=2&a=5'\n\n\n  return base + '?' + query // [ 'b=1%2C2', 'c=2', 'a=5' ]\n  .split('&') // [ [ 'b, '1%2C2' ], [ 'c', '2' ], [ 'a', '5' ] ]\n  .map(entry => entry.split('=')) // [ [ 'b', '1,2' ], [ 'c', '2' ], [ 'a', '5' ] ]\n  .map(pair => pair.map(decodeURIComponent)) // [ [ 'a', '5' ], [ 'b, '1,2' ], [ 'c', '2' ] ]\n  .sort((a, b) => a[0].localeCompare(b[0])) // [ [ 'a', '5' ], [ 'b, '1%2C2' ], [ 'c', '2' ] ]\n  .map(pair => pair.map(encodeURIComponent)) // [ 'a=5', 'b=1%2C2', 'c=2' ]\n  .map(pair => pair.join('=')) // 'a=5&b=1%2C2&c=2'\n  .join('&');\n}\n//# sourceMappingURL=normalize-path.js.map\n\n//# sourceURL=webpack:///./node_modules/@wordpress/url/build-module/normalize-path.js?");

/***/ }),

/***/ "./node_modules/@wordpress/url/build-module/prepend-http.js":
/*!******************************************************************!*\
  !*** ./node_modules/@wordpress/url/build-module/prepend-http.js ***!
  \******************************************************************/
/*! exports provided: prependHTTP */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"prependHTTP\", function() { return prependHTTP; });\n/* harmony import */ var _is_email__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is-email */ \"./node_modules/@wordpress/url/build-module/is-email.js\");\n/**\n * Internal dependencies\n */\n\nconst USABLE_HREF_REGEXP = /^(?:[a-z]+:|#|\\?|\\.|\\/)/i;\n/**\n * Prepends \"http://\" to a url, if it looks like something that is meant to be a TLD.\n *\n * @param {string} url The URL to test.\n *\n * @example\n * ```js\n * const actualURL = prependHTTP( 'wordpress.org' ); // http://wordpress.org\n * ```\n *\n * @return {string} The updated URL.\n */\n\nfunction prependHTTP(url) {\n  if (!url) {\n    return url;\n  }\n\n  url = url.trim();\n\n  if (!USABLE_HREF_REGEXP.test(url) && !Object(_is_email__WEBPACK_IMPORTED_MODULE_0__[\"isEmail\"])(url)) {\n    return 'http://' + url;\n  }\n\n  return url;\n}\n//# sourceMappingURL=prepend-http.js.map\n\n//# sourceURL=webpack:///./node_modules/@wordpress/url/build-module/prepend-http.js?");

/***/ }),

/***/ "./node_modules/@wordpress/url/build-module/prepend-https.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@wordpress/url/build-module/prepend-https.js ***!
  \*******************************************************************/
/*! exports provided: prependHTTPS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"prependHTTPS\", function() { return prependHTTPS; });\n/* harmony import */ var _prepend_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prepend-http */ \"./node_modules/@wordpress/url/build-module/prepend-http.js\");\n/**\n * Internal dependencies\n */\n\n/**\n * Prepends \"https://\" to a url, if it looks like something that is meant to be a TLD.\n *\n * Note: this will not replace \"http://\" with \"https://\".\n *\n * @param {string} url The URL to test.\n *\n * @example\n * ```js\n * const actualURL = prependHTTPS( 'wordpress.org' ); // https://wordpress.org\n * ```\n *\n * @return {string} The updated URL.\n */\n\nfunction prependHTTPS(url) {\n  if (!url) {\n    return url;\n  } // If url starts with http://, return it as is.\n\n\n  if (url.startsWith('http://')) {\n    return url;\n  }\n\n  url = Object(_prepend_http__WEBPACK_IMPORTED_MODULE_0__[\"prependHTTP\"])(url);\n  return url.replace(/^http:/, 'https:');\n}\n//# sourceMappingURL=prepend-https.js.map\n\n//# sourceURL=webpack:///./node_modules/@wordpress/url/build-module/prepend-https.js?");

/***/ }),

/***/ "./node_modules/@wordpress/url/build-module/remove-query-args.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@wordpress/url/build-module/remove-query-args.js ***!
  \***********************************************************************/
/*! exports provided: removeQueryArgs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeQueryArgs\", function() { return removeQueryArgs; });\n/* harmony import */ var _get_query_args__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-query-args */ \"./node_modules/@wordpress/url/build-module/get-query-args.js\");\n/* harmony import */ var _build_query_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./build-query-string */ \"./node_modules/@wordpress/url/build-module/build-query-string.js\");\n/**\n * Internal dependencies\n */\n\n\n/**\n * Removes arguments from the query string of the url\n *\n * @param {string}    url  URL.\n * @param {...string} args Query Args.\n *\n * @example\n * ```js\n * const newUrl = removeQueryArgs( 'https://wordpress.org?foo=bar&bar=baz&baz=foobar', 'foo', 'bar' ); // https://wordpress.org?baz=foobar\n * ```\n *\n * @return {string} Updated URL.\n */\n\nfunction removeQueryArgs(url) {\n  const queryStringIndex = url.indexOf('?');\n\n  if (queryStringIndex === -1) {\n    return url;\n  }\n\n  const query = Object(_get_query_args__WEBPACK_IMPORTED_MODULE_0__[\"getQueryArgs\"])(url);\n  const baseURL = url.substr(0, queryStringIndex);\n\n  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n    args[_key - 1] = arguments[_key];\n  }\n\n  args.forEach(arg => delete query[arg]);\n  const queryString = Object(_build_query_string__WEBPACK_IMPORTED_MODULE_1__[\"buildQueryString\"])(query);\n  return queryString ? baseURL + '?' + queryString : baseURL;\n}\n//# sourceMappingURL=remove-query-args.js.map\n\n//# sourceURL=webpack:///./node_modules/@wordpress/url/build-module/remove-query-args.js?");

/***/ }),

/***/ "./node_modules/@wordpress/url/build-module/safe-decode-uri-component.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@wordpress/url/build-module/safe-decode-uri-component.js ***!
  \*******************************************************************************/
/*! exports provided: safeDecodeURIComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"safeDecodeURIComponent\", function() { return safeDecodeURIComponent; });\n/**\n * Safely decodes a URI component with `decodeURIComponent`. Returns the URI component unmodified if\n * `decodeURIComponent` throws an error.\n *\n * @param {string} uriComponent URI component to decode.\n *\n * @return {string} Decoded URI component if possible.\n */\nfunction safeDecodeURIComponent(uriComponent) {\n  try {\n    return decodeURIComponent(uriComponent);\n  } catch (uriComponentError) {\n    return uriComponent;\n  }\n}\n//# sourceMappingURL=safe-decode-uri-component.js.map\n\n//# sourceURL=webpack:///./node_modules/@wordpress/url/build-module/safe-decode-uri-component.js?");

/***/ }),

/***/ "./node_modules/@wordpress/url/build-module/safe-decode-uri.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/url/build-module/safe-decode-uri.js ***!
  \*********************************************************************/
/*! exports provided: safeDecodeURI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"safeDecodeURI\", function() { return safeDecodeURI; });\n/**\n * Safely decodes a URI with `decodeURI`. Returns the URI unmodified if\n * `decodeURI` throws an error.\n *\n * @param {string} uri URI to decode.\n *\n * @example\n * ```js\n * const badUri = safeDecodeURI( '%z' ); // does not throw an Error, simply returns '%z'\n * ```\n *\n * @return {string} Decoded URI if possible.\n */\nfunction safeDecodeURI(uri) {\n  try {\n    return decodeURI(uri);\n  } catch (uriError) {\n    return uri;\n  }\n}\n//# sourceMappingURL=safe-decode-uri.js.map\n\n//# sourceURL=webpack:///./node_modules/@wordpress/url/build-module/safe-decode-uri.js?");

/***/ }),

/***/ "./node_modules/callbag-basics/index.js":
/*!**********************************************!*\
  !*** ./node_modules/callbag-basics/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = {\n  forEach: __webpack_require__(/*! callbag-for-each */ \"./node_modules/callbag-for-each/readme.js\"),\n  fromObs: __webpack_require__(/*! callbag-from-obs */ \"./node_modules/callbag-from-obs/readme.js\"),\n  fromIter: __webpack_require__(/*! callbag-from-iter */ \"./node_modules/callbag-from-iter/index.js\"),\n  fromEvent: __webpack_require__(/*! callbag-from-event */ \"./node_modules/callbag-from-event/index.js\"),\n  fromPromise: __webpack_require__(/*! callbag-from-promise */ \"./node_modules/callbag-from-promise/index.js\"),\n  interval: __webpack_require__(/*! callbag-interval */ \"./node_modules/callbag-interval/index.js\"),\n  map: __webpack_require__(/*! callbag-map */ \"./node_modules/callbag-map/readme.js\"),\n  scan: __webpack_require__(/*! callbag-scan */ \"./node_modules/callbag-scan/readme.js\"),\n  flatten: __webpack_require__(/*! callbag-flatten */ \"./node_modules/callbag-flatten/index.js\"),\n  take: __webpack_require__(/*! callbag-take */ \"./node_modules/callbag-take/index.js\"),\n  skip: __webpack_require__(/*! callbag-skip */ \"./node_modules/callbag-skip/index.js\"),\n  filter: __webpack_require__(/*! callbag-filter */ \"./node_modules/callbag-filter/readme.js\"),\n  merge: __webpack_require__(/*! callbag-merge */ \"./node_modules/callbag-merge/readme.js\"),\n  concat: __webpack_require__(/*! callbag-concat */ \"./node_modules/callbag-concat/readme.js\"),\n  combine: __webpack_require__(/*! callbag-combine */ \"./node_modules/callbag-combine/readme.js\"),\n  share: __webpack_require__(/*! callbag-share */ \"./node_modules/callbag-share/index.js\"),\n  pipe: __webpack_require__(/*! callbag-pipe */ \"./node_modules/callbag-pipe/readme.js\")\n};\n\n\n\n//# sourceURL=webpack:///./node_modules/callbag-basics/index.js?");

/***/ }),

/***/ "./node_modules/callbag-combine/readme.js":
/*!************************************************!*\
  !*** ./node_modules/callbag-combine/readme.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * callbag-combine\n * ---------------\n *\n * Callbag factory that combines the latest data points from multiple (2 or\n * more) callbag sources. It delivers those latest values as an array. Works\n * with both pullable and listenable sources.\n *\n * `npm install callbag-combine`\n *\n * Example:\n *\n *     const interval = require('callbag-interval');\n *     const observe = require('callbag-observe');\n *     const combine = require('callbag-combine');\n *\n *     const source = combine(interval(100), interval(350));\n *\n *     observe(x => console.log(x))(source); // [2,0]\n *                                           // [3,0]\n *                                           // [4,0]\n *                                           // [5,0]\n *                                           // [6,0]\n *                                           // [6,1]\n *                                           // [7,1]\n *                                           // [8,1]\n *                                           // ...\n */\n\nconst EMPTY = {};\n\nconst combine = (...sources) => (start, sink) => {\n  if (start !== 0) return;\n  const n = sources.length;\n  if (n === 0) {\n    sink(0, () => {});\n    sink(1, []);\n    sink(2);\n    return;\n  }\n  let Ns = n; // start counter\n  let Nd = n; // data counter\n  let Ne = n; // end counter\n  const vals = new Array(n);\n  const sourceTalkbacks = new Array(n);\n  const talkback = (t, d) => {\n    if (t === 0) return;\n    for (let i = 0; i < n; i++) sourceTalkbacks[i](t, d);\n  };\n  sources.forEach((source, i) => {\n    vals[i] = EMPTY;\n    source(0, (t, d) => {\n      if (t === 0) {\n        sourceTalkbacks[i] = d;\n        if (--Ns === 0) sink(0, talkback);\n      } else if (t === 1) {\n        const _Nd = !Nd ? 0 : vals[i] === EMPTY ? --Nd : Nd;\n        vals[i] = d;\n        if (_Nd === 0) {\n          const arr = new Array(n);\n          for (let j = 0; j < n; ++j) arr[j] = vals[j];\n          sink(1, arr);\n        }\n      } else if (t === 2) {\n        if (--Ne === 0) sink(2);\n      } else {\n        sink(t, d);\n      }\n    });\n  });\n};\n\nmodule.exports = combine;\n\n\n//# sourceURL=webpack:///./node_modules/callbag-combine/readme.js?");

/***/ }),

/***/ "./node_modules/callbag-concat/readme.js":
/*!***********************************************!*\
  !*** ./node_modules/callbag-concat/readme.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n * callbag-concat\n * --------------\n *\n * Callbag factory that concatenates the data from multiple (2 or more)\n * callbag sources. It starts each source at a time: waits for the previous\n * source to end before starting the next source. Works with both pullable\n * and listenable sources.\n *\n * `npm install callbag-concat`\n *\n * Example:\n *\n *     const fromIter = require('callbag-from-iter');\n *     const iterate = require('callbag-iterate');\n *     const concat = require('callbag-concat');\n *\n *     const source = concat(fromIter([10,20,30]), fromIter(['a','b']));\n *\n *     iterate(x => console.log(x))(source); // 10\n *                                           // 20\n *                                           // 30\n *                                           // a\n *                                           // b\n */\n\nconst UNIQUE = {};\n\nconst concat = (...sources) => (start, sink) => {\n  if (start !== 0) return;\n  const n = sources.length;\n  if (n === 0) {\n    sink(0, () => {});\n    sink(2);\n    return;\n  }\n  let i = 0;\n  let sourceTalkback;\n  let lastPull = UNIQUE;\n  const talkback = (t, d) => {\n    if (t === 1) lastPull = d;\n    sourceTalkback(t, d);\n  };\n  (function next() {\n    if (i === n) {\n      sink(2);\n      return;\n    }\n    sources[i](0, (t, d) => {\n      if (t === 0) {\n        sourceTalkback = d;\n        if (i === 0) sink(0, talkback);\n        else if (lastPull !== UNIQUE) sourceTalkback(1, lastPull);\n      } else if (t === 2 && d) {\n        sink(2, d);\n      } else if (t === 2) {\n        i++;\n        next();\n      } else {\n        sink(t, d);\n      }\n    });\n  })();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (concat);\n\n\n//# sourceURL=webpack:///./node_modules/callbag-concat/readme.js?");

/***/ }),

/***/ "./node_modules/callbag-drop-repeats/index.js":
/*!****************************************************!*\
  !*** ./node_modules/callbag-drop-repeats/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const dropRepeats = pred => src => (start, sink) => {\n  const INIT = {};\n  let cache = INIT;\n  let ask;\n  const equals = pred || ((a, b) => a === b);\n  start === 0 && src(start, (t, d) => {\n    if (t === start) ask = d;\n    if (t === 1) return cache !== INIT && equals(cache, d) ? ask(t) : sink(t, cache = d);\n    sink(t, d);\n  });\n};\n\nmodule.exports = dropRepeats;\n\n//# sourceURL=webpack:///./node_modules/callbag-drop-repeats/index.js?");

/***/ }),

/***/ "./node_modules/callbag-filter/readme.js":
/*!***********************************************!*\
  !*** ./node_modules/callbag-filter/readme.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * callbag-filter\n * --------------\n *\n * Callbag operator that conditionally lets data pass through. Works on either\n * pullable or listenable sources.\n *\n * `npm install callbag-filter`\n *\n * Example:\n *\n *     const fromIter = require('callbag-from-iter');\n *     const iterate = require('callbag-iterate');\n *     const filter = require('callbag-filter');\n *\n *     const source = filter(x => x % 2)(fromIter([1,2,3,4,5]));\n *\n *     iterate(x => console.log(x))(source); // 1\n *                                           // 3\n *                                           // 5\n */\n\nconst filter = condition => source => (start, sink) => {\n  if (start !== 0) return;\n  let talkback;\n  source(0, (t, d) => {\n    if (t === 0) {\n      talkback = d;\n      sink(t, d);\n    } else if (t === 1) {\n      if (condition(d)) sink(t, d);\n      else talkback(1);\n    }\n    else sink(t, d);\n  });\n};\n\nmodule.exports = filter;\n\n\n//# sourceURL=webpack:///./node_modules/callbag-filter/readme.js?");

/***/ }),

/***/ "./node_modules/callbag-flatten/index.js":
/*!***********************************************!*\
  !*** ./node_modules/callbag-flatten/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst flatten = source => (start, sink) => {\n  if (start !== 0) return;\n  let outerTalkback;\n  let innerTalkback;\n  function talkback(t, d) {\n    if (t === 1) (innerTalkback || outerTalkback)(1, d);\n    if (t === 2) {\n      innerTalkback && innerTalkback(2);\n      outerTalkback && outerTalkback(2);\n    }\n  }\n  source(0, (T, D) => {\n    if (T === 0) {\n      outerTalkback = D;\n      sink(0, talkback);\n    } else if (T === 1) {\n      const innerSource = D;\n      innerTalkback && innerTalkback(2);\n      innerSource(0, (t, d) => {\n        if (t === 0) {\n          innerTalkback = d;\n          innerTalkback(1);\n        } else if (t === 1) sink(1, d);\n        else if (t === 2 && d) {\n          outerTalkback && outerTalkback(2);\n          sink(2, d);\n        } else if (t === 2) {\n          if (!outerTalkback) sink(2);\n          else {\n            innerTalkback = void 0;\n            outerTalkback(1);\n          }\n        }\n      });\n    } else if (T === 2 && D) {\n      innerTalkback && innerTalkback(2);\n      sink(2, D);\n    } else if (T === 2) {\n      if (!innerTalkback) sink(2);\n      else outerTalkback = void 0;\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (flatten);\n\n\n//# sourceURL=webpack:///./node_modules/callbag-flatten/index.js?");

/***/ }),

/***/ "./node_modules/callbag-for-each/readme.js":
/*!*************************************************!*\
  !*** ./node_modules/callbag-for-each/readme.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * callbag-for-each\n * ----------------\n *\n * Callbag sink that consume both pullable and listenable sources. When called\n * on a pullable source, it will iterate through its data. When called on a\n * listenable source, it will observe its data.\n *\n * `npm install callbag-for-each`\n *\n * Examples\n * --------\n *\n * Consume a pullable source:\n *\n *     const fromIter = require('callbag-from-iter');\n *     const forEach = require('callbag-for-each');\n *\n *     const source = fromIter([10,20,30,40])\n *\n *     forEach(x => console.log(x))(source); // 10\n *                                           // 20\n *                                           // 30\n *                                           // 40\n *\n * Consume a listenable source:\n *\n *     const interval = require('callbag-interval');\n *     const forEach = require('callbag-for-each');\n *\n *     const source = interval(1000);\n *\n *     forEach(x => console.log(x))(source); // 0\n *                                           // 1\n *                                           // 2\n *                                           // 3\n *                                           // ...\n */\n\nconst forEach = operation => source => {\n  let talkback;\n  source(0, (t, d) => {\n    if (t === 0) talkback = d;\n    if (t === 1) operation(d);\n    if (t === 1 || t === 0) talkback(1);\n  });\n};\n\nmodule.exports = forEach;\n\n\n//# sourceURL=webpack:///./node_modules/callbag-for-each/readme.js?");

/***/ }),

/***/ "./node_modules/callbag-from-event/index.js":
/*!**************************************************!*\
  !*** ./node_modules/callbag-from-event/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst fromEvent = (node, name, options) => (start, sink) => {\n  if (start !== 0) return;\n  let disposed = false;\n  const handler = ev => {\n    sink(1, ev)\n  };\n\n  sink(0, t => {\n    if (t !== 2) {\n      return;\n    }\n    disposed = true;\n    if (node.removeEventListener) node.removeEventListener(name, handler, options);\n    else if (node.removeListener) node.removeListener(name, handler);\n    else throw new Error('cannot remove listener from node. No method found.');\n  });\n\n  if (disposed) {\n    return;\n  }\n\n  if (node.addEventListener) node.addEventListener(name, handler, options);\n  else if (node.addListener) node.addListener(name, handler);\n  else throw new Error('cannot add listener to node. No method found.');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (fromEvent);\n\n\n//# sourceURL=webpack:///./node_modules/callbag-from-event/index.js?");

/***/ }),

/***/ "./node_modules/callbag-from-iter/index.js":
/*!*************************************************!*\
  !*** ./node_modules/callbag-from-iter/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const fromIter = iter => (start, sink) => {\n  if (start !== 0) return;\n  const iterator =\n    typeof Symbol !== 'undefined' && iter[Symbol.iterator]\n      ? iter[Symbol.iterator]()\n      : iter;\n  let inloop = false;\n  let got1 = false;\n  let completed = false;\n  let res;\n  function loop() {\n    inloop = true;\n    while (got1 && !completed) {\n      got1 = false;\n      res = iterator.next();\n      if (res.done) {\n        sink(2);\n        break;\n      }\n      else sink(1, res.value);\n    }\n    inloop = false;\n  }\n  sink(0, t => {\n    if (completed) return\n\n    if (t === 1) {\n      got1 = true;\n      if (!inloop && !(res && res.done)) loop();\n    } else if (t === 2) {\n      completed = true;\n    }\n  });\n};\n\nmodule.exports = fromIter;\n\n\n//# sourceURL=webpack:///./node_modules/callbag-from-iter/index.js?");

/***/ }),

/***/ "./node_modules/callbag-from-obs/readme.js":
/*!*************************************************!*\
  !*** ./node_modules/callbag-from-obs/readme.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\n * callbag-from-obs\n * --------------\n *\n * Convert an observable (or subscribable) to a callbag listenable source.\n *\n * `npm install callbag-from-obs`\n *\n * Example:\n *\n * Convert an RxJS Observable:\n *\n *     const Rx = require('rxjs');\n *     const fromObs = require('callbag-from-obs');\n *     const observe = require('callbag-observe');\n *\n *     const source = fromObs(Rx.Observable.interval(1000).take(4));\n *\n *     observe(x => console.log(x)(source); // 0\n *                                          // 1\n *                                          // 2\n *                                          // 3\n *\n * Convert anything that has the `.subscribe` method:\n *\n *     const fromObs = require('callbag-from-obs');\n *     const observe = require('callbag-observe');\n *\n *     const subscribable = {\n *       subscribe: (observer) => {\n *         let i = 0;\n *         setInterval(() => observer.next(i++), 1000);\n *       }\n *     };\n *\n *     const source = fromObs(subscribable);\n *\n *     observe(x => console.log(x))(source); // 0\n *                                           // 1\n *                                           // 2\n *                                           // 3\n *                                           // ...\n */\n\nconst $$observable = __webpack_require__(/*! symbol-observable */ \"./node_modules/symbol-observable/es/index.js\").default;\n\nconst fromObs = observable => (start, sink) => {\n  if (start !== 0) return;\n  let dispose;\n  sink(0, t => {\n    if (t === 2 && dispose) {\n      if (dispose.unsubscribe) dispose.unsubscribe();\n      else dispose();\n    }\n  });\n  observable = observable[$$observable] ? observable[$$observable]() : observable;\n  dispose = observable.subscribe({\n    next: x => sink(1, x),\n    error: e => sink(2, e),\n    complete: () => sink(2)\n  });\n};\n\nmodule.exports = fromObs;\n\n\n//# sourceURL=webpack:///./node_modules/callbag-from-obs/readme.js?");

/***/ }),

/***/ "./node_modules/callbag-from-promise/index.js":
/*!****************************************************!*\
  !*** ./node_modules/callbag-from-promise/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst fromPromise = promise => (start, sink) => {\n  if (start !== 0) return;\n  let ended = false;\n  const onfulfilled = val => {\n    if (ended) return;\n    sink(1, val);\n    if (ended) return;\n    sink(2);\n  };\n  const onrejected = (err = new Error()) => {\n    if (ended) return;\n    sink(2, err);\n  };\n  promise.then(onfulfilled, onrejected);\n  sink(0, t => {\n    if (t === 2) ended = true;\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (fromPromise);\n\n\n//# sourceURL=webpack:///./node_modules/callbag-from-promise/index.js?");

/***/ }),

/***/ "./node_modules/callbag-interval/index.js":
/*!************************************************!*\
  !*** ./node_modules/callbag-interval/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst interval = period => (start, sink) => {\n  if (start !== 0) return;\n  let i = 0;\n  const id = setInterval(() => {\n    sink(1, i++);\n  }, period);\n  sink(0, t => {\n    if (t === 2) clearInterval(id);\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (interval);\n\n\n//# sourceURL=webpack:///./node_modules/callbag-interval/index.js?");

/***/ }),

/***/ "./node_modules/callbag-map/readme.js":
/*!********************************************!*\
  !*** ./node_modules/callbag-map/readme.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * callbag-map\n * -----------\n *\n * Callbag operator that applies a transformation on data passing through it.\n * Works on either pullable or listenable sources.\n *\n * `npm install callbag-map`\n *\n * Example:\n *\n *     const fromIter = require('callbag-from-iter');\n *     const iterate = require('callbag-iterate');\n *     const map = require('callbag-map');\n *\n *     const source = map(x => x * 0.1)(fromIter([10,20,30,40]));\n *\n *     iterate(x => console.log(x))(source); // 1\n *                                           // 2\n *                                           // 3\n *                                           // 4\n */\n\nconst map = f => source => (start, sink) => {\n  if (start !== 0) return;\n  source(0, (t, d) => {\n    sink(t, t === 1 ? f(d) : d)\n  });\n};\n\nmodule.exports = map;\n\n\n//# sourceURL=webpack:///./node_modules/callbag-map/readme.js?");

/***/ }),

/***/ "./node_modules/callbag-merge/readme.js":
/*!**********************************************!*\
  !*** ./node_modules/callbag-merge/readme.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * callbag-merge\n * -------------\n *\n * Callbag factory that merges data from multiple callbag sources. Works well\n * with listenable sources, and while it may work for some pullable sources,\n * it is only designed for listenable sources.\n *\n * `npm install callbag-merge`\n *\n * Example:\n *\n *     const interval = require('callbag-interval');\n *     const forEach = require('callbag-for-each');\n *     const merge = require('callbag-merge');\n *\n *     const source = merge(interval(100), interval(350));\n *\n *     forEach(x => console.log(x))(source); // 0\n *                                           // 1\n *                                           // 2\n *                                           // 0\n *                                           // 3\n *                                           // 4\n *                                           // 5\n *                                           // ...\n */\n\nfunction merge(...sources) {\n  return (start, sink) => {\n    if (start !== 0) return;\n    const n = sources.length;\n    const sourceTalkbacks = new Array(n);\n    let startCount = 0;\n    let endCount = 0;\n    const talkback = t => {\n      if (t === 0) return;\n      for (let i = 0; i < n; i++) sourceTalkbacks[i] && sourceTalkbacks[i](t);\n    };\n    for (let i = 0; i < n; i++) {\n      sources[i](0, (t, d) => {\n        if (t === 0) {\n          sourceTalkbacks[i] = d;\n          if (++startCount === 1) sink(0, talkback);\n        } else if (t === 2) {\n          sourceTalkbacks[i] = void 0;\n          if (++endCount === n) sink(2);\n        } else sink(t, d);\n      });\n    }\n  };\n}\n\nmodule.exports = merge;\n\n\n//# sourceURL=webpack:///./node_modules/callbag-merge/readme.js?");

/***/ }),

/***/ "./node_modules/callbag-pipe/readme.js":
/*!*********************************************!*\
  !*** ./node_modules/callbag-pipe/readme.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * callbag-pipe\n * ------------\n *\n * Utility function for plugging callbags together in chain. This utility\n * actually doesn't rely on Callbag specifics, and is really similar to\n * Ramda's `pipe` or lodash's `flow`.\n * \n * Implementation of `callbag-pipe` using `R.pipe` could look like this:\n *\n * const pipe = (source, ...cbs) => R.pipe(...cbs)(source)\n * \n * This exists to play nicely with the ecosystem,\n * and to facilitate the import of the function.\n *\n * `npm install callbag-pipe`\n *\n * Example:\n *\n * Create a source with `pipe`, then pass it to a `forEach`:\n *\n *     const interval = require('callbag-interval');\n *     const forEach = require('callbag-for-each');\n *     const combine = require('callbag-combine');\n *     const pipe = require('callbag-pipe');\n *     const take = require('callbag-take');\n *     const map = require('callbag-map');\n *\n *     const source = pipe(\n *       combine(interval(100), interval(350)),\n *       map(([x, y]) => `X${x},Y${y}`),\n *       take(10)\n *     );\n *\n *     forEach(x => console.log(x))(source); // X2,Y0\n *                                           // X3,Y0\n *                                           // X4,Y0\n *                                           // X5,Y0\n *                                           // X6,Y0\n *                                           // X6,Y1\n *                                           // X7,Y1\n *                                           // X8,Y1\n *                                           // X9,Y1\n *                                           // X9,Y2\n *\n *\n * Or use `pipe` to go all the way from source to sink:\n *\n *     const interval = require('callbag-interval');\n *     const forEach = require('callbag-for-each');\n *     const combine = require('callbag-combine');\n *     const pipe = require('callbag-pipe');\n *     const take = require('callbag-take');\n *     const map = require('callbag-map');\n *\n *     pipe(\n *       combine(interval(100), interval(350)),\n *       map(([x, y]) => `X${x},Y${y}`),\n *       take(10),\n *       forEach(x => console.log(x))\n *     );\n *     // X2,Y0\n *     // X3,Y0\n *     // X4,Y0\n *     // X5,Y0\n *     // X6,Y0\n *     // X6,Y1\n *     // X7,Y1\n *     // X8,Y1\n *     // X9,Y1\n *     // X9,Y2\n *\n *\n * Nesting\n * -------\n *\n * To use pipe inside another pipe, you need to give the inner pipe an\n * argument, e.g. `s => pipe(s, ...`:\n *\n *     const interval = require('callbag-interval');\n *     const forEach = require('callbag-for-each');\n *     const combine = require('callbag-combine');\n *     const pipe = require('callbag-pipe');\n *     const take = require('callbag-take');\n *     const map = require('callbag-map');\n *\n *     pipe(\n *       combine(interval(100), interval(350)),\n *       s => pipe(s,\n *         map(([x, y]) => `X${x},Y${y}`),\n *         take(10)\n *       ),\n *       forEach(x => console.log(x))\n *     );\n *\n *\n * This means you can use pipe to create a new operator:\n *\n *     const mapThenTake = (f, amount) =>\n *       s => pipe(s, map(f), take(amount));\n *\n *     pipe(\n *       combine(interval(100), interval(350)),\n *       mapThenTake(([x, y]) => `X${x},Y${y}`, 10),\n *       forEach(x => console.log(x))\n *     );\n *\n */\n\nfunction pipe(...cbs) {\n  let res = cbs[0];\n  for (let i = 1, n = cbs.length; i < n; i++) res = cbs[i](res);\n  return res;\n}\n\nmodule.exports = pipe;\n\n\n//# sourceURL=webpack:///./node_modules/callbag-pipe/readme.js?");

/***/ }),

/***/ "./node_modules/callbag-scan/readme.js":
/*!*********************************************!*\
  !*** ./node_modules/callbag-scan/readme.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * callbag-scan\n * ------------\n *\n * Callbag operator that combines consecutive values from the same source.\n * It's essentially like array `.reduce`, but delivers a new accumulated value\n * for each value from the callbag source. Works on either pullable or\n * listenable sources.\n *\n * `npm install callbag-scan`\n *\n * Example:\n *\n *     const fromIter = require('callbag-from-iter');\n *     const iterate = require('callbag-iterate');\n *     const scan = require('callbag-scan');\n *\n *     const iterSource = fromIter([1,2,3,4,5]);\n *     const scanned = scan((prev, x) => prev + x, 0)(iterSource);\n *\n *     scanned(0, iterate(x => console.log(x))); // 1\n *                                               // 3\n *                                               // 6\n *                                               // 10\n *                                               // 15\n */\n\nfunction scan(reducer, seed) {\n  let hasAcc = arguments.length === 2;\n  return source => (start, sink) => {\n    if (start !== 0) return;\n    let acc = seed;\n    source(0, (t, d) => {\n      if (t === 1) {\n        acc = hasAcc ? reducer(acc, d) : ((hasAcc = true), d);\n        sink(1, acc);\n      } else sink(t, d);\n    });\n  };\n}\n\nmodule.exports = scan;\n\n\n//# sourceURL=webpack:///./node_modules/callbag-scan/readme.js?");

/***/ }),

/***/ "./node_modules/callbag-share/index.js":
/*!*********************************************!*\
  !*** ./node_modules/callbag-share/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst share = source => {\n  let sinks = [];\n  let sourceTalkback;\n\n  return function shared(start, sink) {\n    if (start !== 0) return;\n    sinks.push(sink);\n\n    const talkback = (t, d) => {\n      if (t === 2) {\n        const i = sinks.indexOf(sink);\n        if (i > -1) sinks.splice(i, 1);\n        if (!sinks.length) sourceTalkback(2);\n      } else {\n        sourceTalkback(t, d);\n      }\n    };\n\n    if (sinks.length === 1) {\n      source(0, (t, d) => {\n        if (t === 0) {\n          sourceTalkback = d;\n          sink(0, talkback);\n        } else for (let s of sinks.slice(0)) s(t, d);\n        if (t === 2) sinks = [];\n      });\n      return\n    }\n\n    sink(0, talkback);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (share);\n\n\n//# sourceURL=webpack:///./node_modules/callbag-share/index.js?");

/***/ }),

/***/ "./node_modules/callbag-skip/index.js":
/*!********************************************!*\
  !*** ./node_modules/callbag-skip/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const skip = max => source => (start, sink) => {\n  if (start !== 0) return;\n  let skipped = 0;\n  let talkback;\n  source(0, (t, d) => {\n    if (t === 0) {\n      talkback = d;\n      sink(t, d);\n    } else if (t === 1) {\n      if (skipped < max) {\n        skipped++;\n        talkback(1);\n      } else sink(t, d);\n    } else {\n      sink(t, d);\n    }\n  });\n};\n\nmodule.exports = skip;\n\n\n//# sourceURL=webpack:///./node_modules/callbag-skip/index.js?");

/***/ }),

/***/ "./node_modules/callbag-start-with/index.js":
/*!**************************************************!*\
  !*** ./node_modules/callbag-start-with/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nconst startWith = (...xs) => inputSource => (start, outputSink) => {\n  if (start !== 0) return;\n  let disposed = false;\n  let inputTalkback;\n  let trackPull = false;\n  let lastPull;\n\n  outputSink(0, (ot, od) => {\n    if (trackPull && ot === 1) {\n      lastPull = [1, od];\n    }\n\n    if (ot === 2) {\n      disposed = true;\n      xs.length = 0;\n    }\n\n    if (!inputTalkback) return;\n    inputTalkback(ot, od);\n  });\n\n  while (xs.length !== 0) {\n    if (xs.length === 1) {\n      trackPull = true;\n    }\n    outputSink(1, xs.shift());\n  }\n\n  if (disposed) return;\n\n  inputSource(0, (it, id) => {\n    if (it === 0) {\n      inputTalkback = id;\n      trackPull = false;\n\n      if (lastPull) {\n        inputTalkback(...lastPull);\n        lastPull = null;\n      }\n      return;\n    }\n    outputSink(it, id);\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (startWith);\n\n\n//# sourceURL=webpack:///./node_modules/callbag-start-with/index.js?");

/***/ }),

/***/ "./node_modules/callbag-take/index.js":
/*!********************************************!*\
  !*** ./node_modules/callbag-take/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const take = max => source => (start, sink) => {\n  if (start !== 0) return;\n  let taken = 0;\n  let sourceTalkback;\n  let end;\n  function talkback(t, d) {\n    if (t === 2) {\n      end = true;\n      sourceTalkback(t, d);\n    } else if (taken < max) sourceTalkback(t, d);\n  }\n  source(0, (t, d) => {\n    if (t === 0) {\n      sourceTalkback = d;\n      sink(0, talkback);\n    } else if (t === 1) {\n      if (taken < max) {\n        taken++;\n        sink(t, d);\n        if (taken === max && !end) {\n          end = true\n          sourceTalkback(2);\n          sink(2);\n        }\n      }\n    } else {\n      sink(t, d);\n    }\n  });\n};\n\nmodule.exports = take;\n\n\n//# sourceURL=webpack:///./node_modules/callbag-take/index.js?");

/***/ }),

/***/ "./node_modules/callbag-to-obs/readme.js":
/*!***********************************************!*\
  !*** ./node_modules/callbag-to-obs/readme.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\n * callbag-to-obs\n * ---------------\n *\n * Convert a listenable callbag source to an observable (or subscribable).\n * The Observable is an object following the ECMAScript Observable proposal\n * https://github.com/tc39/proposal-observable and at a minimum has the method\n * \"subscribe(observer)\" attached to it.\n *\n * `npm install callbag-to-obs`\n *\n * Example:\n *\n *     const {pipe, interval, take, filter, map} = require('callbag-basics');\n *     const toObservable = require('callbag-to-obs');\n *\n *     const observable = pipe(\n *       interval(1000), // 0,1,2,3,4,5,6,7,...\n *       take(5), // 0,1,2,3,4\n *       filter(x => x !== 0), // 1,2,3,4\n *       map(x => x * 10), // 10,20,30,40\n *       toObservable\n *     );\n *\n *     observable.subscribe({\n *       next: x => console.log(x)\n *     });\n */\n\nconst $$observable = __webpack_require__(/*! symbol-observable */ \"./node_modules/symbol-observable/es/index.js\").default;\n\nfunction normalize(observer) {\n  if (!observer.start) observer.start = () => { };\n  if (!observer.next) observer.next = () => { };\n  if (!observer.error) observer.error = () => { };\n  if (!observer.complete) observer.complete = () => { };\n}\n\nfunction toObservable(source) {\n  return {\n    subscribe: function subscribe(observer) {\n      normalize(observer);\n      let talkback;\n      const sub = {\n        unsubscribe: function unsubscribe() {\n          if (talkback) talkback(2);\n        },\n      };\n      observer.start(sub);\n      try {\n        source(0, (t, d) => {\n          if (t === 0) talkback = d;\n          if (t === 1) observer.next(d);\n          if (t === 2 && d) observer.error(d);\n          else if (t === 2) talkback = void 0, observer.complete(d);\n        });\n      } catch (err) {\n        observer.error(err);\n      }\n      return sub;\n    },\n\n    [$$observable]: function () { return this; },\n  };\n}\n\nmodule.exports = toObservable;\n\n\n//# sourceURL=webpack:///./node_modules/callbag-to-obs/readme.js?");

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n\tCopyright (c) 2018 Jed Watson.\n\tLicensed under the MIT License (MIT), see\n\thttp://jedwatson.github.io/classnames\n*/\n/* global define */\n\n(function () {\n\t'use strict';\n\n\tvar hasOwn = {}.hasOwnProperty;\n\tvar nativeCodeString = '[native code]';\n\n\tfunction classNames() {\n\t\tvar classes = [];\n\n\t\tfor (var i = 0; i < arguments.length; i++) {\n\t\t\tvar arg = arguments[i];\n\t\t\tif (!arg) continue;\n\n\t\t\tvar argType = typeof arg;\n\n\t\t\tif (argType === 'string' || argType === 'number') {\n\t\t\t\tclasses.push(arg);\n\t\t\t} else if (Array.isArray(arg)) {\n\t\t\t\tif (arg.length) {\n\t\t\t\t\tvar inner = classNames.apply(null, arg);\n\t\t\t\t\tif (inner) {\n\t\t\t\t\t\tclasses.push(inner);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t} else if (argType === 'object') {\n\t\t\t\tif (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {\n\t\t\t\t\tclasses.push(arg.toString());\n\t\t\t\t\tcontinue;\n\t\t\t\t}\n\n\t\t\t\tfor (var key in arg) {\n\t\t\t\t\tif (hasOwn.call(arg, key) && arg[key]) {\n\t\t\t\t\t\tclasses.push(key);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn classes.join(' ');\n\t}\n\n\tif ( true && module.exports) {\n\t\tclassNames.default = classNames;\n\t\tmodule.exports = classNames;\n\t} else if (true) {\n\t\t// register as 'classnames', consistent with npm package name\n\t\t!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n\t\t\treturn classNames;\n\t\t}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t} else {}\n}());\n\n\n//# sourceURL=webpack:///./node_modules/classnames/index.js?");

/***/ }),

/***/ "./node_modules/immer/dist/immer.esm.js":
/*!**********************************************!*\
  !*** ./node_modules/immer/dist/immer.esm.js ***!
  \**********************************************/
/*! exports provided: default, Immer, applyPatches, castDraft, castImmutable, createDraft, current, enableAllPlugins, enableES5, enableMapSet, enablePatches, finishDraft, freeze, immerable, isDraft, isDraftable, nothing, original, produce, produceWithPatches, setAutoFreeze, setUseProxies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Immer\", function() { return un; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"applyPatches\", function() { return pn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"castDraft\", function() { return K; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"castImmutable\", function() { return $; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createDraft\", function() { return ln; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"current\", function() { return R; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"enableAllPlugins\", function() { return J; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"enableES5\", function() { return F; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"enableMapSet\", function() { return C; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"enablePatches\", function() { return T; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"finishDraft\", function() { return dn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"freeze\", function() { return d; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"immerable\", function() { return L; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isDraft\", function() { return r; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isDraftable\", function() { return t; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"nothing\", function() { return H; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"original\", function() { return e; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"produce\", function() { return fn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"produceWithPatches\", function() { return cn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setAutoFreeze\", function() { return sn; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setUseProxies\", function() { return vn; });\nfunction n(n){for(var r=arguments.length,t=Array(r>1?r-1:0),e=1;e<r;e++)t[e-1]=arguments[e];if(true){var i=Y[n],o=i?\"function\"==typeof i?i.apply(null,t):i:\"unknown error nr: \"+n;throw Error(\"[Immer] \"+o)}throw Error(\"[Immer] minified error nr: \"+n+(t.length?\" \"+t.map((function(n){return\"'\"+n+\"'\"})).join(\",\"):\"\")+\". Find the full error at: https://bit.ly/3cXEKWf\")}function r(n){return!!n&&!!n[Q]}function t(n){var r;return!!n&&(function(n){if(!n||\"object\"!=typeof n)return!1;var r=Object.getPrototypeOf(n);if(null===r)return!0;var t=Object.hasOwnProperty.call(r,\"constructor\")&&r.constructor;return t===Object||\"function\"==typeof t&&Function.toString.call(t)===Z}(n)||Array.isArray(n)||!!n[L]||!!(null===(r=n.constructor)||void 0===r?void 0:r[L])||s(n)||v(n))}function e(t){return r(t)||n(23,t),t[Q].t}function i(n,r,t){void 0===t&&(t=!1),0===o(n)?(t?Object.keys:nn)(n).forEach((function(e){t&&\"symbol\"==typeof e||r(e,n[e],n)})):n.forEach((function(t,e){return r(e,t,n)}))}function o(n){var r=n[Q];return r?r.i>3?r.i-4:r.i:Array.isArray(n)?1:s(n)?2:v(n)?3:0}function u(n,r){return 2===o(n)?n.has(r):Object.prototype.hasOwnProperty.call(n,r)}function a(n,r){return 2===o(n)?n.get(r):n[r]}function f(n,r,t){var e=o(n);2===e?n.set(r,t):3===e?n.add(t):n[r]=t}function c(n,r){return n===r?0!==n||1/n==1/r:n!=n&&r!=r}function s(n){return X&&n instanceof Map}function v(n){return q&&n instanceof Set}function p(n){return n.o||n.t}function l(n){if(Array.isArray(n))return Array.prototype.slice.call(n);var r=rn(n);delete r[Q];for(var t=nn(r),e=0;e<t.length;e++){var i=t[e],o=r[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(r[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:n[i]})}return Object.create(Object.getPrototypeOf(n),r)}function d(n,e){return void 0===e&&(e=!1),y(n)||r(n)||!t(n)||(o(n)>1&&(n.set=n.add=n.clear=n.delete=h),Object.freeze(n),e&&i(n,(function(n,r){return d(r,!0)}),!0)),n}function h(){n(2)}function y(n){return null==n||\"object\"!=typeof n||Object.isFrozen(n)}function b(r){var t=tn[r];return t||n(18,r),t}function m(n,r){tn[n]||(tn[n]=r)}function _(){return false||U||n(0),U}function j(n,r){r&&(b(\"Patches\"),n.u=[],n.s=[],n.v=r)}function g(n){O(n),n.p.forEach(S),n.p=null}function O(n){n===U&&(U=n.l)}function w(n){return U={p:[],l:U,h:n,m:!0,_:0}}function S(n){var r=n[Q];0===r.i||1===r.i?r.j():r.g=!0}function P(r,e){e._=e.p.length;var i=e.p[0],o=void 0!==r&&r!==i;return e.h.O||b(\"ES5\").S(e,r,o),o?(i[Q].P&&(g(e),n(4)),t(r)&&(r=M(e,r),e.l||x(e,r)),e.u&&b(\"Patches\").M(i[Q].t,r,e.u,e.s)):r=M(e,i,[]),g(e),e.u&&e.v(e.u,e.s),r!==H?r:void 0}function M(n,r,t){if(y(r))return r;var e=r[Q];if(!e)return i(r,(function(i,o){return A(n,e,r,i,o,t)}),!0),r;if(e.A!==n)return r;if(!e.P)return x(n,e.t,!0),e.t;if(!e.I){e.I=!0,e.A._--;var o=4===e.i||5===e.i?e.o=l(e.k):e.o,u=o,a=!1;3===e.i&&(u=new Set(o),o.clear(),a=!0),i(u,(function(r,i){return A(n,e,o,r,i,t,a)})),x(n,o,!1),t&&n.u&&b(\"Patches\").N(e,t,n.u,n.s)}return e.o}function A(e,i,o,a,c,s,v){if( true&&c===o&&n(5),r(c)){var p=M(e,c,s&&i&&3!==i.i&&!u(i.R,a)?s.concat(a):void 0);if(f(o,a,p),!r(p))return;e.m=!1}else v&&o.add(c);if(t(c)&&!y(c)){if(!e.h.D&&e._<1)return;M(e,c),i&&i.A.l||x(e,c)}}function x(n,r,t){void 0===t&&(t=!1),!n.l&&n.h.D&&n.m&&d(r,t)}function z(n,r){var t=n[Q];return(t?p(t):n)[r]}function I(n,r){if(r in n)for(var t=Object.getPrototypeOf(n);t;){var e=Object.getOwnPropertyDescriptor(t,r);if(e)return e;t=Object.getPrototypeOf(t)}}function k(n){n.P||(n.P=!0,n.l&&k(n.l))}function E(n){n.o||(n.o=l(n.t))}function N(n,r,t){var e=s(r)?b(\"MapSet\").F(r,t):v(r)?b(\"MapSet\").T(r,t):n.O?function(n,r){var t=Array.isArray(n),e={i:t?1:0,A:r?r.A:_(),P:!1,I:!1,R:{},l:r,t:n,k:null,o:null,j:null,C:!1},i=e,o=en;t&&(i=[e],o=on);var u=Proxy.revocable(i,o),a=u.revoke,f=u.proxy;return e.k=f,e.j=a,f}(r,t):b(\"ES5\").J(r,t);return(t?t.A:_()).p.push(e),e}function R(e){return r(e)||n(22,e),function n(r){if(!t(r))return r;var e,u=r[Q],c=o(r);if(u){if(!u.P&&(u.i<4||!b(\"ES5\").K(u)))return u.t;u.I=!0,e=D(r,c),u.I=!1}else e=D(r,c);return i(e,(function(r,t){u&&a(u.t,r)===t||f(e,r,n(t))})),3===c?new Set(e):e}(e)}function D(n,r){switch(r){case 2:return new Map(n);case 3:return Array.from(n)}return l(n)}function F(){function t(n,r){var t=s[n];return t?t.enumerable=r:s[n]=t={configurable:!0,enumerable:r,get:function(){var r=this[Q];return true&&f(r),en.get(r,n)},set:function(r){var t=this[Q]; true&&f(t),en.set(t,n,r)}},t}function e(n){for(var r=n.length-1;r>=0;r--){var t=n[r][Q];if(!t.P)switch(t.i){case 5:a(t)&&k(t);break;case 4:o(t)&&k(t)}}}function o(n){for(var r=n.t,t=n.k,e=nn(t),i=e.length-1;i>=0;i--){var o=e[i];if(o!==Q){var a=r[o];if(void 0===a&&!u(r,o))return!0;var f=t[o],s=f&&f[Q];if(s?s.t!==a:!c(f,a))return!0}}var v=!!r[Q];return e.length!==nn(r).length+(v?0:1)}function a(n){var r=n.k;if(r.length!==n.t.length)return!0;var t=Object.getOwnPropertyDescriptor(r,r.length-1);if(t&&!t.get)return!0;for(var e=0;e<r.length;e++)if(!r.hasOwnProperty(e))return!0;return!1}function f(r){r.g&&n(3,JSON.stringify(p(r)))}var s={};m(\"ES5\",{J:function(n,r){var e=Array.isArray(n),i=function(n,r){if(n){for(var e=Array(r.length),i=0;i<r.length;i++)Object.defineProperty(e,\"\"+i,t(i,!0));return e}var o=rn(r);delete o[Q];for(var u=nn(o),a=0;a<u.length;a++){var f=u[a];o[f]=t(f,n||!!o[f].enumerable)}return Object.create(Object.getPrototypeOf(r),o)}(e,n),o={i:e?5:4,A:r?r.A:_(),P:!1,I:!1,R:{},l:r,t:n,k:i,o:null,g:!1,C:!1};return Object.defineProperty(i,Q,{value:o,writable:!0}),i},S:function(n,t,o){o?r(t)&&t[Q].A===n&&e(n.p):(n.u&&function n(r){if(r&&\"object\"==typeof r){var t=r[Q];if(t){var e=t.t,o=t.k,f=t.R,c=t.i;if(4===c)i(o,(function(r){r!==Q&&(void 0!==e[r]||u(e,r)?f[r]||n(o[r]):(f[r]=!0,k(t)))})),i(e,(function(n){void 0!==o[n]||u(o,n)||(f[n]=!1,k(t))}));else if(5===c){if(a(t)&&(k(t),f.length=!0),o.length<e.length)for(var s=o.length;s<e.length;s++)f[s]=!1;else for(var v=e.length;v<o.length;v++)f[v]=!0;for(var p=Math.min(o.length,e.length),l=0;l<p;l++)o.hasOwnProperty(l)||(f[l]=!0),void 0===f[l]&&n(o[l])}}}}(n.p[0]),e(n.p))},K:function(n){return 4===n.i?o(n):a(n)}})}function T(){function e(n){if(!t(n))return n;if(Array.isArray(n))return n.map(e);if(s(n))return new Map(Array.from(n.entries()).map((function(n){return[n[0],e(n[1])]})));if(v(n))return new Set(Array.from(n).map(e));var r=Object.create(Object.getPrototypeOf(n));for(var i in n)r[i]=e(n[i]);return u(n,L)&&(r[L]=n[L]),r}function f(n){return r(n)?e(n):n}var c=\"add\";m(\"Patches\",{$:function(r,t){return t.forEach((function(t){for(var i=t.path,u=t.op,f=r,s=0;s<i.length-1;s++){var v=o(f),p=i[s];\"string\"!=typeof p&&\"number\"!=typeof p&&(p=\"\"+p),0!==v&&1!==v||\"__proto__\"!==p&&\"constructor\"!==p||n(24),\"function\"==typeof f&&\"prototype\"===p&&n(24),\"object\"!=typeof(f=a(f,p))&&n(15,i.join(\"/\"))}var l=o(f),d=e(t.value),h=i[i.length-1];switch(u){case\"replace\":switch(l){case 2:return f.set(h,d);case 3:n(16);default:return f[h]=d}case c:switch(l){case 1:return\"-\"===h?f.push(d):f.splice(h,0,d);case 2:return f.set(h,d);case 3:return f.add(d);default:return f[h]=d}case\"remove\":switch(l){case 1:return f.splice(h,1);case 2:return f.delete(h);case 3:return f.delete(t.value);default:return delete f[h]}default:n(17,u)}})),r},N:function(n,r,t,e){switch(n.i){case 0:case 4:case 2:return function(n,r,t,e){var o=n.t,s=n.o;i(n.R,(function(n,i){var v=a(o,n),p=a(s,n),l=i?u(o,n)?\"replace\":c:\"remove\";if(v!==p||\"replace\"!==l){var d=r.concat(n);t.push(\"remove\"===l?{op:l,path:d}:{op:l,path:d,value:p}),e.push(l===c?{op:\"remove\",path:d}:\"remove\"===l?{op:c,path:d,value:f(v)}:{op:\"replace\",path:d,value:f(v)})}}))}(n,r,t,e);case 5:case 1:return function(n,r,t,e){var i=n.t,o=n.R,u=n.o;if(u.length<i.length){var a=[u,i];i=a[0],u=a[1];var s=[e,t];t=s[0],e=s[1]}for(var v=0;v<i.length;v++)if(o[v]&&u[v]!==i[v]){var p=r.concat([v]);t.push({op:\"replace\",path:p,value:f(u[v])}),e.push({op:\"replace\",path:p,value:f(i[v])})}for(var l=i.length;l<u.length;l++){var d=r.concat([l]);t.push({op:c,path:d,value:f(u[l])})}i.length<u.length&&e.push({op:\"replace\",path:r.concat([\"length\"]),value:i.length})}(n,r,t,e);case 3:return function(n,r,t,e){var i=n.t,o=n.o,u=0;i.forEach((function(n){if(!o.has(n)){var i=r.concat([u]);t.push({op:\"remove\",path:i,value:n}),e.unshift({op:c,path:i,value:n})}u++})),u=0,o.forEach((function(n){if(!i.has(n)){var o=r.concat([u]);t.push({op:c,path:o,value:n}),e.unshift({op:\"remove\",path:o,value:n})}u++}))}(n,r,t,e)}},M:function(n,r,t,e){t.push({op:\"replace\",path:[],value:r===H?void 0:r}),e.push({op:\"replace\",path:[],value:n})}})}function C(){function r(n,r){function t(){this.constructor=n}a(n,r),n.prototype=(t.prototype=r.prototype,new t)}function e(n){n.o||(n.R=new Map,n.o=new Map(n.t))}function o(n){n.o||(n.o=new Set,n.t.forEach((function(r){if(t(r)){var e=N(n.A.h,r,n);n.p.set(r,e),n.o.add(e)}else n.o.add(r)})))}function u(r){r.g&&n(3,JSON.stringify(p(r)))}var a=function(n,r){return(a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var t in r)r.hasOwnProperty(t)&&(n[t]=r[t])})(n,r)},f=function(){function n(n,r){return this[Q]={i:2,l:r,A:r?r.A:_(),P:!1,I:!1,o:void 0,R:void 0,t:n,k:this,C:!1,g:!1},this}r(n,Map);var o=n.prototype;return Object.defineProperty(o,\"size\",{get:function(){return p(this[Q]).size}}),o.has=function(n){return p(this[Q]).has(n)},o.set=function(n,r){var t=this[Q];return u(t),p(t).has(n)&&p(t).get(n)===r||(e(t),k(t),t.R.set(n,!0),t.o.set(n,r),t.R.set(n,!0)),this},o.delete=function(n){if(!this.has(n))return!1;var r=this[Q];return u(r),e(r),k(r),r.t.has(n)?r.R.set(n,!1):r.R.delete(n),r.o.delete(n),!0},o.clear=function(){var n=this[Q];u(n),p(n).size&&(e(n),k(n),n.R=new Map,i(n.t,(function(r){n.R.set(r,!1)})),n.o.clear())},o.forEach=function(n,r){var t=this;p(this[Q]).forEach((function(e,i){n.call(r,t.get(i),i,t)}))},o.get=function(n){var r=this[Q];u(r);var i=p(r).get(n);if(r.I||!t(i))return i;if(i!==r.t.get(n))return i;var o=N(r.A.h,i,r);return e(r),r.o.set(n,o),o},o.keys=function(){return p(this[Q]).keys()},o.values=function(){var n,r=this,t=this.keys();return(n={})[V]=function(){return r.values()},n.next=function(){var n=t.next();return n.done?n:{done:!1,value:r.get(n.value)}},n},o.entries=function(){var n,r=this,t=this.keys();return(n={})[V]=function(){return r.entries()},n.next=function(){var n=t.next();if(n.done)return n;var e=r.get(n.value);return{done:!1,value:[n.value,e]}},n},o[V]=function(){return this.entries()},n}(),c=function(){function n(n,r){return this[Q]={i:3,l:r,A:r?r.A:_(),P:!1,I:!1,o:void 0,t:n,k:this,p:new Map,g:!1,C:!1},this}r(n,Set);var t=n.prototype;return Object.defineProperty(t,\"size\",{get:function(){return p(this[Q]).size}}),t.has=function(n){var r=this[Q];return u(r),r.o?!!r.o.has(n)||!(!r.p.has(n)||!r.o.has(r.p.get(n))):r.t.has(n)},t.add=function(n){var r=this[Q];return u(r),this.has(n)||(o(r),k(r),r.o.add(n)),this},t.delete=function(n){if(!this.has(n))return!1;var r=this[Q];return u(r),o(r),k(r),r.o.delete(n)||!!r.p.has(n)&&r.o.delete(r.p.get(n))},t.clear=function(){var n=this[Q];u(n),p(n).size&&(o(n),k(n),n.o.clear())},t.values=function(){var n=this[Q];return u(n),o(n),n.o.values()},t.entries=function(){var n=this[Q];return u(n),o(n),n.o.entries()},t.keys=function(){return this.values()},t[V]=function(){return this.values()},t.forEach=function(n,r){for(var t=this.values(),e=t.next();!e.done;)n.call(r,e.value,e.value,this),e=t.next()},n}();m(\"MapSet\",{F:function(n,r){return new f(n,r)},T:function(n,r){return new c(n,r)}})}function J(){F(),C(),T()}function K(n){return n}function $(n){return n}var G,U,W=\"undefined\"!=typeof Symbol&&\"symbol\"==typeof Symbol(\"x\"),X=\"undefined\"!=typeof Map,q=\"undefined\"!=typeof Set,B=\"undefined\"!=typeof Proxy&&void 0!==Proxy.revocable&&\"undefined\"!=typeof Reflect,H=W?Symbol.for(\"immer-nothing\"):((G={})[\"immer-nothing\"]=!0,G),L=W?Symbol.for(\"immer-draftable\"):\"__$immer_draftable\",Q=W?Symbol.for(\"immer-state\"):\"__$immer_state\",V=\"undefined\"!=typeof Symbol&&Symbol.iterator||\"@@iterator\",Y={0:\"Illegal state\",1:\"Immer drafts cannot have computed properties\",2:\"This object has been frozen and should not be mutated\",3:function(n){return\"Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? \"+n},4:\"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.\",5:\"Immer forbids circular references\",6:\"The first or second argument to `produce` must be a function\",7:\"The third argument to `produce` must be a function or undefined\",8:\"First argument to `createDraft` must be a plain object, an array, or an immerable object\",9:\"First argument to `finishDraft` must be a draft returned by `createDraft`\",10:\"The given draft is already finalized\",11:\"Object.defineProperty() cannot be used on an Immer draft\",12:\"Object.setPrototypeOf() cannot be used on an Immer draft\",13:\"Immer only supports deleting array indices\",14:\"Immer only supports setting array indices and the 'length' property\",15:function(n){return\"Cannot apply patch, path doesn't resolve: \"+n},16:'Sets cannot have \"replace\" patches.',17:function(n){return\"Unsupported patch operation: \"+n},18:function(n){return\"The plugin for '\"+n+\"' has not been loaded into Immer. To enable the plugin, import and call `enable\"+n+\"()` when initializing your application.\"},20:\"Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available\",21:function(n){return\"produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '\"+n+\"'\"},22:function(n){return\"'current' expects a draft, got: \"+n},23:function(n){return\"'original' expects a draft, got: \"+n},24:\"Patching reserved attributes like __proto__, prototype and constructor is not allowed\"},Z=\"\"+Object.prototype.constructor,nn=\"undefined\"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(n){return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n))}:Object.getOwnPropertyNames,rn=Object.getOwnPropertyDescriptors||function(n){var r={};return nn(n).forEach((function(t){r[t]=Object.getOwnPropertyDescriptor(n,t)})),r},tn={},en={get:function(n,r){if(r===Q)return n;var e=p(n);if(!u(e,r))return function(n,r,t){var e,i=I(r,t);return i?\"value\"in i?i.value:null===(e=i.get)||void 0===e?void 0:e.call(n.k):void 0}(n,e,r);var i=e[r];return n.I||!t(i)?i:i===z(n.t,r)?(E(n),n.o[r]=N(n.A.h,i,n)):i},has:function(n,r){return r in p(n)},ownKeys:function(n){return Reflect.ownKeys(p(n))},set:function(n,r,t){var e=I(p(n),r);if(null==e?void 0:e.set)return e.set.call(n.k,t),!0;if(!n.P){var i=z(p(n),r),o=null==i?void 0:i[Q];if(o&&o.t===t)return n.o[r]=t,n.R[r]=!1,!0;if(c(t,i)&&(void 0!==t||u(n.t,r)))return!0;E(n),k(n)}return n.o[r]===t&&(void 0!==t||r in n.o)||Number.isNaN(t)&&Number.isNaN(n.o[r])||(n.o[r]=t,n.R[r]=!0),!0},deleteProperty:function(n,r){return void 0!==z(n.t,r)||r in n.t?(n.R[r]=!1,E(n),k(n)):delete n.R[r],n.o&&delete n.o[r],!0},getOwnPropertyDescriptor:function(n,r){var t=p(n),e=Reflect.getOwnPropertyDescriptor(t,r);return e?{writable:!0,configurable:1!==n.i||\"length\"!==r,enumerable:e.enumerable,value:t[r]}:e},defineProperty:function(){n(11)},getPrototypeOf:function(n){return Object.getPrototypeOf(n.t)},setPrototypeOf:function(){n(12)}},on={};i(en,(function(n,r){on[n]=function(){return arguments[0]=arguments[0][0],r.apply(this,arguments)}})),on.deleteProperty=function(r,t){return true&&isNaN(parseInt(t))&&n(13),on.set.call(this,r,t,void 0)},on.set=function(r,t,e){return true&&\"length\"!==t&&isNaN(parseInt(t))&&n(14),en.set.call(this,r[0],t,e,r[0])};var un=function(){function e(r){var e=this;this.O=B,this.D=!0,this.produce=function(r,i,o){if(\"function\"==typeof r&&\"function\"!=typeof i){var u=i;i=r;var a=e;return function(n){var r=this;void 0===n&&(n=u);for(var t=arguments.length,e=Array(t>1?t-1:0),o=1;o<t;o++)e[o-1]=arguments[o];return a.produce(n,(function(n){var t;return(t=i).call.apply(t,[r,n].concat(e))}))}}var f;if(\"function\"!=typeof i&&n(6),void 0!==o&&\"function\"!=typeof o&&n(7),t(r)){var c=w(e),s=N(e,r,void 0),v=!0;try{f=i(s),v=!1}finally{v?g(c):O(c)}return\"undefined\"!=typeof Promise&&f instanceof Promise?f.then((function(n){return j(c,o),P(n,c)}),(function(n){throw g(c),n})):(j(c,o),P(f,c))}if(!r||\"object\"!=typeof r){if(void 0===(f=i(r))&&(f=r),f===H&&(f=void 0),e.D&&d(f,!0),o){var p=[],l=[];b(\"Patches\").M(r,f,p,l),o(p,l)}return f}n(21,r)},this.produceWithPatches=function(n,r){if(\"function\"==typeof n)return function(r){for(var t=arguments.length,i=Array(t>1?t-1:0),o=1;o<t;o++)i[o-1]=arguments[o];return e.produceWithPatches(r,(function(r){return n.apply(void 0,[r].concat(i))}))};var t,i,o=e.produce(n,r,(function(n,r){t=n,i=r}));return\"undefined\"!=typeof Promise&&o instanceof Promise?o.then((function(n){return[n,t,i]})):[o,t,i]},\"boolean\"==typeof(null==r?void 0:r.useProxies)&&this.setUseProxies(r.useProxies),\"boolean\"==typeof(null==r?void 0:r.autoFreeze)&&this.setAutoFreeze(r.autoFreeze)}var i=e.prototype;return i.createDraft=function(e){t(e)||n(8),r(e)&&(e=R(e));var i=w(this),o=N(this,e,void 0);return o[Q].C=!0,O(i),o},i.finishDraft=function(r,t){var e=r&&r[Q]; true&&(e&&e.C||n(9),e.I&&n(10));var i=e.A;return j(i,t),P(void 0,i)},i.setAutoFreeze=function(n){this.D=n},i.setUseProxies=function(r){r&&!B&&n(20),this.O=r},i.applyPatches=function(n,t){var e;for(e=t.length-1;e>=0;e--){var i=t[e];if(0===i.path.length&&\"replace\"===i.op){n=i.value;break}}e>-1&&(t=t.slice(e+1));var o=b(\"Patches\").$;return r(n)?o(n,t):this.produce(n,(function(n){return o(n,t)}))},e}(),an=new un,fn=an.produce,cn=an.produceWithPatches.bind(an),sn=an.setAutoFreeze.bind(an),vn=an.setUseProxies.bind(an),pn=an.applyPatches.bind(an),ln=an.createDraft.bind(an),dn=an.finishDraft.bind(an);/* harmony default export */ __webpack_exports__[\"default\"] = (fn);\n//# sourceMappingURL=immer.esm.js.map\n\n\n//# sourceURL=webpack:///./node_modules/immer/dist/immer.esm.js?");

/***/ }),

/***/ "./node_modules/nanoid/index.browser.js":
/*!**********************************************!*\
  !*** ./node_modules/nanoid/index.browser.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// This file replaces `index.js` in bundlers like webpack or Rollup,\n// according to `browser` config in `package.json`.\n\nif (true) {\n  // All bundlers will remove this block in production bundle\n  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {\n    throw new Error(\n      'React Native does not have a built-in secure random generator. ' +\n      'If you don’t need unpredictable IDs, you can use `nanoid/non-secure`. ' +\n      'For secure ID install `expo-random` locally and use `nanoid/async`.'\n    )\n  }\n  if (typeof self === 'undefined' || (!self.crypto && !self.msCrypto)) {\n    throw new Error(\n      'Your browser does not have secure random generator. ' +\n      'If you don’t need unpredictable IDs, you can use nanoid/non-secure.'\n    )\n  }\n}\n\nvar crypto = self.crypto || self.msCrypto\n\n// This alphabet uses a-z A-Z 0-9 _- symbols.\n// Symbols are generated for smaller size.\n// -_zyxwvutsrqponmlkjihgfedcba9876543210ZYXWVUTSRQPONMLKJIHGFEDCBA\nvar url = '-_'\n// Loop from 36 to 0 (from z to a and 9 to 0 in Base36).\nvar i = 36\nwhile (i--) {\n  // 36 is radix. Number.prototype.toString(36) returns number\n  // in Base36 representation. Base36 is like hex, but it uses 0–9 and a-z.\n  url += i.toString(36)\n}\n// Loop from 36 to 10 (from Z to A in Base36).\ni = 36\nwhile (i-- - 10) {\n  url += i.toString(36).toUpperCase()\n}\n\nmodule.exports = function (size) {\n  var id = ''\n  var bytes = crypto.getRandomValues(new Uint8Array(size || 21))\n  i = size || 21\n\n  // Compact alternative for `for (var i = 0; i < size; i++)`\n  while (i--) {\n    // We can’t use bytes bigger than the alphabet. 63 is 00111111 bitmask.\n    // This mask reduces random byte 0-255 to 0-63 values.\n    // There is no need in `|| ''` and `* 1.6` hacks in here,\n    // because bitmask trim bytes exact to alphabet size.\n    id += url[bytes[i] & 63]\n  }\n  return id\n}\n\n\n//# sourceURL=webpack:///./node_modules/nanoid/index.browser.js?");

/***/ }),

/***/ "./node_modules/refract-callbag/index.es.js":
/*!**************************************************!*\
  !*** ./node_modules/refract-callbag/index.es.js ***!
  \**************************************************/
/*! exports provided: withEffects, compose, asProps, toProps, PROPS_EFFECT, useRefract, toRender, COMPONENT_EFFECT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"withEffects\", function() { return withEffects; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"compose\", function() { return compose; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"asProps\", function() { return asProps; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toProps\", function() { return toProps; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PROPS_EFFECT\", function() { return PROPS_EFFECT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useRefract\", function() { return useRefract; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toRender\", function() { return toRender; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"COMPONENT_EFFECT\", function() { return COMPONENT_EFFECT; });\n/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! symbol-observable */ \"./node_modules/symbol-observable/es/index.js\");\n/* harmony import */ var callbag_start_with__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! callbag-start-with */ \"./node_modules/callbag-start-with/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n/*! *****************************************************************************\r\nCopyright (c) Microsoft Corporation. All rights reserved.\r\nLicensed under the Apache License, Version 2.0 (the \"License\"); you may not use\r\nthis file except in compliance with the License. You may obtain a copy of the\r\nLicense at http://www.apache.org/licenses/LICENSE-2.0\r\n\r\nTHIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY\r\nKIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED\r\nWARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,\r\nMERCHANTABLITY OR NON-INFRINGEMENT.\r\n\r\nSee the Apache Version 2.0 License for specific language governing permissions\r\nand limitations under the License.\r\n***************************************************************************** */\r\n/* global Reflect, Promise */\r\n\r\nvar extendStatics = Object.setPrototypeOf ||\r\n    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };\r\n\r\nfunction __extends(d, b) {\r\n    extendStatics(d, b);\r\n    function __() { this.constructor = d; }\r\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n}\r\n\r\nvar __assign = Object.assign || function __assign(t) {\r\n    for (var s, i = 1, n = arguments.length; i < n; i++) {\r\n        s = arguments[i];\r\n        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];\r\n    }\r\n    return t;\r\n};\n\nvar PROPS_EFFECT = '@@refract/effect/props';\r\nvar COMPONENT_EFFECT = '@@refract/effect/component';\r\nvar toProps = function (props) { return ({\r\n    type: PROPS_EFFECT,\r\n    payload: {\r\n        replace: false,\r\n        props: props\r\n    }\r\n}); };\r\nvar asProps = function (props) { return ({\r\n    type: PROPS_EFFECT,\r\n    payload: {\r\n        replace: true,\r\n        props: props\r\n    }\r\n}); };\r\nvar toRender = function (data) { return ({\r\n    type: COMPONENT_EFFECT,\r\n    payload: data\r\n}); };\n\nvar MOUNT_EVENT = '@@refract/event/mount';\r\nvar UNMOUNT_EVENT = '@@refract/event/unmount';\r\nvar DataType;\r\n(function (DataType) {\r\n    DataType[\"EVENT\"] = \"event\";\r\n    DataType[\"PROPS\"] = \"props\";\r\n    DataType[\"CALLBACK\"] = \"callback\";\r\n})(DataType || (DataType = {}));\r\nvar isEvent = function (eventName) { return function (data, index) {\r\n    return data.type === DataType.EVENT &&\r\n        data.payload.name === eventName;\r\n}; };\r\nvar isProps = function (data) {\r\n    return data.type === DataType.PROPS;\r\n};\r\nvar isCallback = function (propName) { return function (data) {\r\n    return data.type === DataType.CALLBACK &&\r\n        data.payload.name === propName;\r\n}; };\r\nvar createEventData = function (name, value) { return ({\r\n    type: DataType.EVENT,\r\n    payload: {\r\n        name: name,\r\n        value: value\r\n    }\r\n}); };\r\nvar createPropsData = function (props) { return ({\r\n    type: DataType.PROPS,\r\n    payload: props\r\n}); };\r\nvar createCallbackData = function (name, args) { return ({\r\n    type: DataType.CALLBACK,\r\n    payload: {\r\n        name: name,\r\n        args: args\r\n    }\r\n}); };\r\nvar shallowEquals = function (left, right) {\r\n    return left === right ||\r\n        (Object.keys(left).length === Object.keys(right).length &&\r\n            Object.keys(left).every(function (leftKey) { return left[leftKey] === right[leftKey]; }));\r\n};\n\nvar fromObs = __webpack_require__(/*! callbag-from-obs */ \"./node_modules/callbag-from-obs/readme.js\");\r\nvar toObs = __webpack_require__(/*! callbag-to-obs */ \"./node_modules/callbag-to-obs/readme.js\");\r\nvar dropRepeats = __webpack_require__(/*! callbag-drop-repeats */ \"./node_modules/callbag-drop-repeats/index.js\");\r\nvar map = __webpack_require__(/*! callbag-map */ \"./node_modules/refract-callbag/node_modules/callbag-map/readme.js\");\r\nvar pipe = __webpack_require__(/*! callbag-pipe */ \"./node_modules/refract-callbag/node_modules/callbag-pipe/readme.js\");\r\nvar filter = __webpack_require__(/*! callbag-filter */ \"./node_modules/refract-callbag/node_modules/callbag-filter/readme.js\");\r\nvar subscribeToSink = function (sink, next, error) {\r\n    return toObs(sink).subscribe({\r\n        next: next,\r\n        error: error\r\n    });\r\n};\r\nvar getComponentBase = function (data, pushEvent) {\r\n    var fromEvent = function (eventName, valueTransformer) {\r\n        return pipe(data, filter(isEvent(eventName)), map(function (data) {\r\n            var value = data.payload.value;\r\n            return valueTransformer ? valueTransformer(value) : value;\r\n        }));\r\n    };\r\n    function useEvent(eventName, seedValue) {\r\n        var hasSeedValue = arguments.length > 1;\r\n        var events$ = fromEvent(eventName);\r\n        var pushEventValue = pushEvent(eventName);\r\n        return [\r\n            !hasSeedValue ? events$ : pipe(events$, Object(callbag_start_with__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(seedValue)),\r\n            pushEventValue\r\n        ];\r\n    }\r\n    return {\r\n        mount: pipe(data, filter(isEvent(MOUNT_EVENT)), map(function () { return undefined; })),\r\n        unmount: pipe(data, filter(isEvent(UNMOUNT_EVENT)), map(function () { return undefined; })),\r\n        fromEvent: fromEvent,\r\n        pushEvent: pushEvent,\r\n        useEvent: useEvent\r\n    };\r\n};\r\nvar getObserve = function (getProp, data, decoratedProps) {\r\n    return function observe(propName, valueTransformer) {\r\n        if (decoratedProps &&\r\n            propName &&\r\n            typeof getProp(propName) === 'function') {\r\n            return pipe(data(), filter(isCallback(propName)), map(function (data) {\r\n                var args = data.payload.args;\r\n                return valueTransformer ? valueTransformer(args) : args[0];\r\n            }));\r\n        }\r\n        if (propName) {\r\n            return pipe(data(), filter(isProps), map(function (data) {\r\n                var prop = data.payload[propName];\r\n                return valueTransformer ? valueTransformer(prop) : prop;\r\n            }), dropRepeats());\r\n        }\r\n        return pipe(data(), filter(isProps), map(function (data) { return data.payload; }), dropRepeats(shallowEquals));\r\n    };\r\n};\r\nvar createComponent = function (getProp, dataObservable, pushEvent, decoratedProps) {\r\n    var data = function () { return fromObs(dataObservable); };\r\n    return __assign({ observe: getObserve(getProp, data, decoratedProps) }, getComponentBase(data(), pushEvent));\r\n};\r\nvar createObservable = function (subscribe) {\r\n    return (_a = {\r\n            subscribe: subscribe\r\n        },\r\n        _a[symbol_observable__WEBPACK_IMPORTED_MODULE_0__[\"default\"]] = function () {\r\n            return this;\r\n        },\r\n        _a);\r\n    var _a;\r\n};\n\nvar configureComponent = function (aperture, instance, isValidElement$$1, isComponentClass, handler, errorHandler, mergeProps, decorateProps, componentName) {\r\n    if (isValidElement$$1 === void 0) { isValidElement$$1 = function () { return false; }; }\r\n    if (isComponentClass === void 0) { isComponentClass = function () { return false; }; }\r\n    if (componentName === void 0) { componentName = 'unknown component'; }\r\n    instance.state = {\r\n        renderEffect: false,\r\n        children: null,\r\n        props: {}\r\n    };\r\n    var setState = function (state) {\r\n        if (instance.unmounted) {\r\n            return;\r\n        }\r\n        if (instance.mounted) {\r\n            instance.setState(state);\r\n        }\r\n        else if (typeof state === 'function') {\r\n            instance.state = state(instance.state);\r\n        }\r\n        else {\r\n            instance.state = __assign({}, instance.state, state);\r\n        }\r\n    };\r\n    var finalHandler = function (initialProps, initialContext) {\r\n        var effectHandler = handler\r\n            ? handler(initialProps, initialContext)\r\n            : function () { return void 0; };\r\n        return function (effect) {\r\n            if (isValidElement$$1(effect)) {\r\n                setState({\r\n                    renderEffect: true,\r\n                    children: effect\r\n                });\r\n            }\r\n            else if (effect && effect.type === PROPS_EFFECT) {\r\n                var payload_1 = effect.payload;\r\n                if (mergeProps) {\r\n                    setState(function (prev) { return ({\r\n                        replace: payload_1.replace,\r\n                        props: __assign({}, prev.props, payload_1.props)\r\n                    }); });\r\n                }\r\n                else {\r\n                    setState({\r\n                        replace: payload_1.replace,\r\n                        props: payload_1.props\r\n                    });\r\n                }\r\n            }\r\n            else {\r\n                effectHandler(effect);\r\n            }\r\n        };\r\n    };\r\n    var decoratedProps = {};\r\n    var listeners = [];\r\n    var addListener = function (listener) {\r\n        listeners = listeners.concat(listener);\r\n    };\r\n    var removeListener = function (listener) {\r\n        listeners = listeners.filter(function (l) { return l !== listener; });\r\n    };\r\n    var pushEvent = function (eventName) { return function (val) {\r\n        listeners.forEach(function (listener) {\r\n            listener.next(createEventData(eventName, val));\r\n        });\r\n    }; };\r\n    var decorateProp = function (container, prop, propName) {\r\n        if (propName === 'children' || isComponentClass(prop)) {\r\n            return;\r\n        }\r\n        container[propName] = function () {\r\n            var args = [];\r\n            for (var _i = 0; _i < arguments.length; _i++) {\r\n                args[_i] = arguments[_i];\r\n            }\r\n            listeners.forEach(function (listener) {\r\n                listener.next(createCallbackData(propName, args));\r\n            });\r\n            return prop.apply(void 0, args);\r\n        };\r\n    };\r\n    if (decorateProps) {\r\n        Object.keys(instance.props).forEach(function (propName) {\r\n            if (typeof instance.props[propName] === 'function') {\r\n                decorateProp(decoratedProps, instance.props[propName], propName);\r\n            }\r\n        });\r\n    }\r\n    var dataObservable = createObservable(function (listener) {\r\n        addListener(listener);\r\n        listener.next(createPropsData(instance.props));\r\n        return { unsubscribe: function () { return removeListener(listener); } };\r\n    });\r\n    var component = createComponent(function (propName) { return instance.props[propName]; }, dataObservable, pushEvent, decorateProps);\r\n    var sinkObservable = aperture(component, instance.props, instance.context);\r\n    if (!sinkObservable) {\r\n        throw new Error(\"Your Refract aperture didn't return an observable entity in \" + componentName + \" (component).\");\r\n    }\r\n    var sinkSubscription = subscribeToSink(sinkObservable, finalHandler(instance.props, instance.context), errorHandler\r\n        ? errorHandler(instance.props, instance.context)\r\n        : undefined);\r\n    instance.reDecorateProps = function (nextProps) {\r\n        if (decorateProps) {\r\n            Object.keys(nextProps).forEach(function (propName) {\r\n                if (typeof instance.props[propName] === 'function' &&\r\n                    nextProps[propName] !== instance.props[propName]) {\r\n                    decorateProp(decoratedProps, nextProps[propName], propName);\r\n                }\r\n            });\r\n        }\r\n    };\r\n    instance.pushProps = function (props) {\r\n        listeners.forEach(function (listener) {\r\n            listener.next(createPropsData(props));\r\n        });\r\n    };\r\n    instance.triggerMount = function () {\r\n        pushEvent(MOUNT_EVENT)();\r\n    };\r\n    instance.triggerUnmount = function () {\r\n        pushEvent(UNMOUNT_EVENT)();\r\n        sinkSubscription.unsubscribe();\r\n    };\r\n    instance.getChildProps = function () {\r\n        var state = instance.state;\r\n        var stateProps = state.props;\r\n        if (state.replace === true) {\r\n            return __assign({}, stateProps, { pushEvent: pushEvent });\r\n        }\r\n        var additionalProps = __assign({}, decoratedProps, { pushEvent: pushEvent });\r\n        if (state.replace === false) {\r\n            return __assign({}, instance.props, additionalProps, stateProps);\r\n        }\r\n        return __assign({}, instance.props, additionalProps);\r\n    };\r\n    instance.havePropsChanged = function (newProps, newState) {\r\n        var state = instance.state;\r\n        if (state.renderEffect || newState.renderEffect) {\r\n            return state.children !== newState.children;\r\n        }\r\n        var haveStatePropsChanged = !shallowEquals(state.props, newState.props);\r\n        if (newState.replace === true) {\r\n            return haveStatePropsChanged;\r\n        }\r\n        var havePropsChanged = !shallowEquals(instance.props, newProps);\r\n        if (newState.replace === false) {\r\n            return havePropsChanged || haveStatePropsChanged;\r\n        }\r\n        return havePropsChanged;\r\n    };\r\n};\n\nvar isComponentClass = function (ComponentClass) {\r\n    return Boolean(ComponentClass &&\r\n        ComponentClass.prototype &&\r\n        ComponentClass.prototype.isReactComponent);\r\n};\r\nvar Empty = function () { return null; };\r\nvar withEffects = function (aperture, config) {\r\n    if (config === void 0) { config = {}; }\r\n    return function (BaseComponent) {\r\n        if (BaseComponent === void 0) { BaseComponent = Empty; }\r\n        return _a = /** @class */ (function (_super) {\r\n                __extends(WithEffects, _super);\r\n                function WithEffects(props, context) {\r\n                    var _this = _super.call(this, props, context) || this;\r\n                    _this.mounted = false;\r\n                    _this.unmounted = false;\r\n                    configureComponent(aperture, _this, react__WEBPACK_IMPORTED_MODULE_2__[\"isValidElement\"], isComponentClass, config.handler, config.errorHandler, config.mergeProps, config.decorateProps !== false, BaseComponent.displayName || BaseComponent.name);\r\n                    return _this;\r\n                }\r\n                WithEffects.prototype.componentDidMount = function () {\r\n                    this.mounted = true;\r\n                    this.triggerMount();\r\n                };\r\n                WithEffects.prototype.UNSAFE_componentWillReceiveProps = function (nextProps) {\r\n                    this.reDecorateProps(nextProps);\r\n                    this.pushProps(nextProps);\r\n                };\r\n                WithEffects.prototype.shouldComponentUpdate = function (nextProps, nextState) {\r\n                    return this.havePropsChanged(nextProps, nextState);\r\n                };\r\n                WithEffects.prototype.componentWillUnmount = function () {\r\n                    this.unmounted = true;\r\n                    this.triggerUnmount();\r\n                };\r\n                WithEffects.prototype.render = function () {\r\n                    if (this.state.children) {\r\n                        return this.state.children;\r\n                    }\r\n                    return Object(react__WEBPACK_IMPORTED_MODULE_2__[\"createElement\"])(BaseComponent, this.getChildProps());\r\n                };\r\n                return WithEffects;\r\n            }(react__WEBPACK_IMPORTED_MODULE_2__[\"Component\"])),\r\n            _a.contextType = config.Context || null,\r\n            _a;\r\n        var _a;\r\n    };\r\n};\n\nvar identity = function (arg) { return arg; };\r\nvar compose = function () {\r\n    var fns = [];\r\n    for (var _i = 0; _i < arguments.length; _i++) {\r\n        fns[_i] = arguments[_i];\r\n    }\r\n    if (fns.length === 0) {\r\n        return identity;\r\n    }\r\n    if (fns.length === 1) {\r\n        return fns[0];\r\n    }\r\n    return function (arg) {\r\n        return fns.reduceRight(function (previousResult, fn) { return fn(previousResult); }, arg);\r\n    };\r\n};\n\nvar configureHook = function (aperture, data, handler, errorHandler, hookName) {\r\n    if (handler === void 0) { handler = function () { return function () { return void 0; }; }; }\r\n    if (hookName === void 0) { hookName = 'unknown hook'; }\r\n    var returnedData;\r\n    var lastData = data;\r\n    var setComponentData;\r\n    var finalHandler = function (initialData) {\r\n        var effectHandler = handler(initialData);\r\n        return function (effect) {\r\n            if (effect && effect.type === COMPONENT_EFFECT) {\r\n                if (setComponentData) {\r\n                    setComponentData(effect.payload);\r\n                }\r\n                else {\r\n                    returnedData = effect.payload;\r\n                }\r\n            }\r\n            else {\r\n                effectHandler(effect);\r\n            }\r\n        };\r\n    };\r\n    var listeners = [];\r\n    var addListener = function (listener) {\r\n        listeners = listeners.concat(listener);\r\n    };\r\n    var removeListener = function (listener) {\r\n        listeners = listeners.filter(function (l) { return l !== listener; });\r\n    };\r\n    var pushEvent = function (eventName) { return function (val) {\r\n        listeners.forEach(function (listener) {\r\n            listener.next(createEventData(eventName, val));\r\n        });\r\n    }; };\r\n    var dataObservable = createObservable(function (listener) {\r\n        addListener(listener);\r\n        listener.next(createPropsData(lastData));\r\n        return { unsubscribe: function () { return removeListener(listener); } };\r\n    });\r\n    var component = createComponent(function (propName) { return data[propName]; }, dataObservable, pushEvent, false);\r\n    var sinkObservable = aperture(component, data);\r\n    if (!sinkObservable) {\r\n        throw new Error(\"Your Refract aperture didn't return an observable entity in \" + hookName + \" (hook).\");\r\n    }\r\n    var sinkSubscription = subscribeToSink(sinkObservable, finalHandler(data), errorHandler ? errorHandler(data) : undefined);\r\n    var pushMountEvent = function () {\r\n        pushEvent(MOUNT_EVENT)();\r\n    };\r\n    var pushUnmountEvent = function () {\r\n        pushEvent(UNMOUNT_EVENT)();\r\n    };\r\n    return {\r\n        data: returnedData,\r\n        unsubscribe: function () {\r\n            pushUnmountEvent();\r\n            sinkSubscription.unsubscribe();\r\n        },\r\n        pushMountEvent: pushMountEvent,\r\n        pushData: function (data) {\r\n            lastData = data;\r\n            listeners.forEach(function (listener) {\r\n                listener.next(createPropsData(data));\r\n            });\r\n        },\r\n        registerSetData: function (setData) {\r\n            setComponentData = function (data) { return setData(function (hook) { return (__assign({}, hook, { data: data })); }); };\r\n        }\r\n    };\r\n};\n\n// @ts-ignore\r\nvar useRefract = function (aperture, data, config) {\r\n    if (config === void 0) { config = {}; }\r\n    var initialHook = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useMemo\"])(function () {\r\n        return configureHook(aperture, data, config.handler, config.errorHandler, config.hookName);\r\n    }, []);\r\n    var _a = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(initialHook), hook = _a[0], setData = _a[1];\r\n    Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useLayoutEffect\"])(function () {\r\n        hook.registerSetData(setData);\r\n        hook.pushMountEvent();\r\n        return function () { return hook.unsubscribe(); };\r\n    }, []);\r\n    Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\r\n        hook.pushData(data);\r\n    }, [data]);\r\n    return hook.data;\r\n};\n\n\n\n\n//# sourceURL=webpack:///./node_modules/refract-callbag/index.es.js?");

/***/ }),

/***/ "./node_modules/refract-callbag/node_modules/callbag-filter/readme.js":
/*!****************************************************************************!*\
  !*** ./node_modules/refract-callbag/node_modules/callbag-filter/readme.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * callbag-filter\n * --------------\n *\n * Callbag operator that conditionally lets data pass through. Works on either\n * pullable or listenable sources.\n *\n * `npm install callbag-filter`\n *\n * Example:\n *\n *     const fromIter = require('callbag-from-iter');\n *     const iterate = require('callbag-iterate');\n *     const filter = require('callbag-filter');\n *\n *     const source = filter(x => x % 2)(fromIter([1,2,3,4,5]));\n *\n *     iterate(x => console.log(x))(source); // 1\n *                                           // 3\n *                                           // 5\n */\n\nconst filter = condition => source => (start, sink) => {\n  if (start !== 0) return;\n  let talkback;\n  source(0, (t, d) => {\n    if (t === 0) {\n      talkback = d;\n      sink(t, d);\n    } else if (t === 1) {\n      if (condition(d)) sink(t, d);\n      else talkback(1);\n    }\n    else sink(t, d);\n  });\n};\n\nmodule.exports = filter;\n\n\n//# sourceURL=webpack:///./node_modules/refract-callbag/node_modules/callbag-filter/readme.js?");

/***/ }),

/***/ "./node_modules/refract-callbag/node_modules/callbag-map/readme.js":
/*!*************************************************************************!*\
  !*** ./node_modules/refract-callbag/node_modules/callbag-map/readme.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * callbag-map\n * -----------\n *\n * Callbag operator that applies a transformation on data passing through it.\n * Works on either pullable or listenable sources.\n *\n * `npm install callbag-map`\n *\n * Example:\n *\n *     const fromIter = require('callbag-from-iter');\n *     const iterate = require('callbag-iterate');\n *     const map = require('callbag-map');\n *\n *     const source = map(x => x * 0.1)(fromIter([10,20,30,40]));\n *\n *     iterate(x => console.log(x))(source); // 1\n *                                           // 2\n *                                           // 3\n *                                           // 4\n */\n\nconst map = f => source => (start, sink) => {\n  if (start !== 0) return;\n  source(0, (t, d) => {\n    sink(t, t === 1 ? f(d) : d)\n  });\n};\n\nmodule.exports = map;\n\n\n//# sourceURL=webpack:///./node_modules/refract-callbag/node_modules/callbag-map/readme.js?");

/***/ }),

/***/ "./node_modules/refract-callbag/node_modules/callbag-pipe/readme.js":
/*!**************************************************************************!*\
  !*** ./node_modules/refract-callbag/node_modules/callbag-pipe/readme.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * callbag-pipe\n * ------------\n *\n * Utility function for plugging callbags together in chain. This utility\n * actually doesn't rely on Callbag specifics, and is basically the same as\n * Ramda's `pipe` or lodash's `flow`. Anyway, this exists just to play nicely\n * with the ecosystem, and to facilitate the import of the function.\n *\n * `npm install callbag-pipe`\n *\n * Example:\n *\n * Create a source with `pipe`, then pass it to a `forEach`:\n *\n *     const interval = require('callbag-interval');\n *     const forEach = require('callbag-for-each');\n *     const combine = require('callbag-combine');\n *     const pipe = require('callbag-pipe');\n *     const take = require('callbag-take');\n *     const map = require('callbag-map');\n *\n *     const source = pipe(\n *       combine(interval(100), interval(350)),\n *       map(([x, y]) => `X${x},Y${y}`),\n *       take(10)\n *     );\n *\n *     forEach(x => console.log(x))(source); // X2,Y0\n *                                           // X3,Y0\n *                                           // X4,Y0\n *                                           // X5,Y0\n *                                           // X6,Y0\n *                                           // X6,Y1\n *                                           // X7,Y1\n *                                           // X8,Y1\n *                                           // X9,Y1\n *                                           // X9,Y2\n *\n *\n * Or use `pipe` to go all the way from source to sink:\n *\n *     const interval = require('callbag-interval');\n *     const forEach = require('callbag-for-each');\n *     const combine = require('callbag-combine');\n *     const pipe = require('callbag-pipe');\n *     const take = require('callbag-take');\n *     const map = require('callbag-map');\n *\n *     pipe(\n *       combine(interval(100), interval(350)),\n *       map(([x, y]) => `X${x},Y${y}`),\n *       take(10),\n *       forEach(x => console.log(x))\n *     );\n *     // X2,Y0\n *     // X3,Y0\n *     // X4,Y0\n *     // X5,Y0\n *     // X6,Y0\n *     // X6,Y1\n *     // X7,Y1\n *     // X8,Y1\n *     // X9,Y1\n *     // X9,Y2\n *\n *\n * Nesting\n * -------\n *\n * To use pipe inside another pipe, you need to give the inner pipe an\n * argument, e.g. `s => pipe(s, ...`:\n *\n *     const interval = require('callbag-interval');\n *     const forEach = require('callbag-for-each');\n *     const combine = require('callbag-combine');\n *     const pipe = require('callbag-pipe');\n *     const take = require('callbag-take');\n *     const map = require('callbag-map');\n *\n *     pipe(\n *       combine(interval(100), interval(350)),\n *       s => pipe(s,\n *         map(([x, y]) => `X${x},Y${y}`),\n *         take(10)\n *       ),\n *       forEach(x => console.log(x))\n *     );\n *\n *\n * This means you can use pipe to create a new operator:\n *\n *     const mapThenTake = (f, amount) =>\n *       s => pipe(s, map(f), take(amount));\n *\n *     pipe(\n *       combine(interval(100), interval(350)),\n *       mapThenTake(([x, y]) => `X${x},Y${y}`, 10),\n *       forEach(x => console.log(x))\n *     );\n *\n */\n\nfunction pipe(...cbs) {\n  let res = cbs[0];\n  for (let i = 1, n = cbs.length; i < n; i++) res = cbs[i](res);\n  return res;\n}\n\nmodule.exports = pipe;\n\n\n//# sourceURL=webpack:///./node_modules/refract-callbag/node_modules/callbag-pipe/readme.js?");

/***/ }),

/***/ "./node_modules/remove-accents/index.js":
/*!**********************************************!*\
  !*** ./node_modules/remove-accents/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var characterMap = {\n\t\"À\": \"A\",\n\t\"Á\": \"A\",\n\t\"Â\": \"A\",\n\t\"Ã\": \"A\",\n\t\"Ä\": \"A\",\n\t\"Å\": \"A\",\n\t\"Ấ\": \"A\",\n\t\"Ắ\": \"A\",\n\t\"Ẳ\": \"A\",\n\t\"Ẵ\": \"A\",\n\t\"Ặ\": \"A\",\n\t\"Æ\": \"AE\",\n\t\"Ầ\": \"A\",\n\t\"Ằ\": \"A\",\n\t\"Ȃ\": \"A\",\n\t\"Ç\": \"C\",\n\t\"Ḉ\": \"C\",\n\t\"È\": \"E\",\n\t\"É\": \"E\",\n\t\"Ê\": \"E\",\n\t\"Ë\": \"E\",\n\t\"Ế\": \"E\",\n\t\"Ḗ\": \"E\",\n\t\"Ề\": \"E\",\n\t\"Ḕ\": \"E\",\n\t\"Ḝ\": \"E\",\n\t\"Ȇ\": \"E\",\n\t\"Ì\": \"I\",\n\t\"Í\": \"I\",\n\t\"Î\": \"I\",\n\t\"Ï\": \"I\",\n\t\"Ḯ\": \"I\",\n\t\"Ȋ\": \"I\",\n\t\"Ð\": \"D\",\n\t\"Ñ\": \"N\",\n\t\"Ò\": \"O\",\n\t\"Ó\": \"O\",\n\t\"Ô\": \"O\",\n\t\"Õ\": \"O\",\n\t\"Ö\": \"O\",\n\t\"Ø\": \"O\",\n\t\"Ố\": \"O\",\n\t\"Ṍ\": \"O\",\n\t\"Ṓ\": \"O\",\n\t\"Ȏ\": \"O\",\n\t\"Ù\": \"U\",\n\t\"Ú\": \"U\",\n\t\"Û\": \"U\",\n\t\"Ü\": \"U\",\n\t\"Ý\": \"Y\",\n\t\"à\": \"a\",\n\t\"á\": \"a\",\n\t\"â\": \"a\",\n\t\"ã\": \"a\",\n\t\"ä\": \"a\",\n\t\"å\": \"a\",\n\t\"ấ\": \"a\",\n\t\"ắ\": \"a\",\n\t\"ẳ\": \"a\",\n\t\"ẵ\": \"a\",\n\t\"ặ\": \"a\",\n\t\"æ\": \"ae\",\n\t\"ầ\": \"a\",\n\t\"ằ\": \"a\",\n\t\"ȃ\": \"a\",\n\t\"ç\": \"c\",\n\t\"ḉ\": \"c\",\n\t\"è\": \"e\",\n\t\"é\": \"e\",\n\t\"ê\": \"e\",\n\t\"ë\": \"e\",\n\t\"ế\": \"e\",\n\t\"ḗ\": \"e\",\n\t\"ề\": \"e\",\n\t\"ḕ\": \"e\",\n\t\"ḝ\": \"e\",\n\t\"ȇ\": \"e\",\n\t\"ì\": \"i\",\n\t\"í\": \"i\",\n\t\"î\": \"i\",\n\t\"ï\": \"i\",\n\t\"ḯ\": \"i\",\n\t\"ȋ\": \"i\",\n\t\"ð\": \"d\",\n\t\"ñ\": \"n\",\n\t\"ò\": \"o\",\n\t\"ó\": \"o\",\n\t\"ô\": \"o\",\n\t\"õ\": \"o\",\n\t\"ö\": \"o\",\n\t\"ø\": \"o\",\n\t\"ố\": \"o\",\n\t\"ṍ\": \"o\",\n\t\"ṓ\": \"o\",\n\t\"ȏ\": \"o\",\n\t\"ù\": \"u\",\n\t\"ú\": \"u\",\n\t\"û\": \"u\",\n\t\"ü\": \"u\",\n\t\"ý\": \"y\",\n\t\"ÿ\": \"y\",\n\t\"Ā\": \"A\",\n\t\"ā\": \"a\",\n\t\"Ă\": \"A\",\n\t\"ă\": \"a\",\n\t\"Ą\": \"A\",\n\t\"ą\": \"a\",\n\t\"Ć\": \"C\",\n\t\"ć\": \"c\",\n\t\"Ĉ\": \"C\",\n\t\"ĉ\": \"c\",\n\t\"Ċ\": \"C\",\n\t\"ċ\": \"c\",\n\t\"Č\": \"C\",\n\t\"č\": \"c\",\n\t\"C̆\": \"C\",\n\t\"c̆\": \"c\",\n\t\"Ď\": \"D\",\n\t\"ď\": \"d\",\n\t\"Đ\": \"D\",\n\t\"đ\": \"d\",\n\t\"Ē\": \"E\",\n\t\"ē\": \"e\",\n\t\"Ĕ\": \"E\",\n\t\"ĕ\": \"e\",\n\t\"Ė\": \"E\",\n\t\"ė\": \"e\",\n\t\"Ę\": \"E\",\n\t\"ę\": \"e\",\n\t\"Ě\": \"E\",\n\t\"ě\": \"e\",\n\t\"Ĝ\": \"G\",\n\t\"Ǵ\": \"G\",\n\t\"ĝ\": \"g\",\n\t\"ǵ\": \"g\",\n\t\"Ğ\": \"G\",\n\t\"ğ\": \"g\",\n\t\"Ġ\": \"G\",\n\t\"ġ\": \"g\",\n\t\"Ģ\": \"G\",\n\t\"ģ\": \"g\",\n\t\"Ĥ\": \"H\",\n\t\"ĥ\": \"h\",\n\t\"Ħ\": \"H\",\n\t\"ħ\": \"h\",\n\t\"Ḫ\": \"H\",\n\t\"ḫ\": \"h\",\n\t\"Ĩ\": \"I\",\n\t\"ĩ\": \"i\",\n\t\"Ī\": \"I\",\n\t\"ī\": \"i\",\n\t\"Ĭ\": \"I\",\n\t\"ĭ\": \"i\",\n\t\"Į\": \"I\",\n\t\"į\": \"i\",\n\t\"İ\": \"I\",\n\t\"ı\": \"i\",\n\t\"Ĳ\": \"IJ\",\n\t\"ĳ\": \"ij\",\n\t\"Ĵ\": \"J\",\n\t\"ĵ\": \"j\",\n\t\"Ķ\": \"K\",\n\t\"ķ\": \"k\",\n\t\"Ḱ\": \"K\",\n\t\"ḱ\": \"k\",\n\t\"K̆\": \"K\",\n\t\"k̆\": \"k\",\n\t\"Ĺ\": \"L\",\n\t\"ĺ\": \"l\",\n\t\"Ļ\": \"L\",\n\t\"ļ\": \"l\",\n\t\"Ľ\": \"L\",\n\t\"ľ\": \"l\",\n\t\"Ŀ\": \"L\",\n\t\"ŀ\": \"l\",\n\t\"Ł\": \"l\",\n\t\"ł\": \"l\",\n\t\"Ḿ\": \"M\",\n\t\"ḿ\": \"m\",\n\t\"M̆\": \"M\",\n\t\"m̆\": \"m\",\n\t\"Ń\": \"N\",\n\t\"ń\": \"n\",\n\t\"Ņ\": \"N\",\n\t\"ņ\": \"n\",\n\t\"Ň\": \"N\",\n\t\"ň\": \"n\",\n\t\"ŉ\": \"n\",\n\t\"N̆\": \"N\",\n\t\"n̆\": \"n\",\n\t\"Ō\": \"O\",\n\t\"ō\": \"o\",\n\t\"Ŏ\": \"O\",\n\t\"ŏ\": \"o\",\n\t\"Ő\": \"O\",\n\t\"ő\": \"o\",\n\t\"Œ\": \"OE\",\n\t\"œ\": \"oe\",\n\t\"P̆\": \"P\",\n\t\"p̆\": \"p\",\n\t\"Ŕ\": \"R\",\n\t\"ŕ\": \"r\",\n\t\"Ŗ\": \"R\",\n\t\"ŗ\": \"r\",\n\t\"Ř\": \"R\",\n\t\"ř\": \"r\",\n\t\"R̆\": \"R\",\n\t\"r̆\": \"r\",\n\t\"Ȓ\": \"R\",\n\t\"ȓ\": \"r\",\n\t\"Ś\": \"S\",\n\t\"ś\": \"s\",\n\t\"Ŝ\": \"S\",\n\t\"ŝ\": \"s\",\n\t\"Ş\": \"S\",\n\t\"Ș\": \"S\",\n\t\"ș\": \"s\",\n\t\"ş\": \"s\",\n\t\"Š\": \"S\",\n\t\"š\": \"s\",\n\t\"ß\": \"ss\",\n\t\"Ţ\": \"T\",\n\t\"ţ\": \"t\",\n\t\"ț\": \"t\",\n\t\"Ț\": \"T\",\n\t\"Ť\": \"T\",\n\t\"ť\": \"t\",\n\t\"Ŧ\": \"T\",\n\t\"ŧ\": \"t\",\n\t\"T̆\": \"T\",\n\t\"t̆\": \"t\",\n\t\"Ũ\": \"U\",\n\t\"ũ\": \"u\",\n\t\"Ū\": \"U\",\n\t\"ū\": \"u\",\n\t\"Ŭ\": \"U\",\n\t\"ŭ\": \"u\",\n\t\"Ů\": \"U\",\n\t\"ů\": \"u\",\n\t\"Ű\": \"U\",\n\t\"ű\": \"u\",\n\t\"Ų\": \"U\",\n\t\"ų\": \"u\",\n\t\"Ȗ\": \"U\",\n\t\"ȗ\": \"u\",\n\t\"V̆\": \"V\",\n\t\"v̆\": \"v\",\n\t\"Ŵ\": \"W\",\n\t\"ŵ\": \"w\",\n\t\"Ẃ\": \"W\",\n\t\"ẃ\": \"w\",\n\t\"X̆\": \"X\",\n\t\"x̆\": \"x\",\n\t\"Ŷ\": \"Y\",\n\t\"ŷ\": \"y\",\n\t\"Ÿ\": \"Y\",\n\t\"Y̆\": \"Y\",\n\t\"y̆\": \"y\",\n\t\"Ź\": \"Z\",\n\t\"ź\": \"z\",\n\t\"Ż\": \"Z\",\n\t\"ż\": \"z\",\n\t\"Ž\": \"Z\",\n\t\"ž\": \"z\",\n\t\"ſ\": \"s\",\n\t\"ƒ\": \"f\",\n\t\"Ơ\": \"O\",\n\t\"ơ\": \"o\",\n\t\"Ư\": \"U\",\n\t\"ư\": \"u\",\n\t\"Ǎ\": \"A\",\n\t\"ǎ\": \"a\",\n\t\"Ǐ\": \"I\",\n\t\"ǐ\": \"i\",\n\t\"Ǒ\": \"O\",\n\t\"ǒ\": \"o\",\n\t\"Ǔ\": \"U\",\n\t\"ǔ\": \"u\",\n\t\"Ǖ\": \"U\",\n\t\"ǖ\": \"u\",\n\t\"Ǘ\": \"U\",\n\t\"ǘ\": \"u\",\n\t\"Ǚ\": \"U\",\n\t\"ǚ\": \"u\",\n\t\"Ǜ\": \"U\",\n\t\"ǜ\": \"u\",\n\t\"Ứ\": \"U\",\n\t\"ứ\": \"u\",\n\t\"Ṹ\": \"U\",\n\t\"ṹ\": \"u\",\n\t\"Ǻ\": \"A\",\n\t\"ǻ\": \"a\",\n\t\"Ǽ\": \"AE\",\n\t\"ǽ\": \"ae\",\n\t\"Ǿ\": \"O\",\n\t\"ǿ\": \"o\",\n\t\"Þ\": \"TH\",\n\t\"þ\": \"th\",\n\t\"Ṕ\": \"P\",\n\t\"ṕ\": \"p\",\n\t\"Ṥ\": \"S\",\n\t\"ṥ\": \"s\",\n\t\"X́\": \"X\",\n\t\"x́\": \"x\",\n\t\"Ѓ\": \"Г\",\n\t\"ѓ\": \"г\",\n\t\"Ќ\": \"К\",\n\t\"ќ\": \"к\",\n\t\"A̋\": \"A\",\n\t\"a̋\": \"a\",\n\t\"E̋\": \"E\",\n\t\"e̋\": \"e\",\n\t\"I̋\": \"I\",\n\t\"i̋\": \"i\",\n\t\"Ǹ\": \"N\",\n\t\"ǹ\": \"n\",\n\t\"Ồ\": \"O\",\n\t\"ồ\": \"o\",\n\t\"Ṑ\": \"O\",\n\t\"ṑ\": \"o\",\n\t\"Ừ\": \"U\",\n\t\"ừ\": \"u\",\n\t\"Ẁ\": \"W\",\n\t\"ẁ\": \"w\",\n\t\"Ỳ\": \"Y\",\n\t\"ỳ\": \"y\",\n\t\"Ȁ\": \"A\",\n\t\"ȁ\": \"a\",\n\t\"Ȅ\": \"E\",\n\t\"ȅ\": \"e\",\n\t\"Ȉ\": \"I\",\n\t\"ȉ\": \"i\",\n\t\"Ȍ\": \"O\",\n\t\"ȍ\": \"o\",\n\t\"Ȑ\": \"R\",\n\t\"ȑ\": \"r\",\n\t\"Ȕ\": \"U\",\n\t\"ȕ\": \"u\",\n\t\"B̌\": \"B\",\n\t\"b̌\": \"b\",\n\t\"Č̣\": \"C\",\n\t\"č̣\": \"c\",\n\t\"Ê̌\": \"E\",\n\t\"ê̌\": \"e\",\n\t\"F̌\": \"F\",\n\t\"f̌\": \"f\",\n\t\"Ǧ\": \"G\",\n\t\"ǧ\": \"g\",\n\t\"Ȟ\": \"H\",\n\t\"ȟ\": \"h\",\n\t\"J̌\": \"J\",\n\t\"ǰ\": \"j\",\n\t\"Ǩ\": \"K\",\n\t\"ǩ\": \"k\",\n\t\"M̌\": \"M\",\n\t\"m̌\": \"m\",\n\t\"P̌\": \"P\",\n\t\"p̌\": \"p\",\n\t\"Q̌\": \"Q\",\n\t\"q̌\": \"q\",\n\t\"Ř̩\": \"R\",\n\t\"ř̩\": \"r\",\n\t\"Ṧ\": \"S\",\n\t\"ṧ\": \"s\",\n\t\"V̌\": \"V\",\n\t\"v̌\": \"v\",\n\t\"W̌\": \"W\",\n\t\"w̌\": \"w\",\n\t\"X̌\": \"X\",\n\t\"x̌\": \"x\",\n\t\"Y̌\": \"Y\",\n\t\"y̌\": \"y\",\n\t\"A̧\": \"A\",\n\t\"a̧\": \"a\",\n\t\"B̧\": \"B\",\n\t\"b̧\": \"b\",\n\t\"Ḑ\": \"D\",\n\t\"ḑ\": \"d\",\n\t\"Ȩ\": \"E\",\n\t\"ȩ\": \"e\",\n\t\"Ɛ̧\": \"E\",\n\t\"ɛ̧\": \"e\",\n\t\"Ḩ\": \"H\",\n\t\"ḩ\": \"h\",\n\t\"I̧\": \"I\",\n\t\"i̧\": \"i\",\n\t\"Ɨ̧\": \"I\",\n\t\"ɨ̧\": \"i\",\n\t\"M̧\": \"M\",\n\t\"m̧\": \"m\",\n\t\"O̧\": \"O\",\n\t\"o̧\": \"o\",\n\t\"Q̧\": \"Q\",\n\t\"q̧\": \"q\",\n\t\"U̧\": \"U\",\n\t\"u̧\": \"u\",\n\t\"X̧\": \"X\",\n\t\"x̧\": \"x\",\n\t\"Z̧\": \"Z\",\n\t\"z̧\": \"z\",\n\t\"й\":\"и\",\n\t\"Й\":\"И\",\n\t\"ё\":\"е\",\n\t\"Ё\":\"Е\",\n};\n\nvar chars = Object.keys(characterMap).join('|');\nvar allAccents = new RegExp(chars, 'g');\nvar firstAccent = new RegExp(chars, '');\n\nfunction matcher(match) {\n\treturn characterMap[match];\n}\n\nvar removeAccents = function(string) {\t\n\treturn string.replace(allAccents, matcher);\n};\n\nvar hasAccents = function(string) {\n\treturn !!string.match(firstAccent);\n};\n\nmodule.exports = removeAccents;\nmodule.exports.has = hasAccents;\nmodule.exports.remove = removeAccents;\n\n\n//# sourceURL=webpack:///./node_modules/remove-accents/index.js?");

/***/ }),

/***/ "./node_modules/symbol-observable/es/index.js":
/*!****************************************************!*\
  !*** ./node_modules/symbol-observable/es/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ponyfill.js */ \"./node_modules/symbol-observable/es/ponyfill.js\");\n/* global window */\n\n\nvar root;\n\nif (typeof self !== 'undefined') {\n  root = self;\n} else if (typeof window !== 'undefined') {\n  root = window;\n} else if (typeof global !== 'undefined') {\n  root = global;\n} else if (true) {\n  root = module;\n} else {}\n\nvar result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(root);\n/* harmony default export */ __webpack_exports__[\"default\"] = (result);\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\"), __webpack_require__(/*! ./../../webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./node_modules/symbol-observable/es/index.js?");

/***/ }),

/***/ "./node_modules/symbol-observable/es/ponyfill.js":
/*!*******************************************************!*\
  !*** ./node_modules/symbol-observable/es/ponyfill.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return symbolObservablePonyfill; });\nfunction symbolObservablePonyfill(root) {\n\tvar result;\n\tvar Symbol = root.Symbol;\n\n\tif (typeof Symbol === 'function') {\n\t\tif (Symbol.observable) {\n\t\t\tresult = Symbol.observable;\n\t\t} else {\n\t\t\tresult = Symbol('observable');\n\t\t\tSymbol.observable = result;\n\t\t}\n\t} else {\n\t\tresult = '@@observable';\n\t}\n\n\treturn result;\n};\n\n\n//# sourceURL=webpack:///./node_modules/symbol-observable/es/ponyfill.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ }),

/***/ "./packages/vendor/index.js":
/*!**********************************!*\
  !*** ./packages/vendor/index.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"./node_modules/@babel/runtime/helpers/slicedToArray.js\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nanoid */ \"./node_modules/nanoid/index.browser.js\");\n/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nanoid__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! immer */ \"./node_modules/immer/dist/immer.esm.js\");\n/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/api-fetch */ \"./node_modules/@wordpress/api-fetch/build-module/index.js\");\n/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/compose */ \"@wordpress/compose\");\n/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/element */ \"@wordpress/element\");\n/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/hooks */ \"@wordpress/hooks\");\n/* harmony import */ var _wordpress_hooks__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_hooks__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/data */ \"@wordpress/data\");\n/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/i18n */ \"@wordpress/i18n\");\n/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var refract_callbag__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! refract-callbag */ \"./node_modules/refract-callbag/index.es.js\");\n/* harmony import */ var callbag_basics__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! callbag-basics */ \"./node_modules/callbag-basics/index.js\");\n/* harmony import */ var callbag_basics__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(callbag_basics__WEBPACK_IMPORTED_MODULE_14__);\n\n/**\r\n * External dependencies.\r\n */\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/**\r\n * Prevent the conflicts with WordPress's Underscore lib and other 3rd party plugins.\r\n */\nlodash__WEBPACK_IMPORTED_MODULE_12__[\"noConflict\"]();\n\n/**\r\n * Setup the vendor variables used by Carbon Fields.\r\n */\nwindow.cf = window.cf || {};\nwindow.cf.vendor = [['react', react__WEBPACK_IMPORTED_MODULE_1___default.a], ['react-dom', react_dom__WEBPACK_IMPORTED_MODULE_2___default.a], ['nanoid', nanoid__WEBPACK_IMPORTED_MODULE_3___default.a], ['immer', immer__WEBPACK_IMPORTED_MODULE_4__[\"default\"]], ['@wordpress/api-fetch', _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_5__], ['@wordpress/compose', _wordpress_compose__WEBPACK_IMPORTED_MODULE_6__], ['@wordpress/element', _wordpress_element__WEBPACK_IMPORTED_MODULE_7__], ['@wordpress/hooks', _wordpress_hooks__WEBPACK_IMPORTED_MODULE_8__], ['@wordpress/data', _wordpress_data__WEBPACK_IMPORTED_MODULE_9__], ['@wordpress/i18n', _wordpress_i18n__WEBPACK_IMPORTED_MODULE_10__], ['classnames', classnames__WEBPACK_IMPORTED_MODULE_11__], ['lodash', lodash__WEBPACK_IMPORTED_MODULE_12__], ['refract-callbag', refract_callbag__WEBPACK_IMPORTED_MODULE_13__], ['callbag-basics', callbag_basics__WEBPACK_IMPORTED_MODULE_14__]].reduce(function (vendors, _ref) {\n  var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 2),\n    key = _ref2[0],\n    implementation = _ref2[1];\n  vendors[key] = implementation;\n  return vendors;\n}, {});\n\n/**\r\n * Setup the enviroment variables used by Carbon Fields.\r\n */\nwindow.cf.hooks = _wordpress_hooks__WEBPACK_IMPORTED_MODULE_8__;\nwindow.cf.element = _wordpress_element__WEBPACK_IMPORTED_MODULE_7__;\n\n//# sourceURL=webpack:///./packages/vendor/index.js?");

/***/ }),

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = wp[\"compose\"];\n\n//# sourceURL=webpack:///external_%5B%22wp%22,%22compose%22%5D?");

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = wp[\"data\"];\n\n//# sourceURL=webpack:///external_%5B%22wp%22,%22data%22%5D?");

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = wp[\"element\"];\n\n//# sourceURL=webpack:///external_%5B%22wp%22,%22element%22%5D?");

/***/ }),

/***/ "@wordpress/hooks":
/*!*******************************!*\
  !*** external ["wp","hooks"] ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = wp[\"hooks\"];\n\n//# sourceURL=webpack:///external_%5B%22wp%22,%22hooks%22%5D?");

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = wp[\"i18n\"];\n\n//# sourceURL=webpack:///external_%5B%22wp%22,%22i18n%22%5D?");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = lodash;\n\n//# sourceURL=webpack:///external_%22lodash%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = React;\n\n//# sourceURL=webpack:///external_%22React%22?");

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = ReactDOM;\n\n//# sourceURL=webpack:///external_%22ReactDOM%22?");

/***/ })

/******/ });