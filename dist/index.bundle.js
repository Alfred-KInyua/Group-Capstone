"use strict";
(self["webpackChunkgroup_capstone"] = self["webpackChunkgroup_capstone"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  font-size: 62.5%;\n}\n\nbody {\n  font-family: 'Lato', sans-serif;\n}\n\nul,\nli {\n  list-style-type: none;\n}\n\n.header {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  font-size: 1.5rem;\n  border: 1px solid black;\n  background: #203040;\n  padding: 3rem;\n  color: #fff;\n  width: 100%;\n}\n\n.header a {\n  color: #fff;\n  font-size: 30px;\n  text-decoration: none;\n}\n\n.header a:hover {\n  color: #f08040;\n}\n\n.header ul {\n  display: flex;\n  padding: 1.3rem;\n  gap: 1.5rem;\n  margin-right: 20px;\n}\n\n.grid__container {\n  display: grid;\n  grid-template-columns: auto auto auto;\n  background-color: #f08040;\n  gap: 2.5rem;\n  padding: 3rem;\n}\n\n.grid__container-cards {\n  background-color: white;\n  border: 1px solid rgba(0, 0, 0, 0.8);\n  padding: 20px;\n  font-size: 15px;\n  text-align: center;\n  border-radius: 7px;\n  border-color: grey;\n  font-family: 'Lato', sans-serif;\n  color: #f08040;\n  height: auto;\n}\n\n.modal-content {\n  display: none;\n  padding: 4rem;\n  max-width: 100%;\n  height: auto;\n  border: 2px solid black;\n  background-color: #fefefe;\n}\n\n.span-close {\n  color: black;\n  font-size: 30px;\n  font-weight: 800;\n  position: relative;\n  left: 48%;\n  right: 0;\n  top: 0;\n}\n\n.close:hover,\n.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.footer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #203040;\n  color: #fff;\n  font-size: 1.2rem;\n  padding: 3rem;\n}\n\n.modal-items {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border: 1px solid grey;\n  padding: 1rem 0;\n  background-color: #fff;\n  height: auto;\n  font-family: 'Lato', sans-serif;\n  width: 768px;\n  margin: 0 auto;\n  border-radius: 6px;\n}\n\n.modal-description {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 0.5rem 5rem;\n  border: 1px solid grey;\n  border-radius: 7px;\n  font-family: 'Helvetica', sans-serif;\n  font-size: 13px;\n  width: 500px;\n  background-color: #f08040;\n  color: #fff;\n  padding: 15px;\n}\n\n.modal-description > * {\n  padding: 0.2rem 0;\n}\n\n.modal-header2,\n.modal-comments {\n  margin-bottom: 1rem;\n  font-family: 'Lato', sans-serif;\n}\n\n.comment-form {\n  margin-top: 0.5rem;\n  display: flex;\n  flex-direction: column;\n  justify-items: center;\n  font-family: 'Lato', sans-serif;\n}\n\n.comment-form > * {\n  margin-top: 0.5rem;\n  padding: 0.5rem;\n}\n\n.form-btn {\n  font-style: oblique;\n  font-weight: bold;\n  background-color: #f08040;\n  padding: 5px;\n  border: none;\n  width: 20rem;\n  border-radius: 7px;\n  height: 5rem;\n  cursor: pointer;\n}\n\n.comment-btn {\n  background-color: #f08040;\n  color: #000;\n  font-size: medium;\n  font-style: oblique;\n  font-weight: bold;\n  padding: 5px;\n  border: none;\n  width: 20rem;\n  border-radius: 7px;\n  height: 5rem;\n}\n\n.fas:hover,\n.comment-btn:hover,\n.span-close:hover {\n  cursor: pointer;\n}\n\n@media (max-width: 768px) {\n  .header {\n    flex: 1;\n    flex-wrap: wrap;\n  }\n\n  .grid__container {\n    grid-template-columns: 1fr;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,+BAA+B;AACjC;;AAEA;;EAEE,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,iBAAiB;EACjB,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,WAAW;EACX,WAAW;AACb;;AAEA;EACE,WAAW;EACX,eAAe;EACf,qBAAqB;AACvB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,eAAe;EACf,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,yBAAyB;EACzB,WAAW;EACX,aAAa;AACf;;AAEA;EACE,uBAAuB;EACvB,oCAAoC;EACpC,aAAa;EACb,eAAe;EACf,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;EAClB,+BAA+B;EAC/B,cAAc;EACd,YAAY;AACd;;AAEA;EACE,aAAa;EACb,aAAa;EACb,eAAe;EACf,YAAY;EACZ,uBAAuB;EACvB,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,kBAAkB;EAClB,SAAS;EACT,QAAQ;EACR,MAAM;AACR;;AAEA;;EAEE,YAAY;EACZ,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,yBAAyB;EACzB,WAAW;EACX,iBAAiB;EACjB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,sBAAsB;EACtB,eAAe;EACf,sBAAsB;EACtB,YAAY;EACZ,+BAA+B;EAC/B,YAAY;EACZ,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,mBAAmB;EACnB,sBAAsB;EACtB,kBAAkB;EAClB,oCAAoC;EACpC,eAAe;EACf,YAAY;EACZ,yBAAyB;EACzB,WAAW;EACX,aAAa;AACf;;AAEA;EACE,iBAAiB;AACnB;;AAEA;;EAEE,mBAAmB;EACnB,+BAA+B;AACjC;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,qBAAqB;EACrB,+BAA+B;AACjC;;AAEA;EACE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,mBAAmB;EACnB,iBAAiB;EACjB,yBAAyB;EACzB,YAAY;EACZ,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,yBAAyB;EACzB,WAAW;EACX,iBAAiB;EACjB,mBAAmB;EACnB,iBAAiB;EACjB,YAAY;EACZ,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,YAAY;AACd;;AAEA;;;EAGE,eAAe;AACjB;;AAEA;EACE;IACE,OAAO;IACP,eAAe;EACjB;;EAEA;IACE,0BAA0B;EAC5B;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  font-size: 62.5%;\n}\n\nbody {\n  font-family: 'Lato', sans-serif;\n}\n\nul,\nli {\n  list-style-type: none;\n}\n\n.header {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  font-size: 1.5rem;\n  border: 1px solid black;\n  background: #203040;\n  padding: 3rem;\n  color: #fff;\n  width: 100%;\n}\n\n.header a {\n  color: #fff;\n  font-size: 30px;\n  text-decoration: none;\n}\n\n.header a:hover {\n  color: #f08040;\n}\n\n.header ul {\n  display: flex;\n  padding: 1.3rem;\n  gap: 1.5rem;\n  margin-right: 20px;\n}\n\n.grid__container {\n  display: grid;\n  grid-template-columns: auto auto auto;\n  background-color: #f08040;\n  gap: 2.5rem;\n  padding: 3rem;\n}\n\n.grid__container-cards {\n  background-color: white;\n  border: 1px solid rgba(0, 0, 0, 0.8);\n  padding: 20px;\n  font-size: 15px;\n  text-align: center;\n  border-radius: 7px;\n  border-color: grey;\n  font-family: 'Lato', sans-serif;\n  color: #f08040;\n  height: auto;\n}\n\n.modal-content {\n  display: none;\n  padding: 4rem;\n  max-width: 100%;\n  height: auto;\n  border: 2px solid black;\n  background-color: #fefefe;\n}\n\n.span-close {\n  color: black;\n  font-size: 30px;\n  font-weight: 800;\n  position: relative;\n  left: 48%;\n  right: 0;\n  top: 0;\n}\n\n.close:hover,\n.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.footer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #203040;\n  color: #fff;\n  font-size: 1.2rem;\n  padding: 3rem;\n}\n\n.modal-items {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border: 1px solid grey;\n  padding: 1rem 0;\n  background-color: #fff;\n  height: auto;\n  font-family: 'Lato', sans-serif;\n  width: 768px;\n  margin: 0 auto;\n  border-radius: 6px;\n}\n\n.modal-description {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 0.5rem 5rem;\n  border: 1px solid grey;\n  border-radius: 7px;\n  font-family: 'Helvetica', sans-serif;\n  font-size: 13px;\n  width: 500px;\n  background-color: #f08040;\n  color: #fff;\n  padding: 15px;\n}\n\n.modal-description > * {\n  padding: 0.2rem 0;\n}\n\n.modal-header2,\n.modal-comments {\n  margin-bottom: 1rem;\n  font-family: 'Lato', sans-serif;\n}\n\n.comment-form {\n  margin-top: 0.5rem;\n  display: flex;\n  flex-direction: column;\n  justify-items: center;\n  font-family: 'Lato', sans-serif;\n}\n\n.comment-form > * {\n  margin-top: 0.5rem;\n  padding: 0.5rem;\n}\n\n.form-btn {\n  font-style: oblique;\n  font-weight: bold;\n  background-color: #f08040;\n  padding: 5px;\n  border: none;\n  width: 20rem;\n  border-radius: 7px;\n  height: 5rem;\n  cursor: pointer;\n}\n\n.comment-btn {\n  background-color: #f08040;\n  color: #000;\n  font-size: medium;\n  font-style: oblique;\n  font-weight: bold;\n  padding: 5px;\n  border: none;\n  width: 20rem;\n  border-radius: 7px;\n  height: 5rem;\n}\n\n.fas:hover,\n.comment-btn:hover,\n.span-close:hover {\n  cursor: pointer;\n}\n\n@media (max-width: 768px) {\n  .header {\n    flex: 1;\n    flex-wrap: wrap;\n  }\n\n  .grid__container {\n    grid-template-columns: 1fr;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



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

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_renderContent_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/renderContent.js */ "./src/modules/renderContent.js");
/* harmony import */ var _modules_helpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/helpers.js */ "./src/modules/helpers.js");




const articlesDisplay = document.querySelector('.movies__counter');

const counterFunc = async () => {
  const counter = await (0,_modules_helpers_js__WEBPACK_IMPORTED_MODULE_2__.artCounter)();
  articlesDisplay.innerHTML = `Shows: ${counter}`;
};

counterFunc();
(0,_modules_renderContent_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

/***/ }),

/***/ "./src/modules/buildImage.js":
/*!***********************************!*\
  !*** ./src/modules/buildImage.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./src/modules/comments.js":
/*!*********************************!*\
  !*** ./src/modules/comments.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getComments": () => (/* binding */ getComments),
/* harmony export */   "postComment": () => (/* binding */ postComment)
/* harmony export */ });
/* harmony import */ var _likes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./likes.js */ "./src/modules/likes.js");


const postComment = async (id, name, body) => {
  const response = await fetch(
    `${_likes_js__WEBPACK_IMPORTED_MODULE_0__.networkRequest}${_likes_js__WEBPACK_IMPORTED_MODULE_0__.appID}/comments`, {
      method: 'POST',
      body: JSON.stringify({
        item_id: id,
        username: name,
        comment: body,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );
  return response;
};

const getComments = async (id) => {
  const commentArr = await fetch(`${_likes_js__WEBPACK_IMPORTED_MODULE_0__.networkRequest}${_likes_js__WEBPACK_IMPORTED_MODULE_0__.appID}/comments?item_id=${id}`);
  const comments = commentArr.json();
  return comments;
};



/***/ }),

/***/ "./src/modules/content.js":
/*!********************************!*\
  !*** ./src/modules/content.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const apiEndpoint = 'https://api.tvmaze.com/';

const main = async () => {
  const fetchData = await fetch(`${apiEndpoint}shows`);
  const result = await fetchData.json();

  return result;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (main);

/***/ }),

/***/ "./src/modules/helpers.js":
/*!********************************!*\
  !*** ./src/modules/helpers.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "artCounter": () => (/* binding */ artCounter),
/* harmony export */   "commentsCount": () => (/* binding */ commentsCount),
/* harmony export */   "likeCount": () => (/* binding */ likeCount),
/* harmony export */   "renderComments": () => (/* binding */ renderComments)
/* harmony export */ });
/* harmony import */ var _comments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comments.js */ "./src/modules/comments.js");
/* harmony import */ var _likes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./likes.js */ "./src/modules/likes.js");
/* harmony import */ var _content_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content.js */ "./src/modules/content.js");




const renderComments = async (id, modalCont) => {
  const comments = await (0,_comments_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(id);
  modalCont.innerHTML = '';
  if (Array.isArray(comments)) {
    comments.forEach((el) => {
      const commentCont = document.createElement('p');
      commentCont.innerHTML = `${el.creation_date} ${el.username}: ${el.comment}`;
      modalCont.append(commentCont);
    });
  }
};

const commentsCount = async (id, cont) => {
  const comments = await (0,_comments_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(id);
  if (Array.isArray(comments)) {
    const commentCount = comments.length;
    cont.innerHTML = `Comments: ${commentCount}`;
  } else {
    cont.innerHTML = 'Comments: 0';
  }
};

const likeCount = async (Id, cont) => {
  const count = await (0,_likes_js__WEBPACK_IMPORTED_MODULE_1__.updateLikes)(Id);
  cont.innerHTML = `${count} likes`;
};

const artCounter = async () => {
  const artArr = await (0,_content_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const artsLength = artArr.length;
  return artsLength;
};



/***/ }),

/***/ "./src/modules/likes.js":
/*!******************************!*\
  !*** ./src/modules/likes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appID": () => (/* binding */ appID),
/* harmony export */   "getLikes": () => (/* binding */ getLikes),
/* harmony export */   "networkRequest": () => (/* binding */ networkRequest),
/* harmony export */   "postLike": () => (/* binding */ postLike),
/* harmony export */   "updateLikes": () => (/* binding */ updateLikes)
/* harmony export */ });
const networkRequest = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

const appID = 'Km2IRmmIjbL7vNKDRpvP';

const postLike = async (id) => {
  const data = await fetch(
    `${networkRequest}${appID}/likes`, {
      method: 'POST',
      body: JSON.stringify({
        item_id: id,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );
  return data;
};

const getLikes = async () => {
  const likesData = await fetch(`${networkRequest}${appID}/likes`);
  const likesArray = await likesData.json();
  return likesArray;
};

const updateLikes = async (id) => {
  const changeLikesData = await getLikes();
  let results = 0;
  changeLikesData.forEach((e) => {
    if (e.item_id.toString() === id.toString()) {
      results = e.likes;
    }
  });

  return results;
};



/***/ }),

/***/ "./src/modules/popModal.js":
/*!*********************************!*\
  !*** ./src/modules/popModal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _buildImage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buildImage.js */ "./src/modules/buildImage.js");
/* harmony import */ var _comments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comments.js */ "./src/modules/comments.js");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers.js */ "./src/modules/helpers.js");




const displayModal = document.querySelector('.modal-content');
const grid = document.querySelector('.grid__container');
const header = document.querySelector('.header');
const footer = document.querySelector('.footer');

const popModal = async (element) => {
  displayModal.innerHTML = '';
  const ItemsCont = document.createElement('div');
  ItemsCont.classList.add('modal-items');

  const closeSpan = document.createElement('span');
  closeSpan.classList.add('span-close');
  closeSpan.innerHTML = '&times;';
  closeSpan.addEventListener('click', (e) => {
    e.preventDefault();
    displayModal.style.display = 'none';
    grid.style.display = 'grid';
    header.style.display = 'flex';
    footer.style.display = 'block';
  });
  const showTitle = document.createElement('h3');
  showTitle.innerHTML = element.name;

  const elementItems = document.createElement('div');
  elementItems.classList.add('modal-description');

  const showLang = document.createElement('div');
  showLang.classList.add('list-item');
  showLang.innerHTML = `Main Language: ${element.language}`;

  const showTime = document.createElement('div');
  showTime.classList.add('list-item');
  showTime.innerHTML = `Runtime: ${element.runtime}`;

  const showPremiere = document.createElement('div');
  showPremiere.classList.add('list-item');
  showPremiere.innerHTML = `Premiered on: ${element.premiered}`;

  const showGenre = document.createElement('div');
  showGenre.classList.add('list-item');
  showGenre.innerHTML = `Genre: ${element.genres[0]}`;

  const showDesc = document.createElement('p');
  showDesc.classList.add('show-description');
  const string = element.summary.slice(0, 200);
  showDesc.innerHTML = `${string}...`;

  const modalCommentHeader = document.createElement('h3');
  modalCommentHeader.classList.add('modal-header2');
  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_2__.commentsCount)(element.id, modalCommentHeader);

  const modalCommentContainer = document.createElement('div');
  modalCommentContainer.classList.add('modal-comments');

  (0,_helpers_js__WEBPACK_IMPORTED_MODULE_2__.renderComments)(element.id, modalCommentContainer);

  const modalFormHeader = document.createElement('h3');
  modalFormHeader.innerHTML = 'Add a comment';

  const modalForm = document.createElement('form');
  modalForm.classList.add('comment-form');

  const formInput = document.createElement('input');
  formInput.setAttribute('type', 'text');
  formInput.setAttribute('placeholder', 'Your Name');
  modalForm.appendChild(formInput);

  const textArea = document.createElement('textarea');
  textArea.setAttribute('rows', '6');
  textArea.setAttribute('column', '40');
  textArea.setAttribute('placeholder', 'Your Insight');
  modalForm.appendChild(textArea);

  const formSubmit = document.createElement('input');
  formSubmit.setAttribute('type', 'button');
  formSubmit.setAttribute('value', 'Submit');
  formSubmit.classList.add('form-btn');
  modalForm.appendChild(formSubmit);

  ItemsCont.append(closeSpan);
  (0,_buildImage_js__WEBPACK_IMPORTED_MODULE_0__.renderImage2)(element.image.medium, ItemsCont);
  ItemsCont.append(showTitle, elementItems, modalCommentHeader);
  ItemsCont.append(modalCommentContainer, modalFormHeader, modalForm);
  displayModal.append(ItemsCont);
  elementItems.append(showLang, showPremiere, showGenre, showTime, showDesc);

  const btn = document.querySelector('.form-btn');
  btn.addEventListener('click', async (e) => {
    e.preventDefault();
    if (textArea.value && formInput.value) {
      await (0,_comments_js__WEBPACK_IMPORTED_MODULE_1__.postComment)(element.id, formInput.value, textArea.value);
      await (0,_helpers_js__WEBPACK_IMPORTED_MODULE_2__.renderComments)(element.id, modalCommentContainer);
      await (0,_helpers_js__WEBPACK_IMPORTED_MODULE_2__.commentsCount)(element.id, modalCommentHeader);
      textArea.value = '';
      formInput.value = '';
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (popModal);

/***/ }),

/***/ "./src/modules/renderContent.js":
/*!**************************************!*\
  !*** ./src/modules/renderContent.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _content_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content.js */ "./src/modules/content.js");
/* harmony import */ var _buildImage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buildImage.js */ "./src/modules/buildImage.js");
/* harmony import */ var _popModal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popModal.js */ "./src/modules/popModal.js");
/* harmony import */ var _likes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./likes.js */ "./src/modules/likes.js");
/* harmony import */ var _helpers_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers.js */ "./src/modules/helpers.js");






const grid = document.querySelector('.grid__container');
const displayModal = document.querySelector('.modal-content');
const header = document.querySelector('.header');
const footer = document.querySelector('.footer');

const renderCards = async () => {
  grid.innerHTML = '';
  const dataList = await (0,_content_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
  dataList.forEach((el) => {
    const card = document.createElement('div');
    card.classList.add('grid__container-cards');

    (0,_buildImage_js__WEBPACK_IMPORTED_MODULE_1__.renderImage)(el.image.medium, card);

    const nameLike = document.createElement('div');

    const showName = document.createElement('h3');
    showName.classList.add('showname');
    showName.innerHTML = el.name;

    const likeIcon = document.createElement('i');
    likeIcon.classList.add('fas');
    likeIcon.classList.add('fa-heart');

    const likeCounter = document.createElement('p');
    likeCounter.classList.add('like-counter');

    (0,_helpers_js__WEBPACK_IMPORTED_MODULE_4__.likeCount)(el.id, likeCounter);

    likeIcon.addEventListener('click', async () => {
      await (0,_likes_js__WEBPACK_IMPORTED_MODULE_3__.postLike)(el.id);
      await (0,_helpers_js__WEBPACK_IMPORTED_MODULE_4__.likeCount)(el.id, likeCounter);
    });

    nameLike.append(showName, likeIcon, likeCounter);

    const commentBtn = document.createElement('button');
    commentBtn.classList.add('comment-btn');
    commentBtn.innerHTML = 'comment';
    commentBtn.addEventListener('click', (e) => {
      e.preventDefault();
      (0,_popModal_js__WEBPACK_IMPORTED_MODULE_2__["default"])(el);
      displayModal.style.display = 'block';
      grid.style.display = 'none';
      header.style.display = 'none';
      footer.style.display = 'none';
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7O0FBRUE7QUFDQSxFQUFFLDREQUFZO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHlEQUFXO0FBQ3ZCLFlBQVksMkRBQWM7QUFDMUIsWUFBWSwwREFBYTtBQUN6QjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsaUVBQWUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZHUztBQUNjO0FBQ1Q7QUFDQztBQUNHOztBQUV6QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCLHVEQUFJO0FBQzdCO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLDJEQUFXOztBQUVmOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxJQUFJLHNEQUFTOztBQUViO0FBQ0EsWUFBWSxtREFBUTtBQUNwQixZQUFZLHNEQUFTO0FBQ3JCLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sd0RBQVE7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLGlFQUFlLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncm91cC1jYXBzdG9uZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vZ3JvdXAtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2dyb3VwLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZ3JvdXAtY2Fwc3RvbmUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vZ3JvdXAtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZ3JvdXAtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2dyb3VwLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2dyb3VwLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2dyb3VwLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZ3JvdXAtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9ncm91cC1jYXBzdG9uZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9ncm91cC1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2J1aWxkSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vZ3JvdXAtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9jb21tZW50cy5qcyIsIndlYnBhY2s6Ly9ncm91cC1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vZ3JvdXAtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9oZWxwZXJzLmpzIiwid2VicGFjazovL2dyb3VwLWNhcHN0b25lLy4vc3JjL21vZHVsZXMvbGlrZXMuanMiLCJ3ZWJwYWNrOi8vZ3JvdXAtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9wb3BNb2RhbC5qcyIsIndlYnBhY2s6Ly9ncm91cC1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL3JlbmRlckNvbnRlbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1MYXRvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDcwMDswLDkwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDcwMDsxLDkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5odG1sIHtcXG4gIGZvbnQtc2l6ZTogNjIuNSU7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxudWwsXFxubGkge1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJhY2tncm91bmQ6ICMyMDMwNDA7XFxuICBwYWRkaW5nOiAzcmVtO1xcbiAgY29sb3I6ICNmZmY7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmhlYWRlciBhIHtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4uaGVhZGVyIGE6aG92ZXIge1xcbiAgY29sb3I6ICNmMDgwNDA7XFxufVxcblxcbi5oZWFkZXIgdWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDEuM3JlbTtcXG4gIGdhcDogMS41cmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbn1cXG5cXG4uZ3JpZF9fY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwODA0MDtcXG4gIGdhcDogMi41cmVtO1xcbiAgcGFkZGluZzogM3JlbTtcXG59XFxuXFxuLmdyaWRfX2NvbnRhaW5lci1jYXJkcyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC44KTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICBib3JkZXItY29sb3I6IGdyZXk7XFxuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6ICNmMDgwNDA7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi5tb2RhbC1jb250ZW50IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwYWRkaW5nOiA0cmVtO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcbn1cXG5cXG4uc3Bhbi1jbG9zZSB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBmb250LXdlaWdodDogODAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGVmdDogNDglO1xcbiAgcmlnaHQ6IDA7XFxuICB0b3A6IDA7XFxufVxcblxcbi5jbG9zZTpob3ZlcixcXG4uY2xvc2U6Zm9jdXMge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAzMDQwO1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIHBhZGRpbmc6IDNyZW07XFxufVxcblxcbi5tb2RhbC1pdGVtcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgcGFkZGluZzogMXJlbSAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGhlaWdodDogYXV0bztcXG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxuICB3aWR0aDogNzY4cHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuXFxuLm1vZGFsLWRlc2NyaXB0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAwLjVyZW0gNXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICBmb250LWZhbWlseTogJ0hlbHZldGljYScsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICB3aWR0aDogNTAwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjA4MDQwO1xcbiAgY29sb3I6ICNmZmY7XFxuICBwYWRkaW5nOiAxNXB4O1xcbn1cXG5cXG4ubW9kYWwtZGVzY3JpcHRpb24gPiAqIHtcXG4gIHBhZGRpbmc6IDAuMnJlbSAwO1xcbn1cXG5cXG4ubW9kYWwtaGVhZGVyMixcXG4ubW9kYWwtY29tbWVudHMge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5jb21tZW50LWZvcm0ge1xcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uY29tbWVudC1mb3JtID4gKiB7XFxuICBtYXJnaW4tdG9wOiAwLjVyZW07XFxuICBwYWRkaW5nOiAwLjVyZW07XFxufVxcblxcbi5mb3JtLWJ0biB7XFxuICBmb250LXN0eWxlOiBvYmxpcXVlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjA4MDQwO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgd2lkdGg6IDIwcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgaGVpZ2h0OiA1cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uY29tbWVudC1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwODA0MDtcXG4gIGNvbG9yOiAjMDAwO1xcbiAgZm9udC1zaXplOiBtZWRpdW07XFxuICBmb250LXN0eWxlOiBvYmxpcXVlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICB3aWR0aDogMjByZW07XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICBoZWlnaHQ6IDVyZW07XFxufVxcblxcbi5mYXM6aG92ZXIsXFxuLmNvbW1lbnQtYnRuOmhvdmVyLFxcbi5zcGFuLWNsb3NlOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICAuaGVhZGVyIHtcXG4gICAgZmxleDogMTtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgfVxcblxcbiAgLmdyaWRfX2NvbnRhaW5lciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBRUE7O0VBRUUscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG9DQUFvQztFQUNwQyxhQUFhO0VBQ2IsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLCtCQUErQjtFQUMvQixjQUFjO0VBQ2QsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixlQUFlO0VBQ2YsWUFBWTtFQUNaLHVCQUF1QjtFQUN2Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVE7RUFDUixNQUFNO0FBQ1I7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLCtCQUErQjtFQUMvQixZQUFZO0VBQ1osY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixvQ0FBb0M7RUFDcEMsZUFBZTtFQUNmLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsV0FBVztFQUNYLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxtQkFBbUI7RUFDbkIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBOzs7RUFHRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0U7SUFDRSxPQUFPO0lBQ1AsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1QjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxhdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmh0bWwge1xcbiAgZm9udC1zaXplOiA2Mi41JTtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG51bCxcXG5saSB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYmFja2dyb3VuZDogIzIwMzA0MDtcXG4gIHBhZGRpbmc6IDNyZW07XFxuICBjb2xvcjogI2ZmZjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaGVhZGVyIGEge1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcblxcbi5oZWFkZXIgYTpob3ZlciB7XFxuICBjb2xvcjogI2YwODA0MDtcXG59XFxuXFxuLmhlYWRlciB1bCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMS4zcmVtO1xcbiAgZ2FwOiAxLjVyZW07XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxufVxcblxcbi5ncmlkX19jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjA4MDQwO1xcbiAgZ2FwOiAyLjVyZW07XFxuICBwYWRkaW5nOiAzcmVtO1xcbn1cXG5cXG4uZ3JpZF9fY29udGFpbmVyLWNhcmRzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIGJvcmRlci1jb2xvcjogZ3JleTtcXG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogI2YwODA0MDtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLm1vZGFsLWNvbnRlbnQge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBhZGRpbmc6IDRyZW07XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxufVxcblxcbi5zcGFuLWNsb3NlIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGZvbnQtc2l6ZTogMzBweDtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsZWZ0OiA0OCU7XFxuICByaWdodDogMDtcXG4gIHRvcDogMDtcXG59XFxuXFxuLmNsb3NlOmhvdmVyLFxcbi5jbG9zZTpmb2N1cyB7XFxuICBjb2xvcjogYmxhY2s7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDMwNDA7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgcGFkZGluZzogM3JlbTtcXG59XFxuXFxuLm1vZGFsLWl0ZW1zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICBwYWRkaW5nOiAxcmVtIDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXG4gIHdpZHRoOiA3NjhweDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG5cXG4ubW9kYWwtZGVzY3JpcHRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDAuNXJlbSA1cmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIGZvbnQtZmFtaWx5OiAnSGVsdmV0aWNhJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIHdpZHRoOiA1MDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMDgwNDA7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHBhZGRpbmc6IDE1cHg7XFxufVxcblxcbi5tb2RhbC1kZXNjcmlwdGlvbiA+ICoge1xcbiAgcGFkZGluZzogMC4ycmVtIDA7XFxufVxcblxcbi5tb2RhbC1oZWFkZXIyLFxcbi5tb2RhbC1jb21tZW50cyB7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmNvbW1lbnQtZm9ybSB7XFxuICBtYXJnaW4tdG9wOiAwLjVyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5jb21tZW50LWZvcm0gPiAqIHtcXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuXFxuLmZvcm0tYnRuIHtcXG4gIGZvbnQtc3R5bGU6IG9ibGlxdWU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMDgwNDA7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICB3aWR0aDogMjByZW07XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICBoZWlnaHQ6IDVyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5jb21tZW50LWJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjA4MDQwO1xcbiAgY29sb3I6ICMwMDA7XFxuICBmb250LXNpemU6IG1lZGl1bTtcXG4gIGZvbnQtc3R5bGU6IG9ibGlxdWU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIHdpZHRoOiAyMHJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIGhlaWdodDogNXJlbTtcXG59XFxuXFxuLmZhczpob3ZlcixcXG4uY29tbWVudC1idG46aG92ZXIsXFxuLnNwYW4tY2xvc2U6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIC5oZWFkZXIge1xcbiAgICBmbGV4OiAxO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICB9XFxuXFxuICAuZ3JpZF9fY29udGFpbmVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgcmVuZGVyQ2FyZHMgZnJvbSAnLi9tb2R1bGVzL3JlbmRlckNvbnRlbnQuanMnO1xuaW1wb3J0IHsgYXJ0Q291bnRlciB9IGZyb20gJy4vbW9kdWxlcy9oZWxwZXJzLmpzJztcblxuY29uc3QgYXJ0aWNsZXNEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vdmllc19fY291bnRlcicpO1xuXG5jb25zdCBjb3VudGVyRnVuYyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgY291bnRlciA9IGF3YWl0IGFydENvdW50ZXIoKTtcbiAgYXJ0aWNsZXNEaXNwbGF5LmlubmVySFRNTCA9IGBTaG93czogJHtjb3VudGVyfWA7XG59O1xuXG5jb3VudGVyRnVuYygpO1xucmVuZGVyQ2FyZHMoKTsiLCJjb25zdCByZW5kZXJJbWFnZSA9IChzcmMsIGNvbnQpID0+IHtcbiAgY29uc3QgcGljQ29udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBwaWNDb250LmNsYXNzTGlzdC5hZGQoJ2ltZy1jb250Jyk7XG5cbiAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGltZy5zcmNzZXQgPSBzcmM7XG5cbiAgcGljQ29udC5hcHBlbmQoaW1nKTtcbiAgY29udC5hcHBlbmQocGljQ29udCk7XG59O1xuXG5jb25zdCByZW5kZXJJbWFnZTIgPSAoc3JjLCBjb250KSA9PiB7XG4gIGNvbnN0IHBpY0NvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgcGljQ29udC5jbGFzc0xpc3QuYWRkKCdtb2RhbC1pbWFnZScpO1xuXG4gIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpbWcuc3Jjc2V0ID0gc3JjO1xuXG4gIHBpY0NvbnQuYXBwZW5kKGltZyk7XG4gIGNvbnQuYXBwZW5kKHBpY0NvbnQpO1xufTtcblxuZXhwb3J0IHsgcmVuZGVySW1hZ2UsIHJlbmRlckltYWdlMiB9OyIsImltcG9ydCB7IG5ldHdvcmtSZXF1ZXN0LCBhcHBJRCB9IGZyb20gJy4vbGlrZXMuanMnO1xuXG5jb25zdCBwb3N0Q29tbWVudCA9IGFzeW5jIChpZCwgbmFtZSwgYm9keSkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAgIGAke25ldHdvcmtSZXF1ZXN0fSR7YXBwSUR9L2NvbW1lbnRzYCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgIGl0ZW1faWQ6IGlkLFxuICAgICAgICB1c2VybmFtZTogbmFtZSxcbiAgICAgICAgY29tbWVudDogYm9keSxcbiAgICAgIH0pLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxuICAgICAgfSxcbiAgICB9LFxuICApO1xuICByZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5jb25zdCBnZXRDb21tZW50cyA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCBjb21tZW50QXJyID0gYXdhaXQgZmV0Y2goYCR7bmV0d29ya1JlcXVlc3R9JHthcHBJRH0vY29tbWVudHM/aXRlbV9pZD0ke2lkfWApO1xuICBjb25zdCBjb21tZW50cyA9IGNvbW1lbnRBcnIuanNvbigpO1xuICByZXR1cm4gY29tbWVudHM7XG59O1xuXG5leHBvcnQgeyBwb3N0Q29tbWVudCwgZ2V0Q29tbWVudHMgfTsiLCJjb25zdCBhcGlFbmRwb2ludCA9ICdodHRwczovL2FwaS50dm1hemUuY29tLyc7XG5cbmNvbnN0IG1haW4gPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGZldGNoRGF0YSA9IGF3YWl0IGZldGNoKGAke2FwaUVuZHBvaW50fXNob3dzYCk7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoRGF0YS5qc29uKCk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG1haW47IiwiaW1wb3J0IHsgZ2V0Q29tbWVudHMgfSBmcm9tICcuL2NvbW1lbnRzLmpzJztcbmltcG9ydCB7IHVwZGF0ZUxpa2VzIH0gZnJvbSAnLi9saWtlcy5qcyc7XG5pbXBvcnQgbWFpbiBmcm9tICcuL2NvbnRlbnQuanMnO1xuXG5jb25zdCByZW5kZXJDb21tZW50cyA9IGFzeW5jIChpZCwgbW9kYWxDb250KSA9PiB7XG4gIGNvbnN0IGNvbW1lbnRzID0gYXdhaXQgZ2V0Q29tbWVudHMoaWQpO1xuICBtb2RhbENvbnQuaW5uZXJIVE1MID0gJyc7XG4gIGlmIChBcnJheS5pc0FycmF5KGNvbW1lbnRzKSkge1xuICAgIGNvbW1lbnRzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICBjb25zdCBjb21tZW50Q29udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgIGNvbW1lbnRDb250LmlubmVySFRNTCA9IGAke2VsLmNyZWF0aW9uX2RhdGV9ICR7ZWwudXNlcm5hbWV9OiAke2VsLmNvbW1lbnR9YDtcbiAgICAgIG1vZGFsQ29udC5hcHBlbmQoY29tbWVudENvbnQpO1xuICAgIH0pO1xuICB9XG59O1xuXG5jb25zdCBjb21tZW50c0NvdW50ID0gYXN5bmMgKGlkLCBjb250KSA9PiB7XG4gIGNvbnN0IGNvbW1lbnRzID0gYXdhaXQgZ2V0Q29tbWVudHMoaWQpO1xuICBpZiAoQXJyYXkuaXNBcnJheShjb21tZW50cykpIHtcbiAgICBjb25zdCBjb21tZW50Q291bnQgPSBjb21tZW50cy5sZW5ndGg7XG4gICAgY29udC5pbm5lckhUTUwgPSBgQ29tbWVudHM6ICR7Y29tbWVudENvdW50fWA7XG4gIH0gZWxzZSB7XG4gICAgY29udC5pbm5lckhUTUwgPSAnQ29tbWVudHM6IDAnO1xuICB9XG59O1xuXG5jb25zdCBsaWtlQ291bnQgPSBhc3luYyAoSWQsIGNvbnQpID0+IHtcbiAgY29uc3QgY291bnQgPSBhd2FpdCB1cGRhdGVMaWtlcyhJZCk7XG4gIGNvbnQuaW5uZXJIVE1MID0gYCR7Y291bnR9IGxpa2VzYDtcbn07XG5cbmNvbnN0IGFydENvdW50ZXIgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGFydEFyciA9IGF3YWl0IG1haW4oKTtcbiAgY29uc3QgYXJ0c0xlbmd0aCA9IGFydEFyci5sZW5ndGg7XG4gIHJldHVybiBhcnRzTGVuZ3RoO1xufTtcblxuZXhwb3J0IHtcbiAgcmVuZGVyQ29tbWVudHMsIGxpa2VDb3VudCwgY29tbWVudHNDb3VudCwgYXJ0Q291bnRlcixcbn07IiwiY29uc3QgbmV0d29ya1JlcXVlc3QgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvJztcblxuY29uc3QgYXBwSUQgPSAnS20ySVJtbUlqYkw3dk5LRFJwdlAnO1xuXG5jb25zdCBwb3N0TGlrZSA9IGFzeW5jIChpZCkgPT4ge1xuICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goXG4gICAgYCR7bmV0d29ya1JlcXVlc3R9JHthcHBJRH0vbGlrZXNgLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgaXRlbV9pZDogaWQsXG4gICAgICB9KSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04JyxcbiAgICAgIH0sXG4gICAgfSxcbiAgKTtcbiAgcmV0dXJuIGRhdGE7XG59O1xuXG5jb25zdCBnZXRMaWtlcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgbGlrZXNEYXRhID0gYXdhaXQgZmV0Y2goYCR7bmV0d29ya1JlcXVlc3R9JHthcHBJRH0vbGlrZXNgKTtcbiAgY29uc3QgbGlrZXNBcnJheSA9IGF3YWl0IGxpa2VzRGF0YS5qc29uKCk7XG4gIHJldHVybiBsaWtlc0FycmF5O1xufTtcblxuY29uc3QgdXBkYXRlTGlrZXMgPSBhc3luYyAoaWQpID0+IHtcbiAgY29uc3QgY2hhbmdlTGlrZXNEYXRhID0gYXdhaXQgZ2V0TGlrZXMoKTtcbiAgbGV0IHJlc3VsdHMgPSAwO1xuICBjaGFuZ2VMaWtlc0RhdGEuZm9yRWFjaCgoZSkgPT4ge1xuICAgIGlmIChlLml0ZW1faWQudG9TdHJpbmcoKSA9PT0gaWQudG9TdHJpbmcoKSkge1xuICAgICAgcmVzdWx0cyA9IGUubGlrZXM7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcmVzdWx0cztcbn07XG5cbmV4cG9ydCB7XG4gIGdldExpa2VzLCBwb3N0TGlrZSwgdXBkYXRlTGlrZXMsIG5ldHdvcmtSZXF1ZXN0LCBhcHBJRCxcbn07IiwiaW1wb3J0IHsgcmVuZGVySW1hZ2UyIH0gZnJvbSAnLi9idWlsZEltYWdlLmpzJztcbmltcG9ydCB7IHBvc3RDb21tZW50IH0gZnJvbSAnLi9jb21tZW50cy5qcyc7XG5pbXBvcnQgeyByZW5kZXJDb21tZW50cywgY29tbWVudHNDb3VudCB9IGZyb20gJy4vaGVscGVycy5qcyc7XG5cbmNvbnN0IGRpc3BsYXlNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jb250ZW50Jyk7XG5jb25zdCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyaWRfX2NvbnRhaW5lcicpO1xuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpO1xuY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvb3RlcicpO1xuXG5jb25zdCBwb3BNb2RhbCA9IGFzeW5jIChlbGVtZW50KSA9PiB7XG4gIGRpc3BsYXlNb2RhbC5pbm5lckhUTUwgPSAnJztcbiAgY29uc3QgSXRlbXNDb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIEl0ZW1zQ29udC5jbGFzc0xpc3QuYWRkKCdtb2RhbC1pdGVtcycpO1xuXG4gIGNvbnN0IGNsb3NlU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgY2xvc2VTcGFuLmNsYXNzTGlzdC5hZGQoJ3NwYW4tY2xvc2UnKTtcbiAgY2xvc2VTcGFuLmlubmVySFRNTCA9ICcmdGltZXM7JztcbiAgY2xvc2VTcGFuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZGlzcGxheU1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgZ3JpZC5zdHlsZS5kaXNwbGF5ID0gJ2dyaWQnO1xuICAgIGhlYWRlci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgIGZvb3Rlci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgfSk7XG4gIGNvbnN0IHNob3dUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIHNob3dUaXRsZS5pbm5lckhUTUwgPSBlbGVtZW50Lm5hbWU7XG5cbiAgY29uc3QgZWxlbWVudEl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGVsZW1lbnRJdGVtcy5jbGFzc0xpc3QuYWRkKCdtb2RhbC1kZXNjcmlwdGlvbicpO1xuXG4gIGNvbnN0IHNob3dMYW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNob3dMYW5nLmNsYXNzTGlzdC5hZGQoJ2xpc3QtaXRlbScpO1xuICBzaG93TGFuZy5pbm5lckhUTUwgPSBgTWFpbiBMYW5ndWFnZTogJHtlbGVtZW50Lmxhbmd1YWdlfWA7XG5cbiAgY29uc3Qgc2hvd1RpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2hvd1RpbWUuY2xhc3NMaXN0LmFkZCgnbGlzdC1pdGVtJyk7XG4gIHNob3dUaW1lLmlubmVySFRNTCA9IGBSdW50aW1lOiAke2VsZW1lbnQucnVudGltZX1gO1xuXG4gIGNvbnN0IHNob3dQcmVtaWVyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzaG93UHJlbWllcmUuY2xhc3NMaXN0LmFkZCgnbGlzdC1pdGVtJyk7XG4gIHNob3dQcmVtaWVyZS5pbm5lckhUTUwgPSBgUHJlbWllcmVkIG9uOiAke2VsZW1lbnQucHJlbWllcmVkfWA7XG5cbiAgY29uc3Qgc2hvd0dlbnJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNob3dHZW5yZS5jbGFzc0xpc3QuYWRkKCdsaXN0LWl0ZW0nKTtcbiAgc2hvd0dlbnJlLmlubmVySFRNTCA9IGBHZW5yZTogJHtlbGVtZW50LmdlbnJlc1swXX1gO1xuXG4gIGNvbnN0IHNob3dEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBzaG93RGVzYy5jbGFzc0xpc3QuYWRkKCdzaG93LWRlc2NyaXB0aW9uJyk7XG4gIGNvbnN0IHN0cmluZyA9IGVsZW1lbnQuc3VtbWFyeS5zbGljZSgwLCAyMDApO1xuICBzaG93RGVzYy5pbm5lckhUTUwgPSBgJHtzdHJpbmd9Li4uYDtcblxuICBjb25zdCBtb2RhbENvbW1lbnRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICBtb2RhbENvbW1lbnRIZWFkZXIuY2xhc3NMaXN0LmFkZCgnbW9kYWwtaGVhZGVyMicpO1xuICBjb21tZW50c0NvdW50KGVsZW1lbnQuaWQsIG1vZGFsQ29tbWVudEhlYWRlcik7XG5cbiAgY29uc3QgbW9kYWxDb21tZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1vZGFsQ29tbWVudENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtb2RhbC1jb21tZW50cycpO1xuXG4gIHJlbmRlckNvbW1lbnRzKGVsZW1lbnQuaWQsIG1vZGFsQ29tbWVudENvbnRhaW5lcik7XG5cbiAgY29uc3QgbW9kYWxGb3JtSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgbW9kYWxGb3JtSGVhZGVyLmlubmVySFRNTCA9ICdBZGQgYSBjb21tZW50JztcblxuICBjb25zdCBtb2RhbEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIG1vZGFsRm9ybS5jbGFzc0xpc3QuYWRkKCdjb21tZW50LWZvcm0nKTtcblxuICBjb25zdCBmb3JtSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBmb3JtSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgZm9ybUlucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnWW91ciBOYW1lJyk7XG4gIG1vZGFsRm9ybS5hcHBlbmRDaGlsZChmb3JtSW5wdXQpO1xuXG4gIGNvbnN0IHRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgdGV4dEFyZWEuc2V0QXR0cmlidXRlKCdyb3dzJywgJzYnKTtcbiAgdGV4dEFyZWEuc2V0QXR0cmlidXRlKCdjb2x1bW4nLCAnNDAnKTtcbiAgdGV4dEFyZWEuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdZb3VyIEluc2lnaHQnKTtcbiAgbW9kYWxGb3JtLmFwcGVuZENoaWxkKHRleHRBcmVhKTtcblxuICBjb25zdCBmb3JtU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgZm9ybVN1Ym1pdC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gIGZvcm1TdWJtaXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsICdTdWJtaXQnKTtcbiAgZm9ybVN1Ym1pdC5jbGFzc0xpc3QuYWRkKCdmb3JtLWJ0bicpO1xuICBtb2RhbEZvcm0uYXBwZW5kQ2hpbGQoZm9ybVN1Ym1pdCk7XG5cbiAgSXRlbXNDb250LmFwcGVuZChjbG9zZVNwYW4pO1xuICByZW5kZXJJbWFnZTIoZWxlbWVudC5pbWFnZS5tZWRpdW0sIEl0ZW1zQ29udCk7XG4gIEl0ZW1zQ29udC5hcHBlbmQoc2hvd1RpdGxlLCBlbGVtZW50SXRlbXMsIG1vZGFsQ29tbWVudEhlYWRlcik7XG4gIEl0ZW1zQ29udC5hcHBlbmQobW9kYWxDb21tZW50Q29udGFpbmVyLCBtb2RhbEZvcm1IZWFkZXIsIG1vZGFsRm9ybSk7XG4gIGRpc3BsYXlNb2RhbC5hcHBlbmQoSXRlbXNDb250KTtcbiAgZWxlbWVudEl0ZW1zLmFwcGVuZChzaG93TGFuZywgc2hvd1ByZW1pZXJlLCBzaG93R2VucmUsIHNob3dUaW1lLCBzaG93RGVzYyk7XG5cbiAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tYnRuJyk7XG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICh0ZXh0QXJlYS52YWx1ZSAmJiBmb3JtSW5wdXQudmFsdWUpIHtcbiAgICAgIGF3YWl0IHBvc3RDb21tZW50KGVsZW1lbnQuaWQsIGZvcm1JbnB1dC52YWx1ZSwgdGV4dEFyZWEudmFsdWUpO1xuICAgICAgYXdhaXQgcmVuZGVyQ29tbWVudHMoZWxlbWVudC5pZCwgbW9kYWxDb21tZW50Q29udGFpbmVyKTtcbiAgICAgIGF3YWl0IGNvbW1lbnRzQ291bnQoZWxlbWVudC5pZCwgbW9kYWxDb21tZW50SGVhZGVyKTtcbiAgICAgIHRleHRBcmVhLnZhbHVlID0gJyc7XG4gICAgICBmb3JtSW5wdXQudmFsdWUgPSAnJztcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcG9wTW9kYWw7IiwiaW1wb3J0IG1haW4gZnJvbSAnLi9jb250ZW50LmpzJztcbmltcG9ydCB7IHJlbmRlckltYWdlIH0gZnJvbSAnLi9idWlsZEltYWdlLmpzJztcbmltcG9ydCBwb3BNb2RhbCBmcm9tICcuL3BvcE1vZGFsLmpzJztcbmltcG9ydCB7IHBvc3RMaWtlIH0gZnJvbSAnLi9saWtlcy5qcyc7XG5pbXBvcnQgeyBsaWtlQ291bnQgfSBmcm9tICcuL2hlbHBlcnMuanMnO1xuXG5jb25zdCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyaWRfX2NvbnRhaW5lcicpO1xuY29uc3QgZGlzcGxheU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWNvbnRlbnQnKTtcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXInKTtcbmNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXInKTtcblxuY29uc3QgcmVuZGVyQ2FyZHMgPSBhc3luYyAoKSA9PiB7XG4gIGdyaWQuaW5uZXJIVE1MID0gJyc7XG4gIGNvbnN0IGRhdGFMaXN0ID0gYXdhaXQgbWFpbigpO1xuICBkYXRhTGlzdC5mb3JFYWNoKChlbCkgPT4ge1xuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2dyaWRfX2NvbnRhaW5lci1jYXJkcycpO1xuXG4gICAgcmVuZGVySW1hZ2UoZWwuaW1hZ2UubWVkaXVtLCBjYXJkKTtcblxuICAgIGNvbnN0IG5hbWVMaWtlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb25zdCBzaG93TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgc2hvd05hbWUuY2xhc3NMaXN0LmFkZCgnc2hvd25hbWUnKTtcbiAgICBzaG93TmFtZS5pbm5lckhUTUwgPSBlbC5uYW1lO1xuXG4gICAgY29uc3QgbGlrZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgbGlrZUljb24uY2xhc3NMaXN0LmFkZCgnZmFzJyk7XG4gICAgbGlrZUljb24uY2xhc3NMaXN0LmFkZCgnZmEtaGVhcnQnKTtcblxuICAgIGNvbnN0IGxpa2VDb3VudGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGxpa2VDb3VudGVyLmNsYXNzTGlzdC5hZGQoJ2xpa2UtY291bnRlcicpO1xuXG4gICAgbGlrZUNvdW50KGVsLmlkLCBsaWtlQ291bnRlcik7XG5cbiAgICBsaWtlSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICAgIGF3YWl0IHBvc3RMaWtlKGVsLmlkKTtcbiAgICAgIGF3YWl0IGxpa2VDb3VudChlbC5pZCwgbGlrZUNvdW50ZXIpO1xuICAgIH0pO1xuXG4gICAgbmFtZUxpa2UuYXBwZW5kKHNob3dOYW1lLCBsaWtlSWNvbiwgbGlrZUNvdW50ZXIpO1xuXG4gICAgY29uc3QgY29tbWVudEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbW1lbnRCdG4uY2xhc3NMaXN0LmFkZCgnY29tbWVudC1idG4nKTtcbiAgICBjb21tZW50QnRuLmlubmVySFRNTCA9ICdjb21tZW50JztcbiAgICBjb21tZW50QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHBvcE1vZGFsKGVsKTtcbiAgICAgIGRpc3BsYXlNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIGdyaWQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIGhlYWRlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgZm9vdGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSk7XG4gICAgY2FyZC5hcHBlbmQobmFtZUxpa2UsIGNvbW1lbnRCdG4pO1xuICAgIGdyaWQuYXBwZW5kKGNhcmQpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlckNhcmRzOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==