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
eval("\n\nvar _path = __webpack_require__(/*! path */ 3);\n\nvar _path2 = _interopRequireDefault(_path);\n\nvar _http = __webpack_require__(/*! http */ 4);\n\nvar _express = __webpack_require__(/*! express */ 5);\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _react = __webpack_require__(/*! react */ 0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ 6);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ 1);\n\nvar _App = __webpack_require__(/*! ./components/App */ 7);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = new _express2.default();\nvar server = new _http.Server(app);\n\n// Conect to DB\nvar mongo = __webpack_require__(/*! ./api/db.js */ 12);\n\n// use ejs templates\napp.set('view engine', 'ejs');\napp.set('views', _path2.default.join(__dirname, 'views'));\n\n// define the folder that will be used for static assets\napp.use(_express2.default.static(_path2.default.join(__dirname, 'static')));\n\nvar bodyParser = __webpack_require__(/*! body-parser */ 15);\napp.use(bodyParser.json());\napp.use(bodyParser.urlencoded({\n    extended: true\n}));\n\napp.get('/api/push/:name/:email/:outLat,:outLon/:inLat,:inLon', function (req, res) {\n    var start = { startLat: Number(req.params.outLat), startLon: Number(req.params.outLon) };\n    var end = { endLat: Number(req.params.inLat), endLon: Number(req.params.inLon) };\n    mongo.push(req.params.name, req.params.email, start, end);\n    res.redirect('/');\n});\n\napp.get('/api/search/:outLat,:outLon/:inLat,:inLon', function (req, res) {\n    var start = { startLat: Number(req.params.outLat), startLon: Number(req.params.outLon) };\n    var end = { endLat: Number(req.params.inLat), endLon: Number(req.params.inLon) };\n    mongo.search(start, end, function (err, result) {\n        if (err) {\n            console.log('Failed');\n            res.redirect('/');\n        } else {\n            res.send('missing');\n            console.log(result);\n            // veure si hi ha algo al radius\n            // res.send('found');\n        }\n    });\n});\n\napp.get('/api/push', function (req, res) {\n    /*var name = req.body.name;\n    var email = req.body.email;\n    var pSortida = req.body.email;\n    var p = req.body.email;*/\n    // fer el push\n    mongo.insert();\n    res.redirect('/');\n});\n\n// universal routing and rendering\napp.get('*', function (req, res) {\n    var markup = '';\n    var status = 200;\n\n    if (process.env.UNIVERSAL) {\n        var context = {};\n        markup = (0, _server.renderToString)(_react2.default.createElement(\n            _reactRouterDom.StaticRouter,\n            { location: req.url, context: context },\n            _react2.default.createElement(_App.App, null)\n        ));\n\n        // context.url will contain the URL to redirect to if a <Redirect> was used\n        if (context.url) {\n            return res.redirect(302, context.url);\n        }\n\n        if (context.is404) {\n            status = 404;\n        }\n    }\n\n    return res.status(status).render('index', { markup: markup });\n});\n\n// start the server\nvar port = process.env.PORT || 3000;\nvar env = process.env.NODE_ENV || 'production';\nserver.listen(port, function (err) {\n    if (err) {\n        return console.error(err);\n    }\n    return console.info('\\n      Server running on http://localhost:' + port + ' [' + env + ']\\n      Universal rendering: ' + (process.env.UNIVERSAL ? 'enabled' : 'disabled') + '\\n    ');\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvc2VydmVyLmpzP2U2YTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBTZXJ2ZXIgfSBmcm9tICdodHRwJztcbmltcG9ydCBFeHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSAncmVhY3QtZG9tL3NlcnZlcic7XG5pbXBvcnQgeyBTdGF0aWNSb3V0ZXIgYXMgUm91dGVyIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBBcHAgfSBmcm9tICcuL2NvbXBvbmVudHMvQXBwJztcblxuY29uc3QgYXBwID0gbmV3IEV4cHJlc3MoKTtcbmNvbnN0IHNlcnZlciA9IG5ldyBTZXJ2ZXIoYXBwKTtcblxuLy8gQ29uZWN0IHRvIERCXG52YXIgbW9uZ28gPSByZXF1aXJlKCcuL2FwaS9kYi5qcycpO1xuXG4vLyB1c2UgZWpzIHRlbXBsYXRlc1xuYXBwLnNldCgndmlldyBlbmdpbmUnLCAnZWpzJyk7XG5hcHAuc2V0KCd2aWV3cycsIHBhdGguam9pbihfX2Rpcm5hbWUsICd2aWV3cycpKTtcblxuLy8gZGVmaW5lIHRoZSBmb2xkZXIgdGhhdCB3aWxsIGJlIHVzZWQgZm9yIHN0YXRpYyBhc3NldHNcbmFwcC51c2UoRXhwcmVzcy5zdGF0aWMocGF0aC5qb2luKF9fZGlybmFtZSwgJ3N0YXRpYycpKSk7XG5cbnZhciBib2R5UGFyc2VyID0gcmVxdWlyZSgnYm9keS1wYXJzZXInKTtcbmFwcC51c2UoIGJvZHlQYXJzZXIuanNvbigpICk7XG5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7XG4gICAgZXh0ZW5kZWQ6IHRydWVcbn0pKTsgXG5cbmFwcC5nZXQoJy9hcGkvcHVzaC86bmFtZS86ZW1haWwvOm91dExhdCw6b3V0TG9uLzppbkxhdCw6aW5Mb24nLCAocmVxLCByZXMpID0+IHtcbiAgICB2YXIgc3RhcnQgPSB7IHN0YXJ0TGF0OiBOdW1iZXIocmVxLnBhcmFtcy5vdXRMYXQpLCBzdGFydExvbjogTnVtYmVyKHJlcS5wYXJhbXMub3V0TG9uKSB9O1xuICAgIHZhciBlbmQgPSB7IGVuZExhdDogTnVtYmVyKHJlcS5wYXJhbXMuaW5MYXQpLCBlbmRMb246IE51bWJlcihyZXEucGFyYW1zLmluTG9uKSB9O1xuICAgIG1vbmdvLnB1c2gocmVxLnBhcmFtcy5uYW1lLCByZXEucGFyYW1zLmVtYWlsLCBzdGFydCwgZW5kKTtcbiAgICByZXMucmVkaXJlY3QoJy8nKTtcbn0pO1xuXG5hcHAuZ2V0KCcvYXBpL3NlYXJjaC86b3V0TGF0LDpvdXRMb24vOmluTGF0LDppbkxvbicsIChyZXEsIHJlcykgPT4ge1xuICAgIHZhciBzdGFydCA9IHsgc3RhcnRMYXQ6IE51bWJlcihyZXEucGFyYW1zLm91dExhdCksIHN0YXJ0TG9uOiBOdW1iZXIocmVxLnBhcmFtcy5vdXRMb24pIH07XG4gICAgdmFyIGVuZCA9IHsgZW5kTGF0OiBOdW1iZXIocmVxLnBhcmFtcy5pbkxhdCksIGVuZExvbjogTnVtYmVyKHJlcS5wYXJhbXMuaW5Mb24pIH07XG4gICAgbW9uZ28uc2VhcmNoKHN0YXJ0LCBlbmQsIGZ1bmN0aW9uKGVyciwgcmVzdWx0KSB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdGYWlsZWQnKTtcbiAgICAgICAgICAgIHJlcy5yZWRpcmVjdCgnLycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzLnNlbmQoJ21pc3NpbmcnKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgICAgICAgICAvLyB2ZXVyZSBzaSBoaSBoYSBhbGdvIGFsIHJhZGl1c1xuICAgICAgICAgICAgLy8gcmVzLnNlbmQoJ2ZvdW5kJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuXG5hcHAuZ2V0KCcvYXBpL3B1c2gnLCAocmVxLCByZXMpID0+IHtcbiAgICAvKnZhciBuYW1lID0gcmVxLmJvZHkubmFtZTtcbiAgICB2YXIgZW1haWwgPSByZXEuYm9keS5lbWFpbDtcbiAgICB2YXIgcFNvcnRpZGEgPSByZXEuYm9keS5lbWFpbDtcbiAgICB2YXIgcCA9IHJlcS5ib2R5LmVtYWlsOyovXG4gICAgLy8gZmVyIGVsIHB1c2hcbiAgICBtb25nby5pbnNlcnQoKTtcbiAgICByZXMucmVkaXJlY3QoJy8nKTtcbn0pO1xuXG4vLyB1bml2ZXJzYWwgcm91dGluZyBhbmQgcmVuZGVyaW5nXG5hcHAuZ2V0KCcqJywgKHJlcSwgcmVzKSA9PiB7XG4gICAgbGV0IG1hcmt1cCA9ICcnO1xuICAgIGxldCBzdGF0dXMgPSAyMDA7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuVU5JVkVSU0FMKSB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSB7fTtcbiAgICAgICAgbWFya3VwID0gcmVuZGVyVG9TdHJpbmcoXG4gICAgICAgICAgICA8Um91dGVyIGxvY2F0aW9uPXtyZXEudXJsfSBjb250ZXh0PXtjb250ZXh0fT5cbiAgICAgICAgICAgICAgICA8QXBwIC8+XG4gICAgICAgICAgICA8L1JvdXRlcj5cbiAgICAgICAgKTtcblxuICAgICAgICAvLyBjb250ZXh0LnVybCB3aWxsIGNvbnRhaW4gdGhlIFVSTCB0byByZWRpcmVjdCB0byBpZiBhIDxSZWRpcmVjdD4gd2FzIHVzZWRcbiAgICAgICAgaWYgKGNvbnRleHQudXJsKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzLnJlZGlyZWN0KDMwMiwgY29udGV4dC51cmwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQuaXM0MDQpIHtcbiAgICAgICAgICAgIHN0YXR1cyA9IDQwNDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXMuc3RhdHVzKHN0YXR1cykucmVuZGVyKCdpbmRleCcsIHsgbWFya3VwIH0pO1xufSk7XG5cbi8vIHN0YXJ0IHRoZSBzZXJ2ZXJcbmNvbnN0IHBvcnQgPSBwcm9jZXNzLmVudi5QT1JUIHx8IDMwMDA7XG5jb25zdCBlbnYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViB8fCAncHJvZHVjdGlvbic7XG5zZXJ2ZXIubGlzdGVuKHBvcnQsIGVyciA9PiB7XG4gICAgaWYgKGVycikge1xuICAgICAgICByZXR1cm4gY29uc29sZS5lcnJvcihlcnIpO1xuICAgIH1cbiAgICByZXR1cm4gY29uc29sZS5pbmZvKFxuICAgICAgICBgXG4gICAgICBTZXJ2ZXIgcnVubmluZyBvbiBodHRwOi8vbG9jYWxob3N0OiR7cG9ydH0gWyR7ZW52fV1cbiAgICAgIFVuaXZlcnNhbCByZW5kZXJpbmc6ICR7cHJvY2Vzcy5lbnYuVU5JVkVSU0FMID8gJ2VuYWJsZWQnIDogJ2Rpc2FibGVkJ31cbiAgICBgXG4gICAgKTtcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvc2VydmVyLmpzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.App = undefined;\n\nvar _react = __webpack_require__(/*! react */ 0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ 1);\n\nvar _Home = __webpack_require__(/*! ./Home */ 8);\n\nvar _Home2 = _interopRequireDefault(_Home);\n\nvar _View = __webpack_require__(/*! ./View */ 11);\n\nvar _View2 = _interopRequireDefault(_View);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar App = exports.App = function App() {\n    return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n            _reactRouterDom.Switch,\n            null,\n            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Home2.default }),\n            _react2.default.createElement(_reactRouterDom.Route, { path: '/view', component: _View2.default }),\n            _react2.default.createElement(_reactRouterDom.Route, { path: '/map', component: Map })\n        )\n    );\n};\n\nexports.default = App;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9BcHAuanM/NTdhYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGUsIFN3aXRjaCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IEhvbWUgZnJvbSAnLi9Ib21lJztcbmltcG9ydCBWaWV3IGZyb20gJy4vVmlldyc7XG5cbmV4cG9ydCBjb25zdCBBcHAgPSAoKSA9PiAoXG4gICAgPGRpdj5cbiAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL1wiIGNvbXBvbmVudD17SG9tZX0gLz5cbiAgICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3ZpZXdcIiBjb21wb25lbnQ9e1ZpZXd9IC8+XG4gICAgICAgICAgICA8Um91dGUgcGF0aD1cIi9tYXBcIiBjb21wb25lbnQ9e01hcH0gLz5cbiAgICAgICAgPC9Td2l0Y2g+XG4gICAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2NvbXBvbmVudHMvQXBwLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQURBO0FBREE7QUFDQTtBQVNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!********************************!*\
  !*** ./src/components/Home.js ***!
  \********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.Home = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ 1);\n\nvar _reactPlacesAutocomplete = __webpack_require__(/*! react-places-autocomplete */ 9);\n\nvar _reactPlacesAutocomplete2 = _interopRequireDefault(_reactPlacesAutocomplete);\n\nvar _axios = __webpack_require__(/*! axios */ 10);\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Home = exports.Home = function Home() {\n    return _react2.default.createElement(\n        'div',\n        { className: 'home' },\n        _react2.default.createElement(SetUp, null)\n    );\n};\n\nvar SetUp = function (_Component) {\n    _inherits(SetUp, _Component);\n\n    function SetUp(props) {\n        _classCallCheck(this, SetUp);\n\n        var _this = _possibleConstructorReturn(this, (SetUp.__proto__ || Object.getPrototypeOf(SetUp)).call(this, props));\n\n        _this.state = {\n            name: '',\n            addressStart: '',\n            addressEnd: '',\n            geoStart: {\n                lat: 0,\n                lng: 0\n            },\n            geoEnd: {\n                lat: 0,\n                lng: 0\n            }\n        };\n\n        _this.handleChangeStart = _this.handleChangeStart.bind(_this);\n        _this.handleChangeEnd = _this.handleChangeEnd.bind(_this);\n        _this.handleGo = _this.handleGo.bind(_this);\n        return _this;\n    }\n\n    _createClass(SetUp, [{\n        key: 'handleChangeStart',\n        value: function handleChangeStart(address) {\n            var _this2 = this;\n\n            this.setState({ addressStart: address });\n            (0, _reactPlacesAutocomplete.geocodeByAddress)(this.state.addressStart).then(function (results) {\n                return (0, _reactPlacesAutocomplete.getLatLng)(results[0]);\n            }).then(function (geoStart) {\n                return _this2.setState({ geoStart: geoStart });\n            }).catch(function (error) {\n                return console.error('Error', error);\n            });\n        }\n    }, {\n        key: 'handleChangeEnd',\n        value: function handleChangeEnd(address) {\n            var _this3 = this;\n\n            this.setState({ addressEnd: address });\n            (0, _reactPlacesAutocomplete.geocodeByAddress)(this.state.addressEnd).then(function (results) {\n                return (0, _reactPlacesAutocomplete.getLatLng)(results[0]);\n            }).then(function (geoEnd) {\n                return _this3.setState({ geoEnd: geoEnd });\n            }).catch(function (error) {\n                return console.error('Error', error);\n            });\n        }\n    }, {\n        key: 'handleGo',\n        value: function handleGo() {\n            if (this.state.geoStart.lat == 0 || this.state.geoStart.long == 0 || this.state.geoEnd.lat == 0 || this.state.geoEnd.long == 0) console.log('Missing params');else {\n                var url = '/api/search/' + this.state.geoStart.lat + ',' + this.state.geoStart.lng + '/' + this.state.geoEnd.lat + ',' + this.state.geoEnd.lng;\n                _axios2.default.get(url).then(function (response) {\n                    console.log(response);\n                }).catch(function (error) {\n                    console.log(error);\n                });\n            }\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            return _react2.default.createElement(\n                'div',\n                { className: 'setUp' },\n                _react2.default.createElement(Address, {\n                    address: this.state.addressStart,\n                    onFormChange: this.handleChangeStart\n                }),\n                _react2.default.createElement(Address, {\n                    address: this.state.addressEnd,\n                    onFormChange: this.handleChangeEnd\n                }),\n                _react2.default.createElement(\n                    'button',\n                    { onClick: this.handleGo },\n                    ' GO '\n                )\n            );\n        }\n    }]);\n\n    return SetUp;\n}(_react.Component);\n\nvar Address = function (_Component2) {\n    _inherits(Address, _Component2);\n\n    function Address(props) {\n        _classCallCheck(this, Address);\n\n        var _this4 = _possibleConstructorReturn(this, (Address.__proto__ || Object.getPrototypeOf(Address)).call(this, props));\n\n        _this4.state = { address: props.address };\n        _this4.onChange = _this4.onChange.bind(_this4);\n        _this4.handleFormSubmit = _this4.handleFormSubmit.bind(_this4);\n        return _this4;\n    }\n\n    _createClass(Address, [{\n        key: 'onChange',\n        value: function onChange(address) {\n            this.setState({ address: address });\n            this.props.onFormChange(this.state.address);\n        }\n    }, {\n        key: 'handleFormSubmit',\n        value: function handleFormSubmit(event) {\n            event.preventDefault();\n            this.props.onFormChange(this.state.address);\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            var _this5 = this;\n\n            var inputProps = {\n                value: this.state.address,\n                onChange: this.onChange\n            };\n\n            var myStyles = {\n                root: { position: 'absolute' },\n                input: { width: '100%' },\n                autocompleteContainer: { backgroundColor: 'green' },\n                autocompleteItem: { color: 'black' },\n                autocompleteItemActive: { color: 'blue' }\n            };\n\n            var hide = {\n                position: 'absolute',\n                left: '-9999px',\n                width: '1px',\n                height: '1px'\n            };\n\n            return _react2.default.createElement(\n                'form',\n                { onSubmit: this.handleFormSubmit },\n                _react2.default.createElement(_reactPlacesAutocomplete2.default, {\n                    inputProps: inputProps,\n                    onEnterKeyDown: function onEnterKeyDown() {\n                        return _this5.props.onFormChange(_this5.state.address);\n                    }\n                }),\n                _react2.default.createElement('input', { type: 'submit', style: hide, tabIndex: '-1' })\n            );\n        }\n    }]);\n\n    return Address;\n}(_react.Component);\n\nexports.default = Home;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiOC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvY29tcG9uZW50cy9Ib21lLmpzPzBhODgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBQbGFjZXNBdXRvY29tcGxldGUsIHtcbiAgICBnZW9jb2RlQnlBZGRyZXNzLFxuICAgIGdldExhdExuZyxcbn0gZnJvbSAncmVhY3QtcGxhY2VzLWF1dG9jb21wbGV0ZSc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5leHBvcnQgY29uc3QgSG9tZSA9ICgpID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWVcIj5cbiAgICAgICAgPFNldFVwIC8+XG4gICAgPC9kaXY+XG4pO1xuXG5jbGFzcyBTZXRVcCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICBhZGRyZXNzU3RhcnQ6ICcnLFxuICAgICAgICAgICAgYWRkcmVzc0VuZDogJycsXG4gICAgICAgICAgICBnZW9TdGFydDoge1xuICAgICAgICAgICAgICAgIGxhdDogMCxcbiAgICAgICAgICAgICAgICBsbmc6IDAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2VvRW5kOiB7XG4gICAgICAgICAgICAgICAgbGF0OiAwLFxuICAgICAgICAgICAgICAgIGxuZzogMCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2VTdGFydCA9IHRoaXMuaGFuZGxlQ2hhbmdlU3RhcnQuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2VFbmQgPSB0aGlzLmhhbmRsZUNoYW5nZUVuZC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZUdvID0gdGhpcy5oYW5kbGVHby5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIGhhbmRsZUNoYW5nZVN0YXJ0KGFkZHJlc3MpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFkZHJlc3NTdGFydDogYWRkcmVzcyB9KTtcbiAgICAgICAgZ2VvY29kZUJ5QWRkcmVzcyh0aGlzLnN0YXRlLmFkZHJlc3NTdGFydClcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdHMgPT4gZ2V0TGF0TG5nKHJlc3VsdHNbMF0pKVxuICAgICAgICAgICAgLnRoZW4oZ2VvU3RhcnQgPT4gdGhpcy5zZXRTdGF0ZSh7IGdlb1N0YXJ0IH0pKVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yJywgZXJyb3IpKTtcbiAgICB9XG5cbiAgICBoYW5kbGVDaGFuZ2VFbmQoYWRkcmVzcykge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgYWRkcmVzc0VuZDogYWRkcmVzcyB9KTtcbiAgICAgICAgZ2VvY29kZUJ5QWRkcmVzcyh0aGlzLnN0YXRlLmFkZHJlc3NFbmQpXG4gICAgICAgICAgICAudGhlbihyZXN1bHRzID0+IGdldExhdExuZyhyZXN1bHRzWzBdKSlcbiAgICAgICAgICAgIC50aGVuKGdlb0VuZCA9PiB0aGlzLnNldFN0YXRlKHsgZ2VvRW5kIH0pKVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yJywgZXJyb3IpKTtcbiAgICB9XG5cbiAgICBoYW5kbGVHbygpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5nZW9TdGFydC5sYXQgPT0gMCB8fFxuICAgICAgICAgICAgdGhpcy5zdGF0ZS5nZW9TdGFydC5sb25nID09IDAgfHxcbiAgICAgICAgICAgIHRoaXMuc3RhdGUuZ2VvRW5kLmxhdCA9PSAwIHx8XG4gICAgICAgICAgICB0aGlzLnN0YXRlLmdlb0VuZC5sb25nID09IDBcbiAgICAgICAgKVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ01pc3NpbmcgcGFyYW1zJyk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdXJsID0gYC9hcGkvc2VhcmNoLyR7dGhpcy5zdGF0ZS5nZW9TdGFydC5sYXR9LCR7dGhpcy5zdGF0ZVxuICAgICAgICAgICAgICAgIC5nZW9TdGFydC5sbmd9LyR7dGhpcy5zdGF0ZS5nZW9FbmQubGF0fSwke3RoaXMuc3RhdGUuZ2VvRW5kXG4gICAgICAgICAgICAgICAgLmxuZ31gO1xuICAgICAgICAgICAgYXhpb3NcbiAgICAgICAgICAgICAgICAuZ2V0KHVybClcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXRVcFwiPlxuICAgICAgICAgICAgICAgIDxBZGRyZXNzXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3M9e3RoaXMuc3RhdGUuYWRkcmVzc1N0YXJ0fVxuICAgICAgICAgICAgICAgICAgICBvbkZvcm1DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlU3RhcnR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8QWRkcmVzc1xuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzPXt0aGlzLnN0YXRlLmFkZHJlc3NFbmR9XG4gICAgICAgICAgICAgICAgICAgIG9uRm9ybUNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2VFbmR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlR299PiBHTyA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY2xhc3MgQWRkcmVzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0geyBhZGRyZXNzOiBwcm9wcy5hZGRyZXNzIH07XG4gICAgICAgIHRoaXMub25DaGFuZ2UgPSB0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlRm9ybVN1Ym1pdCA9IHRoaXMuaGFuZGxlRm9ybVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlKGFkZHJlc3MpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFkZHJlc3MgfSk7XG4gICAgICAgIHRoaXMucHJvcHMub25Gb3JtQ2hhbmdlKHRoaXMuc3RhdGUuYWRkcmVzcyk7XG4gICAgfVxuXG4gICAgaGFuZGxlRm9ybVN1Ym1pdChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLnByb3BzLm9uRm9ybUNoYW5nZSh0aGlzLnN0YXRlLmFkZHJlc3MpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgaW5wdXRQcm9wcyA9IHtcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLnN0YXRlLmFkZHJlc3MsXG4gICAgICAgICAgICBvbkNoYW5nZTogdGhpcy5vbkNoYW5nZSxcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBteVN0eWxlcyA9IHtcbiAgICAgICAgICAgIHJvb3Q6IHsgcG9zaXRpb246ICdhYnNvbHV0ZScgfSxcbiAgICAgICAgICAgIGlucHV0OiB7IHdpZHRoOiAnMTAwJScgfSxcbiAgICAgICAgICAgIGF1dG9jb21wbGV0ZUNvbnRhaW5lcjogeyBiYWNrZ3JvdW5kQ29sb3I6ICdncmVlbicgfSxcbiAgICAgICAgICAgIGF1dG9jb21wbGV0ZUl0ZW06IHsgY29sb3I6ICdibGFjaycgfSxcbiAgICAgICAgICAgIGF1dG9jb21wbGV0ZUl0ZW1BY3RpdmU6IHsgY29sb3I6ICdibHVlJyB9LFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGhpZGUgPSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIGxlZnQ6ICctOTk5OXB4JyxcbiAgICAgICAgICAgIHdpZHRoOiAnMXB4JyxcbiAgICAgICAgICAgIGhlaWdodDogJzFweCcsXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZUZvcm1TdWJtaXR9PlxuICAgICAgICAgICAgICAgIDxQbGFjZXNBdXRvY29tcGxldGVcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRQcm9wcz17aW5wdXRQcm9wc31cbiAgICAgICAgICAgICAgICAgICAgb25FbnRlcktleURvd249eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uRm9ybUNoYW5nZSh0aGlzLnN0YXRlLmFkZHJlc3MpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBzdHlsZT17aGlkZX0gdGFiSW5kZXg9XCItMVwiIC8+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9jb21wb25lbnRzL0hvbWUuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQURBO0FBQ0E7QUFLQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQVJBO0FBQ0E7QUFhQTtBQUNBO0FBQ0E7QUFsQkE7QUFtQkE7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFRQTtBQUdBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVEE7QUFZQTs7Ozs7O0FBR0E7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUtBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUtBO0FBTkE7QUFTQTs7Ozs7O0FBR0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///8\n");

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
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzI1MzkiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJheGlvc1wiXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/*!********************************!*\
  !*** ./src/components/View.js ***!
  \********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.View = undefined;\n\nvar _react = __webpack_require__(/*! react */ 0);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ 1);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar View = exports.View = function View() {\n  return _react2.default.createElement(\n    _reactRouterDom.Link,\n    { to: '/' },\n    'Hey'\n  );\n};\n\nexports.default = View;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTEuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvVmlldy5qcz85NTlmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbmV4cG9ydCBjb25zdCBWaWV3ID0gKCkgPT4gPExpbmsgdG89XCIvXCI+SGV5PC9MaW5rPjtcblxuZXhwb3J0IGRlZmF1bHQgVmlldztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvY29tcG9uZW50cy9WaWV3LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!***********************!*\
  !*** ./src/api/db.js ***!
  \***********************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar MongoClient = __webpack_require__(/*! mongodb */ 13).MongoClient;\nvar assert = __webpack_require__(/*! assert */ 14);\n\nvar url = 'mongodb://localhost:27017/connected_cars';\n\nmodule.exports = {\n    search: function search(startP, endP, callback) {\n        MongoClient.connect(url, function (err, db) {\n            if (err) {\n                console.log('Unable to connect to the mongoDB server. Error: ', err);\n            } else {\n                var query = { start: startP, end: endP };\n                console.log(query);\n                /*\n                db.collection(\"connections\").find({\n                    0.02: { $gt:\n                        { $sqrt:\n                            { $add: [\n                                { $pow: [ { $substract: [ startP.startLat, \"start.startLat\", 2 ] }, 2 ] },\n                                { $pow: [ { $substract: [ startP.startLon, \"start.startLon\", 2 ] }, 2 ] }\n                            ] }\n                        }\n                    }*/\n                db.collection(\"connections\").find({ $where: \"(obj.startP.startLat-this.start.startLat)^2 + (obj.startP.startLon-this.start.startLon)^2 < 2\" }).toArray(function (err, result) {\n                    console.log(err);\n                    console.log(result);\n                    callback(err, result);\n                    db.close();\n                });\n            }\n        });\n    },\n    push: function push(name, email, start, end) {\n        MongoClient.connect(url, function (err, db) {\n            if (err) {\n                console.log('Unable to connect to the mongoDB server. Error: ', err);\n            } else {\n                var conexio = { name: name, email: email, start: start, end: end };\n                db.collection(\"connections\").insertOne(conexio, function (err, res) {\n                    if (err) throw err;\n                    console.log(\"Conexio insertada\");\n                    db.close();\n                });\n            }\n        });\n    }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2FwaS9kYi5qcz9kZmI5Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBNb25nb0NsaWVudCA9IHJlcXVpcmUoJ21vbmdvZGInKS5Nb25nb0NsaWVudDtcbnZhciBhc3NlcnQgPSByZXF1aXJlKCdhc3NlcnQnKTtcblxudmFyIHVybCA9ICdtb25nb2RiOi8vbG9jYWxob3N0OjI3MDE3L2Nvbm5lY3RlZF9jYXJzJztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgc2VhcmNoOiBmdW5jdGlvbiAoc3RhcnRQLCBlbmRQLCBjYWxsYmFjaykge1xuICAgICAgICBNb25nb0NsaWVudC5jb25uZWN0KHVybCwgZnVuY3Rpb24oZXJyLCBkYikge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdVbmFibGUgdG8gY29ubmVjdCB0byB0aGUgbW9uZ29EQiBzZXJ2ZXIuIEVycm9yOiAnLCBlcnIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgcXVlcnkgPSB7IHN0YXJ0OiBzdGFydFAsIGVuZDogZW5kUCB9O1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHF1ZXJ5KTtcbiAgICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgIGRiLmNvbGxlY3Rpb24oXCJjb25uZWN0aW9uc1wiKS5maW5kKHtcbiAgICAgICAgICAgICAgICAgICAgMC4wMjogeyAkZ3Q6XG4gICAgICAgICAgICAgICAgICAgICAgICB7ICRzcXJ0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgJGFkZDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ICRwb3c6IFsgeyAkc3Vic3RyYWN0OiBbIHN0YXJ0UC5zdGFydExhdCwgXCJzdGFydC5zdGFydExhdFwiLCAyIF0gfSwgMiBdIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgJHBvdzogWyB7ICRzdWJzdHJhY3Q6IFsgc3RhcnRQLnN0YXJ0TG9uLCBcInN0YXJ0LnN0YXJ0TG9uXCIsIDIgXSB9LCAyIF0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9Ki9cbiAgICAgICAgICAgICAgICBkYi5jb2xsZWN0aW9uKFwiY29ubmVjdGlvbnNcIikuZmluZCh7ICR3aGVyZTogXCIob2JqLnN0YXJ0UC5zdGFydExhdC10aGlzLnN0YXJ0LnN0YXJ0TGF0KV4yICsgKG9iai5zdGFydFAuc3RhcnRMb24tdGhpcy5zdGFydC5zdGFydExvbileMiA8IDJcIiB9XG4gICAgICAgICAgICAgICAgKS50b0FycmF5KGZ1bmN0aW9uKGVyciwgcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnIsIHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIGRiLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgcHVzaDogZnVuY3Rpb24gKG5hbWUsIGVtYWlsLCBzdGFydCwgZW5kKSB7XG4gICAgICAgIE1vbmdvQ2xpZW50LmNvbm5lY3QodXJsLCBmdW5jdGlvbihlcnIsIGRiKSB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1VuYWJsZSB0byBjb25uZWN0IHRvIHRoZSBtb25nb0RCIHNlcnZlci4gRXJyb3I6ICcsIGVycik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBjb25leGlvID0geyBuYW1lOiBuYW1lLCBlbWFpbDogZW1haWwsIHN0YXJ0OiBzdGFydCwgZW5kOiBlbmQgfTtcbiAgICAgICAgICAgICAgICBkYi5jb2xsZWN0aW9uKFwiY29ubmVjdGlvbnNcIikuaW5zZXJ0T25lKGNvbmV4aW8sIGZ1bmN0aW9uKGVyciwgcmVzKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoZXJyKSB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvbmV4aW8gaW5zZXJ0YWRhXCIpO1xuICAgICAgICAgICAgICAgICAgZGIuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvYXBpL2RiLmpzIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUFVQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBekNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCI/YjQxNyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb25nb2RiXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibW9uZ29kYlwiXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///13\n");

/***/ }),
/* 14 */
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = require(\"assert\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhc3NlcnRcIj8xZTQxIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFzc2VydFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImFzc2VydFwiXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///14\n");

/***/ }),
/* 15 */
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTUuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiPzQ2NTciXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJib2R5LXBhcnNlclwiXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///15\n");

/***/ })
/******/ ]);