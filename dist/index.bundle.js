(self["webpackChunkgroup_capstone"] = self["webpackChunkgroup_capstone"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nhtml {\r\n    font-size: 62.5%;\r\n}\r\n\r\nbody {\r\n  font-family: 'Lato', sans-serif;\r\n  font: 1.6rem;\r\n}\r\n\r\n.grid__container {\r\n    display: grid;\r\n    grid-template-areas:\r\n    'header'\r\n    'main'\r\n    'footer';\r\n    grid-template-columns: 1fr;\r\n    height: 100%;\r\n}\r\n\r\nheader {\r\n  grid-area: header;\r\n  background-color: #203040;\r\n  color: #fff;\r\n  display: flex;\r\n  justify-content: space-between;   \r\n  align-items: center;\r\n  padding: 3rem;\r\n}\r\n\r\nheader a {\r\n  color: #fff;\r\n  font-weight: bold;\r\n  text-decoration: none;\r\n  font-size: 4rem;\r\n  margin-right: 2rem;\r\n  padding-right: 1rem;\r\n}\r\n\r\nheader a:hover {\r\n  color: #f08040;\r\n}\r\n\r\n.brand a {\r\n  font-size: 5rem;\r\n  margin-left: 3rem;\r\n  padding-left: 1rem;\r\n}\r\n\r\n.nav-link a {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.grid__container-movies {\r\n  display: grid;\r\n  grid-template-columns: auto auto auto;\r\n  gap: 2.5rem;\r\n  padding: 1.5rem;\r\n  height: 100vh;\r\n}\r\n\r\n.grid__container-movie-lists {\r\n  background-color: #fff;\r\n  border: 1px solid rgba(0,0,0, 0.8);\r\n  padding: 2rem;\r\n  font-size: 3rem;\r\n  text-align: center;\r\n}\r\n\r\nfooter {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: #203040;\r\n  color: #fff;\r\n  font-size: 1.5rem;\r\n  padding: 3rem;\r\n}\r\n\r\n\r\ngrid-item {\r\n    background-color: white;\r\n    border: 1px solid rgba(0, 0, 0, 0.8);\r\n    padding: 20px;\r\n    font-size: 30px;\r\n    text-align: center;\r\n  }\r\n  \r\n  /* Modal styling */\r\n  .modal-content {\r\n    display: none;\r\n    padding: 4rem;\r\n    max-width: 100%;\r\n    height: auto;\r\n    border: 2px solid black;\r\n    background-color: #fefefe;\r\n    background-color: black;\r\n  }\r\n  \r\n  .span-close {\r\n    color: black;\r\n    font-size: 30px;\r\n    font-weight: 800;\r\n    position: relative;\r\n    left: 48%;\r\n    right: 0;\r\n    top: 0;\r\n  }\r\n  \r\n  .close:hover,\r\n  .close:focus {\r\n    color: black;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .footer {\r\n    display: block;\r\n    border: 1px solid black;\r\n    padding: 1rem;\r\n  }\r\n  \r\n  /* Modal display */\r\n  .modal-items {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    border: 1px solid rgb(224, 73, 73);\r\n    padding: 1rem 0;\r\n    background-color: aqua;\r\n    height: auto;\r\n  }\r\n  \r\n  .modal-description {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin: 0.5rem 5rem;\r\n    border: 1px solid red;\r\n  }\r\n  \r\n  .modal-description > * {\r\n    padding: 0.2rem 0;\r\n  }\r\n  \r\n  .modal-header2,\r\n  .modal-comments {\r\n    margin-bottom: 1rem;\r\n  }\r\n  \r\n  .comment-form {\r\n    margin-top: 0.5rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-items: center;\r\n  }\r\n  \r\n  .comment-form > * {\r\n    margin-top: 0.5rem;\r\n    padding: 0.5rem;\r\n  }\r\n  \r\n  .form-btn {\r\n    font-style: oblique;\r\n    font-weight: bold;\r\n  }\r\n  \r\n  .comment-btn {\r\n    background-color: rgb(134, 138, 138);\r\n    padding: 0.3rem 1rem;\r\n    color: rgb(96, 22, 13);\r\n    font-size: medium;\r\n    font-style: oblique;\r\n    font-weight: bold;\r\n  }\r\n  \r\n  .fas:hover,\r\n  .comment-btn:hover,\r\n  .span-close:hover {\r\n    cursor: pointer;\r\n  }\r\n  \r\n\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;IACI,gBAAgB;AACpB;;AAEA;EACE,+BAA+B;EAC/B,YAAY;AACd;;AAEA;IACI,aAAa;IACb;;;YAGQ;IACR,0BAA0B;IAC1B,YAAY;AAChB;;AAEA;EACE,iBAAiB;EACjB,yBAAyB;EACzB,WAAW;EACX,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,qBAAqB;EACrB,eAAe;EACf,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,WAAW;EACX,eAAe;EACf,aAAa;AACf;;AAEA;EACE,sBAAsB;EACtB,kCAAkC;EAClC,aAAa;EACb,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,yBAAyB;EACzB,WAAW;EACX,iBAAiB;EACjB,aAAa;AACf;;;AAGA;IACI,uBAAuB;IACvB,oCAAoC;IACpC,aAAa;IACb,eAAe;IACf,kBAAkB;EACpB;;EAEA,kBAAkB;EAClB;IACE,aAAa;IACb,aAAa;IACb,eAAe;IACf,YAAY;IACZ,uBAAuB;IACvB,yBAAyB;IACzB,uBAAuB;EACzB;;EAEA;IACE,YAAY;IACZ,eAAe;IACf,gBAAgB;IAChB,kBAAkB;IAClB,SAAS;IACT,QAAQ;IACR,MAAM;EACR;;EAEA;;IAEE,YAAY;IACZ,qBAAqB;IACrB,eAAe;EACjB;;EAEA;IACE,cAAc;IACd,uBAAuB;IACvB,aAAa;EACf;;EAEA,kBAAkB;EAClB;IACE,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,kCAAkC;IAClC,eAAe;IACf,sBAAsB;IACtB,YAAY;EACd;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,mBAAmB;IACnB,qBAAqB;EACvB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;;IAEE,mBAAmB;EACrB;;EAEA;IACE,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,qBAAqB;EACvB;;EAEA;IACE,kBAAkB;IAClB,eAAe;EACjB;;EAEA;IACE,mBAAmB;IACnB,iBAAiB;EACnB;;EAEA;IACE,oCAAoC;IACpC,oBAAoB;IACpB,sBAAsB;IACtB,iBAAiB;IACjB,mBAAmB;IACnB,iBAAiB;EACnB;;EAEA;;;IAGE,eAAe;EACjB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nhtml {\r\n    font-size: 62.5%;\r\n}\r\n\r\nbody {\r\n  font-family: 'Lato', sans-serif;\r\n  font: 1.6rem;\r\n}\r\n\r\n.grid__container {\r\n    display: grid;\r\n    grid-template-areas:\r\n    'header'\r\n    'main'\r\n    'footer';\r\n    grid-template-columns: 1fr;\r\n    height: 100%;\r\n}\r\n\r\nheader {\r\n  grid-area: header;\r\n  background-color: #203040;\r\n  color: #fff;\r\n  display: flex;\r\n  justify-content: space-between;   \r\n  align-items: center;\r\n  padding: 3rem;\r\n}\r\n\r\nheader a {\r\n  color: #fff;\r\n  font-weight: bold;\r\n  text-decoration: none;\r\n  font-size: 4rem;\r\n  margin-right: 2rem;\r\n  padding-right: 1rem;\r\n}\r\n\r\nheader a:hover {\r\n  color: #f08040;\r\n}\r\n\r\n.brand a {\r\n  font-size: 5rem;\r\n  margin-left: 3rem;\r\n  padding-left: 1rem;\r\n}\r\n\r\n.nav-link a {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.grid__container-movies {\r\n  display: grid;\r\n  grid-template-columns: auto auto auto;\r\n  gap: 2.5rem;\r\n  padding: 1.5rem;\r\n  height: 100vh;\r\n}\r\n\r\n.grid__container-movie-lists {\r\n  background-color: #fff;\r\n  border: 1px solid rgba(0,0,0, 0.8);\r\n  padding: 2rem;\r\n  font-size: 3rem;\r\n  text-align: center;\r\n}\r\n\r\nfooter {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: #203040;\r\n  color: #fff;\r\n  font-size: 1.5rem;\r\n  padding: 3rem;\r\n}\r\n\r\n\r\ngrid-item {\r\n    background-color: white;\r\n    border: 1px solid rgba(0, 0, 0, 0.8);\r\n    padding: 20px;\r\n    font-size: 30px;\r\n    text-align: center;\r\n  }\r\n  \r\n  /* Modal styling */\r\n  .modal-content {\r\n    display: none;\r\n    padding: 4rem;\r\n    max-width: 100%;\r\n    height: auto;\r\n    border: 2px solid black;\r\n    background-color: #fefefe;\r\n    background-color: black;\r\n  }\r\n  \r\n  .span-close {\r\n    color: black;\r\n    font-size: 30px;\r\n    font-weight: 800;\r\n    position: relative;\r\n    left: 48%;\r\n    right: 0;\r\n    top: 0;\r\n  }\r\n  \r\n  .close:hover,\r\n  .close:focus {\r\n    color: black;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .footer {\r\n    display: block;\r\n    border: 1px solid black;\r\n    padding: 1rem;\r\n  }\r\n  \r\n  /* Modal display */\r\n  .modal-items {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    border: 1px solid rgb(224, 73, 73);\r\n    padding: 1rem 0;\r\n    background-color: aqua;\r\n    height: auto;\r\n  }\r\n  \r\n  .modal-description {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin: 0.5rem 5rem;\r\n    border: 1px solid red;\r\n  }\r\n  \r\n  .modal-description > * {\r\n    padding: 0.2rem 0;\r\n  }\r\n  \r\n  .modal-header2,\r\n  .modal-comments {\r\n    margin-bottom: 1rem;\r\n  }\r\n  \r\n  .comment-form {\r\n    margin-top: 0.5rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-items: center;\r\n  }\r\n  \r\n  .comment-form > * {\r\n    margin-top: 0.5rem;\r\n    padding: 0.5rem;\r\n  }\r\n  \r\n  .form-btn {\r\n    font-style: oblique;\r\n    font-weight: bold;\r\n  }\r\n  \r\n  .comment-btn {\r\n    background-color: rgb(134, 138, 138);\r\n    padding: 0.3rem 1rem;\r\n    color: rgb(96, 22, 13);\r\n    font-size: medium;\r\n    font-style: oblique;\r\n    font-weight: bold;\r\n  }\r\n  \r\n  .fas:hover,\r\n  .comment-btn:hover,\r\n  .span-close:hover {\r\n    cursor: pointer;\r\n  }\r\n  \r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_renderContent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/renderContent.js */ "./src/modules/renderContent.js");
/* harmony import */ var _modules_helperMethods_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/helperMethods.js */ "./src/modules/helperMethods.js");




const countMovies = document.querySelector('.count__movies');

const counterFunc = async () => {
  const counter = await (0,_modules_helperMethods_js__WEBPACK_IMPORTED_MODULE_2__.artCounter)();
  countMovies.innerHTML = `Shows: ${counter}`;
};

counterFunc();
(0,_modules_renderContent_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

/***/ }),

/***/ "./src/modules/content.js":
/*!********************************!*\
  !*** ./src/modules/content.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const api_endpoint = 'https://api.tvmaze.com/';

const main = async () => {
    const fetch_data = await fetch(`${fetchData}shows`);
    const result = await fetch_data.json();

    return result;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (main);



/***/ }),

/***/ "./src/modules/createImage.js":
/*!************************************!*\
  !*** ./src/modules/createImage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderImage": () => (/* binding */ renderImage),
/* harmony export */   "renderImage2": () => (/* binding */ renderImage2)
/* harmony export */ });

const renderImage = (src, cont) => {
    const picCont = document.createElement('div');
    picCont.classList.add('img-cont');
  
    const img = document.createElement('img');
    img.srcset = src;
  
    picCont.append(img);
    cont.append(picCont);
  };
    
  const renderImage2 = (src, cont) => {
    const picCont = document.createElement('div');
    picCont.classList.add('modal-image');
  
    const img = document.createElement('img');
    img.srcset = src;
  
    picCont.append(img);
    cont.append(picCont);
  };
    
  
  

/***/ }),

/***/ "./src/modules/helperMethods.js":
/*!**************************************!*\
  !*** ./src/modules/helperMethods.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "artCounter": () => (/* binding */ artCounter),
/* harmony export */   "likeCount": () => (/* binding */ likeCount)
/* harmony export */ });
/* harmony import */ var _likes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./likes.js */ "./src/modules/likes.js");
/* harmony import */ var _likes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_likes_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _content_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content.js */ "./src/modules/content.js");




const likeCount = async (Id, cont) => {
  const count = await (0,_likes_js__WEBPACK_IMPORTED_MODULE_0__.updateLikes)(Id);
  cont.innerHTML = `${count} likes`;
};

const artCounter = async () => {
  const artArr = await (0,_content_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const artsLength = artArr.length;
  return artsLength;
};



/***/ }),

/***/ "./src/modules/likes.js":
/*!******************************!*\
  !*** ./src/modules/likes.js ***!
  \******************************/
/***/ (() => {



/***/ }),

/***/ "./src/modules/renderContent.js":
/*!**************************************!*\
  !*** ./src/modules/renderContent.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _content_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content.js */ "./src/modules/content.js");
/* harmony import */ var _createImage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createImage.js */ "./src/modules/createImage.js");
/* harmony import */ var _likes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./likes.js */ "./src/modules/likes.js");
/* harmony import */ var _likes_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_likes_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _helperMethods_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helperMethods.js */ "./src/modules/helperMethods.js");





const grid = document.querySelector('.grid__container-movies');
const displayModal = document.querySelector('.modal-content');
const header = document.querySelector('.header');
const footer = document.querySelector('.footer');

const renderCards = async () => {
  grid.innerHTML = '';
  const dataList = await (0,_content_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  dataList.forEach((el) => {
    const card = document.createElement('div');
    card.classList.add('grid-item');

    (0,_createImage_js__WEBPACK_IMPORTED_MODULE_1__.renderImage)(el.image.medium, card);

    const nameLike = document.createElement('div');

    const showName = document.createElement('h3');
    showName.classList.add('showname');
    showName.innerHTML = el.name;

    const likeIcon = document.createElement('i');
    likeIcon.classList.add('fas');
    likeIcon.classList.add('fa-heart');

    const likeCounter = document.createElement('p');
    likeCounter.classList.add('like-counter');

    (0,_helperMethods_js__WEBPACK_IMPORTED_MODULE_3__.likeCount)(el.id, likeCounter);

    likeIcon.addEventListener('click', async () => {
      await (0,_likes_js__WEBPACK_IMPORTED_MODULE_2__.postLikes)(el.id);
      await (0,_helperMethods_js__WEBPACK_IMPORTED_MODULE_3__.likeCount)(el.id, likeCounter);
    });

    nameLike.append(showName, likeIcon, likeCounter);

    
    card.append(nameLike, commentBtn);
    grid.append(card);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderCards);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRixvSEFBb0gsTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLG9CQUFvQjtBQUN4TDtBQUNBLDZDQUE2Qyw2QkFBNkIsZ0JBQWdCLGlCQUFpQixLQUFLLGNBQWMseUJBQXlCLEtBQUssY0FBYyxzQ0FBc0MsbUJBQW1CLEtBQUssMEJBQTBCLHNCQUFzQiwyRUFBMkUsbUNBQW1DLHFCQUFxQixLQUFLLGdCQUFnQix3QkFBd0IsZ0NBQWdDLGtCQUFrQixvQkFBb0Isd0NBQXdDLDBCQUEwQixvQkFBb0IsS0FBSyxrQkFBa0Isa0JBQWtCLHdCQUF3Qiw0QkFBNEIsc0JBQXNCLHlCQUF5QiwwQkFBMEIsS0FBSyx3QkFBd0IscUJBQXFCLEtBQUssa0JBQWtCLHNCQUFzQix3QkFBd0IseUJBQXlCLEtBQUsscUJBQXFCLHdCQUF3QixLQUFLLGlDQUFpQyxvQkFBb0IsNENBQTRDLGtCQUFrQixzQkFBc0Isb0JBQW9CLEtBQUssc0NBQXNDLDZCQUE2Qix5Q0FBeUMsb0JBQW9CLHNCQUFzQix5QkFBeUIsS0FBSyxnQkFBZ0Isb0JBQW9CLDhCQUE4QiwwQkFBMEIsZ0NBQWdDLGtCQUFrQix3QkFBd0Isb0JBQW9CLEtBQUssdUJBQXVCLGdDQUFnQyw2Q0FBNkMsc0JBQXNCLHdCQUF3QiwyQkFBMkIsT0FBTyxxREFBcUQsc0JBQXNCLHNCQUFzQix3QkFBd0IscUJBQXFCLGdDQUFnQyxrQ0FBa0MsZ0NBQWdDLE9BQU8seUJBQXlCLHFCQUFxQix3QkFBd0IseUJBQXlCLDJCQUEyQixrQkFBa0IsaUJBQWlCLGVBQWUsT0FBTyw2Q0FBNkMscUJBQXFCLDhCQUE4Qix3QkFBd0IsT0FBTyxxQkFBcUIsdUJBQXVCLGdDQUFnQyxzQkFBc0IsT0FBTyxtREFBbUQsc0JBQXNCLCtCQUErQiw0QkFBNEIsMkNBQTJDLHdCQUF3QiwrQkFBK0IscUJBQXFCLE9BQU8sZ0NBQWdDLHNCQUFzQiwrQkFBK0IsZ0NBQWdDLDRCQUE0Qiw0QkFBNEIsOEJBQThCLE9BQU8sb0NBQW9DLDBCQUEwQixPQUFPLGtEQUFrRCw0QkFBNEIsT0FBTywyQkFBMkIsMkJBQTJCLHNCQUFzQiwrQkFBK0IsOEJBQThCLE9BQU8sK0JBQStCLDJCQUEyQix3QkFBd0IsT0FBTyx1QkFBdUIsNEJBQTRCLDBCQUEwQixPQUFPLDBCQUEwQiw2Q0FBNkMsNkJBQTZCLCtCQUErQiwwQkFBMEIsNEJBQTRCLDBCQUEwQixPQUFPLHlFQUF5RSx3QkFBd0IsT0FBTyxxQkFBcUIsZ0ZBQWdGLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sT0FBTyxVQUFVLHFHQUFxRyxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0scUJBQXFCLFdBQVcsNkJBQTZCLGdCQUFnQixpQkFBaUIsS0FBSyxjQUFjLHlCQUF5QixLQUFLLGNBQWMsc0NBQXNDLG1CQUFtQixLQUFLLDBCQUEwQixzQkFBc0IsMkVBQTJFLG1DQUFtQyxxQkFBcUIsS0FBSyxnQkFBZ0Isd0JBQXdCLGdDQUFnQyxrQkFBa0Isb0JBQW9CLHdDQUF3QywwQkFBMEIsb0JBQW9CLEtBQUssa0JBQWtCLGtCQUFrQix3QkFBd0IsNEJBQTRCLHNCQUFzQix5QkFBeUIsMEJBQTBCLEtBQUssd0JBQXdCLHFCQUFxQixLQUFLLGtCQUFrQixzQkFBc0Isd0JBQXdCLHlCQUF5QixLQUFLLHFCQUFxQix3QkFBd0IsS0FBSyxpQ0FBaUMsb0JBQW9CLDRDQUE0QyxrQkFBa0Isc0JBQXNCLG9CQUFvQixLQUFLLHNDQUFzQyw2QkFBNkIseUNBQXlDLG9CQUFvQixzQkFBc0IseUJBQXlCLEtBQUssZ0JBQWdCLG9CQUFvQiw4QkFBOEIsMEJBQTBCLGdDQUFnQyxrQkFBa0Isd0JBQXdCLG9CQUFvQixLQUFLLHVCQUF1QixnQ0FBZ0MsNkNBQTZDLHNCQUFzQix3QkFBd0IsMkJBQTJCLE9BQU8scURBQXFELHNCQUFzQixzQkFBc0Isd0JBQXdCLHFCQUFxQixnQ0FBZ0Msa0NBQWtDLGdDQUFnQyxPQUFPLHlCQUF5QixxQkFBcUIsd0JBQXdCLHlCQUF5QiwyQkFBMkIsa0JBQWtCLGlCQUFpQixlQUFlLE9BQU8sNkNBQTZDLHFCQUFxQiw4QkFBOEIsd0JBQXdCLE9BQU8scUJBQXFCLHVCQUF1QixnQ0FBZ0Msc0JBQXNCLE9BQU8sbURBQW1ELHNCQUFzQiwrQkFBK0IsNEJBQTRCLDJDQUEyQyx3QkFBd0IsK0JBQStCLHFCQUFxQixPQUFPLGdDQUFnQyxzQkFBc0IsK0JBQStCLGdDQUFnQyw0QkFBNEIsNEJBQTRCLDhCQUE4QixPQUFPLG9DQUFvQywwQkFBMEIsT0FBTyxrREFBa0QsNEJBQTRCLE9BQU8sMkJBQTJCLDJCQUEyQixzQkFBc0IsK0JBQStCLDhCQUE4QixPQUFPLCtCQUErQiwyQkFBMkIsd0JBQXdCLE9BQU8sdUJBQXVCLDRCQUE0QiwwQkFBMEIsT0FBTywwQkFBMEIsNkNBQTZDLDZCQUE2QiwrQkFBK0IsMEJBQTBCLDRCQUE0QiwwQkFBMEIsT0FBTyx5RUFBeUUsd0JBQXdCLE9BQU8saUNBQWlDO0FBQ3h3UjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7QUNSMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7O0FDckdhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDdkdhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNEQUFzRDs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7O0FBRUE7QUFDQSwwQ0FBMEM7QUFDMUM7O0FBRUE7O0FBRUE7QUFDQSxpRkFBaUY7QUFDakY7O0FBRUE7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsSUFBSTs7QUFFSjs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7QUNmcUI7QUFDZ0M7QUFDRztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixxRUFBVTtBQUNsQyxvQ0FBb0MsUUFBUTtBQUM1QztBQUNBO0FBQ0E7QUFDQSxxRUFBVzs7Ozs7Ozs7Ozs7Ozs7O0FDWlg7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLFVBQVU7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLElBQUksRUFBQztBQUNwQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBdUM7QUFDdkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4QnlDO0FBQ1Q7QUFDaEM7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHNEQUFXO0FBQ2pDLHNCQUFzQixPQUFPO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix1REFBSTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RnQztBQUNlO0FBQ1I7QUFDUTs7QUFFL0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUF5Qix1REFBSTtBQUM3QjtBQUNBO0FBQ0E7O0FBRUEsSUFBSSw0REFBVzs7QUFFZjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsSUFBSSw0REFBUzs7QUFFYjtBQUNBLFlBQVksb0RBQVM7QUFDckIsWUFBWSw0REFBUztBQUNyQixLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxpRUFBZSxXQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JvdXAtY2Fwc3RvbmUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2dyb3VwLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9ncm91cC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2dyb3VwLWNhcHN0b25lLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2dyb3VwLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2dyb3VwLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9ncm91cC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9ncm91cC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9ncm91cC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2dyb3VwLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZ3JvdXAtY2Fwc3RvbmUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZ3JvdXAtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9jb250ZW50LmpzIiwid2VicGFjazovL2dyb3VwLWNhcHN0b25lLy4vc3JjL21vZHVsZXMvY3JlYXRlSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vZ3JvdXAtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9oZWxwZXJNZXRob2RzLmpzIiwid2VicGFjazovL2dyb3VwLWNhcHN0b25lLy4vc3JjL21vZHVsZXMvcmVuZGVyQ29udGVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxhdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgICBmb250LXNpemU6IDYyLjUlO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250OiAxLjZyZW07XFxyXFxufVxcclxcblxcclxcbi5ncmlkX19jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcclxcbiAgICAnaGVhZGVyJ1xcclxcbiAgICAnbWFpbidcXHJcXG4gICAgJ2Zvb3Rlcic7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDMwNDA7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47ICAgXFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIGEge1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXHJcXG4gIG1hcmdpbi1yaWdodDogMnJlbTtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBhOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjZjA4MDQwO1xcclxcbn1cXHJcXG5cXHJcXG4uYnJhbmQgYSB7XFxyXFxuICBmb250LXNpemU6IDVyZW07XFxyXFxuICBtYXJnaW4tbGVmdDogM3JlbTtcXHJcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saW5rIGEge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5ncmlkX19jb250YWluZXItbW92aWVzIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvO1xcclxcbiAgZ2FwOiAyLjVyZW07XFxyXFxuICBwYWRkaW5nOiAxLjVyZW07XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZF9fY29udGFpbmVyLW1vdmllLWxpc3RzIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLCAwLjgpO1xcclxcbiAgcGFkZGluZzogMnJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAzMDQwO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIHBhZGRpbmc6IDNyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcbmdyaWQtaXRlbSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuOCk7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAvKiBNb2RhbCBzdHlsaW5nICovXFxyXFxuICAubW9kYWwtY29udGVudCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDRyZW07XFxyXFxuICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5zcGFuLWNsb3NlIHtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgbGVmdDogNDglO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY2xvc2U6aG92ZXIsXFxyXFxuICAuY2xvc2U6Zm9jdXMge1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZm9vdGVyIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAvKiBNb2RhbCBkaXNwbGF5ICovXFxyXFxuICAubW9kYWwtaXRlbXMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjI0LCA3MywgNzMpO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtIDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLm1vZGFsLWRlc2NyaXB0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogMC41cmVtIDVyZW07XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLm1vZGFsLWRlc2NyaXB0aW9uID4gKiB7XFxyXFxuICAgIHBhZGRpbmc6IDAuMnJlbSAwO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAubW9kYWwtaGVhZGVyMixcXHJcXG4gIC5tb2RhbC1jb21tZW50cyB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jb21tZW50LWZvcm0ge1xcclxcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNvbW1lbnQtZm9ybSA+ICoge1xcclxcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmZvcm0tYnRuIHtcXHJcXG4gICAgZm9udC1zdHlsZTogb2JsaXF1ZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jb21tZW50LWJ0biB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzQsIDEzOCwgMTM4KTtcXHJcXG4gICAgcGFkZGluZzogMC4zcmVtIDFyZW07XFxyXFxuICAgIGNvbG9yOiByZ2IoOTYsIDIyLCAxMyk7XFxyXFxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xcclxcbiAgICBmb250LXN0eWxlOiBvYmxpcXVlO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmZhczpob3ZlcixcXHJcXG4gIC5jb21tZW50LWJ0bjpob3ZlcixcXHJcXG4gIC5zcGFuLWNsb3NlOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuXFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLHNCQUFzQjtFQUN0QixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLFlBQVk7QUFDZDs7QUFFQTtJQUNJLGFBQWE7SUFDYjs7O1lBR1E7SUFDUiwwQkFBMEI7SUFDMUIsWUFBWTtBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsV0FBVztFQUNYLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxXQUFXO0VBQ1gsZUFBZTtFQUNmLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixrQ0FBa0M7RUFDbEMsYUFBYTtFQUNiLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixhQUFhO0FBQ2Y7OztBQUdBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG9DQUFvQztJQUNwQyxhQUFhO0lBQ2IsZUFBZTtJQUNmLGtCQUFrQjtFQUNwQjs7RUFFQSxrQkFBa0I7RUFDbEI7SUFDRSxhQUFhO0lBQ2IsYUFBYTtJQUNiLGVBQWU7SUFDZixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6Qix1QkFBdUI7RUFDekI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7SUFDUixNQUFNO0VBQ1I7O0VBRUE7O0lBRUUsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsY0FBYztJQUNkLHVCQUF1QjtJQUN2QixhQUFhO0VBQ2Y7O0VBRUEsa0JBQWtCO0VBQ2xCO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsa0NBQWtDO0lBQ2xDLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7O0lBRUUsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0Usb0NBQW9DO0lBQ3BDLG9CQUFvQjtJQUNwQixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixpQkFBaUI7RUFDbkI7O0VBRUE7OztJQUdFLGVBQWU7RUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TGF0bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw3MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw0MDA7MSw3MDA7MSw5MDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNjIuNSU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQ6IDEuNnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWRfX2NvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgICdoZWFkZXInXFxyXFxuICAgICdtYWluJ1xcclxcbiAgICAnZm9vdGVyJztcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMzA0MDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgICBcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwYWRkaW5nOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgYSB7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgZm9udC1zaXplOiA0cmVtO1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAycmVtO1xcclxcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIGE6aG92ZXIge1xcclxcbiAgY29sb3I6ICNmMDgwNDA7XFxyXFxufVxcclxcblxcclxcbi5icmFuZCBhIHtcXHJcXG4gIGZvbnQtc2l6ZTogNXJlbTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAzcmVtO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmF2LWxpbmsgYSB7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWRfX2NvbnRhaW5lci1tb3ZpZXMge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG87XFxyXFxuICBnYXA6IDIuNXJlbTtcXHJcXG4gIHBhZGRpbmc6IDEuNXJlbTtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxufVxcclxcblxcclxcbi5ncmlkX19jb250YWluZXItbW92aWUtbGlzdHMge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwwLDAsIDAuOCk7XFxyXFxuICBwYWRkaW5nOiAycmVtO1xcclxcbiAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDMwNDA7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgcGFkZGluZzogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuZ3JpZC1pdGVtIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC44KTtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC8qIE1vZGFsIHN0eWxpbmcgKi9cXHJcXG4gIC5tb2RhbC1jb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgcGFkZGluZzogNHJlbTtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLnNwYW4tY2xvc2Uge1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBsZWZ0OiA0OCU7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jbG9zZTpob3ZlcixcXHJcXG4gIC5jbG9zZTpmb2N1cyB7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5mb290ZXIge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC8qIE1vZGFsIGRpc3BsYXkgKi9cXHJcXG4gIC5tb2RhbC1pdGVtcyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMjQsIDczLCA3Myk7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW0gMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYXF1YTtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAubW9kYWwtZGVzY3JpcHRpb24ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiAwLjVyZW0gNXJlbTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAubW9kYWwtZGVzY3JpcHRpb24gPiAqIHtcXHJcXG4gICAgcGFkZGluZzogMC4ycmVtIDA7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5tb2RhbC1oZWFkZXIyLFxcclxcbiAgLm1vZGFsLWNvbW1lbnRzIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNvbW1lbnQtZm9ybSB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY29tbWVudC1mb3JtID4gKiB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcXHJcXG4gICAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZm9ybS1idG4ge1xcclxcbiAgICBmb250LXN0eWxlOiBvYmxpcXVlO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNvbW1lbnQtYnRuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzNCwgMTM4LCAxMzgpO1xcclxcbiAgICBwYWRkaW5nOiAwLjNyZW0gMXJlbTtcXHJcXG4gICAgY29sb3I6IHJnYig5NiwgMjIsIDEzKTtcXHJcXG4gICAgZm9udC1zaXplOiBtZWRpdW07XFxyXFxuICAgIGZvbnQtc3R5bGU6IG9ibGlxdWU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZmFzOmhvdmVyLFxcclxcbiAgLmNvbW1lbnQtYnRuOmhvdmVyLFxcclxcbiAgLnNwYW4tY2xvc2U6aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB9XFxyXFxuICBcXHJcXG5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgcmVuZGVyQ2FyZHMgZnJvbSAnLi9tb2R1bGVzL3JlbmRlckNvbnRlbnQuanMnO1xyXG5pbXBvcnQgeyBhcnRDb3VudGVyIH0gZnJvbSAnLi9tb2R1bGVzL2hlbHBlck1ldGhvZHMuanMnO1xyXG5cclxuY29uc3QgY291bnRNb3ZpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY291bnRfX21vdmllcycpO1xyXG5cclxuY29uc3QgY291bnRlckZ1bmMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgY291bnRlciA9IGF3YWl0IGFydENvdW50ZXIoKTtcclxuICBjb3VudE1vdmllcy5pbm5lckhUTUwgPSBgU2hvd3M6ICR7Y291bnRlcn1gO1xyXG59O1xyXG5cclxuY291bnRlckZ1bmMoKTtcclxucmVuZGVyQ2FyZHMoKTsiLCJjb25zdCBhcGlfZW5kcG9pbnQgPSAnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS8nO1xyXG5cclxuY29uc3QgbWFpbiA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoX2RhdGEgPSBhd2FpdCBmZXRjaChgJHtmZXRjaERhdGF9c2hvd3NgKTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoX2RhdGEuanNvbigpO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1haW47XHJcblxyXG4iLCJcclxuY29uc3QgcmVuZGVySW1hZ2UgPSAoc3JjLCBjb250KSA9PiB7XHJcbiAgICBjb25zdCBwaWNDb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwaWNDb250LmNsYXNzTGlzdC5hZGQoJ2ltZy1jb250Jyk7XHJcbiAgXHJcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGltZy5zcmNzZXQgPSBzcmM7XHJcbiAgXHJcbiAgICBwaWNDb250LmFwcGVuZChpbWcpO1xyXG4gICAgY29udC5hcHBlbmQocGljQ29udCk7XHJcbiAgfTtcclxuICAgIFxyXG4gIGNvbnN0IHJlbmRlckltYWdlMiA9IChzcmMsIGNvbnQpID0+IHtcclxuICAgIGNvbnN0IHBpY0NvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHBpY0NvbnQuY2xhc3NMaXN0LmFkZCgnbW9kYWwtaW1hZ2UnKTtcclxuICBcclxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgaW1nLnNyY3NldCA9IHNyYztcclxuICBcclxuICAgIHBpY0NvbnQuYXBwZW5kKGltZyk7XHJcbiAgICBjb250LmFwcGVuZChwaWNDb250KTtcclxuICB9O1xyXG4gICAgXHJcbiAgZXhwb3J0IHsgcmVuZGVySW1hZ2UsIHJlbmRlckltYWdlMiB9O1xyXG4gICIsImltcG9ydCB7IHVwZGF0ZUxpa2VzIH0gZnJvbSAnLi9saWtlcy5qcyc7XHJcbmltcG9ydCBtYWluIGZyb20gJy4vY29udGVudC5qcyc7XHJcblxyXG5cclxuY29uc3QgbGlrZUNvdW50ID0gYXN5bmMgKElkLCBjb250KSA9PiB7XHJcbiAgY29uc3QgY291bnQgPSBhd2FpdCB1cGRhdGVMaWtlcyhJZCk7XHJcbiAgY29udC5pbm5lckhUTUwgPSBgJHtjb3VudH0gbGlrZXNgO1xyXG59O1xyXG5cclxuY29uc3QgYXJ0Q291bnRlciA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBhcnRBcnIgPSBhd2FpdCBtYWluKCk7XHJcbiAgY29uc3QgYXJ0c0xlbmd0aCA9IGFydEFyci5sZW5ndGg7XHJcbiAgcmV0dXJuIGFydHNMZW5ndGg7XHJcbn07XHJcblxyXG5leHBvcnQge1xyXG4gIGxpa2VDb3VudCwgYXJ0Q291bnRlcixcclxufTsiLCJpbXBvcnQgbWFpbiBmcm9tICcuL2NvbnRlbnQuanMnO1xuaW1wb3J0IHsgcmVuZGVySW1hZ2UgfSBmcm9tICcuL2NyZWF0ZUltYWdlLmpzJztcbmltcG9ydCB7IHBvc3RMaWtlcyB9IGZyb20gJy4vbGlrZXMuanMnO1xuaW1wb3J0IHsgbGlrZUNvdW50IH0gZnJvbSAnLi9oZWxwZXJNZXRob2RzLmpzJztcblxuY29uc3QgZ3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ncmlkX19jb250YWluZXItbW92aWVzJyk7XG5jb25zdCBkaXNwbGF5TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY29udGVudCcpO1xuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpO1xuY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvb3RlcicpO1xuXG5jb25zdCByZW5kZXJDYXJkcyA9IGFzeW5jICgpID0+IHtcbiAgZ3JpZC5pbm5lckhUTUwgPSAnJztcbiAgY29uc3QgZGF0YUxpc3QgPSBhd2FpdCBtYWluKCk7XG4gIGRhdGFMaXN0LmZvckVhY2goKGVsKSA9PiB7XG4gICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhcmQuY2xhc3NMaXN0LmFkZCgnZ3JpZC1pdGVtJyk7XG5cbiAgICByZW5kZXJJbWFnZShlbC5pbWFnZS5tZWRpdW0sIGNhcmQpO1xuXG4gICAgY29uc3QgbmFtZUxpa2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbnN0IHNob3dOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBzaG93TmFtZS5jbGFzc0xpc3QuYWRkKCdzaG93bmFtZScpO1xuICAgIHNob3dOYW1lLmlubmVySFRNTCA9IGVsLm5hbWU7XG5cbiAgICBjb25zdCBsaWtlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICBsaWtlSWNvbi5jbGFzc0xpc3QuYWRkKCdmYXMnKTtcbiAgICBsaWtlSWNvbi5jbGFzc0xpc3QuYWRkKCdmYS1oZWFydCcpO1xuXG4gICAgY29uc3QgbGlrZUNvdW50ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbGlrZUNvdW50ZXIuY2xhc3NMaXN0LmFkZCgnbGlrZS1jb3VudGVyJyk7XG5cbiAgICBsaWtlQ291bnQoZWwuaWQsIGxpa2VDb3VudGVyKTtcblxuICAgIGxpa2VJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgICAgYXdhaXQgcG9zdExpa2VzKGVsLmlkKTtcbiAgICAgIGF3YWl0IGxpa2VDb3VudChlbC5pZCwgbGlrZUNvdW50ZXIpO1xuICAgIH0pO1xuXG4gICAgbmFtZUxpa2UuYXBwZW5kKHNob3dOYW1lLCBsaWtlSWNvbiwgbGlrZUNvdW50ZXIpO1xuXG4gICAgXG4gICAgY2FyZC5hcHBlbmQobmFtZUxpa2UsIGNvbW1lbnRCdG4pO1xuICAgIGdyaWQuYXBwZW5kKGNhcmQpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckNhcmRzOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==