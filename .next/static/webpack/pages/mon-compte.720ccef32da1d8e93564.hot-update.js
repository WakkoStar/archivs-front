self["webpackHotUpdate_N_E"]("pages/mon-compte",{

/***/ "./utils/dataFetcher.js":
/*!******************************!*\
  !*** ./utils/dataFetcher.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BASE_URL": function() { return /* binding */ BASE_URL; },
/* harmony export */   "fetchDataFromAPI": function() { return /* binding */ fetchDataFromAPI; }
/* harmony export */ });
/* harmony import */ var C_Users_HUGO_Desktop_PROJETS_JEREMYCAPEAU_archivs_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_HUGO_Desktop_PROJETS_JEREMYCAPEAU_archivs_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_HUGO_Desktop_PROJETS_JEREMYCAPEAU_archivs_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_HUGO_Desktop_PROJETS_JEREMYCAPEAU_archivs_front_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var BASE_URL = "https://jeremy-capeau-back-j354g.ondigitalocean.app";
var fetchDataFromAPI = /*#__PURE__*/function () {
  var _ref = (0,C_Users_HUGO_Desktop_PROJETS_JEREMYCAPEAU_archivs_front_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Users_HUGO_Desktop_PROJETS_JEREMYCAPEAU_archivs_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(apiEndpoint, defaultObject) {
    var config,
        res,
        data,
        _args = arguments;
    return C_Users_HUGO_Desktop_PROJETS_JEREMYCAPEAU_archivs_front_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            config = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};
            _context.next = 3;
            return fetch("".concat(BASE_URL).concat(apiEndpoint), config);

          case 3:
            res = _context.sent;
            _context.prev = 4;
            _context.next = 7;
            return res.json();

          case 7:
            data = _context.sent;
            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](4);
            console.log("Unable to fetch data for ", apiEndpoint);

          case 13:
            if (data) {
              _context.next = 15;
              break;
            }

            return _context.abrupt("return", defaultObject);

          case 15:
            return _context.abrupt("return", data);

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[4, 10]]);
  }));

  return function fetchDataFromAPI(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvZGF0YUZldGNoZXIuanMiXSwibmFtZXMiOlsiQkFTRV9VUkwiLCJmZXRjaERhdGFGcm9tQVBJIiwiYXBpRW5kcG9pbnQiLCJkZWZhdWx0T2JqZWN0IiwiY29uZmlnIiwiZmV0Y2giLCJyZXMiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sSUFBTUEsUUFBUSxHQUFHLHFEQUFqQjtBQUVBLElBQU1DLGdCQUFnQjtBQUFBLG1XQUFHLGlCQUM5QkMsV0FEOEIsRUFFOUJDLGFBRjhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUc5QkMsa0JBSDhCLDJEQUdyQixFQUhxQjtBQUFBO0FBQUEsbUJBS1pDLEtBQUssV0FBSUwsUUFBSixTQUFlRSxXQUFmLEdBQThCRSxNQUE5QixDQUxPOztBQUFBO0FBS3hCRSxlQUx3QjtBQUFBO0FBQUE7QUFBQSxtQkFRZkEsR0FBRyxDQUFDQyxJQUFKLEVBUmU7O0FBQUE7QUFRNUJDLGdCQVI0QjtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBVTVCQyxtQkFBTyxDQUFDQyxHQUFSLENBQVksMkJBQVosRUFBeUNSLFdBQXpDOztBQVY0QjtBQUFBLGdCQWF6Qk0sSUFieUI7QUFBQTtBQUFBO0FBQUE7O0FBQUEsNkNBY3JCTCxhQWRxQjs7QUFBQTtBQUFBLDZDQWdCdkJLLElBaEJ1Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFoQlAsZ0JBQWdCO0FBQUE7QUFBQTtBQUFBLEdBQXRCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL21vbi1jb21wdGUuNzIwY2NlZjMyZGExZDhlOTM1NjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBCQVNFX1VSTCA9IFwiaHR0cHM6Ly9qZXJlbXktY2FwZWF1LWJhY2stajM1NGcub25kaWdpdGFsb2NlYW4uYXBwXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZmV0Y2hEYXRhRnJvbUFQSSA9IGFzeW5jIChcclxuICBhcGlFbmRwb2ludCxcclxuICBkZWZhdWx0T2JqZWN0LFxyXG4gIGNvbmZpZyA9IHt9XHJcbikgPT4ge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0JBU0VfVVJMfSR7YXBpRW5kcG9pbnR9YCwgY29uZmlnKTtcclxuICBsZXQgZGF0YTtcclxuICB0cnkge1xyXG4gICAgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiVW5hYmxlIHRvIGZldGNoIGRhdGEgZm9yIFwiLCBhcGlFbmRwb2ludCk7XHJcbiAgfVxyXG5cclxuICBpZiAoIWRhdGEpIHtcclxuICAgIHJldHVybiBkZWZhdWx0T2JqZWN0O1xyXG4gIH1cclxuICByZXR1cm4gZGF0YTtcclxufTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==