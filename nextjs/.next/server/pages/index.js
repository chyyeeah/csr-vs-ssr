module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_components_App_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/App.jsx */ \"./src/components/App.jsx\");\n\nvar _jsxFileName = \"/Users/wilsoncheah/Documents/hackreactor/sei/ssr-presentation/nextjs/pages/index.js\";\n\n\n\n\n/*\nEssentially, getStaticProps allows you to tell Next.js:\n“Hey, this page has some data dependencies — so when you pre-render this page at build time, make sure to resolve them first!”\n*/\n\nasync function getStaticProps() {\n  try {\n    const res = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('http://localhost:3001/repos');\n    return {\n      props: {\n        data: res.data\n      }\n    };\n  } catch (err) {\n    return {\n      props: {\n        data: []\n      }\n    };\n  }\n}\n;\nfunction Home({\n  data\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"Github Repo Fetcher\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        href: \"https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css\",\n        rel: \"stylesheet\",\n        integrity: \"sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl\",\n        crossOrigin: \"anonymous\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"script\", {\n        src: \"https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js\",\n        integrity: \"sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0\",\n        crossOrigin: \"anonymous\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_src_components_App_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      data: data\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbImdldFN0YXRpY1Byb3BzIiwicmVzIiwiYXhpb3MiLCJnZXQiLCJwcm9wcyIsImRhdGEiLCJlcnIiLCJIb21lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sZUFBZUEsY0FBZixHQUFnQztBQUNyQyxNQUFJO0FBQ0YsVUFBTUMsR0FBRyxHQUFHLE1BQU1DLDRDQUFLLENBQUNDLEdBQU4sQ0FBVSw2QkFBVixDQUFsQjtBQUVBLFdBQU87QUFDTEMsV0FBSyxFQUFFO0FBQUVDLFlBQUksRUFBRUosR0FBRyxDQUFDSTtBQUFaO0FBREYsS0FBUDtBQUdELEdBTkQsQ0FNRSxPQUFPQyxHQUFQLEVBQVk7QUFDWixXQUFPO0FBQ0xGLFdBQUssRUFBRTtBQUFFQyxZQUFJLEVBQUU7QUFBUjtBQURGLEtBQVA7QUFHRDtBQUNGO0FBQUE7QUFFYyxTQUFTRSxJQUFULENBQWM7QUFBQ0Y7QUFBRCxDQUFkLEVBQXNCO0FBQ25DLHNCQUNFO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBTSxZQUFJLEVBQUMsK0VBQVg7QUFBMkYsV0FBRyxFQUFDLFlBQS9GO0FBQTRHLGlCQUFTLEVBQUMseUVBQXRIO0FBQWdNLG1CQUFXLEVBQUM7QUFBNU07QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0U7QUFBUSxXQUFHLEVBQUMsb0ZBQVo7QUFBaUcsaUJBQVMsRUFBQyx5RUFBM0c7QUFBcUwsbUJBQVcsRUFBQztBQUFqTTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFPRSxxRUFBQywrREFBRDtBQUFLLFVBQUksRUFBRUE7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFXRCIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCBBcHAgZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvQXBwLmpzeCc7XG5cbi8qXG5Fc3NlbnRpYWxseSwgZ2V0U3RhdGljUHJvcHMgYWxsb3dzIHlvdSB0byB0ZWxsIE5leHQuanM6XG7igJxIZXksIHRoaXMgcGFnZSBoYXMgc29tZSBkYXRhIGRlcGVuZGVuY2llcyDigJQgc28gd2hlbiB5b3UgcHJlLXJlbmRlciB0aGlzIHBhZ2UgYXQgYnVpbGQgdGltZSwgbWFrZSBzdXJlIHRvIHJlc29sdmUgdGhlbSBmaXJzdCHigJ1cbiovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjMwMDEvcmVwb3MnKTtcblxuICAgIHJldHVybiB7XG4gICAgICBwcm9wczogeyBkYXRhOiByZXMuZGF0YSB9XG4gICAgfTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7IGRhdGE6IFtdIH1cbiAgICB9O1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHtkYXRhfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkdpdGh1YiBSZXBvIEZldGNoZXI8L3RpdGxlPlxuICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXBANS4wLjAtYmV0YTIvZGlzdC9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgaW50ZWdyaXR5PVwic2hhMzg0LUJtYnh1UHdRYTJsYy9GVnpCY05KN1VBeUp4TTZ3dXFJajYxdExyYzR3U1gwc3pIL0V2K25ZUlJ1V2xvbGZsZmxcIiBjcm9zc09yaWdpbj1cImFub255bW91c1wiIC8+XG4gICAgICAgIDxzY3JpcHQgc3JjPVwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9ib290c3RyYXBANS4wLjAtYmV0YTIvZGlzdC9qcy9ib290c3RyYXAuYnVuZGxlLm1pbi5qc1wiIGludGVncml0eT1cInNoYTM4NC1iNWtIeVhnY3BiWkpPL3RZOVVsN2tHa2YxUzBDV3VLY0NEMzhsOFlrZUg4ejhRakUwR21XMWdZVTVTOUZPbkowXCIgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIiA+PC9zY3JpcHQ+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxBcHAgZGF0YT17ZGF0YX0gLz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./src/components/App.jsx":
/*!********************************!*\
  !*** ./src/components/App.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Search_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Search.jsx */ \"./src/components/Search.jsx\");\n/* harmony import */ var _RepoList_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./RepoList.jsx */ \"./src/components/RepoList.jsx\");\n/* harmony import */ var _utils_hostServer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/hostServer */ \"./src/utils/hostServer.js\");\n\nvar _jsxFileName = \"/Users/wilsoncheah/Documents/hackreactor/sei/ssr-presentation/nextjs/src/components/App.jsx\";\n\n\n\n\n\n\n\nconst App = ({\n  data\n}) => {\n  const {\n    0: repos,\n    1: setRepos\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(data);\n\n  const updateReposList = () => {\n    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('http://localhost:3001/repos').then(res => {\n      setRepos(res.data);\n    }).catch(err => console.error(err));\n  };\n\n  const search = term => {\n    console.log(`${term} was searched`);\n    axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('http://localhost:3001/repos', {\n      username: term\n    }).then(() => updateReposList()).catch(err => console.error(err));\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: \"Github Fetcher\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_RepoList_jsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      repos: repos\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Search_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      onSearch: search\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BcHAuanN4P2M1OGMiXSwibmFtZXMiOlsiQXBwIiwiZGF0YSIsInJlcG9zIiwic2V0UmVwb3MiLCJ1c2VTdGF0ZSIsInVwZGF0ZVJlcG9zTGlzdCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlcyIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwic2VhcmNoIiwidGVybSIsImxvZyIsInBvc3QiLCJ1c2VybmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsR0FBRyxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWM7QUFDeEIsUUFBTTtBQUFBLE9BQUVDLEtBQUY7QUFBQSxPQUFTQztBQUFULE1BQXNCQyxzREFBUSxDQUFDSCxJQUFELENBQXBDOztBQUVBLFFBQU1JLGVBQWUsR0FBRyxNQUFNO0FBQzVCQyxnREFBSyxDQUFDQyxHQUFOLENBQVUsNkJBQVYsRUFDR0MsSUFESCxDQUNRQyxHQUFHLElBQUk7QUFDWE4sY0FBUSxDQUFDTSxHQUFHLENBQUNSLElBQUwsQ0FBUjtBQUNELEtBSEgsRUFJR1MsS0FKSCxDQUlTQyxHQUFHLElBQUlDLE9BQU8sQ0FBQ0MsS0FBUixDQUFjRixHQUFkLENBSmhCO0FBS0QsR0FORDs7QUFRQSxRQUFNRyxNQUFNLEdBQUdDLElBQUksSUFBSTtBQUNyQkgsV0FBTyxDQUFDSSxHQUFSLENBQWEsR0FBRUQsSUFBSyxlQUFwQjtBQUNBVCxnREFBSyxDQUFDVyxJQUFOLENBQVcsNkJBQVgsRUFBMEM7QUFBRUMsY0FBUSxFQUFFSDtBQUFaLEtBQTFDLEVBQ0dQLElBREgsQ0FDUSxNQUFNSCxlQUFlLEVBRDdCLEVBRUdLLEtBRkgsQ0FFU0MsR0FBRyxJQUFJQyxPQUFPLENBQUNDLEtBQVIsQ0FBY0YsR0FBZCxDQUZoQjtBQUdELEdBTEQ7O0FBT0Esc0JBQ0U7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFLHFFQUFDLHFEQUFEO0FBQVUsV0FBSyxFQUFFVDtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBR0UscUVBQUMsbURBQUQ7QUFBUSxjQUFRLEVBQUVZO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFPRCxDQXpCRDs7QUEyQmVkLGtFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvQXBwLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IFNlYXJjaCBmcm9tICcuL1NlYXJjaC5qc3gnO1xuaW1wb3J0IFJlcG9MaXN0IGZyb20gJy4vUmVwb0xpc3QuanN4JztcbmltcG9ydCBob3N0U2VydmVyIGZyb20gJy4uL3V0aWxzL2hvc3RTZXJ2ZXInO1xuXG5jb25zdCBBcHAgPSAoeyBkYXRhIH0pID0+IHtcbiAgY29uc3QgWyByZXBvcywgc2V0UmVwb3MgXSA9IHVzZVN0YXRlKGRhdGEpO1xuXG4gIGNvbnN0IHVwZGF0ZVJlcG9zTGlzdCA9ICgpID0+IHtcbiAgICBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9yZXBvcycpXG4gICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICBzZXRSZXBvcyhyZXMuZGF0YSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuICB9O1xuXG4gIGNvbnN0IHNlYXJjaCA9IHRlcm0gPT4ge1xuICAgIGNvbnNvbGUubG9nKGAke3Rlcm19IHdhcyBzZWFyY2hlZGApO1xuICAgIGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9yZXBvcycsIHsgdXNlcm5hbWU6IHRlcm0gfSlcbiAgICAgIC50aGVuKCgpID0+IHVwZGF0ZVJlcG9zTGlzdCgpKVxuICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPkdpdGh1YiBGZXRjaGVyPC9oMT5cbiAgICAgIDxSZXBvTGlzdCByZXBvcz17cmVwb3N9Lz5cbiAgICAgIDxTZWFyY2ggb25TZWFyY2g9e3NlYXJjaH0vPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQXBwOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/App.jsx\n");

/***/ }),

/***/ "./src/components/Repo.jsx":
/*!*********************************!*\
  !*** ./src/components/Repo.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/wilsoncheah/Documents/hackreactor/sei/ssr-presentation/nextjs/src/components/Repo.jsx\";\n\n\nvar Repo = ({\n  forkCount,\n  url,\n  name,\n  owner\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n      children: forkCount\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: url,\n        target: \"_blank\",\n        children: name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 7,\n        columnNumber: 11\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        href: owner.profileUrl,\n        target: \"_blank\",\n        children: owner.name\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 8,\n        columnNumber: 11\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Repo);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SZXBvLmpzeD8xNWQyIl0sIm5hbWVzIjpbIlJlcG8iLCJmb3JrQ291bnQiLCJ1cmwiLCJuYW1lIiwib3duZXIiLCJwcm9maWxlVXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsSUFBSUEsSUFBSSxHQUFHLENBQUM7QUFBRUMsV0FBRjtBQUFhQyxLQUFiO0FBQWtCQyxNQUFsQjtBQUF3QkM7QUFBeEIsQ0FBRCxLQUFxQztBQUM5QyxzQkFDRTtBQUFBLDRCQUNFO0FBQUEsZ0JBQUtIO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQUEsNkJBQUk7QUFBRyxZQUFJLEVBQUVDLEdBQVQ7QUFBYyxjQUFNLEVBQUMsUUFBckI7QUFBQSxrQkFBK0JDO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBR0U7QUFBQSw2QkFBSTtBQUFHLFlBQUksRUFBRUMsS0FBSyxDQUFDQyxVQUFmO0FBQTJCLGNBQU0sRUFBQyxRQUFsQztBQUFBLGtCQUE0Q0QsS0FBSyxDQUFDRDtBQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQU9ELENBUkQ7O0FBVWVILG1FQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvUmVwby5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG52YXIgUmVwbyA9ICh7IGZvcmtDb3VudCwgdXJsLCBuYW1lLCBvd25lciB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPHRyPlxuICAgICAgPHRkPntmb3JrQ291bnR9PC90ZD5cbiAgICAgIDx0ZD48YSBocmVmPXt1cmx9IHRhcmdldD1cIl9ibGFua1wiPntuYW1lfTwvYT48L3RkPlxuICAgICAgPHRkPjxhIGhyZWY9e293bmVyLnByb2ZpbGVVcmx9IHRhcmdldD1cIl9ibGFua1wiPntvd25lci5uYW1lfTwvYT48L3RkPlxuICAgIDwvdHI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZXBvOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Repo.jsx\n");

/***/ }),

/***/ "./src/components/RepoList.jsx":
/*!*************************************!*\
  !*** ./src/components/RepoList.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Repo_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Repo.jsx */ \"./src/components/Repo.jsx\");\n\nvar _jsxFileName = \"/Users/wilsoncheah/Documents/hackreactor/sei/ssr-presentation/nextjs/src/components/RepoList.jsx\";\n\n\n\nvar RepoList = props => {\n  var _props$repos;\n\n  const repos = ((_props$repos = props.repos) === null || _props$repos === void 0 ? void 0 : _props$repos.length) > 0 ? props.repos.map(repo => {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Repo_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      forkCount: repo.forkCount,\n      url: repo.url,\n      name: repo.name,\n      owner: repo.owner\n    }, repo.id, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 11\n    }, undefined);\n  }) : null;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h4\", {\n      children: \" Top 25 Repos (# of Forks)! \"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"table\", {\n      className: \"table table-striped\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"thead\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n            scope: \"col\",\n            children: \"# of Forks\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 24,\n            columnNumber: 13\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n            scope: \"col\",\n            children: \"Repo Name\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 25,\n            columnNumber: 13\n          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n            scope: \"col\",\n            children: \"Owner\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 13\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 23,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tbody\", {\n        children: repos\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (RepoList);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SZXBvTGlzdC5qc3g/NWY5ZiJdLCJuYW1lcyI6WyJSZXBvTGlzdCIsInByb3BzIiwicmVwb3MiLCJsZW5ndGgiLCJtYXAiLCJyZXBvIiwiZm9ya0NvdW50IiwidXJsIiwibmFtZSIsIm93bmVyIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFJQSxRQUFRLEdBQUlDLEtBQUQsSUFBVztBQUFBOztBQUN4QixRQUFNQyxLQUFLLEdBQUcsaUJBQUFELEtBQUssQ0FBQ0MsS0FBTiw4REFBYUMsTUFBYixJQUFzQixDQUF0QixHQUNWRixLQUFLLENBQUNDLEtBQU4sQ0FBWUUsR0FBWixDQUFpQkMsSUFBRCxJQUFVO0FBQ3hCLHdCQUNFLHFFQUFDLGlEQUFEO0FBRUUsZUFBUyxFQUFFQSxJQUFJLENBQUNDLFNBRmxCO0FBR0UsU0FBRyxFQUFFRCxJQUFJLENBQUNFLEdBSFo7QUFJRSxVQUFJLEVBQUVGLElBQUksQ0FBQ0csSUFKYjtBQUtFLFdBQUssRUFBRUgsSUFBSSxDQUFDSTtBQUxkLE9BQ09KLElBQUksQ0FBQ0ssRUFEWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGO0FBUUQsR0FURCxDQURVLEdBV1YsSUFYSjtBQWFBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFPLGVBQVMsRUFBQyxxQkFBakI7QUFBQSw4QkFDRTtBQUFBLCtCQUNFO0FBQUEsa0NBQ0U7QUFBSSxpQkFBSyxFQUFDLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFFRTtBQUFJLGlCQUFLLEVBQUMsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRixlQUdFO0FBQUksaUJBQUssRUFBQyxLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFRRTtBQUFBLGtCQUFRUjtBQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBY0QsQ0E1QkQ7O0FBOEJlRix1RUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1JlcG9MaXN0LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVwbyBmcm9tICcuL1JlcG8uanN4JztcblxudmFyIFJlcG9MaXN0ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHJlcG9zID0gcHJvcHMucmVwb3M/Lmxlbmd0aCA+IDBcbiAgICA/IHByb3BzLnJlcG9zLm1hcCgocmVwbykgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxSZXBvXG4gICAgICAgICAgICBrZXk9e3JlcG8uaWR9XG4gICAgICAgICAgICBmb3JrQ291bnQ9e3JlcG8uZm9ya0NvdW50fVxuICAgICAgICAgICAgdXJsPXtyZXBvLnVybH1cbiAgICAgICAgICAgIG5hbWU9e3JlcG8ubmFtZX1cbiAgICAgICAgICAgIG93bmVyPXtyZXBvLm93bmVyfS8+XG4gICAgICAgICk7XG4gICAgICB9KVxuICAgIDogbnVsbDtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDQ+IFRvcCAyNSBSZXBvcyAoIyBvZiBGb3JrcykhIDwvaDQ+XG4gICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtc3RyaXBlZFwiPlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+IyBvZiBGb3JrczwvdGg+XG4gICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj5SZXBvIE5hbWU8L3RoPlxuICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+T3duZXI8L3RoPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT57cmVwb3N9PC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgPC9kaXY+KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlcG9MaXN0OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/RepoList.jsx\n");

/***/ }),

/***/ "./src/components/Search.jsx":
/*!***********************************!*\
  !*** ./src/components/Search.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/wilsoncheah/Documents/hackreactor/sei/ssr-presentation/nextjs/src/components/Search.jsx\";\n\n\nclass Search extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      term: ''\n    };\n  }\n\n  onChange(e) {\n    this.setState({\n      term: e.target.value\n    });\n  }\n\n  clear() {\n    this.setState({\n      term: ''\n    });\n  }\n\n  search() {\n    this.props.onSearch(this.state.term);\n    this.clear();\n  }\n\n  render() {\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h4\", {\n        children: \"Add more repos!\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 7\n      }, this), \"Enter a github username: \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        value: this.state.term,\n        onChange: this.onChange.bind(this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 32\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: this.search.bind(this),\n        children: \" Add Repos \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 7\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }, this);\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Search);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9TZWFyY2guanN4P2E0NWIiXSwibmFtZXMiOlsiU2VhcmNoIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJ0ZXJtIiwib25DaGFuZ2UiLCJlIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNsZWFyIiwic2VhcmNoIiwib25TZWFyY2giLCJyZW5kZXIiLCJiaW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsTUFBTixTQUFxQkMsNENBQUssQ0FBQ0MsU0FBM0IsQ0FBcUM7QUFDbkNDLGFBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2pCLFVBQU1BLEtBQU47QUFDQSxTQUFLQyxLQUFMLEdBQWE7QUFDWEMsVUFBSSxFQUFFO0FBREssS0FBYjtBQUdEOztBQUVEQyxVQUFRLENBQUVDLENBQUYsRUFBSztBQUNYLFNBQUtDLFFBQUwsQ0FBYztBQUNaSCxVQUFJLEVBQUVFLENBQUMsQ0FBQ0UsTUFBRixDQUFTQztBQURILEtBQWQ7QUFHRDs7QUFFREMsT0FBSyxHQUFHO0FBQ04sU0FBS0gsUUFBTCxDQUFjO0FBQUVILFVBQUksRUFBRTtBQUFSLEtBQWQ7QUFDRDs7QUFFRE8sUUFBTSxHQUFHO0FBQ1AsU0FBS1QsS0FBTCxDQUFXVSxRQUFYLENBQW9CLEtBQUtULEtBQUwsQ0FBV0MsSUFBL0I7QUFDQSxTQUFLTSxLQUFMO0FBQ0Q7O0FBRURHLFFBQU0sR0FBRztBQUNQLHdCQUFRO0FBQUEsOEJBQ047QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FETSw0Q0FFbUI7QUFBTyxhQUFLLEVBQUUsS0FBS1YsS0FBTCxDQUFXQyxJQUF6QjtBQUErQixnQkFBUSxFQUFFLEtBQUtDLFFBQUwsQ0FBY1MsSUFBZCxDQUFtQixJQUFuQjtBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRm5CLGVBR047QUFBUSxlQUFPLEVBQUUsS0FBS0gsTUFBTCxDQUFZRyxJQUFaLENBQWlCLElBQWpCLENBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSE07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQVI7QUFLRDs7QUE3QmtDOztBQWdDdEJoQixxRUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1NlYXJjaC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBTZWFyY2ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdGVybTogJydcbiAgICB9XG4gIH1cblxuICBvbkNoYW5nZSAoZSkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdGVybTogZS50YXJnZXQudmFsdWVcbiAgICB9KTtcbiAgfVxuXG4gIGNsZWFyKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB0ZXJtOiAnJyB9KVxuICB9XG5cbiAgc2VhcmNoKCkge1xuICAgIHRoaXMucHJvcHMub25TZWFyY2godGhpcy5zdGF0ZS50ZXJtKTtcbiAgICB0aGlzLmNsZWFyKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuICg8ZGl2PlxuICAgICAgPGg0PkFkZCBtb3JlIHJlcG9zITwvaDQ+XG4gICAgICBFbnRlciBhIGdpdGh1YiB1c2VybmFtZTogPGlucHV0IHZhbHVlPXt0aGlzLnN0YXRlLnRlcm19IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlLmJpbmQodGhpcyl9Lz5cbiAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5zZWFyY2guYmluZCh0aGlzKX0+IEFkZCBSZXBvcyA8L2J1dHRvbj5cbiAgICA8L2Rpdj4pXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Search.jsx\n");

/***/ }),

/***/ "./src/utils/hostServer.js":
/*!*********************************!*\
  !*** ./src/utils/hostServer.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst hostServer = 'https://vast-coast-19754.herokuapp.com';\n/* harmony default export */ __webpack_exports__[\"default\"] = (hostServer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvaG9zdFNlcnZlci5qcz8yZjExIl0sIm5hbWVzIjpbImhvc3RTZXJ2ZXIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUEsTUFBTUEsVUFBVSxHQUFHLHdDQUFuQjtBQUVlQSx5RUFBZiIsImZpbGUiOiIuL3NyYy91dGlscy9ob3N0U2VydmVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaG9zdFNlcnZlciA9ICdodHRwczovL3Zhc3QtY29hc3QtMTk3NTQuaGVyb2t1YXBwLmNvbSc7XG5cbmV4cG9ydCBkZWZhdWx0IGhvc3RTZXJ2ZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/hostServer.js\n");

/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__1EcsU\",\n\t\"main\": \"Home_main__1x8gC\",\n\t\"footer\": \"Home_footer__1WdhD\",\n\t\"title\": \"Home_title__3DjR7\",\n\t\"description\": \"Home_description__17Z4F\",\n\t\"code\": \"Home_code__axx2Y\",\n\t\"grid\": \"Home_grid__2Ei2F\",\n\t\"card\": \"Home_card__2SdtB\",\n\t\"logo\": \"Home_logo__1YbrH\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzP2M1NzkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkhvbWVfY29udGFpbmVyX18xRWNzVVwiLFxuXHRcIm1haW5cIjogXCJIb21lX21haW5fXzF4OGdDXCIsXG5cdFwiZm9vdGVyXCI6IFwiSG9tZV9mb290ZXJfXzFXZGhEXCIsXG5cdFwidGl0bGVcIjogXCJIb21lX3RpdGxlX18zRGpSN1wiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiSG9tZV9kZXNjcmlwdGlvbl9fMTdaNEZcIixcblx0XCJjb2RlXCI6IFwiSG9tZV9jb2RlX19heHgyWVwiLFxuXHRcImdyaWRcIjogXCJIb21lX2dyaWRfXzJFaTJGXCIsXG5cdFwiY2FyZFwiOiBcIkhvbWVfY2FyZF9fMlNkdEJcIixcblx0XCJsb2dvXCI6IFwiSG9tZV9sb2dvX18xWWJySFwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kb21cIj81ZTlhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWRvbS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-dom\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });