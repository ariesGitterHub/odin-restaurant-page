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

/***/ "./javascript/about.js":
/*!*****************************!*\
  !*** ./javascript/about.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createAbout: () => (/* binding */ createAbout)\n/* harmony export */ });\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/styles.css */ \"./styles/styles.css\");\n/* harmony import */ var _assets_images_colin_maynard_HsG4OEPqGYc_unsplash_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/colin-maynard-HsG4OEPqGYc-unsplash.jpg */ \"./assets/images/colin-maynard-HsG4OEPqGYc-unsplash.jpg\");\n/* harmony import */ var _assets_images_icon_about_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/icon-about.svg */ \"./assets/images/icon-about.svg\");\n\n\n\n\nconst content = document.querySelector(\"#content\");\n\nfunction createAbout() {\n    const about = document.createElement(\"div\");\n    about.id = \"about\";\n    about.classList.add(\"wipe\");\n    content.appendChild(about);\n\n    const aboutImg = document.createElement(\"img\");\n    aboutImg.id = \"about-image\";\n    aboutImg.classList.add(\"wipe\");\n    aboutImg.src = _assets_images_colin_maynard_HsG4OEPqGYc_unsplash_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n    about.appendChild(aboutImg);\n\n    const aboutCont = document.createElement(\"div\");\n    aboutCont.id = \"about-cont\";\n    aboutCont.classList.add(\"wipe\");\n    about.appendChild(aboutCont);\n\n    const iconAbout = document.createElement(\"img\");\n    iconAbout.classList.add(\"logo2\", \"wipe\");\n    iconAbout.src = _assets_images_icon_about_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n    iconAbout.alt = \"An ornate lock\";\n    aboutCont.appendChild(iconAbout);\n\n    const aboutHeader = document.createElement(\"h2\");\n    aboutHeader.id = \"about-header\";\n    aboutHeader.classList.add(\"wipe\");\n    aboutHeader.textContent = \"Our Mission\";\n    aboutCont.appendChild(aboutHeader);\n\n    const aboutBlurb = document.createElement(\"p\");\n    aboutBlurb.id = \"about-blurb\";\n    aboutBlurb.classList.add(\"p-center\", \"wipe\");\n    aboutBlurb.textContent =\n        \"Since 1766, this humble shop has worked to enlighten and transcend the common by providing a sacred forum for the free exchange of worthy ideas.\";\n    aboutCont.appendChild(aboutBlurb);\n\n    const break1 = document.createElement(\"br\");\n    break1.classList.add(\"wipe\");\n    aboutCont.appendChild(break1);\n\n    const aboutQuote = document.createElement(\"p\");\n    aboutQuote.id = \"about-quote\";\n    aboutQuote.classList.add(\"p-center\", \"wipe\");\n    aboutQuote.textContent =\n      \"'A most winsome and decadent establishment. The little cakes were also quite satisfactory, nearing scrumptious.' ~Edgar Allen Poe\";\n    aboutCont.appendChild(aboutQuote);\n\n}\n\n\n\n\n//# sourceURL=webpack://odin-restaurant-page/./javascript/about.js?");

/***/ }),

/***/ "./javascript/events.js":
/*!******************************!*\
  !*** ./javascript/events.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createEvents: () => (/* binding */ createEvents)\n/* harmony export */ });\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/styles.css */ \"./styles/styles.css\");\n/* harmony import */ var _assets_images_brandon_lopez_3E_8XgqRSps_unsplash_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/brandon-lopez-3E_8XgqRSps-unsplash.jpg */ \"./assets/images/brandon-lopez-3E_8XgqRSps-unsplash.jpg\");\n/* harmony import */ var _data_eventItems_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/eventItems.json */ \"./data/eventItems.json\");\n\n\n\n\nconst content = document.querySelector(\"#content\");\n\nfunction createEvents() {\n    const events = document.createElement(\"div\");\n    events.id = \"events\";\n    events.classList.add(\"wipe\");\n    content.appendChild(events);\n\n    const eventsImg = document.createElement(\"img\");\n    eventsImg.id = \"events-image\";\n    eventsImg.classList.add(\"wipe\");\n    eventsImg.src = _assets_images_brandon_lopez_3E_8XgqRSps_unsplash_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n    events.appendChild(eventsImg);\n\n    const eventsCont = document.createElement(\"div\");\n    eventsCont.id = \"events-cont\";\n    eventsCont.classList.add(\"wipe\");\n    events.appendChild(eventsCont);\n\n    const addEventItems = (function () {\n      _data_eventItems_json__WEBPACK_IMPORTED_MODULE_2__.forEach((eventItem) => {\n        const eventSquare = document.createElement(\"div\");\n        eventSquare.classList.add(\"wipe\", \"event-square\");\n\n        const what = document.createElement(\"p\");\n        what.classList.add(\"wipe\", \"what\");\n        what.textContent = eventItem.what;\n        eventSquare.appendChild(what);\n\n        const break1 = document.createElement(\"br\");\n        break1.classList.add(\"wipe\");\n        eventSquare.appendChild(break1);\n\n        const when = document.createElement(\"p\");\n        when.classList.add(\"wipe\", \"when\");\n        when.textContent = `${eventItem.when}`;\n        eventSquare.appendChild(when);\n\n        const break2 = document.createElement(\"br\");\n        break2.classList.add(\"wipe\");\n        eventSquare.appendChild(break2);\n\n        const blurb = document.createElement(\"p\");\n        blurb.classList.add(\"wipe\", \"blurb\");\n        blurb.textContent = eventItem.blurb;\n        eventSquare.appendChild(blurb);\n\n        eventsCont.appendChild(eventSquare);\n      });\n    })();\n}\n\n\n\n\n//# sourceURL=webpack://odin-restaurant-page/./javascript/events.js?");

/***/ }),

/***/ "./javascript/hours.js":
/*!*****************************!*\
  !*** ./javascript/hours.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createHours: () => (/* binding */ createHours)\n/* harmony export */ });\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/styles.css */ \"./styles/styles.css\");\n/* harmony import */ var _data_daysTimes_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/daysTimes.json */ \"./data/daysTimes.json\");\n/* harmony import */ var _assets_images_pauline_loroy_tv8PIPPY3rQ_unsplash_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/pauline-loroy-tv8PIPPY3rQ-unsplash.jpg */ \"./assets/images/pauline-loroy-tv8PIPPY3rQ-unsplash.jpg\");\n/* harmony import */ var _assets_images_icon_hours_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/icon-hours.svg */ \"./assets/images/icon-hours.svg\");\n\n\n\n\n\n    const content = document.querySelector(\"#content\");\n    // console.log(\"test\");\n\n    function createHours() {\n\n        const hours = document.createElement(\"div\");\n        hours.id = \"hours\"; \n        hours.classList.add(\"wipe\");  \n        content.appendChild(hours);\n\n        const hoursImg = document.createElement(\"img\");\n        hoursImg.id = \"hours-image\";\n        hoursImg.classList.add(\"wipe\");\n        hoursImg.src = _assets_images_pauline_loroy_tv8PIPPY3rQ_unsplash_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n        hours.appendChild(hoursImg);\n\n        const scheduleCont = document.createElement(\"div\");\n        scheduleCont.id = \"schedule-cont\";\n        scheduleCont.classList.add(\"wipe\");\n        hours.appendChild(scheduleCont);\n\n        const iconHours = document.createElement(\"img\");\n        iconHours.classList.add(\"logo\", \"wipe\");\n        iconHours.src = _assets_images_icon_hours_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\n        iconHours.alt = \"An ornate key\";\n        scheduleCont.appendChild(iconHours);\n\n        const hoursOfOperation = document.createElement(\"h2\");\n        hoursOfOperation.id = \"hours-of-operation\";\n        hoursOfOperation.classList.add(\"wipe\");\n        hoursOfOperation.textContent = \"Hours of Operation\";\n        scheduleCont.appendChild(hoursOfOperation);\n\n        const open6DaysMsg = document.createElement(\"p\");\n        open6DaysMsg.id = \"open-6-days-msg\";\n        open6DaysMsg.classList.add(\"p-center\", \"wipe\");\n        open6DaysMsg.textContent = \"Now open 6 days a week!\";\n        scheduleCont.appendChild(open6DaysMsg);\n\n        const break1 = document.createElement(\"br\");\n        break1.classList.add(\"wipe\");\n        scheduleCont.appendChild(break1);\n\n        const daysTimes = document.createElement(\"div\");\n        daysTimes.id = \"days-times\";\n        daysTimes.classList.add(\"wipe\");\n        scheduleCont.appendChild(daysTimes);\n\n        const days = document.createElement(\"div\");\n        days.id = \"days\";\n        days.classList.add(\"wipe\");\n        daysTimes.appendChild(days);\n\n        const times = document.createElement(\"div\");\n        times.id = \"times\";\n        times.classList.add(\"wipe\");\n        daysTimes.appendChild(times);\n\n        const addSchedule = (function () {\n            const days = document.querySelector(\"#days\");\n            const times = document.querySelector(\"#times\");\n            _data_daysTimes_json__WEBPACK_IMPORTED_MODULE_1__.forEach((dayOfWeek) => {\n                const dayElement = document.createElement(\"p\");\n                dayElement.textContent = dayOfWeek.day;\n                days.appendChild(dayElement);\n            });\n            _data_daysTimes_json__WEBPACK_IMPORTED_MODULE_1__.forEach((timeOfWeek) => {\n                const timeElement = document.createElement(\"p\");\n                timeElement.textContent = timeOfWeek.time;\n                times.appendChild(timeElement);\n            });\n        })()\n\n        const break2 = document.createElement(\"br\");\n        break2.classList.add(\"wipe\");\n        scheduleCont.appendChild(break2);\n\n        const openLateMsg = document.createElement(\"p\");\n        openLateMsg.id = \"open-late-msg\";\n        openLateMsg.classList.add(\"p-center\", \"wipe\");\n        openLateMsg.textContent = \"Open late for author talks & special events.\";\n        scheduleCont.appendChild(openLateMsg);\n\n        const break3 = document.createElement(\"br\");\n        break3.classList.add(\"wipe\");\n        scheduleCont.appendChild(break3);\n\n    }\n\n\n\n//# sourceURL=webpack://odin-restaurant-page/./javascript/hours.js?");

/***/ }),

/***/ "./javascript/location.js":
/*!********************************!*\
  !*** ./javascript/location.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createLocation: () => (/* binding */ createLocation)\n/* harmony export */ });\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/styles.css */ \"./styles/styles.css\");\n/* harmony import */ var _assets_images_tiffany_chan_lT2hiMUACco_unsplash_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/tiffany-chan-lT2hiMUACco-unsplash.jpg */ \"./assets/images/tiffany-chan-lT2hiMUACco-unsplash.jpg\");\n/* harmony import */ var _assets_images_icon_location_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/icon-location.svg */ \"./assets/images/icon-location.svg\");\n/* harmony import */ var _assets_images_bluecollar_love_arkham_map_circle_only_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/bluecollar-love-arkham-map-circle-only.png */ \"./assets/images/bluecollar-love-arkham-map-circle-only.png\");\n\n\n\n\n\nconst content = document.querySelector(\"#content\");\n\nfunction createLocation() {\n  const location = document.createElement(\"div\");\n  location.id = \"location\";\n  location.classList.add(\"wipe\");\n  content.appendChild(location);\n\n  const locationImg = document.createElement(\"img\");\n  locationImg.id = \"location-image\";\n  locationImg.classList.add(\"wipe\");\n  locationImg.src = _assets_images_tiffany_chan_lT2hiMUACco_unsplash_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n  location.appendChild(locationImg);\n\n  const locationCont = document.createElement(\"div\");\n  locationCont.id = \"location-cont\";\n  locationCont.classList.add(\"wipe\");\n  location.appendChild(locationCont);\n\n  const iconLocation = document.createElement(\"img\");\n  iconLocation.classList.add(\"logo\", \"wipe\", \"pad-top-bot\");\n  iconLocation.src = _assets_images_icon_location_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n  iconLocation.alt = \"An ornate lock\";\n  locationCont.appendChild(iconLocation);\n\n  const locationHeader = document.createElement(\"h2\");\n  locationHeader.id = \"location-header\";\n  locationHeader.classList.add(\"wipe\");\n  locationHeader.textContent = \"Where to Find Us!\";\n  locationCont.appendChild(locationHeader);\n\n  const locationBlurb = document.createElement(\"p\");\n  locationBlurb.id = \"location-blurb\";\n  locationBlurb.classList.add(\"p-center\", \"wipe\");\n  locationBlurb.textContent =\n    \"Look for our ivy wreathed iron gate at 23 Miskatonic Avenue (Rear), in beautiful Arkham, MA 01930; also please mind the cats that shelter about.\";\n  locationCont.appendChild(locationBlurb);\n\n  const arkhamMapImg = document.createElement(\"img\");\n  arkhamMapImg.id = \"arkham-map-image\";\n  arkhamMapImg.classList.add(\"wipe\");\n  arkhamMapImg.src = _assets_images_bluecollar_love_arkham_map_circle_only_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"];\n  locationCont.appendChild(arkhamMapImg);\n\n}\n\n\n\n//# sourceURL=webpack://odin-restaurant-page/./javascript/location.js?");

/***/ }),

/***/ "./javascript/menu.js":
/*!****************************!*\
  !*** ./javascript/menu.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createMenu: () => (/* binding */ createMenu)\n/* harmony export */ });\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/styles.css */ \"./styles/styles.css\");\n/* harmony import */ var _assets_images_metin_ozer_eBUuTewGUXk_unsplash_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/metin-ozer-eBUuTewGUXk-unsplash.jpg */ \"./assets/images/metin-ozer-eBUuTewGUXk-unsplash.jpg\");\n/* harmony import */ var _data_menuItems_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/menuItems.json */ \"./data/menuItems.json\");\n\n\n\n\nconst content = document.querySelector(\"#content\");\n\nfunction createMenu() {\n  const menu = document.createElement(\"div\");\n  menu.id = \"menu\";\n  menu.classList.add(\"wipe\");\n  content.appendChild(menu);\n\n  const menuImg = document.createElement(\"img\");\n  menuImg.id = \"menu-image\";\n  menuImg.classList.add(\"wipe\");\n  menuImg.src = _assets_images_metin_ozer_eBUuTewGUXk_unsplash_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n  menu.appendChild(menuImg);\n\n  const menuCont = document.createElement(\"div\");\n  menuCont.id = \"menu-cont\";\n  menuCont.classList.add(\"wipe\");\n  menu.appendChild(menuCont);\n\n  // const menuHeader = document.createElement(\"h2\");\n  // menuHeader.id = \"menu-header\";\n  // menuHeader.classList.add(\"wipe\");\n  // menuHeader.textContent = \"Hidden Garden Menu\";\n  // menuCont.appendChild(menuHeader);\n\n  // const items = document.createElement(\"div\");\n  // items.id = \"items\";\n  // items.classList.add(\"wipe\");\n  // daysTimes.appendChild(items);\n\n  // const times = document.createElement(\"div\");\n  // times.id = \"times\";\n  // times.classList.add(\"wipe\");\n  // daysTimes.appendChild(times);\n\n  //   const addMenuItems = (function () {\n\n  //     for (let i = 0; i < menuItemsData.length; i++) {\n\n  //       const menuSquare = document.createElement(\"div\");\n  //       menuSquare.id = `${i}`;\n  //       menuSquare.classList.add(\"wipe\", \"menu-square\");\n\n  //       const item = document.createElement(\"p\");\n  //       item.classList.add(\"wipe\", \"item\");\n  //       item.textContent = `item${i}`;\n  //       menuSquare.appendChild(item);\n\n  //       const price = document.createElement(\"p\");\n  //       price.classList.add(\"wipe\", \"price\");\n  //       price.textContent = `price${i}`;\n  //       menuSquare.appendChild(price);\n\n  //       const description = document.createElement(\"p\");\n  //       description.classList.add(\"wipe\", \"description\");\n  //       description.textContent = `description${i}`;\n  //       menuSquare.appendChild(description);\n\n  //       // menuCont.appendChild(menuSquare);\n\n  //       menu.appendChild(menuSquare);\n\n  //     }\n  //   })();\n  // }\n\n  const addMenuItems = (function () {\n\n  _data_menuItems_json__WEBPACK_IMPORTED_MODULE_2__.forEach((menuItem) => {\n      const menuSquare = document.createElement(\"div\");\n      // menuSquare.id = `${i}`;\n      menuSquare.classList.add(\"wipe\", \"menu-square\");\n\n      const item = document.createElement(\"p\");\n      item.classList.add(\"wipe\", \"item\");\n      item.textContent = menuItem.item;\n      menuSquare.appendChild(item);\n\n      const price = document.createElement(\"p\");\n      price.classList.add(\"wipe\", \"price\");\n      price.textContent = `(${menuItem.price})`;\n      menuSquare.appendChild(price);\n\n      const break1 = document.createElement(\"br\");\n      break1.classList.add(\"wipe\");\n      menuSquare.appendChild(break1);\n\n      const description = document.createElement(\"p\");\n      description.classList.add(\"wipe\", \"description\");\n      description.textContent = menuItem.description;\n      menuSquare.appendChild(description);\n\n      // menuCont.appendChild(menuSquare);\n\n      menuCont.appendChild(menuSquare);\n\n\n  });\n\n\n  })();\n}\n\n\n\n\n//# sourceURL=webpack://odin-restaurant-page/./javascript/menu.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap);\"]);\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n    --white: #fafbfd;\n    --white2: #fafbfd66;\n    --white3: #fafbfd80;\n    --rose: #ee93b4;\n    --dk-rose: #D34D70;\n    --lt-leaf: #90c754;\n    --lt-leaf2: #8fc754d8; \n    --dk-leaf: #175f3a;\n    --dk-leaf2: #175f3a80;\n    --blue-iron: #01393a;\n    --font-title:  \"Dancing Script\", cursive;\n    --font-main: \"Roboto Condensed\", sans-serif;\n    --h1: 2.25rem;\n    --h2: 1.5rem;\n    --p: 1.25rem;\n    --width: 320px;\n    --event-menu-width: 320px;\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    height: 100vh;\n    width: 100vw;\n    background-color: var(--blue-iron);\n    margin: auto;\n}\n\n#subtitle {\n    display: flex;\n        justify-content: center;\n        align-items: center;\n}\n\nh1, h2 {\n    margin: 0;\n    padding:0\n}\n\nnav {\n    height: fit-content;\n    z-index: 5;\n    position: fixed; \n    top: 0; \n    left: 0; \n    right: 0; \n    bottom: 95%;\n    background-color: var(--blue-iron);\n    border-bottom: 5px double var(--white);\n    color: var(--white);\n    display: flex;\n        justify-content: center;\n        align-items: center;\n    padding: .5rem;\n}\n\nbutton {\n    height: 2rem;\n    width: 4.25rem;\n    background: var(--blue-iron);\n    border: none;\n    border-radius: 5rem;\n    color: var(--white);\n    display: flex;\n        justify-content: center;\n        align-items: center;\n        gap: 1rem;\n    font-family: var(--font-title);\n    font-size: 1rem;\n    font-weight: 900;\n    outline: none;\n    padding: .25rem;\n}\n\nbutton:hover {\n    border: .75px double var(--rose);\n    color: var(--rose);\n}\n\nbutton:focus {\n    background-color: var(--dk-leaf );\n}\n\nbutton:active {\n    transform: scale(.9);\n}\n\nfooter {\n    z-index: 5;\n    position: fixed; \n    top: 95%; \n    left: 0; \n    right: 0; \n    bottom: 0;\n    background-color: var(--blue-iron);\n    border-top: 5px double var(--white);\n    color: var(--white);\n    display: flex;\n        justify-content: space-evenly;\n        align-items: center;\n    font-family: var(--font-title);\n    font-optical-sizing: auto;\n    font-weight: 900;\n    font-size: 1rem;\n    font-style: normal;\n    padding: 1rem;\n}\n\n#splash-image, #about-image, #events-image, #hours-image, #location-image, #menu-image {\n    height: 100vh;\n    width: auto;\n    z-index: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.logo { \n    height: 6rem;\n}\n\n.logo2 { \n    height: 9rem;\n}\n\n.pad-top-bot {\n    margin: 1.35rem 0 1.35rem 0;\n}\n\n#arkham-map-image {\n    height: auto;  \n    width: 300px;\n    margin: .5rem;\n}\n\n#splash, #about, #hours, #location {\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin:0;\n    overflow: hidden;\n}\n\n\n#store-name-cont {\n    height: fit-content;\n    width: auto;\n    position: fixed; \n    top: 15%; \n    left: 0; \n    right: 0; \n    bottom: 0%;\n    z-index: 10;\n    background-color: var(--white3);\n    color: var(--blue-iron);\n    display: flex;\n    flex-direction: column;\n        justify-content: center;\n        align-items: center;\n    font-family: var(--font-title);\n    font-optical-sizing: auto;\n    font-weight: 900;\n    font-style: normal;\n    padding: .25rem;\n}\n\n#store-name {\n    font-size: var(--h1);\n}\n\n#store-name-sub {\n    font-size: var(--h2);\n        white-space: pre; \n}\n\n#store-name, #store-name-sub  {\n    z-index: 10;\n    margin: 0;\n    padding:0\n}\n\n#subtitle {\n        z-index: 10;\n    display: flex;\n}\n\n.leaf {\n    z-index: 10;\n    width: 2rem;\n}\n\n#schedule-cont, #about-cont, #location-cont {\n    height: fit-content;\n    width: var(--width);\n    z-index: 2;\n    background-color: var(--lt-leaf2);\n    /* border: 5cm double var(--blue-iron); */\n    border-radius: 3rem;\n    color: var(--blue-iron);\n    display: flex;\n        flex-direction: column;\n        justify-content: start;\n        align-items: center;\n    /* opacity: .8; */\n    font-family: var(--font-main);\n    margin: 0;\n    padding: 0 1rem 1rem 1rem;\n    text-align: center;\n}\n\n\n#events, #menu {\n    /* margin: auto; */\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    margin: auto;\n    padding: 4rem 0 4rem 0;\n}\n\n#events-cont, #menu-cont {\n    display: flex;\n        flex-direction: row;\n        flex-wrap: wrap;\n        justify-content: center;\n        align-items: start;\n    /* margin: auto; */\n    font-family: var(--font-main);\n}\n\n.event-square, .menu-square {\n    height: fit-content;\n    width: var(--event-menu-width);\n    z-index: 2;\n    background-color: var(--rose);\n    border-radius: 2rem;\n    color: var(--blue-iron);\n    display: flex;\n        flex-direction: column;\n        justify-content: start;\n        align-items: start;\n    margin: .5rem;\n    padding: 1rem;\n}\n\n.event-square {\n    background-color: var(--rose);\n}\n\n.menu-square {\n    background-color: var(--white);\n}\n\n.item, .what {\n    font-size: 1.2rem;\n    font-weight: 900;\n}\n\n.price, .when {\n    font-style: italic;\n}\n\n.description, .blurb {\n    font-size: 1rem;\n}\n\n#hours-of-operation, #about-header, #location-header, #menu-header {\n    font-size: var(--h2);\n}\n\n#schedule-cont p, #about-cont p, #location-cont p {\n    font-size: var(--p);\n}\n\n.p-center {\n    display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-wrap: wrap;\n}\n\n#schedule-cont h2, #schedule-cont p {\n    font-weight: 500;\n}\n\n#days-times {\n    display: flex;\n        justify-content: start;\n        align-items: start;\n    text-align: left;\n}\n\n/* Below fixes spacing issue with dynamically rending from the json file. */\n#days, #times {\n    white-space: pre; \n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-restaurant-page/./styles/styles.css?./node_modules/css-loader/dist/cjs.js");

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

/***/ "./assets/images/brandon-lopez-3E_8XgqRSps-unsplash.jpg":
/*!**************************************************************!*\
  !*** ./assets/images/brandon-lopez-3E_8XgqRSps-unsplash.jpg ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/0affba57b88368619aca2dbd34e06f4e.jpg\");\n\n//# sourceURL=webpack://odin-restaurant-page/./assets/images/brandon-lopez-3E_8XgqRSps-unsplash.jpg?");

/***/ }),

/***/ "./assets/images/colin-maynard-HsG4OEPqGYc-unsplash.jpg":
/*!**************************************************************!*\
  !*** ./assets/images/colin-maynard-HsG4OEPqGYc-unsplash.jpg ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/5e46d73531fd365812f8f25f105e1a1b.jpg\");\n\n//# sourceURL=webpack://odin-restaurant-page/./assets/images/colin-maynard-HsG4OEPqGYc-unsplash.jpg?");

/***/ }),

/***/ "./assets/images/icon-about.svg":
/*!**************************************!*\
  !*** ./assets/images/icon-about.svg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/d09293d6ed75886ee0916ea58f454e0d.svg\");\n\n//# sourceURL=webpack://odin-restaurant-page/./assets/images/icon-about.svg?");

/***/ }),

/***/ "./assets/images/icon-hours.svg":
/*!**************************************!*\
  !*** ./assets/images/icon-hours.svg ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/8cd5ca27982fd66a4382f68fdbb68c72.svg\");\n\n//# sourceURL=webpack://odin-restaurant-page/./assets/images/icon-hours.svg?");

/***/ }),

/***/ "./assets/images/icon-location.svg":
/*!*****************************************!*\
  !*** ./assets/images/icon-location.svg ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/e2c5355e28b1fed49ec49068fd852a2d.svg\");\n\n//# sourceURL=webpack://odin-restaurant-page/./assets/images/icon-location.svg?");

/***/ }),

/***/ "./assets/images/jaredd-craig-HH4WBGNyltc-unsplash.jpg":
/*!*************************************************************!*\
  !*** ./assets/images/jaredd-craig-HH4WBGNyltc-unsplash.jpg ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/fc8bd904347c84991bb386092c3c417a.jpg\");\n\n//# sourceURL=webpack://odin-restaurant-page/./assets/images/jaredd-craig-HH4WBGNyltc-unsplash.jpg?");

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

/***/ "./assets/images/tiffany-chan-lT2hiMUACco-unsplash.jpg":
/*!*************************************************************!*\
  !*** ./assets/images/tiffany-chan-lT2hiMUACco-unsplash.jpg ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/2483f56461f87cdd803219616e378c99.jpg\");\n\n//# sourceURL=webpack://odin-restaurant-page/./assets/images/tiffany-chan-lT2hiMUACco-unsplash.jpg?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/styles.css */ \"./styles/styles.css\");\n/* harmony import */ var _javascript_splash_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../javascript/splash.js */ \"./javascript/splash.js\");\n/* harmony import */ var _javascript_about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../javascript/about.js */ \"./javascript/about.js\");\n/* harmony import */ var _javascript_events_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../javascript/events.js */ \"./javascript/events.js\");\n/* harmony import */ var _javascript_hours_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../javascript/hours.js */ \"./javascript/hours.js\");\n/* harmony import */ var _javascript_location_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../javascript/location.js */ \"./javascript/location.js\");\n/* harmony import */ var _javascript_menu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../javascript/menu.js */ \"./javascript/menu.js\");\n\n\n\n\n\n\n\n\n(0,_javascript_splash_js__WEBPACK_IMPORTED_MODULE_1__.createSplash)(); // Seems like the simplest way to institute a default on webpage load up.\n\nconst buttonListeners = (function () {\n    // const splash = document.querySelector(\"#splash\");\n    // const about = document.querySelector(\"#about\");\n    // const events = document.querySelector(\"#events\");\n    // const hours = document.querySelector(\"#hours\");\n    // const location = document.querySelector(\"#location\");\n    // const menu = document.querySelector(\"#menu\");\n\n    // const splashBtn = document.querySelector(\"#splash-btn\");\n    // const aboutBtn = document.querySelector(\"#about-btn\");\n    // const eventsBtn = document.querySelector(\"#events-btn\");\n    // const hoursBtn = document.querySelector(\"#hours-btn\");\n    // const locationBtn = document.querySelector(\"#location-btn\");\n    // const menuBtn = document.querySelector(\"#menu-btn\");\n\n    const content = document.querySelector(\"#content\");  \n\n    function wipeOut() {\n        const wipe = content.querySelectorAll(\".wipe\"); \n        wipe.forEach(function (child) {\n        child.remove();\n    });   \n    }\n\n    const nav = document.querySelector(\"nav\");\n\n    let currentBtn = \"\";\n    let currentFunction = \"\";\n    \n    console.log(currentBtn);\n    console.log(currentFunction);\n\n    function isCurrentFunction() {\n        // if (currentFunction === \"\") {\n        //   wipeOut();\n        //   createSplash();\n        // } \n\n        if (currentFunction === \"isSplash\") {\n            wipeOut();\n            (0,_javascript_splash_js__WEBPACK_IMPORTED_MODULE_1__.createSplash)();\n        } \n\n        if (currentFunction === \"isAbout\") {\n            wipeOut();\n            (0,_javascript_about_js__WEBPACK_IMPORTED_MODULE_2__.createAbout)();\n        } \n\n        if (currentFunction === \"isEvents\") {\n            wipeOut();\n            (0,_javascript_events_js__WEBPACK_IMPORTED_MODULE_3__.createEvents)();\n        } \n        \n        if (currentFunction === \"isHours\") {\n            wipeOut();\n            (0,_javascript_hours_js__WEBPACK_IMPORTED_MODULE_4__.createHours)();\n        }\n\n        if (currentFunction === \"isLocation\") {\n            wipeOut();\n            (0,_javascript_location_js__WEBPACK_IMPORTED_MODULE_5__.createLocation)();\n        } \n\n        if (currentFunction === \"isMenu\") {\n            wipeOut();\n            (0,_javascript_menu_js__WEBPACK_IMPORTED_MODULE_6__.createMenu)();\n        } \n    }\n\n\n    nav.addEventListener(\"click\", (event) => {\n let currentBtn = \"\";\n            console.log(currentBtn);\n            console.log(currentFunction);\n\n        const isButton = event.target.nodeName === \"BUTTON\";\n        if (!isButton) {\n            return\n        }\n        console.dir(event.target.id);\n\n        if (event.target.id === \"splash-btn\" && currentBtn !== \"splash-btn\") {\n          currentBtn = \"splash-btn\";\n        currentFunction = \"isSplash\";\n        }\n\n        if (\n            event.target.id === \"about-btn\" &&\n            currentBtn !== \"about-btn\"\n        ) {\n            currentBtn = \"about-btn\";\n            currentFunction = \"isAbout\";\n        }\n\n        if (\n            event.target.id === \"events-btn\" &&\n            currentBtn !== \"events-btn\"\n        ) {\n            currentBtn = \"events-btn\";\n            currentFunction = \"isEvents\";\n        }\n\n        if (event.target.id === \"hours-btn\" && \n            currentBtn !== \"hours-btn\"\n        ) {\n            currentBtn = \"hours-btn\";\n            currentFunction = \"isHours\";\n        }\n\n        if (\n            event.target.id === \"location-btn\" &&\n            currentBtn !== \"location-btn\"\n        ) {\n            currentBtn = \"location-btn\";\n            currentFunction = \"isLocation\";\n        }\n\n        if (\n            event.target.id === \"menu-btn\" &&\n            currentBtn !== \"menu-btn\"\n        ) {\n            currentBtn = \"menu-btn\";\n            currentFunction = \"isMenu\";\n        }\n\n    isCurrentFunction();\n    });\n\n})()\n\n//# sourceURL=webpack://odin-restaurant-page/./src/index.js?");

/***/ }),

/***/ "./data/daysTimes.json":
/*!*****************************!*\
  !*** ./data/daysTimes.json ***!
  \*****************************/
/***/ ((module) => {

eval("module.exports = /*#__PURE__*/JSON.parse('[{\"id\":1,\"day\":\"Monday: \",\"time\":\"Closed\"},{\"id\":2,\"day\":\"Tuesday: \",\"time\":\"10am - 6pm\"},{\"id\":3,\"day\":\"Wednesday: \",\"time\":\"10am - 6pm\"},{\"id\":4,\"day\":\"Thursday: \",\"time\":\"10am - 6pm\"},{\"id\":5,\"day\":\"Friday: \",\"time\":\"10am - 6pm\"},{\"id\":6,\"day\":\"Saturday: \",\"time\":\"  9am - 7pm\"},{\"id\":7,\"day\":\"Sunday: \",\"time\":\"11am - 5pm\"}]');\n\n//# sourceURL=webpack://odin-restaurant-page/./data/daysTimes.json?");

/***/ }),

/***/ "./data/eventItems.json":
/*!******************************!*\
  !*** ./data/eventItems.json ***!
  \******************************/
/***/ ((module) => {

eval("module.exports = /*#__PURE__*/JSON.parse('[{\"id\":0,\"what\":\"Miskatonic Univ. Dungeons & Dragons Club\",\"when\":\"Thursday, July 11, 2024 from 6:00PM to 9:00PM\",\"blurb\":\"Calling all dungeoneers! Never played a tabletop game? That’s okay! We’re more than happy to help you learn.\"},{\"id\":1,\"what\":\"The Year of Ghibli: When Marnie Was There (English Dubbed Version)\",\"when\":\"Sunday, July 14, 2024 from 2:00PM to 4:00PM\",\"blurb\":\"Join us throughout 2024 as we celebrate some of Studio Ghibli’s most famous films. Each month will feature a different film by the Japanese production company, Studio Ghibli. All are welcome to join us. Some may not be suitable for very young children. Ratings are noted based on the Motion Picture Association of America (MPAA). \"},{\"id\":2,\"what\":\"All Ages Storytime\",\"when\":\"Monday, July 15, 2024 from 10:00AM to 11:30AM\",\"blurb\":\"Children and adults will enjoy books, music, and rhymes. Early learning activities will be modeled for adults so that learning can continue at home and help your child to build their skills and be ready to succeed at whatever is next.\"},{\"id\":3,\"what\":\"The Belldame Society, Ides Meeting\",\"when\":\"Monday, July 15, 2024 from 6:00PM to 7:30PM\",\"blurb\":\"PRIVATE MEETING.\"},{\"id\":4,\"what\":\"Pressed Flower Art with Herbert West IV\",\"when\":\"Tuesday, July 16, 2024 from 4:00PM to 6:00PM\",\"blurb\":\"Back by popular demand, we continue to learn more about floral design with the help of Herb West’s 25 years of horticultural expertise. Participants will attend a hands-on flower pressing workshop, where they will learn basic floral design concepts and helpful plant identification tips. Learn how to preserve your favorite flowers and make a beautiful keepsake at the same time! All necessary supplies will be provided by Herb West.\"},{\"id\":5,\"what\":\"Born to Read\",\"when\":\"Friday, July 19, 2024 from 10:30AM to 11:30AM\",\"blurb\":\"Baby, you are Born to Read! Experience songs and stories together to help your baby learn sounds, language, and a love of books. This program is for parents, grandparents, and caregivers to connect with their babies and each other.  \"},{\"id\":6,\"what\":\"Pigment of Your Imagination (Alcohol Ink Jewlery)\",\"when\":\"Sunday, July 28, 2024 from 12:00PM to 2:00PM\",\"blurb\":\"You don\\'t have to imagine you\\'re an artist because you are one! At least, for a few hours. Join us for several artist workshops, taught by local artists, and come turn your imagination to beautiful work. Each week, we will try different art mediums and each week you can quit imagining and just do. Lunch is provided. (All learners welcome). \"},{\"id\":7,\"what\":\"Magic of Comic Book Drawing Class\",\"when\":\"Tuesday, July 30, 2024 from 5:30PM to 7:30PM\",\"blurb\":\"Seasoned artist and instructor Richard Upton Pickman will lead this workshop where participants will hone their art skills and learn how to develop a comic book. Richard’s class will go beyond art instruction to include tips on how to build a career in comic books. This program will help burgeoning artists refine their skills. \"},{\"id\":8,\"what\":\"Crafting Free-For-All!\",\"when\":\"Thursday, August 8, 2024 from 5:30PM to 6:30PM\",\"blurb\":\"Do the kids love making crafts, but you hate cleaning up the mess? Leave it to us! In this program, participants will get to create to their heart’s content as we provide an assortment of craft supplies, and some inspiration to get you started.  \"},{\"id\":9,\"what\":\"Figment Forge Writing Group\",\"when\":\"Saturday, August 17, 2024 from 10:30PM to 12:30PM\",\"blurb\":\"Calling aspiring fiction writers! Join our writing group, Figment Forge, to learn more about the craft of fiction writing, connect with other novice writers, and find encouragement and accountability for your writing aspirations. We’ll meet monthly to focus on a different facet of writing fiction with time to practice our craft and share. Bring a laptop (or borrow one from The Library) or take advantage of the provided notebooks and pens. Light refreshments will be provided.  \"},{\"id\":10,\"what\":\"Knit One, Crochet Too!\",\"when\":\"Tuesday, August 20, 2024 from 5:30PM to 7:30PM\",\"blurb\":\"Whether you can whip up a sweater in a day or you don’t know a knitting needle from a crochet hook, this class is for you. Gather your supplies and join us for a morning of learning and conversation.  \"},{\"id\":11,\"what\":\"The Plot Thickens\",\"when\":\"Thursday, August 22, 2024 from 6:30PM to 8:30PM\",\"blurb\":\"Whether you\\'re just starting out or you need more eyes on your work, The Plot Thickens is just what you need: a group of writer friends! Talk craft, gain accountability, and workshop with a knowledgeable, MFA-holding, published author in a laid-back, friendly environment. Bring your work and what you like to write with. Light refreshments will be provided. \"}]');\n\n//# sourceURL=webpack://odin-restaurant-page/./data/eventItems.json?");

/***/ }),

/***/ "./data/menuItems.json":
/*!*****************************!*\
  !*** ./data/menuItems.json ***!
  \*****************************/
/***/ ((module) => {

eval("module.exports = /*#__PURE__*/JSON.parse('[{\"id\":0,\"item\":\"Black Death Coffee\",\"price\":\"$10.00\",\"description\":\"This endless refill of our special organic coffee blend is just what our local Miskatonic University students need to keep fueled up and alert. Milk (soy, almond, dairy), sugar, etc., available at coffee bar.\"},{\"id\":1,\"item\":\"Hidden Garden Tea\",\"price\":\"$3.00\",\"description\":\"Choose from a wide assortment of popular teas imported from around the globe. Staff favorites include Leng Black Lotus and Kadath Sleeptyme Brew. Milk (soy, almond, dairy), sugar, etc., available at coffee bar.\"},{\"id\":2,\"item\":\"Bottled Drinks\",\"price\":\"$2.50\",\"description\":\"Italian Sodas, Shrubs, and bottled drinks are also available.\"},{\"id\":3,\"item\":\"Black Bean Sliders\",\"price\":\"$12.00\",\"description\":\"Three black bean sliders cooked to your liking. All sliders come infused with our special blend of spices. Lettuce, onions, and tomatoes can be added for $3.00 extra.\"},{\"id\":4,\"item\":\"Veggie Rice Bowl\",\"price\":\"$12.00\",\"description\":\"A generous bowl of jasmine rice with roasted vegetables, greens, tofu, cucumbers, topped with nori flakes, sesame seeds, and your choice of Thai dressing or ginger miso dressing.\"},{\"id\":5,\"item\":\"Daniel Webster Wrap\",\"price\":\"$12.00\",\"description\":\"A delicious barbecue wrap made with tofu, barbecue sauce, pickles, slaw, and greens in a tortilla pouch.\"},{\"id\":6,\"item\":\"New England Melt\",\"price\":\"$14.00\",\"description\":\"A classic New England melt, made with walnut spread, cranberries, and greens, all on a sourdough roll. WARNING FOR NUT ALLERGY SUFFERERS: This sandwich contains walnuts!\"},{\"id\":7,\"item\":\"Sunshine Wrap\",\"price\":\"$12.00\",\"description\":\"This zesty sunflower seed pate wrap is made with cucumbers, carrots, Thai dressing, and greens--all stuffed lovingly into in a soft tortilla.\"},{\"id\":8,\"item\":\"Scholar\\'s Scrumdiddle\",\"price\":\"$5.00\",\"description\":\"One egg, served with avocado and salsa on your choice of toast (i.e., rye, wheat, or white bread toast).\"},{\"id\":9,\"item\":\"Hidden Garden Salad\",\"price\":\"$8.00\",\"description\":\"Hearty salad with fresh vegetables from locally sourced farms in the beautiful Dunwich river valley. Please note that there will be seasonal variation and substitute vegetables may be added.\"},{\"id\":10,\"item\":\"Innsmouth Seaside Chili\",\"price\":\"Cup:$4.00, Bowl: $7.00\",\"description\":\"Try our spicy crab meat and scallop chili; made fresh daily from local catches made by the proud fisher-folk of nearby Innsmouth Bay.\"},{\"id\":11,\"item\":\"Soup of the Day\",\"price\":\"Cup:$4.00, Bowl: $7.00\",\"description\":\"Made fresh daily, inquire for type.\"},{\"id\":12,\"item\":\"Smidge Cake\",\"price\":\"$5.00\",\"description\":\"Cupcakes beware: these adorable and delicious mini-cakes are a new addition. Inquire for the smidge cake type of the day.\"},{\"id\":13,\"item\":\"Poe Honey Square\",\"price\":\"$5.00\",\"description\":\"Taste history and try the \\'quite satisfactory, nearing scrumptious\\' honey cake squares eaten by Edgar Allen Poe himself when he visited our store in the 19th century. Same family recipe!\"}]');\n\n//# sourceURL=webpack://odin-restaurant-page/./data/menuItems.json?");

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