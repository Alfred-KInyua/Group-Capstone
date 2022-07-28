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
<<<<<<< HEAD
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nhtml {\r\n    font-size: 62.5%;\r\n}\r\n\r\nbody {\r\n  font-family: 'Lato', sans-serif;\r\n  font: 1.6rem;\r\n}\r\n\r\n.grid__container {\r\n    display: grid;\r\n    grid-template-areas:\r\n    'header'\r\n    'main'\r\n    'footer';\r\n    grid-template-columns: 1fr;\r\n    height: 100%;\r\n}\r\n\r\nheader {\r\n  grid-area: header;\r\n  background-color: #203040;\r\n  color: #fff;\r\n  display: flex;\r\n  justify-content: space-between;   \r\n  align-items: center;\r\n  padding: 3rem;\r\n}\r\n\r\nheader a {\r\n  color: #fff;\r\n  font-weight: bold;\r\n  text-decoration: none;\r\n  font-size: 4rem;\r\n  margin-right: 2rem;\r\n  padding-right: 1rem;\r\n}\r\n\r\nheader a:hover {\r\n  color: #f08040;\r\n}\r\n\r\n.brand a {\r\n  font-size: 5rem;\r\n  margin-left: 3rem;\r\n  padding-left: 1rem;\r\n}\r\n\r\n.nav-link a {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.grid__container-movies {\r\n  display: grid;\r\n  grid-template-columns: auto auto auto;\r\n  gap: 2.5rem;\r\n  padding: 1.5rem;\r\n  height: 100vh;\r\n}\r\n\r\n.grid__container-movie-lists {\r\n  background-color: #fff;\r\n  border: 1px solid rgba(0,0,0, 0.8);\r\n  padding: 2rem;\r\n  font-size: 3rem;\r\n  text-align: center;\r\n}\r\n\r\nfooter {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: #203040;\r\n  color: #fff;\r\n  font-size: 1.5rem;\r\n  padding: 3rem;\r\n}\r\n\r\n\r\ngrid-item {\r\n    background-color: white;\r\n    border: 1px solid rgba(0, 0, 0, 0.8);\r\n    padding: 20px;\r\n    font-size: 30px;\r\n    text-align: center;\r\n  }\r\n  \r\n  /* Modal styling */\r\n  .modal-content {\r\n    display: none;\r\n    padding: 4rem;\r\n    max-width: 100%;\r\n    height: auto;\r\n    border: 2px solid black;\r\n    background-color: #fefefe;\r\n    background-color: black;\r\n  }\r\n  \r\n  .span-close {\r\n    color: black;\r\n    font-size: 30px;\r\n    font-weight: 800;\r\n    position: relative;\r\n    left: 48%;\r\n    right: 0;\r\n    top: 0;\r\n  }\r\n  \r\n  .close:hover,\r\n  .close:focus {\r\n    color: black;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .footer {\r\n    display: block;\r\n    border: 1px solid black;\r\n    padding: 1rem;\r\n  }\r\n  \r\n  /* Modal display */\r\n  .modal-items {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    border: 1px solid rgb(224, 73, 73);\r\n    padding: 1rem 0;\r\n    background-color: aqua;\r\n    height: auto;\r\n  }\r\n  \r\n  .modal-description {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin: 0.5rem 5rem;\r\n    border: 1px solid red;\r\n  }\r\n  \r\n  .modal-description > * {\r\n    padding: 0.2rem 0;\r\n  }\r\n  \r\n  .modal-header2,\r\n  .modal-comments {\r\n    margin-bottom: 1rem;\r\n  }\r\n  \r\n  .comment-form {\r\n    margin-top: 0.5rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-items: center;\r\n  }\r\n  \r\n  .comment-form > * {\r\n    margin-top: 0.5rem;\r\n    padding: 0.5rem;\r\n  }\r\n  \r\n  .form-btn {\r\n    font-style: oblique;\r\n    font-weight: bold;\r\n  }\r\n  \r\n  .comment-btn {\r\n    background-color: rgb(134, 138, 138);\r\n    padding: 0.3rem 1rem;\r\n    color: rgb(96, 22, 13);\r\n    font-size: medium;\r\n    font-style: oblique;\r\n    font-weight: bold;\r\n  }\r\n  \r\n  .fas:hover,\r\n  .comment-btn:hover,\r\n  .span-close:hover {\r\n    cursor: pointer;\r\n  }\r\n  \r\n\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;IACI,gBAAgB;AACpB;;AAEA;EACE,+BAA+B;EAC/B,YAAY;AACd;;AAEA;IACI,aAAa;IACb;;;YAGQ;IACR,0BAA0B;IAC1B,YAAY;AAChB;;AAEA;EACE,iBAAiB;EACjB,yBAAyB;EACzB,WAAW;EACX,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,qBAAqB;EACrB,eAAe;EACf,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,WAAW;EACX,eAAe;EACf,aAAa;AACf;;AAEA;EACE,sBAAsB;EACtB,kCAAkC;EAClC,aAAa;EACb,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,yBAAyB;EACzB,WAAW;EACX,iBAAiB;EACjB,aAAa;AACf;;;AAGA;IACI,uBAAuB;IACvB,oCAAoC;IACpC,aAAa;IACb,eAAe;IACf,kBAAkB;EACpB;;EAEA,kBAAkB;EAClB;IACE,aAAa;IACb,aAAa;IACb,eAAe;IACf,YAAY;IACZ,uBAAuB;IACvB,yBAAyB;IACzB,uBAAuB;EACzB;;EAEA;IACE,YAAY;IACZ,eAAe;IACf,gBAAgB;IAChB,kBAAkB;IAClB,SAAS;IACT,QAAQ;IACR,MAAM;EACR;;EAEA;;IAEE,YAAY;IACZ,qBAAqB;IACrB,eAAe;EACjB;;EAEA;IACE,cAAc;IACd,uBAAuB;IACvB,aAAa;EACf;;EAEA,kBAAkB;EAClB;IACE,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,kCAAkC;IAClC,eAAe;IACf,sBAAsB;IACtB,YAAY;EACd;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,mBAAmB;IACnB,qBAAqB;EACvB;;EAEA;IACE,iBAAiB;EACnB;;EAEA;;IAEE,mBAAmB;EACrB;;EAEA;IACE,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,qBAAqB;EACvB;;EAEA;IACE,kBAAkB;IAClB,eAAe;EACjB;;EAEA;IACE,mBAAmB;IACnB,iBAAiB;EACnB;;EAEA;IACE,oCAAoC;IACpC,oBAAoB;IACpB,sBAAsB;IACtB,iBAAiB;IACjB,mBAAmB;IACnB,iBAAiB;EACnB;;EAEA;;;IAGE,eAAe;EACjB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nhtml {\r\n    font-size: 62.5%;\r\n}\r\n\r\nbody {\r\n  font-family: 'Lato', sans-serif;\r\n  font: 1.6rem;\r\n}\r\n\r\n.grid__container {\r\n    display: grid;\r\n    grid-template-areas:\r\n    'header'\r\n    'main'\r\n    'footer';\r\n    grid-template-columns: 1fr;\r\n    height: 100%;\r\n}\r\n\r\nheader {\r\n  grid-area: header;\r\n  background-color: #203040;\r\n  color: #fff;\r\n  display: flex;\r\n  justify-content: space-between;   \r\n  align-items: center;\r\n  padding: 3rem;\r\n}\r\n\r\nheader a {\r\n  color: #fff;\r\n  font-weight: bold;\r\n  text-decoration: none;\r\n  font-size: 4rem;\r\n  margin-right: 2rem;\r\n  padding-right: 1rem;\r\n}\r\n\r\nheader a:hover {\r\n  color: #f08040;\r\n}\r\n\r\n.brand a {\r\n  font-size: 5rem;\r\n  margin-left: 3rem;\r\n  padding-left: 1rem;\r\n}\r\n\r\n.nav-link a {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.grid__container-movies {\r\n  display: grid;\r\n  grid-template-columns: auto auto auto;\r\n  gap: 2.5rem;\r\n  padding: 1.5rem;\r\n  height: 100vh;\r\n}\r\n\r\n.grid__container-movie-lists {\r\n  background-color: #fff;\r\n  border: 1px solid rgba(0,0,0, 0.8);\r\n  padding: 2rem;\r\n  font-size: 3rem;\r\n  text-align: center;\r\n}\r\n\r\nfooter {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: #203040;\r\n  color: #fff;\r\n  font-size: 1.5rem;\r\n  padding: 3rem;\r\n}\r\n\r\n\r\ngrid-item {\r\n    background-color: white;\r\n    border: 1px solid rgba(0, 0, 0, 0.8);\r\n    padding: 20px;\r\n    font-size: 30px;\r\n    text-align: center;\r\n  }\r\n  \r\n  /* Modal styling */\r\n  .modal-content {\r\n    display: none;\r\n    padding: 4rem;\r\n    max-width: 100%;\r\n    height: auto;\r\n    border: 2px solid black;\r\n    background-color: #fefefe;\r\n    background-color: black;\r\n  }\r\n  \r\n  .span-close {\r\n    color: black;\r\n    font-size: 30px;\r\n    font-weight: 800;\r\n    position: relative;\r\n    left: 48%;\r\n    right: 0;\r\n    top: 0;\r\n  }\r\n  \r\n  .close:hover,\r\n  .close:focus {\r\n    color: black;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .footer {\r\n    display: block;\r\n    border: 1px solid black;\r\n    padding: 1rem;\r\n  }\r\n  \r\n  /* Modal display */\r\n  .modal-items {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    border: 1px solid rgb(224, 73, 73);\r\n    padding: 1rem 0;\r\n    background-color: aqua;\r\n    height: auto;\r\n  }\r\n  \r\n  .modal-description {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin: 0.5rem 5rem;\r\n    border: 1px solid red;\r\n  }\r\n  \r\n  .modal-description > * {\r\n    padding: 0.2rem 0;\r\n  }\r\n  \r\n  .modal-header2,\r\n  .modal-comments {\r\n    margin-bottom: 1rem;\r\n  }\r\n  \r\n  .comment-form {\r\n    margin-top: 0.5rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-items: center;\r\n  }\r\n  \r\n  .comment-form > * {\r\n    margin-top: 0.5rem;\r\n    padding: 0.5rem;\r\n  }\r\n  \r\n  .form-btn {\r\n    font-style: oblique;\r\n    font-weight: bold;\r\n  }\r\n  \r\n  .comment-btn {\r\n    background-color: rgb(134, 138, 138);\r\n    padding: 0.3rem 1rem;\r\n    color: rgb(96, 22, 13);\r\n    font-size: medium;\r\n    font-style: oblique;\r\n    font-weight: bold;\r\n  }\r\n  \r\n  .fas:hover,\r\n  .comment-btn:hover,\r\n  .span-close:hover {\r\n    cursor: pointer;\r\n  }\r\n  \r\n\r\n"],"sourceRoot":""}]);
=======
___CSS_LOADER_EXPORT___.push([module.id, "* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nhtml {\r\n    font-size: 62.5%;\r\n}\r\n\r\nbody {\r\n  font-family: 'Lato', sans-serif;\r\n  font: 1.6rem;\r\n}\r\n\r\n.grid__container {\r\n    display: grid;\r\n    grid-template-areas:\r\n    'header'\r\n    'main'\r\n    'footer';\r\n    grid-template-columns: 1fr;\r\n    height: 100%;\r\n}\r\n\r\nheader {\r\n  grid-area: header;\r\n  background-color: #203040;\r\n  color: #fff;\r\n  display: flex;\r\n  justify-content: space-between;   \r\n  align-items: center;\r\n  padding: 3rem;\r\n}\r\n\r\nheader a {\r\n  color: #fff;\r\n  font-weight: bold;\r\n  text-decoration: none;\r\n  font-size: 4rem;\r\n  margin-right: 2rem;\r\n  padding-right: 1rem;\r\n}\r\n\r\nheader a:hover {\r\n  color: #f08040;\r\n}\r\n\r\n.brand a {\r\n  font-size: 5rem;\r\n  margin-left: 3rem;\r\n  padding-left: 1rem;\r\n}\r\n\r\n.nav-link a {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.grid__container-movies {\r\n  display: grid;\r\n  grid-template-columns: auto auto auto;\r\n  gap: 2.5rem;\r\n  padding: 1.5rem;\r\n  height: 100vh;\r\n}\r\n\r\n.grid__container-movie-lists {\r\n  background-color: #fff;\r\n  border: 1px solid rgba(0,0,0, 0.8);\r\n  padding: 2rem;\r\n  font-size: 3rem;\r\n  text-align: center;\r\n}\r\n\r\nfooter {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: #203040;\r\n  color: #fff;\r\n  font-size: 1.5rem;\r\n  padding: 3rem;\r\n\r\n}\r\n.modal {\r\n    display: none; \r\n    position: fixed; \r\n    z-index: 1; \r\n    padding-top: 100px; \r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; \r\n    height: 100%; \r\n    overflow: auto; \r\n    background-color: rgb(0,0,0); \r\n    background-color: rgba(0,0,0,0.4); \r\n  }\r\n  .modal-content {\r\n    background-color: #fefefe;\r\n    margin: auto;\r\n    padding: 20px;\r\n    border: 1px solid #888;\r\n    width: 80%;\r\n  }\r\n  \r\n  p{\r\n    color: #000;\r\n  }\r\n  \r\n  .close {\r\n    color: #aaaaaa;\r\n    float: right;\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n  }\r\n  \r\n  .close:hover,\r\n  .close:focus {\r\n    color: #000;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n  }\r\n  .myform{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    justify-content: center;\r\n  }\r\n  #myBtn{\r\n    width: 20%;\r\n  }\r\n\r\n  .up{\r\n \r\n  }\r\n\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;IACI,gBAAgB;AACpB;;AAEA;EACE,+BAA+B;EAC/B,YAAY;AACd;;AAEA;IACI,aAAa;IACb;;;YAGQ;IACR,0BAA0B;IAC1B,YAAY;AAChB;;AAEA;EACE,iBAAiB;EACjB,yBAAyB;EACzB,WAAW;EACX,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,qBAAqB;EACrB,eAAe;EACf,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,WAAW;EACX,eAAe;EACf,aAAa;AACf;;AAEA;EACE,sBAAsB;EACtB,kCAAkC;EAClC,aAAa;EACb,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,yBAAyB;EACzB,WAAW;EACX,iBAAiB;EACjB,aAAa;;AAEf;AACA;IACI,aAAa;IACb,eAAe;IACf,UAAU;IACV,kBAAkB;IAClB,OAAO;IACP,MAAM;IACN,WAAW;IACX,YAAY;IACZ,cAAc;IACd,4BAA4B;IAC5B,iCAAiC;EACnC;EACA;IACE,yBAAyB;IACzB,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,UAAU;EACZ;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,cAAc;IACd,YAAY;IACZ,eAAe;IACf,iBAAiB;EACnB;;EAEA;;IAEE,WAAW;IACX,qBAAqB;IACrB,eAAe;EACjB;EACA;IACE,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,uBAAuB;EACzB;EACA;IACE,UAAU;EACZ;;EAEA;;EAEA","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nhtml {\r\n    font-size: 62.5%;\r\n}\r\n\r\nbody {\r\n  font-family: 'Lato', sans-serif;\r\n  font: 1.6rem;\r\n}\r\n\r\n.grid__container {\r\n    display: grid;\r\n    grid-template-areas:\r\n    'header'\r\n    'main'\r\n    'footer';\r\n    grid-template-columns: 1fr;\r\n    height: 100%;\r\n}\r\n\r\nheader {\r\n  grid-area: header;\r\n  background-color: #203040;\r\n  color: #fff;\r\n  display: flex;\r\n  justify-content: space-between;   \r\n  align-items: center;\r\n  padding: 3rem;\r\n}\r\n\r\nheader a {\r\n  color: #fff;\r\n  font-weight: bold;\r\n  text-decoration: none;\r\n  font-size: 4rem;\r\n  margin-right: 2rem;\r\n  padding-right: 1rem;\r\n}\r\n\r\nheader a:hover {\r\n  color: #f08040;\r\n}\r\n\r\n.brand a {\r\n  font-size: 5rem;\r\n  margin-left: 3rem;\r\n  padding-left: 1rem;\r\n}\r\n\r\n.nav-link a {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.grid__container-movies {\r\n  display: grid;\r\n  grid-template-columns: auto auto auto;\r\n  gap: 2.5rem;\r\n  padding: 1.5rem;\r\n  height: 100vh;\r\n}\r\n\r\n.grid__container-movie-lists {\r\n  background-color: #fff;\r\n  border: 1px solid rgba(0,0,0, 0.8);\r\n  padding: 2rem;\r\n  font-size: 3rem;\r\n  text-align: center;\r\n}\r\n\r\nfooter {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: #203040;\r\n  color: #fff;\r\n  font-size: 1.5rem;\r\n  padding: 3rem;\r\n\r\n}\r\n.modal {\r\n    display: none; \r\n    position: fixed; \r\n    z-index: 1; \r\n    padding-top: 100px; \r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; \r\n    height: 100%; \r\n    overflow: auto; \r\n    background-color: rgb(0,0,0); \r\n    background-color: rgba(0,0,0,0.4); \r\n  }\r\n  .modal-content {\r\n    background-color: #fefefe;\r\n    margin: auto;\r\n    padding: 20px;\r\n    border: 1px solid #888;\r\n    width: 80%;\r\n  }\r\n  \r\n  p{\r\n    color: #000;\r\n  }\r\n  \r\n  .close {\r\n    color: #aaaaaa;\r\n    float: right;\r\n    font-size: 28px;\r\n    font-weight: bold;\r\n  }\r\n  \r\n  .close:hover,\r\n  .close:focus {\r\n    color: #000;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n  }\r\n  .myform{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    justify-content: center;\r\n  }\r\n  #myBtn{\r\n    width: 20%;\r\n  }\r\n\r\n  .up{\r\n \r\n  }\r\n\r\n"],"sourceRoot":""}]);
>>>>>>> dev
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
<<<<<<< HEAD

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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const api_endpoint = 'https://api.tvmaze.com/';

const main = async () => {
    const fetch_data = await fetch(`${api_endpoint}shows`);
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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "artCounter": () => (/* binding */ artCounter),
/* harmony export */   "likeCount": () => (/* binding */ likeCount)
/* harmony export */ });
/* harmony import */ var _likes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./likes.js */ "./src/modules/likes.js");
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appId": () => (/* binding */ appId),
/* harmony export */   "getLikes": () => (/* binding */ getLikes),
/* harmony export */   "involvement_api_url": () => (/* binding */ involvement_api_url),
/* harmony export */   "postLikes": () => (/* binding */ postLikes),
/* harmony export */   "updateLikes": () => (/* binding */ updateLikes)
/* harmony export */ });
const involvement_api_url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

const appId = 'meucUCU2jpjkDcWN5JDX';

const postLikes = async (id) => {
  const response = await fetch(
    `${involvement_api_url}${appId}/likes`, {
      method: 'POST',
      body: JSON.stringify({
        item_id: id,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );
  return response;
};

const getLikes = async () => {
  const arr_of_likes_data = await fetch(`${involvement_api_url}${appId}/likes`);
  const arr_of_likes = await arr_of_likes_data.json();
  return arr_of_likes;
};

const updateLikes = async (id) => {
  const stored_likes_data = await getLikes();
  let result = 0;
  stored_likes_data.forEach((e) => {
    if (e.item_id.toString() === id.toString()) {
      result = e.likes;
    }
  });

  return result;
};



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
/* harmony import */ var _createImage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createImage.js */ "./src/modules/createImage.js");
/* harmony import */ var _likes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./likes.js */ "./src/modules/likes.js");
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
=======

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


const list=document.querySelector('.resultsList');
const modal = document.querySelector("#myModal");

// Get the button that opens the modal
const btn = document.querySelector("#myBtn");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
const showsquery = async () => {
  const url ='https://api.tvmaze.com/shows/2/episodes';  
  const fetchData = await fetch(url);
  const data = await fetchData.json();
  renderresults(data);
};

const renderresults = (results) => {
  results.forEach((item) => {
    const episodes = document.createElement('div');
    episodes.innerHTML = `
                           <div class="image"> <img src="${item.image.medium}" alt=""/>
                               </div>
                               <div class="info">
                              <h2 class="title-show">${item.name}</h2>
                              <span class="likes"></span>
                              </div>
                              <p class="season"> season ${item.season} episode ${item.number} </p>
                              <p class="summary">${item.summary}</p>
                              <button class="like">Like</button>
                              <button id="myBtn">comments</button>
                              <button class="reservation">Reservation</button> `;

    list.appendChild(episodes);
  });
};




 
// window.onload =()=>{
//  const search =document.querySelector('#query')
//   search.onkeyup =(e)=>{
//     showsquery(search.value);
//   }
// }

window.onload =()=>{  
     showsquery();
   }
 
>>>>>>> dev

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
<<<<<<< HEAD
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRixvSEFBb0gsTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLG9CQUFvQjtBQUN4TDtBQUNBLDZDQUE2Qyw2QkFBNkIsZ0JBQWdCLGlCQUFpQixLQUFLLGNBQWMseUJBQXlCLEtBQUssY0FBYyxzQ0FBc0MsbUJBQW1CLEtBQUssMEJBQTBCLHNCQUFzQiwyRUFBMkUsbUNBQW1DLHFCQUFxQixLQUFLLGdCQUFnQix3QkFBd0IsZ0NBQWdDLGtCQUFrQixvQkFBb0Isd0NBQXdDLDBCQUEwQixvQkFBb0IsS0FBSyxrQkFBa0Isa0JBQWtCLHdCQUF3Qiw0QkFBNEIsc0JBQXNCLHlCQUF5QiwwQkFBMEIsS0FBSyx3QkFBd0IscUJBQXFCLEtBQUssa0JBQWtCLHNCQUFzQix3QkFBd0IseUJBQXlCLEtBQUsscUJBQXFCLHdCQUF3QixLQUFLLGlDQUFpQyxvQkFBb0IsNENBQTRDLGtCQUFrQixzQkFBc0Isb0JBQW9CLEtBQUssc0NBQXNDLDZCQUE2Qix5Q0FBeUMsb0JBQW9CLHNCQUFzQix5QkFBeUIsS0FBSyxnQkFBZ0Isb0JBQW9CLDhCQUE4QiwwQkFBMEIsZ0NBQWdDLGtCQUFrQix3QkFBd0Isb0JBQW9CLEtBQUssdUJBQXVCLGdDQUFnQyw2Q0FBNkMsc0JBQXNCLHdCQUF3QiwyQkFBMkIsT0FBTyxxREFBcUQsc0JBQXNCLHNCQUFzQix3QkFBd0IscUJBQXFCLGdDQUFnQyxrQ0FBa0MsZ0NBQWdDLE9BQU8seUJBQXlCLHFCQUFxQix3QkFBd0IseUJBQXlCLDJCQUEyQixrQkFBa0IsaUJBQWlCLGVBQWUsT0FBTyw2Q0FBNkMscUJBQXFCLDhCQUE4Qix3QkFBd0IsT0FBTyxxQkFBcUIsdUJBQXVCLGdDQUFnQyxzQkFBc0IsT0FBTyxtREFBbUQsc0JBQXNCLCtCQUErQiw0QkFBNEIsMkNBQTJDLHdCQUF3QiwrQkFBK0IscUJBQXFCLE9BQU8sZ0NBQWdDLHNCQUFzQiwrQkFBK0IsZ0NBQWdDLDRCQUE0Qiw0QkFBNEIsOEJBQThCLE9BQU8sb0NBQW9DLDBCQUEwQixPQUFPLGtEQUFrRCw0QkFBNEIsT0FBTywyQkFBMkIsMkJBQTJCLHNCQUFzQiwrQkFBK0IsOEJBQThCLE9BQU8sK0JBQStCLDJCQUEyQix3QkFBd0IsT0FBTyx1QkFBdUIsNEJBQTRCLDBCQUEwQixPQUFPLDBCQUEwQiw2Q0FBNkMsNkJBQTZCLCtCQUErQiwwQkFBMEIsNEJBQTRCLDBCQUEwQixPQUFPLHlFQUF5RSx3QkFBd0IsT0FBTyxxQkFBcUIsZ0ZBQWdGLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLFlBQVksTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sT0FBTyxVQUFVLHFHQUFxRyxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0scUJBQXFCLFdBQVcsNkJBQTZCLGdCQUFnQixpQkFBaUIsS0FBSyxjQUFjLHlCQUF5QixLQUFLLGNBQWMsc0NBQXNDLG1CQUFtQixLQUFLLDBCQUEwQixzQkFBc0IsMkVBQTJFLG1DQUFtQyxxQkFBcUIsS0FBSyxnQkFBZ0Isd0JBQXdCLGdDQUFnQyxrQkFBa0Isb0JBQW9CLHdDQUF3QywwQkFBMEIsb0JBQW9CLEtBQUssa0JBQWtCLGtCQUFrQix3QkFBd0IsNEJBQTRCLHNCQUFzQix5QkFBeUIsMEJBQTBCLEtBQUssd0JBQXdCLHFCQUFxQixLQUFLLGtCQUFrQixzQkFBc0Isd0JBQXdCLHlCQUF5QixLQUFLLHFCQUFxQix3QkFBd0IsS0FBSyxpQ0FBaUMsb0JBQW9CLDRDQUE0QyxrQkFBa0Isc0JBQXNCLG9CQUFvQixLQUFLLHNDQUFzQyw2QkFBNkIseUNBQXlDLG9CQUFvQixzQkFBc0IseUJBQXlCLEtBQUssZ0JBQWdCLG9CQUFvQiw4QkFBOEIsMEJBQTBCLGdDQUFnQyxrQkFBa0Isd0JBQXdCLG9CQUFvQixLQUFLLHVCQUF1QixnQ0FBZ0MsNkNBQTZDLHNCQUFzQix3QkFBd0IsMkJBQTJCLE9BQU8scURBQXFELHNCQUFzQixzQkFBc0Isd0JBQXdCLHFCQUFxQixnQ0FBZ0Msa0NBQWtDLGdDQUFnQyxPQUFPLHlCQUF5QixxQkFBcUIsd0JBQXdCLHlCQUF5QiwyQkFBMkIsa0JBQWtCLGlCQUFpQixlQUFlLE9BQU8sNkNBQTZDLHFCQUFxQiw4QkFBOEIsd0JBQXdCLE9BQU8scUJBQXFCLHVCQUF1QixnQ0FBZ0Msc0JBQXNCLE9BQU8sbURBQW1ELHNCQUFzQiwrQkFBK0IsNEJBQTRCLDJDQUEyQyx3QkFBd0IsK0JBQStCLHFCQUFxQixPQUFPLGdDQUFnQyxzQkFBc0IsK0JBQStCLGdDQUFnQyw0QkFBNEIsNEJBQTRCLDhCQUE4QixPQUFPLG9DQUFvQywwQkFBMEIsT0FBTyxrREFBa0QsNEJBQTRCLE9BQU8sMkJBQTJCLDJCQUEyQixzQkFBc0IsK0JBQStCLDhCQUE4QixPQUFPLCtCQUErQiwyQkFBMkIsd0JBQXdCLE9BQU8sdUJBQXVCLDRCQUE0QiwwQkFBMEIsT0FBTywwQkFBMEIsNkNBQTZDLDZCQUE2QiwrQkFBK0IsMEJBQTBCLDRCQUE0QiwwQkFBMEIsT0FBTyx5RUFBeUUsd0JBQXdCLE9BQU8saUNBQWlDO0FBQ3h3UjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ1IxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFEQUFxRDtBQUNyRDs7QUFFQTtBQUNBLGdEQUFnRDtBQUNoRDs7QUFFQTtBQUNBLHFGQUFxRjtBQUNyRjs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTtBQUNBLEtBQUs7QUFDTCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIscUJBQXFCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ3JHYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7OztBQ2ZxQjtBQUNnQztBQUNHO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHFFQUFVO0FBQ2xDLG9DQUFvQyxRQUFRO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLHFFQUFXOzs7Ozs7Ozs7Ozs7OztBQ1pYO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxhQUFhO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxJQUFJLEVBQUM7QUFDcEI7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBdUM7QUFDdkM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJ5QztBQUNUO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixzREFBVztBQUNqQyxzQkFBc0IsT0FBTztBQUM3QjtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsdURBQUk7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLG9CQUFvQixFQUFFLE1BQU07QUFDbkM7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsMkNBQTJDO0FBQzNDLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxvQkFBb0IsRUFBRSxNQUFNO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQ2dDO0FBQ2U7QUFDUjtBQUNROztBQUUvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCLHVEQUFJO0FBQzdCO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLDREQUFXOztBQUVmOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxJQUFJLDREQUFTOztBQUViO0FBQ0EsWUFBWSxvREFBUztBQUNyQixZQUFZLDREQUFTO0FBQ3JCLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLGlFQUFlLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncm91cC1jYXBzdG9uZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vZ3JvdXAtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2dyb3VwLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vZ3JvdXAtY2Fwc3RvbmUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vZ3JvdXAtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZ3JvdXAtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2dyb3VwLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2dyb3VwLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2dyb3VwLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vZ3JvdXAtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9ncm91cC1jYXBzdG9uZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9ncm91cC1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vZ3JvdXAtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9jcmVhdGVJbWFnZS5qcyIsIndlYnBhY2s6Ly9ncm91cC1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL2hlbHBlck1ldGhvZHMuanMiLCJ3ZWJwYWNrOi8vZ3JvdXAtY2Fwc3RvbmUvLi9zcmMvbW9kdWxlcy9saWtlcy5qcyIsIndlYnBhY2s6Ly9ncm91cC1jYXBzdG9uZS8uL3NyYy9tb2R1bGVzL3JlbmRlckNvbnRlbnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1MYXRvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDcwMDswLDkwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDcwMDsxLDkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gICAgZm9udC1zaXplOiA2Mi41JTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udDogMS42cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZF9fY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXHJcXG4gICAgJ2hlYWRlcidcXHJcXG4gICAgJ21haW4nXFxyXFxuICAgICdmb290ZXInO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAzMDQwO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAgIFxcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDNyZW07XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBhIHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDRyZW07XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgYTpob3ZlciB7XFxyXFxuICBjb2xvcjogI2YwODA0MDtcXHJcXG59XFxyXFxuXFxyXFxuLmJyYW5kIGEge1xcclxcbiAgZm9udC1zaXplOiA1cmVtO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDNyZW07XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGluayBhIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZF9fY29udGFpbmVyLW1vdmllcyB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0bztcXHJcXG4gIGdhcDogMi41cmVtO1xcclxcbiAgcGFkZGluZzogMS41cmVtO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWRfX2NvbnRhaW5lci1tb3ZpZS1saXN0cyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwgMC44KTtcXHJcXG4gIHBhZGRpbmc6IDJyZW07XFxyXFxuICBmb250LXNpemU6IDNyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMzA0MDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBwYWRkaW5nOiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5ncmlkLWl0ZW0ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjgpO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLyogTW9kYWwgc3R5bGluZyAqL1xcclxcbiAgLm1vZGFsLWNvbnRlbnQge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBwYWRkaW5nOiA0cmVtO1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuc3Bhbi1jbG9zZSB7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcclxcbiAgICBmb250LXdlaWdodDogODAwO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIGxlZnQ6IDQ4JTtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNsb3NlOmhvdmVyLFxcclxcbiAgLmNsb3NlOmZvY3VzIHtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmZvb3RlciB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLyogTW9kYWwgZGlzcGxheSAqL1xcclxcbiAgLm1vZGFsLWl0ZW1zIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIyNCwgNzMsIDczKTtcXHJcXG4gICAgcGFkZGluZzogMXJlbSAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5tb2RhbC1kZXNjcmlwdGlvbiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDAuNXJlbSA1cmVtO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5tb2RhbC1kZXNjcmlwdGlvbiA+ICoge1xcclxcbiAgICBwYWRkaW5nOiAwLjJyZW0gMDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLm1vZGFsLWhlYWRlcjIsXFxyXFxuICAubW9kYWwtY29tbWVudHMge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY29tbWVudC1mb3JtIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jb21tZW50LWZvcm0gPiAqIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xcclxcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5mb3JtLWJ0biB7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG9ibGlxdWU7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY29tbWVudC1idG4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTM0LCAxMzgsIDEzOCk7XFxyXFxuICAgIHBhZGRpbmc6IDAuM3JlbSAxcmVtO1xcclxcbiAgICBjb2xvcjogcmdiKDk2LCAyMiwgMTMpO1xcclxcbiAgICBmb250LXNpemU6IG1lZGl1bTtcXHJcXG4gICAgZm9udC1zdHlsZTogb2JsaXF1ZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5mYXM6aG92ZXIsXFxyXFxuICAuY29tbWVudC1idG46aG92ZXIsXFxyXFxuICAuc3Bhbi1jbG9zZTpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIH1cXHJcXG4gIFxcclxcblxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxzQkFBc0I7RUFDdEIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixZQUFZO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2I7OztZQUdRO0lBQ1IsMEJBQTBCO0lBQzFCLFlBQVk7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsV0FBVztFQUNYLGVBQWU7RUFDZixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsa0NBQWtDO0VBQ2xDLGFBQWE7RUFDYixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsYUFBYTtBQUNmOzs7QUFHQTtJQUNJLHVCQUF1QjtJQUN2QixvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLGVBQWU7SUFDZixrQkFBa0I7RUFDcEI7O0VBRUEsa0JBQWtCO0VBQ2xCO0lBQ0UsYUFBYTtJQUNiLGFBQWE7SUFDYixlQUFlO0lBQ2YsWUFBWTtJQUNaLHVCQUF1QjtJQUN2Qix5QkFBeUI7SUFDekIsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFRO0lBQ1IsTUFBTTtFQUNSOztFQUVBOztJQUVFLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsYUFBYTtFQUNmOztFQUVBLGtCQUFrQjtFQUNsQjtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGtDQUFrQztJQUNsQyxlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBOztJQUVFLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLG9DQUFvQztJQUNwQyxvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsaUJBQWlCO0VBQ25COztFQUVBOzs7SUFHRSxlQUFlO0VBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxhdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgICBmb250LXNpemU6IDYyLjUlO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250OiAxLjZyZW07XFxyXFxufVxcclxcblxcclxcbi5ncmlkX19jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcclxcbiAgICAnaGVhZGVyJ1xcclxcbiAgICAnbWFpbidcXHJcXG4gICAgJ2Zvb3Rlcic7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDMwNDA7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47ICAgXFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIGEge1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXHJcXG4gIG1hcmdpbi1yaWdodDogMnJlbTtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBhOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjZjA4MDQwO1xcclxcbn1cXHJcXG5cXHJcXG4uYnJhbmQgYSB7XFxyXFxuICBmb250LXNpemU6IDVyZW07XFxyXFxuICBtYXJnaW4tbGVmdDogM3JlbTtcXHJcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saW5rIGEge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5ncmlkX19jb250YWluZXItbW92aWVzIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvO1xcclxcbiAgZ2FwOiAyLjVyZW07XFxyXFxuICBwYWRkaW5nOiAxLjVyZW07XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZF9fY29udGFpbmVyLW1vdmllLWxpc3RzIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLCAwLjgpO1xcclxcbiAgcGFkZGluZzogMnJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAzMDQwO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIHBhZGRpbmc6IDNyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcbmdyaWQtaXRlbSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuOCk7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAvKiBNb2RhbCBzdHlsaW5nICovXFxyXFxuICAubW9kYWwtY29udGVudCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmc6IDRyZW07XFxyXFxuICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5zcGFuLWNsb3NlIHtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBmb250LXNpemU6IDMwcHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgbGVmdDogNDglO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY2xvc2U6aG92ZXIsXFxyXFxuICAuY2xvc2U6Zm9jdXMge1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZm9vdGVyIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAvKiBNb2RhbCBkaXNwbGF5ICovXFxyXFxuICAubW9kYWwtaXRlbXMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjI0LCA3MywgNzMpO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtIDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLm1vZGFsLWRlc2NyaXB0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogMC41cmVtIDVyZW07XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLm1vZGFsLWRlc2NyaXB0aW9uID4gKiB7XFxyXFxuICAgIHBhZGRpbmc6IDAuMnJlbSAwO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAubW9kYWwtaGVhZGVyMixcXHJcXG4gIC5tb2RhbC1jb21tZW50cyB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jb21tZW50LWZvcm0ge1xcclxcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNvbW1lbnQtZm9ybSA+ICoge1xcclxcbiAgICBtYXJnaW4tdG9wOiAwLjVyZW07XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmZvcm0tYnRuIHtcXHJcXG4gICAgZm9udC1zdHlsZTogb2JsaXF1ZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jb21tZW50LWJ0biB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzQsIDEzOCwgMTM4KTtcXHJcXG4gICAgcGFkZGluZzogMC4zcmVtIDFyZW07XFxyXFxuICAgIGNvbG9yOiByZ2IoOTYsIDIyLCAxMyk7XFxyXFxuICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xcclxcbiAgICBmb250LXN0eWxlOiBvYmxpcXVlO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmZhczpob3ZlcixcXHJcXG4gIC5jb21tZW50LWJ0bjpob3ZlcixcXHJcXG4gIC5zcGFuLWNsb3NlOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuaW1wb3J0IHJlbmRlckNhcmRzIGZyb20gJy4vbW9kdWxlcy9yZW5kZXJDb250ZW50LmpzJztcclxuaW1wb3J0IHsgYXJ0Q291bnRlciB9IGZyb20gJy4vbW9kdWxlcy9oZWxwZXJNZXRob2RzLmpzJztcclxuXHJcbmNvbnN0IGNvdW50TW92aWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvdW50X19tb3ZpZXMnKTtcclxuXHJcbmNvbnN0IGNvdW50ZXJGdW5jID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IGNvdW50ZXIgPSBhd2FpdCBhcnRDb3VudGVyKCk7XHJcbiAgY291bnRNb3ZpZXMuaW5uZXJIVE1MID0gYFNob3dzOiAke2NvdW50ZXJ9YDtcclxufTtcclxuXHJcbmNvdW50ZXJGdW5jKCk7XHJcbnJlbmRlckNhcmRzKCk7IiwiY29uc3QgYXBpX2VuZHBvaW50ID0gJ2h0dHBzOi8vYXBpLnR2bWF6ZS5jb20vJztcclxuXHJcbmNvbnN0IG1haW4gPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaF9kYXRhID0gYXdhaXQgZmV0Y2goYCR7YXBpX2VuZHBvaW50fXNob3dzYCk7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaF9kYXRhLmpzb24oKTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtYWluO1xyXG5cclxuIiwiXHJcbmNvbnN0IHJlbmRlckltYWdlID0gKHNyYywgY29udCkgPT4ge1xyXG4gICAgY29uc3QgcGljQ29udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcGljQ29udC5jbGFzc0xpc3QuYWRkKCdpbWctY29udCcpO1xyXG4gIFxyXG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBpbWcuc3Jjc2V0ID0gc3JjO1xyXG4gIFxyXG4gICAgcGljQ29udC5hcHBlbmQoaW1nKTtcclxuICAgIGNvbnQuYXBwZW5kKHBpY0NvbnQpO1xyXG4gIH07XHJcbiAgICBcclxuICBjb25zdCByZW5kZXJJbWFnZTIgPSAoc3JjLCBjb250KSA9PiB7XHJcbiAgICBjb25zdCBwaWNDb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwaWNDb250LmNsYXNzTGlzdC5hZGQoJ21vZGFsLWltYWdlJyk7XHJcbiAgXHJcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGltZy5zcmNzZXQgPSBzcmM7XHJcbiAgXHJcbiAgICBwaWNDb250LmFwcGVuZChpbWcpO1xyXG4gICAgY29udC5hcHBlbmQocGljQ29udCk7XHJcbiAgfTtcclxuICAgIFxyXG4gIGV4cG9ydCB7IHJlbmRlckltYWdlLCByZW5kZXJJbWFnZTIgfTtcclxuICAiLCJpbXBvcnQgeyB1cGRhdGVMaWtlcyB9IGZyb20gJy4vbGlrZXMuanMnO1xyXG5pbXBvcnQgbWFpbiBmcm9tICcuL2NvbnRlbnQuanMnO1xyXG5cclxuXHJcbmNvbnN0IGxpa2VDb3VudCA9IGFzeW5jIChJZCwgY29udCkgPT4ge1xyXG4gIGNvbnN0IGNvdW50ID0gYXdhaXQgdXBkYXRlTGlrZXMoSWQpO1xyXG4gIGNvbnQuaW5uZXJIVE1MID0gYCR7Y291bnR9IGxpa2VzYDtcclxufTtcclxuXHJcbmNvbnN0IGFydENvdW50ZXIgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgYXJ0QXJyID0gYXdhaXQgbWFpbigpO1xyXG4gIGNvbnN0IGFydHNMZW5ndGggPSBhcnRBcnIubGVuZ3RoO1xyXG4gIHJldHVybiBhcnRzTGVuZ3RoO1xyXG59O1xyXG5cclxuZXhwb3J0IHtcclxuICBsaWtlQ291bnQsIGFydENvdW50ZXJcclxufTsiLCJjb25zdCBpbnZvbHZlbWVudF9hcGlfdXJsID0gJ2h0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLyc7XHJcblxyXG5jb25zdCBhcHBJZCA9ICdtZXVjVUNVMmpwamtEY1dONUpEWCc7XHJcblxyXG5jb25zdCBwb3N0TGlrZXMgPSBhc3luYyAoaWQpID0+IHtcclxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgYCR7aW52b2x2ZW1lbnRfYXBpX3VybH0ke2FwcElkfS9saWtlc2AsIHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBpdGVtX2lkOiBpZCxcclxuICAgICAgfSksXHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQ29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9VVRGLTgnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICApO1xyXG4gIHJldHVybiByZXNwb25zZTtcclxufTtcclxuXHJcbmNvbnN0IGdldExpa2VzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IGFycl9vZl9saWtlc19kYXRhID0gYXdhaXQgZmV0Y2goYCR7aW52b2x2ZW1lbnRfYXBpX3VybH0ke2FwcElkfS9saWtlc2ApO1xyXG4gIGNvbnN0IGFycl9vZl9saWtlcyA9IGF3YWl0IGFycl9vZl9saWtlc19kYXRhLmpzb24oKTtcclxuICByZXR1cm4gYXJyX29mX2xpa2VzO1xyXG59O1xyXG5cclxuY29uc3QgdXBkYXRlTGlrZXMgPSBhc3luYyAoaWQpID0+IHtcclxuICBjb25zdCBzdG9yZWRfbGlrZXNfZGF0YSA9IGF3YWl0IGdldExpa2VzKCk7XHJcbiAgbGV0IHJlc3VsdCA9IDA7XHJcbiAgc3RvcmVkX2xpa2VzX2RhdGEuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgaWYgKGUuaXRlbV9pZC50b1N0cmluZygpID09PSBpZC50b1N0cmluZygpKSB7XHJcbiAgICAgIHJlc3VsdCA9IGUubGlrZXM7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiByZXN1bHQ7XHJcbn07XHJcblxyXG5leHBvcnQge1xyXG4gIGdldExpa2VzLCBwb3N0TGlrZXMsIHVwZGF0ZUxpa2VzLCBpbnZvbHZlbWVudF9hcGlfdXJsLCBhcHBJZFxyXG59OyIsImltcG9ydCBtYWluIGZyb20gJy4vY29udGVudC5qcyc7XG5pbXBvcnQgeyByZW5kZXJJbWFnZSB9IGZyb20gJy4vY3JlYXRlSW1hZ2UuanMnO1xuaW1wb3J0IHsgcG9zdExpa2VzIH0gZnJvbSAnLi9saWtlcy5qcyc7XG5pbXBvcnQgeyBsaWtlQ291bnQgfSBmcm9tICcuL2hlbHBlck1ldGhvZHMuanMnO1xuXG5jb25zdCBncmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdyaWRfX2NvbnRhaW5lci1tb3ZpZXMnKTtcbmNvbnN0IGRpc3BsYXlNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jb250ZW50Jyk7XG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyJyk7XG5jb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyJyk7XG5cbmNvbnN0IHJlbmRlckNhcmRzID0gYXN5bmMgKCkgPT4ge1xuICBncmlkLmlubmVySFRNTCA9ICcnO1xuICBjb25zdCBkYXRhTGlzdCA9IGF3YWl0IG1haW4oKTtcbiAgZGF0YUxpc3QuZm9yRWFjaCgoZWwpID0+IHtcbiAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdncmlkLWl0ZW0nKTtcblxuICAgIHJlbmRlckltYWdlKGVsLmltYWdlLm1lZGl1bSwgY2FyZCk7XG5cbiAgICBjb25zdCBuYW1lTGlrZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29uc3Qgc2hvd05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHNob3dOYW1lLmNsYXNzTGlzdC5hZGQoJ3Nob3duYW1lJyk7XG4gICAgc2hvd05hbWUuaW5uZXJIVE1MID0gZWwubmFtZTtcblxuICAgIGNvbnN0IGxpa2VJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgIGxpa2VJY29uLmNsYXNzTGlzdC5hZGQoJ2ZhcycpO1xuICAgIGxpa2VJY29uLmNsYXNzTGlzdC5hZGQoJ2ZhLWhlYXJ0Jyk7XG5cbiAgICBjb25zdCBsaWtlQ291bnRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBsaWtlQ291bnRlci5jbGFzc0xpc3QuYWRkKCdsaWtlLWNvdW50ZXInKTtcblxuICAgIGxpa2VDb3VudChlbC5pZCwgbGlrZUNvdW50ZXIpO1xuXG4gICAgbGlrZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgICBhd2FpdCBwb3N0TGlrZXMoZWwuaWQpO1xuICAgICAgYXdhaXQgbGlrZUNvdW50KGVsLmlkLCBsaWtlQ291bnRlcik7XG4gICAgfSk7XG5cbiAgICBuYW1lTGlrZS5hcHBlbmQoc2hvd05hbWUsIGxpa2VJY29uLCBsaWtlQ291bnRlcik7XG5cbiAgICBcbiAgICBjYXJkLmFwcGVuZChuYW1lTGlrZSwgY29tbWVudEJ0bik7XG4gICAgZ3JpZC5hcHBlbmQoY2FyZCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyQ2FyZHM7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
=======
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ2ZxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxrQkFBa0I7QUFDN0U7QUFDQTtBQUNBLHVEQUF1RCxVQUFVO0FBQ2pFO0FBQ0E7QUFDQSwwREFBMEQsYUFBYSxVQUFVLGFBQWE7QUFDOUYsbURBQW1ELGFBQWE7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ3JvdXAtY2Fwc3RvbmUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2dyb3VwLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9ncm91cC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2dyb3VwLWNhcHN0b25lLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2dyb3VwLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2dyb3VwLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9ncm91cC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9ncm91cC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9ncm91cC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2dyb3VwLWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZ3JvdXAtY2Fwc3RvbmUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1MYXRvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDcwMDswLDkwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDcwMDsxLDkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gICAgZm9udC1zaXplOiA2Mi41JTtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogJ0xhdG8nLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udDogMS42cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZF9fY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXHJcXG4gICAgJ2hlYWRlcidcXHJcXG4gICAgJ21haW4nXFxyXFxuICAgICdmb290ZXInO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAzMDQwO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAgIFxcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDNyZW07XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBhIHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBmb250LXNpemU6IDRyZW07XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDJyZW07XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgYTpob3ZlciB7XFxyXFxuICBjb2xvcjogI2YwODA0MDtcXHJcXG59XFxyXFxuXFxyXFxuLmJyYW5kIGEge1xcclxcbiAgZm9udC1zaXplOiA1cmVtO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDNyZW07XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5uYXYtbGluayBhIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZF9fY29udGFpbmVyLW1vdmllcyB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG8gYXV0bztcXHJcXG4gIGdhcDogMi41cmVtO1xcclxcbiAgcGFkZGluZzogMS41cmVtO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLmdyaWRfX2NvbnRhaW5lci1tb3ZpZS1saXN0cyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLDAsMCwgMC44KTtcXHJcXG4gIHBhZGRpbmc6IDJyZW07XFxyXFxuICBmb250LXNpemU6IDNyZW07XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMzA0MDtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBwYWRkaW5nOiAzcmVtO1xcclxcblxcclxcbn1cXHJcXG4ubW9kYWwge1xcclxcbiAgICBkaXNwbGF5OiBub25lOyBcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkOyBcXHJcXG4gICAgei1pbmRleDogMTsgXFxyXFxuICAgIHBhZGRpbmctdG9wOiAxMDBweDsgXFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7IFxcclxcbiAgICBoZWlnaHQ6IDEwMCU7IFxcclxcbiAgICBvdmVyZmxvdzogYXV0bzsgXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IFxcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNCk7IFxcclxcbiAgfVxcclxcbiAgLm1vZGFsLWNvbnRlbnQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxyXFxuICAgIHdpZHRoOiA4MCU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIHB7XFxyXFxuICAgIGNvbG9yOiAjMDAwO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY2xvc2Uge1xcclxcbiAgICBjb2xvcjogI2FhYWFhYTtcXHJcXG4gICAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgICBmb250LXNpemU6IDI4cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY2xvc2U6aG92ZXIsXFxyXFxuICAuY2xvc2U6Zm9jdXMge1xcclxcbiAgICBjb2xvcjogIzAwMDtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB9XFxyXFxuICAubXlmb3Jte1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuICAjbXlCdG57XFxyXFxuICAgIHdpZHRoOiAyMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudXB7XFxyXFxuIFxcclxcbiAgfVxcclxcblxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxzQkFBc0I7RUFDdEIsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixZQUFZO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2I7OztZQUdRO0lBQ1IsMEJBQTBCO0lBQzFCLFlBQVk7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsV0FBVztFQUNYLGVBQWU7RUFDZixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsa0NBQWtDO0VBQ2xDLGFBQWE7RUFDYixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsYUFBYTs7QUFFZjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxNQUFNO0lBQ04sV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0lBQ2QsNEJBQTRCO0lBQzVCLGlDQUFpQztFQUNuQztFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtFQUNuQjs7RUFFQTs7SUFFRSxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLGVBQWU7RUFDakI7RUFDQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsVUFBVTtFQUNaOztFQUVBOztFQUVBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxhdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbioge1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmh0bWwge1xcclxcbiAgICBmb250LXNpemU6IDYyLjUlO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250OiAxLjZyZW07XFxyXFxufVxcclxcblxcclxcbi5ncmlkX19jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcclxcbiAgICAnaGVhZGVyJ1xcclxcbiAgICAnbWFpbidcXHJcXG4gICAgJ2Zvb3Rlcic7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDMwNDA7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47ICAgXFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcGFkZGluZzogM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIGEge1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXHJcXG4gIG1hcmdpbi1yaWdodDogMnJlbTtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBhOmhvdmVyIHtcXHJcXG4gIGNvbG9yOiAjZjA4MDQwO1xcclxcbn1cXHJcXG5cXHJcXG4uYnJhbmQgYSB7XFxyXFxuICBmb250LXNpemU6IDVyZW07XFxyXFxuICBtYXJnaW4tbGVmdDogM3JlbTtcXHJcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1saW5rIGEge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5ncmlkX19jb250YWluZXItbW92aWVzIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvO1xcclxcbiAgZ2FwOiAyLjVyZW07XFxyXFxuICBwYWRkaW5nOiAxLjVyZW07XFxyXFxuICBoZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4uZ3JpZF9fY29udGFpbmVyLW1vdmllLWxpc3RzIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsMCwwLCAwLjgpO1xcclxcbiAgcGFkZGluZzogMnJlbTtcXHJcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAzMDQwO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIHBhZGRpbmc6IDNyZW07XFxyXFxuXFxyXFxufVxcclxcbi5tb2RhbCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7IFxcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7IFxcclxcbiAgICB6LWluZGV4OiAxOyBcXHJcXG4gICAgcGFkZGluZy10b3A6IDEwMHB4OyBcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTsgXFxyXFxuICAgIGhlaWdodDogMTAwJTsgXFxyXFxuICAgIG92ZXJmbG93OiBhdXRvOyBcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgXFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTsgXFxyXFxuICB9XFxyXFxuICAubW9kYWwtY29udGVudCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgcHtcXHJcXG4gICAgY29sb3I6ICMwMDA7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jbG9zZSB7XFxyXFxuICAgIGNvbG9yOiAjYWFhYWFhO1xcclxcbiAgICBmbG9hdDogcmlnaHQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjhweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jbG9zZTpob3ZlcixcXHJcXG4gIC5jbG9zZTpmb2N1cyB7XFxyXFxuICAgIGNvbG9yOiAjMDAwO1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIH1cXHJcXG4gIC5teWZvcm17XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG4gICNteUJ0bntcXHJcXG4gICAgd2lkdGg6IDIwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC51cHtcXHJcXG4gXFxyXFxuICB9XFxyXFxuXFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbmNvbnN0IGxpc3Q9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc3VsdHNMaXN0Jyk7XHJcbmNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNteU1vZGFsXCIpO1xyXG5cclxuLy8gR2V0IHRoZSBidXR0b24gdGhhdCBvcGVucyB0aGUgbW9kYWxcclxuY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNteUJ0blwiKTtcclxuXHJcbi8vIEdldCB0aGUgPHNwYW4+IGVsZW1lbnQgdGhhdCBjbG9zZXMgdGhlIG1vZGFsXHJcbmNvbnN0IHNwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2xvc2VcIilbMF07XHJcblxyXG4vLyBXaGVuIHRoZSB1c2VyIGNsaWNrcyB0aGUgYnV0dG9uLCBvcGVuIHRoZSBtb2RhbCBcclxuYnRuLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcclxuICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG59XHJcblxyXG4vLyBXaGVuIHRoZSB1c2VyIGNsaWNrcyBvbiA8c3Bhbj4gKHgpLCBjbG9zZSB0aGUgbW9kYWxcclxuc3Bhbi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XHJcbiAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG59XHJcblxyXG4vLyBXaGVuIHRoZSB1c2VyIGNsaWNrcyBhbnl3aGVyZSBvdXRzaWRlIG9mIHRoZSBtb2RhbCwgY2xvc2UgaXRcclxud2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbihldmVudCkge1xyXG4gIGlmIChldmVudC50YXJnZXQgPT0gbW9kYWwpIHtcclxuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICB9XHJcbn1cclxuY29uc3Qgc2hvd3NxdWVyeSA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCB1cmwgPSdodHRwczovL2FwaS50dm1hemUuY29tL3Nob3dzLzIvZXBpc29kZXMnOyAgXHJcbiAgY29uc3QgZmV0Y2hEYXRhID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2hEYXRhLmpzb24oKTtcclxuICByZW5kZXJyZXN1bHRzKGRhdGEpO1xyXG59O1xyXG5cclxuY29uc3QgcmVuZGVycmVzdWx0cyA9IChyZXN1bHRzKSA9PiB7XHJcbiAgcmVzdWx0cy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICBjb25zdCBlcGlzb2RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZXBpc29kZXMuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW1hZ2VcIj4gPGltZyBzcmM9XCIke2l0ZW0uaW1hZ2UubWVkaXVtfVwiIGFsdD1cIlwiLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwidGl0bGUtc2hvd1wiPiR7aXRlbS5uYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGlrZXNcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInNlYXNvblwiPiBzZWFzb24gJHtpdGVtLnNlYXNvbn0gZXBpc29kZSAke2l0ZW0ubnVtYmVyfSA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwic3VtbWFyeVwiPiR7aXRlbS5zdW1tYXJ5fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImxpa2VcIj5MaWtlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gaWQ9XCJteUJ0blwiPmNvbW1lbnRzPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJyZXNlcnZhdGlvblwiPlJlc2VydmF0aW9uPC9idXR0b24+IGA7XHJcblxyXG4gICAgbGlzdC5hcHBlbmRDaGlsZChlcGlzb2Rlcyk7XHJcbiAgfSk7XHJcbn07XHJcblxyXG5cclxuXHJcblxyXG4gXHJcbi8vIHdpbmRvdy5vbmxvYWQgPSgpPT57XHJcbi8vICBjb25zdCBzZWFyY2ggPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNxdWVyeScpXHJcbi8vICAgc2VhcmNoLm9ua2V5dXAgPShlKT0+e1xyXG4vLyAgICAgc2hvd3NxdWVyeShzZWFyY2gudmFsdWUpO1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxud2luZG93Lm9ubG9hZCA9KCk9PnsgIFxyXG4gICAgIHNob3dzcXVlcnkoKTtcclxuICAgfVxyXG4gIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
>>>>>>> dev
