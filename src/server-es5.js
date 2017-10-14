module.exports =
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCI/M2M2MiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJvdXRlci1kb21cIj8wOTU2Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItZG9tXCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _path = __webpack_require__(/*! path */ 3);\n\nvar _path2 = _interopRequireDefault(_path);\n\nvar _http = __webpack_require__(/*! http */ 4);\n\nvar _express = __webpack_require__(/*! express */ 5);\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _react = __webpack_require__(/*! react */ 0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ 6);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ 1);\n\nvar _App = __webpack_require__(/*! ./components/App */ 7);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = new _express2.default();\nvar server = new _http.Server(app);\n\n// Conect to DB\nvar mongo = __webpack_require__(/*! ./api/db.js */ 11);\nvar db = mongo.connect();\n\n// use ejs templates\napp.set('view engine', 'ejs');\napp.set('views', _path2.default.join(__dirname, 'views'));\n\n// define the folder that will be used for static assets\napp.use(_express2.default.static(_path2.default.join(__dirname, 'static')));\n\nvar bodyParser = __webpack_require__(/*! body-parser */ 14);\napp.use(bodyParser.json());\napp.use(bodyParser.urlencoded({\n    extended: true\n}));\n\napp.get('/api/push', function (req, res) {\n    /*var name = req.body.name;\n    var email = req.body.email;\n    var pSortida = req.body.email;\n    var p = req.body.email;*/\n    // fer el push\n    mongo.insert(db);\n    res.redirect('/');\n});\n\n// universal routing and rendering\napp.get('*', function (req, res) {\n    var markup = '';\n    var status = 200;\n\n    if (process.env.UNIVERSAL) {\n        var context = {};\n        markup = (0, _server.renderToString)(_react2.default.createElement(\n            _reactRouterDom.StaticRouter,\n            { location: req.url, context: context },\n            _react2.default.createElement(_App.App, null)\n        ));\n\n        // context.url will contain the URL to redirect to if a <Redirect> was used\n        if (context.url) {\n            return res.redirect(302, context.url);\n        }\n\n        if (context.is404) {\n            status = 404;\n        }\n    }\n\n    return res.status(status).render('index', { markup: markup });\n});\n\n// start the server\nvar port = process.env.PORT || 3000;\nvar env = process.env.NODE_ENV || 'production';\nserver.listen(port, function (err) {\n    if (err) {\n        return console.error(err);\n    }\n    return console.info('\\n      Server running on http://localhost:' + port + ' [' + env + ']\\n      Universal rendering: ' + (process.env.UNIVERSAL ? 'enabled' : 'disabled') + '\\n    ');\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvc2VydmVyLmpzP2U2YTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBTZXJ2ZXIgfSBmcm9tICdodHRwJztcbmltcG9ydCBFeHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSAncmVhY3QtZG9tL3NlcnZlcic7XG5pbXBvcnQgeyBTdGF0aWNSb3V0ZXIgYXMgUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBBcHAgfSBmcm9tICcuL2NvbXBvbmVudHMvQXBwJztcblxuY29uc3QgYXBwID0gbmV3IEV4cHJlc3MoKTtcbmNvbnN0IHNlcnZlciA9IG5ldyBTZXJ2ZXIoYXBwKTtcblxuLy8gQ29uZWN0IHRvIERCXG52YXIgbW9uZ28gPSByZXF1aXJlKCcuL2FwaS9kYi5qcycpO1xudmFyIGRiID0gbW9uZ28uY29ubmVjdCgpO1xuXG4vLyB1c2UgZWpzIHRlbXBsYXRlc1xuYXBwLnNldCgndmlldyBlbmdpbmUnLCAnZWpzJyk7XG5hcHAuc2V0KCd2aWV3cycsIHBhdGguam9pbihfX2Rpcm5hbWUsICd2aWV3cycpKTtcblxuLy8gZGVmaW5lIHRoZSBmb2xkZXIgdGhhdCB3aWxsIGJlIHVzZWQgZm9yIHN0YXRpYyBhc3NldHNcbmFwcC51c2UoRXhwcmVzcy5zdGF0aWMocGF0aC5qb2luKF9fZGlybmFtZSwgJ3N0YXRpYycpKSk7XG5cbnZhciBib2R5UGFyc2VyID0gcmVxdWlyZSgnYm9keS1wYXJzZXInKTtcbmFwcC51c2UoIGJvZHlQYXJzZXIuanNvbigpICk7XG5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7XG4gICAgZXh0ZW5kZWQ6IHRydWVcbn0pKTsgXG5cbmFwcC5nZXQoJy9hcGkvcHVzaCcsIChyZXEsIHJlcykgPT4ge1xuICAgIC8qdmFyIG5hbWUgPSByZXEuYm9keS5uYW1lO1xuICAgIHZhciBlbWFpbCA9IHJlcS5ib2R5LmVtYWlsO1xuICAgIHZhciBwU29ydGlkYSA9IHJlcS5ib2R5LmVtYWlsO1xuICAgIHZhciBwID0gcmVxLmJvZHkuZW1haWw7Ki9cbiAgICAvLyBmZXIgZWwgcHVzaFxuICAgIG1vbmdvLmluc2VydChkYik7XG4gICAgcmVzLnJlZGlyZWN0KCcvJyk7XG59KTtcblxuLy8gdW5pdmVyc2FsIHJvdXRpbmcgYW5kIHJlbmRlcmluZ1xuYXBwLmdldCgnKicsIChyZXEsIHJlcykgPT4ge1xuICAgIGxldCBtYXJrdXAgPSAnJztcbiAgICBsZXQgc3RhdHVzID0gMjAwO1xuXG4gICAgaWYgKHByb2Nlc3MuZW52LlVOSVZFUlNBTCkge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0ge307XG4gICAgICAgIG1hcmt1cCA9IHJlbmRlclRvU3RyaW5nKFxuICAgICAgICAgICAgPFJvdXRlciBsb2NhdGlvbj17cmVxLnVybH0gY29udGV4dD17Y29udGV4dH0+XG4gICAgICAgICAgICAgICAgPEFwcCAvPlxuICAgICAgICAgICAgPC9Sb3V0ZXI+XG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gY29udGV4dC51cmwgd2lsbCBjb250YWluIHRoZSBVUkwgdG8gcmVkaXJlY3QgdG8gaWYgYSA8UmVkaXJlY3Q+IHdhcyB1c2VkXG4gICAgICAgIGlmIChjb250ZXh0LnVybCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcy5yZWRpcmVjdCgzMDIsIGNvbnRleHQudXJsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0LmlzNDA0KSB7XG4gICAgICAgICAgICBzdGF0dXMgPSA0MDQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzLnN0YXR1cyhzdGF0dXMpLnJlbmRlcignaW5kZXgnLCB7IG1hcmt1cCB9KTtcbn0pO1xuXG4vLyBzdGFydCB0aGUgc2VydmVyXG5jb25zdCBwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCAzMDAwO1xuY29uc3QgZW52ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgfHwgJ3Byb2R1Y3Rpb24nO1xuc2VydmVyLmxpc3Rlbihwb3J0LCBlcnIgPT4ge1xuICAgIGlmIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbnNvbGUuaW5mbyhcbiAgICAgICAgYFxuICAgICAgU2VydmVyIHJ1bm5pbmcgb24gaHR0cDovL2xvY2FsaG9zdDoke3BvcnR9IFske2Vudn1dXG4gICAgICBVbml2ZXJzYWwgcmVuZGVyaW5nOiAke3Byb2Nlc3MuZW52LlVOSVZFUlNBTCA/ICdlbmFibGVkJyA6ICdkaXNhYmxlZCd9XG4gICAgYFxuICAgICk7XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3NlcnZlci5qcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIj81YjJhIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJwYXRoXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImh0dHBcIj84ZTQ0Il0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImh0dHBcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJodHRwXCJcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcImV4cHJlc3NcIj9kMmQyIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJleHByZXNzXCJcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWRvbS9zZXJ2ZXJcIj80MWJkIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbS9zZXJ2ZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1kb20vc2VydmVyXCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.App = undefined;\n\nvar _react = __webpack_require__(/*! react */ 0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ 1);\n\nvar _Home = __webpack_require__(/*! ./Home */ 8);\n\nvar _Home2 = _interopRequireDefault(_Home);\n\nvar _View = __webpack_require__(/*! ./View */ 10);\n\nvar _View2 = _interopRequireDefault(_View);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar App = exports.App = function App() {\n    return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n            _reactRouterDom.Switch,\n            null,\n            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Home2.default }),\n            _react2.default.createElement(_reactRouterDom.Route, { path: '/view', component: _View2.default }),\n            _react2.default.createElement(_reactRouterDom.Route, { path: '/map', component: Map })\n        )\n    );\n};\n\nexports.default = App;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9BcHAuanM/NTdhYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGUsIFN3aXRjaCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IEhvbWUgZnJvbSAnLi9Ib21lJztcbmltcG9ydCBWaWV3IGZyb20gJy4vVmlldyc7XG5cbmV4cG9ydCBjb25zdCBBcHAgPSAoKSA9PiAoXG4gICAgPGRpdj5cbiAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL1wiIGNvbXBvbmVudD17SG9tZX0gLz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3ZpZXdcIiBjb21wb25lbnQ9e1ZpZXd9IC8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9tYXBcIiBjb21wb25lbnQ9e01hcH0gLz5cbiAgICAgICAgPC9Td2l0Y2g+XG4gICAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvQXBwLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBREE7QUFDQTtBQVNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!********************************!*\
  !*** ./src/components/Home.js ***!
  \********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.Home = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ 1);\n\nvar _reactPlacesAutocomplete = __webpack_require__(/*! react-places-autocomplete */ 9);\n\nvar _reactPlacesAutocomplete2 = _interopRequireDefault(_reactPlacesAutocomplete);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Home = exports.Home = function Home() {\n    return _react2.default.createElement(\n        'div',\n        { className: 'home' },\n        _react2.default.createElement(SetUp, null)\n    );\n};\n\nvar SetUp = function (_Component) {\n    _inherits(SetUp, _Component);\n\n    function SetUp(props) {\n        _classCallCheck(this, SetUp);\n\n        var _this = _possibleConstructorReturn(this, (SetUp.__proto__ || Object.getPrototypeOf(SetUp)).call(this, props));\n\n        _this.state = {\n            name: '',\n            addressStart: '',\n            addressEnd: '',\n            geoStart: {\n                lat: 0,\n                long: 0\n            },\n            geoEnd: {\n                lat: 0,\n                long: 0\n            }\n        };\n\n        _this.handleChangeStart = _this.handleChangeStart.bind(_this);\n        _this.handleChangeEnd = _this.handleChangeEnd.bind(_this);\n        return _this;\n    }\n\n    _createClass(SetUp, [{\n        key: 'handleChangeStart',\n        value: function handleChangeStart(address) {\n            var _this2 = this;\n\n            this.setState({ addressStart: address });\n            (0, _reactPlacesAutocomplete.geocodeByAddress)(this.state.addressStart).then(function (results) {\n                return (0, _reactPlacesAutocomplete.getLatLng)(results[0]);\n            }).then(function (latLng) {\n                return _this2.setState({ geoStart: latLng });\n            }).catch(function (error) {\n                return console.error('Error', error);\n            });\n        }\n    }, {\n        key: 'handleChangeEnd',\n        value: function handleChangeEnd(address) {\n            var _this3 = this;\n\n            this.setState({ addressEnd: address });\n            (0, _reactPlacesAutocomplete.geocodeByAddress)(this.state.addressEnd).then(function (results) {\n                return (0, _reactPlacesAutocomplete.getLatLng)(results[0]);\n            }).then(function (latLng) {\n                return _this3.setState({ geoEnd: latLng });\n            }).catch(function (error) {\n                return console.error('Error', error);\n            });\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                { className: 'setUp' },\n                _react2.default.createElement(Address, {\n                    address: this.state.addressStart,\n                    onFormChange: this.handleChangeStart\n                }),\n                _react2.default.createElement(Address, {\n                    address: this.state.addressEnd,\n                    onFormChange: this.handleChangeEnd\n                })\n            );\n        }\n    }]);\n\n    return SetUp;\n}(_react.Component);\n\nvar Address = function (_Component2) {\n    _inherits(Address, _Component2);\n\n    function Address(props) {\n        _classCallCheck(this, Address);\n\n        var _this4 = _possibleConstructorReturn(this, (Address.__proto__ || Object.getPrototypeOf(Address)).call(this, props));\n\n        _this4.state = { address: props.address };\n        _this4.onChange = function (address) {\n            return _this4.setState({ address: address });\n        };\n        _this4.handleFormSubmit = _this4.handleFormSubmit.bind(_this4);\n        return _this4;\n    }\n\n    _createClass(Address, [{\n        key: 'handleFormSubmit',\n        value: function handleFormSubmit() {\n            this.props.onFormChange(this.state.address);\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var inputProps = {\n                value: this.state.address,\n                onChange: this.onChange\n            };\n\n            var myStyles = {\n                root: { position: 'absolute' },\n                input: { width: '100%' },\n                autocompleteContainer: { backgroundColor: 'green' },\n                autocompleteItem: { color: 'black' },\n                autocompleteItemActive: { color: 'blue' }\n            };\n\n            var hide = {\n                position: 'absolute',\n                left: '-9999px',\n                width: '1px',\n                height: '1px'\n            };\n\n            return _react2.default.createElement(\n                'form',\n                { onSubmit: this.handleFormSubmit },\n                _react2.default.createElement(_reactPlacesAutocomplete2.default, { inputProps: inputProps }),\n                _react2.default.createElement('input', { type: 'submit', style: hide, tabIndex: '-1' })\n            );\n        }\n    }]);\n\n    return Address;\n}(_react.Component);\n\nexports.default = Home;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9Ib21lLmpzPzBhODgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBQbGFjZXNBdXRvY29tcGxldGUsIHtcbiAgICBnZW9jb2RlQnlBZGRyZXNzLFxuICAgIGdldExhdExuZyxcbn0gZnJvbSAncmVhY3QtcGxhY2VzLWF1dG9jb21wbGV0ZSc7XG5cbmV4cG9ydCBjb25zdCBIb21lID0gKCkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaG9tZVwiPlxuICAgICAgICA8U2V0VXAgLz5cbiAgICA8L2Rpdj5cbik7XG5cbmNsYXNzIFNldFVwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgIGFkZHJlc3NTdGFydDogJycsXG4gICAgICAgICAgICBhZGRyZXNzRW5kOiAnJyxcbiAgICAgICAgICAgIGdlb1N0YXJ0OiB7XG4gICAgICAgICAgICAgICAgbGF0OiAwLFxuICAgICAgICAgICAgICAgIGxvbmc6IDAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2VvRW5kOiB7XG4gICAgICAgICAgICAgICAgbGF0OiAwLFxuICAgICAgICAgICAgICAgIGxvbmc6IDAsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlU3RhcnQgPSB0aGlzLmhhbmRsZUNoYW5nZVN0YXJ0LmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlRW5kID0gdGhpcy5oYW5kbGVDaGFuZ2VFbmQuYmluZCh0aGlzKTtcbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2VTdGFydChhZGRyZXNzKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhZGRyZXNzU3RhcnQ6IGFkZHJlc3MgfSk7XG4gICAgICAgIGdlb2NvZGVCeUFkZHJlc3ModGhpcy5zdGF0ZS5hZGRyZXNzU3RhcnQpXG4gICAgICAgICAgICAudGhlbihyZXN1bHRzID0+IGdldExhdExuZyhyZXN1bHRzWzBdKSlcbiAgICAgICAgICAgIC50aGVuKGxhdExuZyA9PiB0aGlzLnNldFN0YXRlKHsgZ2VvU3RhcnQ6IGxhdExuZyB9KSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKCdFcnJvcicsIGVycm9yKSk7XG4gICAgfVxuXG4gICAgaGFuZGxlQ2hhbmdlRW5kKGFkZHJlc3MpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFkZHJlc3NFbmQ6IGFkZHJlc3MgfSk7XG4gICAgICAgIGdlb2NvZGVCeUFkZHJlc3ModGhpcy5zdGF0ZS5hZGRyZXNzRW5kKVxuICAgICAgICAgICAgLnRoZW4ocmVzdWx0cyA9PiBnZXRMYXRMbmcocmVzdWx0c1swXSkpXG4gICAgICAgICAgICAudGhlbihsYXRMbmcgPT4gdGhpcy5zZXRTdGF0ZSh7IGdlb0VuZDogbGF0TG5nIH0pKVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yJywgZXJyb3IpKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldFVwXCI+XG4gICAgICAgICAgICAgICAgPEFkZHJlc3NcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzcz17dGhpcy5zdGF0ZS5hZGRyZXNzU3RhcnR9XG4gICAgICAgICAgICAgICAgICAgIG9uRm9ybUNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2VTdGFydH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxBZGRyZXNzXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3M9e3RoaXMuc3RhdGUuYWRkcmVzc0VuZH1cbiAgICAgICAgICAgICAgICAgICAgb25Gb3JtQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZUVuZH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5jbGFzcyBBZGRyZXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7IGFkZHJlc3M6IHByb3BzLmFkZHJlc3MgfTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSA9IGFkZHJlc3MgPT4gdGhpcy5zZXRTdGF0ZSh7IGFkZHJlc3MgfSk7XG4gICAgICAgIHRoaXMuaGFuZGxlRm9ybVN1Ym1pdCA9IHRoaXMuaGFuZGxlRm9ybVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGhhbmRsZUZvcm1TdWJtaXQoKSB7XG4gICAgICAgIHRoaXMucHJvcHMub25Gb3JtQ2hhbmdlKHRoaXMuc3RhdGUuYWRkcmVzcyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBpbnB1dFByb3BzID0ge1xuICAgICAgICAgICAgdmFsdWU6IHRoaXMuc3RhdGUuYWRkcmVzcyxcbiAgICAgICAgICAgIG9uQ2hhbmdlOiB0aGlzLm9uQ2hhbmdlLFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IG15U3R5bGVzID0ge1xuICAgICAgICAgICAgcm9vdDogeyBwb3NpdGlvbjogJ2Fic29sdXRlJyB9LFxuICAgICAgICAgICAgaW5wdXQ6IHsgd2lkdGg6ICcxMDAlJyB9LFxuICAgICAgICAgICAgYXV0b2NvbXBsZXRlQ29udGFpbmVyOiB7IGJhY2tncm91bmRDb2xvcjogJ2dyZWVuJyB9LFxuICAgICAgICAgICAgYXV0b2NvbXBsZXRlSXRlbTogeyBjb2xvcjogJ2JsYWNrJyB9LFxuICAgICAgICAgICAgYXV0b2NvbXBsZXRlSXRlbUFjdGl2ZTogeyBjb2xvcjogJ2JsdWUnIH0sXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgaGlkZSA9IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgbGVmdDogJy05OTk5cHgnLFxuICAgICAgICAgICAgd2lkdGg6ICcxcHgnLFxuICAgICAgICAgICAgaGVpZ2h0OiAnMXB4JyxcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlRm9ybVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgPFBsYWNlc0F1dG9jb21wbGV0ZSBpbnB1dFByb3BzPXtpbnB1dFByb3BzfSAvPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgc3R5bGU9e2hpZGV9IHRhYkluZGV4PVwiLTFcIiAvPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9Ib21lLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFJQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFEQTtBQUNBO0FBS0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFSQTtBQUNBO0FBYUE7QUFDQTtBQWpCQTtBQWtCQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBTEE7QUFXQTs7Ozs7O0FBR0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBSkE7QUFLQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUtBOzs7Ozs7QUFHQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!********************************************!*\
  !*** external "react-places-autocomplete" ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-places-autocomplete\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXBsYWNlcy1hdXRvY29tcGxldGVcIj84NWJiIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXBsYWNlcy1hdXRvY29tcGxldGVcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdC1wbGFjZXMtYXV0b2NvbXBsZXRlXCJcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
/*!********************************!*\
  !*** ./src/components/View.js ***!
  \********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.View = undefined;\n\nvar _react = __webpack_require__(/*! react */ 0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ 1);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar View = exports.View = function View() {\n  return _react2.default.createElement(\n    _reactRouterDom.Link,\n    { to: '/' },\n    'Hey'\n  );\n};\n\nexports.default = View;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVmlldy5qcz85NTlmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmV4cG9ydCBjb25zdCBWaWV3ID0gKCkgPT4gPExpbmsgdG89XCIvXCI+SGV5PC9MaW5rPjtcblxuZXhwb3J0IGRlZmF1bHQgVmlldztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9WaWV3LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/*!***********************!*\
  !*** ./src/api/db.js ***!
  \***********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar MongoClient = __webpack_require__(/*! mongodb */ 12).MongoClient;\nvar assert = __webpack_require__(/*! assert */ 13);\n\nvar url = 'mongodb://localhost:27017/connected-cars';\n\nmodule.exports = {\n    search: function search(db) {\n        var query = { address: \"Barcelona\" };\n        db.collection(\"connections\").find(query).toArray(function (err, result) {\n            if (err) throw err;\n            return result;\n        });\n    },\n    insert: function insert(db) {\n        var myobj = { name: \"Berni\", address: \"Barcelona\" };\n        db.collection(\"connections\").insertOne(myobj, function (err, res) {\n            if (err) throw err;\n            console.log(\"1 document inserted\");\n        });\n    },\n    connect: function connect() {\n        MongoClient.connect(url, function (err, db) {\n            if (err) {\n                console.log('Unable to connect to the mongoDB server. Error:', err);\n            } else {\n                assert.equal(null, err);\n                console.log(\"Connected successfully to server\");\n                return db;\n            }\n        });\n    }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2FwaS9kYi5qcz9kZmI5Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBNb25nb0NsaWVudCA9IHJlcXVpcmUoJ21vbmdvZGInKS5Nb25nb0NsaWVudDtcbnZhciBhc3NlcnQgPSByZXF1aXJlKCdhc3NlcnQnKTtcblxudmFyIHVybCA9ICdtb25nb2RiOi8vbG9jYWxob3N0OjI3MDE3L2Nvbm5lY3RlZC1jYXJzJztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgc2VhcmNoOiBmdW5jdGlvbiAoZGIpIHtcbiAgICAgICAgdmFyIHF1ZXJ5ID0geyBhZGRyZXNzOiBcIkJhcmNlbG9uYVwiIH07XG4gICAgICAgIGRiLmNvbGxlY3Rpb24oXCJjb25uZWN0aW9uc1wiKS5maW5kKHF1ZXJ5KS50b0FycmF5KGZ1bmN0aW9uKGVyciwgcmVzdWx0KSB7XG4gICAgICAgICAgaWYgKGVycikgdGhyb3cgZXJyO1xuICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgaW5zZXJ0OiBmdW5jdGlvbiAoZGIpIHtcbiAgICAgICAgdmFyIG15b2JqID0geyBuYW1lOiBcIkJlcm5pXCIsIGFkZHJlc3M6IFwiQmFyY2Vsb25hXCIgfTtcbiAgICAgICAgZGIuY29sbGVjdGlvbihcImNvbm5lY3Rpb25zXCIpLmluc2VydE9uZShteW9iaiwgZnVuY3Rpb24oZXJyLCByZXMpIHtcbiAgICAgICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XG4gICAgICAgICAgY29uc29sZS5sb2coXCIxIGRvY3VtZW50IGluc2VydGVkXCIpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGNvbm5lY3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgTW9uZ29DbGllbnQuY29ubmVjdCh1cmwsIGZ1bmN0aW9uKGVyciwgZGIpIHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnVW5hYmxlIHRvIGNvbm5lY3QgdG8gdGhlIG1vbmdvREIgc2VydmVyLiBFcnJvcjonLCBlcnIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBhc3NlcnQuZXF1YWwobnVsbCwgZXJyKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvbm5lY3RlZCBzdWNjZXNzZnVsbHkgdG8gc2VydmVyXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvYXBpL2RiLmpzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBekJBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCI/YjQxNyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb2RiXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibW9uZ29kYlwiXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = require(\"assert\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhc3NlcnRcIj8xZTQxIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFzc2VydFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFzc2VydFwiXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///13\n");

/***/ }),
/* 14 */
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiPzQ2NTciXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///14\n");

/***/ })
/******/ ]);