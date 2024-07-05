/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./javascript/hours.js":
/*!*****************************!*\
  !*** ./javascript/hours.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createHours: () => (/* binding */ createHours)\n/* harmony export */ });\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/styles.css */ \"./styles/styles.css\");\n/* harmony import */ var _data_daysTimes_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/daysTimes.json */ \"./data/daysTimes.json\");\n/* harmony import */ var _assets_images_pauline_loroy_tv8PIPPY3rQ_unsplash_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/pauline-loroy-tv8PIPPY3rQ-unsplash.jpg */ \"./assets/images/pauline-loroy-tv8PIPPY3rQ-unsplash.jpg\");\n/* harmony import */ var _assets_images_logo_key_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/logo-key.svg */ \"./assets/images/logo-key.svg\");\n\n\n\n\n\n    const content = document.querySelector(\"#content\");\n    // console.log(\"test\");\n\n    function createHours() {\n\n        const hours = document.createElement(\"div\");\n        hours.id = \"hours\"; \n        hours.classList.add(\"wipe\");  \n        content.appendChild(hours);\n\n        const hoursImg = document.createElement(\"img\");\n        hoursImg.id = \"hours-image\";\n        hoursImg.classList.add(\"wipe\");\n        hoursImg.src = _assets_images_pauline_loroy_tv8PIPPY3rQ_unsplash_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n        hours.appendChild(hoursImg);\n\n        const scheduleCont = document.createElement(\"div\");\n        scheduleCont.id = \"schedule-cont\";\n        scheduleCont.classList.add(\"wipe\");\n        hours.appendChild(scheduleCont);\n\n        const logoKey = document.createElement(\"img\");\n        logoKey.classList.add(\"logo\", \"wipe\");\n        logoKey.src = _assets_images_logo_key_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\n        logoKey.alt = \"An ornate key\";\n        scheduleCont.appendChild(logoKey);\n\n        const hoursOfOperation = document.createElement(\"h2\");\n        hoursOfOperation.id = \"hours-of-operation\";\n        hoursOfOperation.classList.add(\"wipe\");\n        hoursOfOperation.textContent = \"Hours of Operation\";\n        scheduleCont.appendChild(hoursOfOperation);\n\n        const open6DaysMsg = document.createElement(\"p\");\n        open6DaysMsg.id = \"open-6-days-msg\";\n        open6DaysMsg.classList.add(\"p-center\", \"wipe\");\n        open6DaysMsg.textContent = \"Now open 6 days a week!\";\n        scheduleCont.appendChild(open6DaysMsg);\n\n        const break1 = document.createElement(\"br\");\n        break1.classList.add(\"wipe\");\n        scheduleCont.appendChild(break1);\n\n        const daysTimes = document.createElement(\"div\");\n        daysTimes.id = \"days-times\";\n        daysTimes.classList.add(\"wipe\");\n        scheduleCont.appendChild(daysTimes);\n\n        const days = document.createElement(\"div\");\n        days.id = \"days\";\n        days.classList.add(\"wipe\");\n        daysTimes.appendChild(days);\n\n        const times = document.createElement(\"div\");\n        times.id = \"times\";\n        times.classList.add(\"wipe\");\n        daysTimes.appendChild(times);\n\n        const addSchedule = (function () {\n            const days = document.querySelector(\"#days\");\n            const times = document.querySelector(\"#times\");\n            _data_daysTimes_json__WEBPACK_IMPORTED_MODULE_1__.forEach((dayOfWeek) => {\n                const dayElement = document.createElement(\"p\");\n                dayElement.textContent = dayOfWeek.day;\n                days.appendChild(dayElement);\n            });\n            _data_daysTimes_json__WEBPACK_IMPORTED_MODULE_1__.forEach((timeOfWeek) => {\n                const timeElement = document.createElement(\"p\");\n                timeElement.textContent = timeOfWeek.time;\n                times.appendChild(timeElement);\n            });\n        })()\n\n        const break2 = document.createElement(\"br\");\n        break2.classList.add(\"wipe\");\n        scheduleCont.appendChild(break2);\n\n        const openLateMsg = document.createElement(\"p\");\n        openLateMsg.id = \"open-late-msg\";\n        openLateMsg.classList.add(\"p-center\", \"wipe\");\n        openLateMsg.textContent = \"Open late for author talks & special events.\";\n        scheduleCont.appendChild(openLateMsg);\n\n        const break3 = document.createElement(\"br\");\n        break3.classList.add(\"wipe\");\n        scheduleCont.appendChild(break3);\n\n    }\n\n\n\n//# sourceURL=webpack://odin-restaurant-page/./javascript/hours.js?");

/***/ }),

/***/ "./javascript/location.js":
/*!********************************!*\
  !*** ./javascript/location.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createLocation: () => (/* binding */ createLocation)\n/* harmony export */ });\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/styles.css */ \"./styles/styles.css\");\n/* harmony import */ var _assets_images_metin_ozer_eBUuTewGUXk_unsplash_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/metin-ozer-eBUuTewGUXk-unsplash.jpg */ \"./assets/images/metin-ozer-eBUuTewGUXk-unsplash.jpg\");\n/* harmony import */ var _assets_images_logo_lock_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/logo-lock.svg */ \"./assets/images/logo-lock.svg\");\n/* harmony import */ var _assets_images_bluecollar_love_arkham_map_circle_only_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/bluecollar-love-arkham-map-circle-only.png */ \"./assets/images/bluecollar-love-arkham-map-circle-only.png\");\n\n\n\n\n\nconst content = document.querySelector(\"#content\");\n\nfunction createLocation() {\n  const location = document.createElement(\"div\");\n  location.id = \"location\";\n  location.classList.add(\"wipe\");\n  content.appendChild(location);\n\n  const locationImg = document.createElement(\"img\");\n  locationImg.id = \"location-image\";\n  locationImg.classList.add(\"wipe\");\n  locationImg.src = _assets_images_metin_ozer_eBUuTewGUXk_unsplash_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n  location.appendChild(locationImg);\n\n  const locationCont = document.createElement(\"div\");\n  locationCont.id = \"location-cont\";\n  locationCont.classList.add(\"wipe\");\n  location.appendChild(locationCont);\n\n  const logoLock = document.createElement(\"img\");\n  logoLock.classList.add(\"logo\", \"wipe\", \"pad-top-bot\");\n  logoLock.src = _assets_images_logo_lock_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n  logoLock.alt = \"An ornate lock\";\n  locationCont.appendChild(logoLock);\n\n  const locationHeader = document.createElement(\"h2\");\n  locationHeader.id = \"location-header\";\n  locationHeader.classList.add(\"wipe\");\n  locationHeader.textContent = \"Where to Find Us!\";\n  locationCont.appendChild(locationHeader);\n\n  const locationBlurb = document.createElement(\"p\");\n  locationBlurb.id = \"location-blurb\";\n  locationBlurb.classList.add(\"p-center\", \"wipe\");\n  locationBlurb.textContent =\n    \"Look for our ivy covered iron gate at 23 Miskatonic Avenue, Rear, in beautiful Arkham, MA 01930.\";\n  locationCont.appendChild(locationBlurb);\n\n  const arkhamMapImg = document.createElement(\"img\");\n  arkhamMapImg.id = \"arkham-map-image\";\n  arkhamMapImg.classList.add(\"wipe\");\n  arkhamMapImg.src = _assets_images_bluecollar_love_arkham_map_circle_only_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\n  locationCont.appendChild(arkhamMapImg);\n\n}\n\n\n\n//# sourceURL=webpack://odin-restaurant-page/./javascript/location.js?");

/***/ }),

/***/ "./javascript/splash.js":
/*!******************************!*\
  !*** ./javascript/splash.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createSplash: () => (/* binding */ createSplash)\n/* harmony export */ });\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/styles.css */ \"./styles/styles.css\");\n/* harmony import */ var _assets_images_jaredd_craig_HH4WBGNyltc_unsplash_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/jaredd-craig-HH4WBGNyltc-unsplash.jpg */ \"./assets/images/jaredd-craig-HH4WBGNyltc-unsplash.jpg\");\n/* harmony import */ var _assets_images_ornamental_leaf_lt_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/ornamental-leaf-lt.svg */ \"./assets/images/ornamental-leaf-lt.svg\");\n/* harmony import */ var _assets_images_ornamental_leaf_rt_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/ornamental-leaf-rt.svg */ \"./assets/images/ornamental-leaf-rt.svg\");\n\n\n\n\n// import roseCircle from \"../assets/images/ornamental-circle-rose.svg\";\n\nconst content = document.querySelector(\"#content\");\nconsole.log(\"test\");\n\nfunction createSplash() {\n    const splash = document.createElement(\"div\");\n    splash.id = \"splash\";\n    splash.classList.add(\"wipe\");\n    content.appendChild(splash);\n\n    const splashImg = document.createElement(\"img\");\n    splashImg.id = \"splash-image\";\n    splashImg.src = _assets_images_jaredd_craig_HH4WBGNyltc_unsplash_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n    splashImg.classList.add(\"wipe\");\n    splash.appendChild(splashImg);\n\n    // const circleRotate = document.createElement(\"img\");\n    // circleRotate.classList.add(\"circle\");\n    // circleRotate.src = roseCircle;\n    // splash.appendChild(circleRotate);\n\n    const storeNameCont = document.createElement(\"div\");\n    storeNameCont.id = \"store-name-cont\";\n    storeNameCont.classList.add(\"wipe\");\n    splash.appendChild(storeNameCont);\n\n    const storeName = document.createElement(\"h1\");\n    storeName.id = \"store-name\";\n    storeName.classList.add(\"wipe\");\n    storeName.textContent = \"The Hidden Garden\";\n    storeNameCont.appendChild(storeName);\n\n    const subtitle = document.createElement(\"div\");\n    subtitle.id = \"subtitle\";\n    subtitle.classList.add(\"wipe\");\n    storeNameCont.appendChild(subtitle);\n\n    const leafLtImg = document.createElement(\"img\");\n    leafLtImg.classList.add(\"leaf\", \"wipe\");\n    leafLtImg.src = _assets_images_ornamental_leaf_lt_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n    subtitle.appendChild(leafLtImg);\n    \n    const storeNameSub = document.createElement(\"h2\");\n    storeNameSub.id = \"store-name-sub\";\n    storeNameSub.classList.add(\"wipe\");\n    storeNameSub.textContent = \" Bookstore and Cafe \";\n    subtitle.appendChild(storeNameSub);\n\n    const leafRtImg = document.createElement(\"img\");\n    leafRtImg.classList.add(\"leaf\", \"wipe\");\n    leafRtImg.src = _assets_images_ornamental_leaf_rt_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\n    subtitle.appendChild(leafRtImg);\n}\n\n\n\n\n//# sourceURL=webpack://odin-restaurant-page/./javascript/splash.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./styles/styles.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./styles/styles.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* All three... */\n\n:root {\n    --white: #fafbfd;\n    /* --white: red; */\n    --white2: #fafbfd66;\n    --white3: #fafbfd80;\n    --rose: #ee93b4;\n    --dk-rose: #D34D70;\n    --lt-leaf: #90c754;\n    --lt-leaf2: #8fc754d8; \n    --dk-leaf: #175f3a;\n    --dk-leaf2: #175f3a80;\n    --blue-iron: #01393a;\n    --font-title:  \"Dancing Script\", cursive;\n    --font-main: \"Roboto Condensed\", sans-serif;\n    --h1: 2.25rem;\n    --h2: 1.5rem;\n    --p: 1.25rem\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    height: 100vh;\n    width: 100vw;\n    margin: auto;\n}\n\n/* #title {\n    height: auto;\n    width: 100vw;\n    background-color: var(--blue-iron);\n    border-top: 5px double var(--white);\n        border-bottom: 5px double var(--white);\n    color: var(--white);\n    display: flex;\n    flex-direction: column;\n        justify-content: center;\n        align-items: center;\n    font-family: var(--font-title);\n    font-optical-sizing: auto;\n    font-weight: 900;\n    font-style: normal;\n    padding: .5rem 0 .5rem 0;\n} */\n\n#subtitle {\n    display: flex;\n        justify-content: center;\n        align-items: center;\n}\n\n/* h1 {\n\n}\n\nh2 {\n\n} */\n\nh1, h2 {\n    margin: 0;\n    padding:0\n}\n\n/* .leaf {\n    width: 2rem;\n}  */\n\nnav {\n    height: fit-content;\n    z-index: 5;\n    position: fixed; \n    top: 0; \n    left: 0; \n    right: 0; \n    bottom: 95%;\n    background-color: var(--blue-iron);\n    border-bottom: 5px double var(--white);\n    color: var(--white);\n    display: flex;\n        justify-content: center;\n        align-items: center;\n    padding: .5rem;\n}\n\nbutton {\n    height: 2rem;\n    width: 4.25rem;\n    /* background: var(--dk-leaf2); */\n        background: var(--blue-iron);\n    /* background: radial-gradient(circle, var(--dk-rose) 10%, var(--rose) 95%); */\n    border: none;\n    border-radius: 1rem;\n    color: var(--white);\n    display: flex;\n        justify-content: center;\n        align-items: center;\n    font-family: var(--font-title);\n    font-size: 1rem;\n    font-weight: 900;\n    /* margin: .25rem; */\n    outline: none;\n    padding: .2rem;\n}\n\nbutton:hover {\n    /* background: var(--dk-rose); */\n    border: .75px double var(--rose);\n    /* border-bottom: 1px solid var(--rose);\n        border-left: 1px solid var(--rose);\n                border-right: 1px solid var(--rose);\n                border-top: 1px solid var(--rose); */\n    color: var(--rose);\n    transform: scale(1.15);\n}\n\nbutton:active {\n    /* background: radial-gradient(circle, var(--rose) 65%, var(--white) 95%); */\n    transform: scale(.9);\n}\n\nfooter {\n    z-index: 5;\n    position: fixed; \n    top: 95%; \n    left: 0; \n    right: 0; \n    bottom: 0;\n    /* height: auto;\n    width: auto; */\n    background-color: var(--blue-iron);\n    border-top: 5px double var(--white);\n    color: var(--white);\n    display: flex;\n        justify-content: space-evenly;\n        align-items: center;\n    font-family: var(--font-title);\n    font-optical-sizing: auto;\n    font-weight: 900;\n    font-size: 1rem;\n    font-style: normal;\n    padding: 1rem;\n}\n\n/* ELEMENTS FOUND ON EVERY PAGE */\n\n#splash-image, #hours-image, #location-image {\n    height: 100vh;\n    width: auto;\n    z-index: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.logo { \n    height: 6rem;\n}\n\n.pad-top-bot {\n    margin: 1.35rem 0 1.35rem 0;\n}\n\n#arkham-map-image {\n  height: auto;  \n  width: 250px;\n  margin: .5rem;\n}\n\n\n/* SPLASH PAGE */\n\n#splash, #hours, #location {\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin:0;\n    overflow: hidden;\n}\n\n/* #splash-image {\n    height: 100vh;\n    width: auto;\n    z-index: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n} */\n\n#store-name-cont {\n    height: fit-content;\n    width: auto;\n    position: fixed; \n    top: 15%; \n    left: 0; \n    right: 0; \n    bottom: 0%;\n    z-index: 10;\n    background-color: var(--white3);\n    /* border-top: 5px double var(--white);\n        border-bottom: 5px double var(--white); */\n    color: var(--blue-iron);\n    display: flex;\n    flex-direction: column;\n        justify-content: center;\n        align-items: center;\n    font-family: var(--font-title);\n    font-optical-sizing: auto;\n    font-weight: 900;\n    font-style: normal;\n    padding: .25rem;\n}\n\n#store-name {\n    font-size: var(--h1);\n}\n\n#store-name-sub {\n    font-size: var(--h2);\n        white-space: pre; \n}\n\n#store-name, #store-name-sub  {\n    z-index: 10;\n    margin: 0;\n    padding:0\n}\n\n#subtitle {\n        z-index: 10;\n    display: flex;\n}\n\n.leaf {\n    z-index: 10;\n    width: 2rem;\n}\n\n\n/* HOURS PAGE */\n\n/* #hours {\n    height: 100vh;\n    width: auto;\n\n    display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n} */\n\n/* #hours-image {\n  position: absolute;\n      z-index: 0;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}  */\n\n#schedule-cont, #location-cont {\n    height: fit-content;\n    width: 300px;\n    z-index: 5;\n    background-color: var(--lt-leaf2);\n    /* border: 5cm double var(--blue-iron); */\n    border-radius: 3rem;\n    color: var(--blue-iron);\n    display: flex;\n        flex-direction: column;\n        justify-content: start;\n        align-items: center;\n    /* opacity: .8; */\n    font-family: var(--font-main);\n    margin: 0;\n    padding: 0 1rem 1rem 1rem;\n    text-align: center;\n}\n\n\n\n#hours-of-operation, #location-header {\n    font-size: var(--h2);\n}\n\n#schedule-cont p, #location-cont p {\n    font-size: var(--p);\n}\n\n.p-center {\n    display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-wrap: wrap;\n}\n\n#schedule-cont h2, #schedule-cont p {\n    font-weight: 900;\n}\n\n#days-times {\n    display: flex;\n        justify-content: start;\n        align-items: start;\n    text-align: left;\n}\n\n/* Below fixes spacing issue with dynamically rending from the json file. */\n#days, #times {\n    white-space: pre; \n}\n\n\n/* Events Page */\n\n\n\n/* Menu Page */\n\n\n/* About Page */`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-restaurant-page/./styles/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./assets/images/bluecollar-love-arkham-map-circle-only.png":
/*!******************************************************************!*\
  !*** ./assets/images/bluecollar-love-arkham-map-circle-only.png ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/d9694044c212e5fe738dc6cb4b528d3f.png\");\n\n//# sourceURL=webpack://odin-restaurant-page/./assets/images/bluecollar-love-arkham-map-circle-only.png?");

/***/ }),

/***/ "./assets/images/jaredd-craig-HH4WBGNyltc-unsplash.jpg":
/*!*************************************************************!*\
  !*** ./assets/images/jaredd-craig-HH4WBGNyltc-unsplash.jpg ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/fc8bd904347c84991bb386092c3c417a.jpg\");\n\n//# sourceURL=webpack://odin-restaurant-page/./assets/images/jaredd-craig-HH4WBGNyltc-unsplash.jpg?");

/***/ }),

/***/ "./assets/images/logo-key.svg":
/*!************************************!*\
  !*** ./assets/images/logo-key.svg ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/8cd5ca27982fd66a4382f68fdbb68c72.svg\");\n\n//# sourceURL=webpack://odin-restaurant-page/./assets/images/logo-key.svg?");

/***/ }),

/***/ "./assets/images/logo-lock.svg":
/*!*************************************!*\
  !*** ./assets/images/logo-lock.svg ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/e2c5355e28b1fed49ec49068fd852a2d.svg\");\n\n//# sourceURL=webpack://odin-restaurant-page/./assets/images/logo-lock.svg?");

/***/ }),

/***/ "./assets/images/metin-ozer-eBUuTewGUXk-unsplash.jpg":
/*!***********************************************************!*\
  !*** ./assets/images/metin-ozer-eBUuTewGUXk-unsplash.jpg ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/b637254b0d2af98189a85b81b3564b58.jpg\");\n\n//# sourceURL=webpack://odin-restaurant-page/./assets/images/metin-ozer-eBUuTewGUXk-unsplash.jpg?");

/***/ }),

/***/ "./assets/images/ornamental-leaf-lt.svg":
/*!**********************************************!*\
  !*** ./assets/images/ornamental-leaf-lt.svg ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/8f0db7d60a159b02dd1c0ac91c317415.svg\");\n\n//# sourceURL=webpack://odin-restaurant-page/./assets/images/ornamental-leaf-lt.svg?");

/***/ }),

/***/ "./assets/images/ornamental-leaf-rt.svg":
/*!**********************************************!*\
  !*** ./assets/images/ornamental-leaf-rt.svg ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/448fd33ffaa71f07dc605f29c06cc924.svg\");\n\n//# sourceURL=webpack://odin-restaurant-page/./assets/images/ornamental-leaf-rt.svg?");

/***/ }),

/***/ "./assets/images/pauline-loroy-tv8PIPPY3rQ-unsplash.jpg":
/*!**************************************************************!*\
  !*** ./assets/images/pauline-loroy-tv8PIPPY3rQ-unsplash.jpg ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/758ab1501713034ad33dd8629e41e19a.jpg\");\n\n//# sourceURL=webpack://odin-restaurant-page/./assets/images/pauline-loroy-tv8PIPPY3rQ-unsplash.jpg?");

/***/ }),

/***/ "./styles/styles.css":
/*!***************************!*\
  !*** ./styles/styles.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./styles/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-restaurant-page/./styles/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/styles.css */ \"./styles/styles.css\");\n/* harmony import */ var _javascript_splash_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../javascript/splash.js */ \"./javascript/splash.js\");\n/* harmony import */ var _javascript_hours_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../javascript/hours.js */ \"./javascript/hours.js\");\n/* harmony import */ var _javascript_location_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../javascript/location.js */ \"./javascript/location.js\");\n\n\n// import { createAbout } from \"../javascript/about.js\";\n// import { createEvents } from \"../javascript/events.js\";\n\n\n// import { createMenu } from \"../javascript/menu.js\";\n\n(0,_javascript_splash_js__WEBPACK_IMPORTED_MODULE_1__.createSplash)(); // Seems like the simplest way to institute a default on webpage load up.\n\nconst buttonListeners = (function () {\n    const splash = document.querySelector(\"#splash\");\n    const about = document.querySelector(\"#about\");\n    const events = document.querySelector(\"#events\");\n    const hours = document.querySelector(\"#hours\");\n    const location = document.querySelector(\"#location\");\n    const menu = document.querySelector(\"#menu\");\n\n    // const splashBtn = document.querySelector(\"#splash-btn\");\n    // const aboutBtn = document.querySelector(\"#about-btn\");\n    // const eventsBtn = document.querySelector(\"#events-btn\");\n    // const hoursBtn = document.querySelector(\"#hours-btn\");\n    // const locationBtn = document.querySelector(\"#location-btn\");\n    // const menuBtn = document.querySelector(\"#menu-btn\");\n\n    const content = document.querySelector(\"#content\");  \n\n    function wipeOut() {\n        const wipe = content.querySelectorAll(\".wipe\"); \n        wipe.forEach(function (child) {\n        child.remove();\n    });   \n    }\n\n    const nav = document.querySelector(\"nav\");\n\n    let currentBtn = \"\";\n    let currentFunction = \"\";\n    \n    console.log(currentBtn);\n    console.log(currentFunction);\n\n    function isCurrentFunction() {\n        // if (currentFunction === \"\") {\n        //   wipeOut();\n        //   createSplash();\n        // } \n\n        if (currentFunction === \"isSplash\") {\n            wipeOut();\n            (0,_javascript_splash_js__WEBPACK_IMPORTED_MODULE_1__.createSplash)();\n        } \n\n        // if (currentFunction === \"isAbout\") {\n        //     wipeOut();\n        //     createAbout();\n        // } \n\n        // if (currentFunction === \"isEvents\") {\n        //     wipeOut();\n        //     createEvents();\n        // } \n        \n        if (currentFunction === \"isHours\") {\n            wipeOut();\n            (0,_javascript_hours_js__WEBPACK_IMPORTED_MODULE_2__.createHours)();\n        }\n\n        if (currentFunction === \"isLocation\") {\n            wipeOut();\n            (0,_javascript_location_js__WEBPACK_IMPORTED_MODULE_3__.createLocation)();\n        } \n    }\n\n\n    nav.addEventListener(\"click\", (event) => {\n let currentBtn = \"\";\n            console.log(currentBtn);\n            console.log(currentFunction);\n\n        const isButton = event.target.nodeName === \"BUTTON\";\n        if (!isButton) {\n            return\n        }\n        console.dir(event.target.id);\n\n        if (event.target.id === \"splash-btn\" && currentBtn !== \"splash-btn\") {\n          currentBtn = \"splash-btn\";\n        currentFunction = \"isSplash\";\n        }\n\n        // if (\n        //     event.target.id === \"about-btn\" &&\n        //     currentBtn !== \"about-btn\"\n        // ) {\n        //     currentBtn = \"about-btn\";\n        //     currentFunction = \"isAbout\";\n        // }\n\n        // if (\n        //     event.target.id === \"event-btn\" &&\n        //     currentBtn !== \"event-btn\"\n        // ) {\n        //     currentBtn = \"event-btn\";\n        //     currentFunction = \"isEvent\";\n        // }\n\n        if (event.target.id === \"hours-btn\" && \n            currentBtn !== \"hours-btn\"\n        ) {\n            currentBtn = \"hours-btn\";\n            currentFunction = \"isHours\";\n        }\n\n        if (\n            event.target.id === \"location-btn\" &&\n            currentBtn !== \"location-btn\"\n        ) {\n            currentBtn = \"location-btn\";\n            currentFunction = \"isLocation\";\n        }\n\n        // if (\n        //     event.target.id === \"menu-btn\" &&\n        //     currentBtn !== \"menu-btn\"\n        // ) {\n        //     currentBtn = \"menu-btn\";\n        //     currentFunction = \"isMenu\";\n        // }\n\n    isCurrentFunction();\n    });\n\n})()\n\n//# sourceURL=webpack://odin-restaurant-page/./src/index.js?");

/***/ }),

/***/ "./data/daysTimes.json":
/*!*****************************!*\
  !*** ./data/daysTimes.json ***!
  \*****************************/
/***/ ((module) => {

eval("module.exports = /*#__PURE__*/JSON.parse('[{\"id\":1,\"day\":\"Monday: \",\"time\":\"Closed\"},{\"id\":2,\"day\":\"Tuesday: \",\"time\":\"10am - 6pm\"},{\"id\":3,\"day\":\"Wednesday: \",\"time\":\"10am - 6pm\"},{\"id\":4,\"day\":\"Thursday: \",\"time\":\"10am - 6pm\"},{\"id\":5,\"day\":\"Friday: \",\"time\":\"10am - 6pm\"},{\"id\":6,\"day\":\"Saturday: \",\"time\":\"  9am - 7pm\"},{\"id\":7,\"day\":\"Sunday: \",\"time\":\"11am - 5pm\"}]');\n\n//# sourceURL=webpack://odin-restaurant-page/./data/daysTimes.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;