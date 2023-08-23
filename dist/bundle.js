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

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createFooter() {\n  // Create the footer container\n  const footer = document.createElement(\"footer\");\n  footer.classList.add(\"footer\");\n\n  // Create the copyright paragraph\n  const copyright = document.createElement(\"p\");\n  copyright.textContent = `Copyright © 2023 elliotnykvist`;\n\n  // Create the GitHub link\n  const githubLink = document.createElement(\"a\");\n  githubLink.href = \"https://github.com/elliotnykvist\";\n  githubLink.target = \"_blank\"; // Use dot notation for properties\n\n  // Create the GitHub icon (Font Awesome)\n  const githubIcon = document.createElement(\"i\");\n  githubIcon.classList.add(\"fab\", \"fa-github\");\n\n  // Append the GitHub icon to the GitHub link\n  githubLink.appendChild(githubIcon);\n\n  // Append the copyright and GitHub link to the footer\n  footer.appendChild(copyright);\n  footer.appendChild(githubLink);\n\n  return footer;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createFooter);\n\n//# sourceURL=webpack://rest/./src/footer.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHeader() {\n  const header = document.createElement('header');\n  header.classList.add('header');\n\n  const leftHeader = document.createElement('div');\n  leftHeader.classList.add('left-header');\n\n  const logoText = document.createElement('h1');\n  logoText.classList.add('logo-text');\n  logoText.textContent = \"Luke's Pizza\";\n\n  leftHeader.appendChild(logoText);\n\n  header.appendChild(leftHeader);\n\n\n  const rightHeader = document.createElement('div')\n  rightHeader.classList.add('right-header');\n\n  const buttons = document.createElement('ul');\n  buttons.classList.add('buttons');\n\n  const homeBtn = document.createElement('li')\n  homeBtn.setAttribute('id', 'home')\n  homeBtn.setAttribute('id', 'not-active')\n  homeBtn.classList.add('tab');\n  homeBtn.textContent = 'Home';\n\n  const menuBtn = document.createElement('li')\n  menuBtn.setAttribute('id', 'menu')\n  menuBtn.setAttribute('id', 'not-active')\n  menuBtn.classList.add('tab');\n  menuBtn.textContent = 'Menu';\n\n  const contactBtn = document.createElement('li')\n  contactBtn.setAttribute('id', 'contact')\n  contactBtn.setAttribute('id', 'not-active')\n  contactBtn.classList.add('tab');\n  contactBtn.textContent = 'Contact';\n\n  buttons.appendChild(homeBtn);\n  buttons.appendChild(menuBtn);\n  buttons.appendChild(contactBtn);\n\n  rightHeader.appendChild(buttons);\n\n  const social = document.createElement('div');\n  social.classList.add('social');\n\n  const facebook = document.createElement('i');\n  facebook.setAttribute('id', 'facebook');\n  facebook.classList.add('fab', 'fa-facebook-square'); // Use 'fab' for brand icons\n\n  const instagram = document.createElement('i');\n  instagram.setAttribute('id', 'instagram');\n  instagram.classList.add('fab', 'fa-instagram'); // Use 'fab' for brand icons\n\n  social.appendChild(facebook);\n  social.appendChild(instagram);\n\n  rightHeader.appendChild(social)\n\n  header.appendChild(rightHeader);\n\n  return header;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHeader);\n\n//# sourceURL=webpack://rest/./src/header.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHome() {\n  window.scrollTo(0, 0); // Scroll to the top of the page\n\n  const section = document.createElement('section');\n  section.setAttribute('id', 'pageLoadContainer');\n\n  // Intro Section\n  const intro = document.createElement('section');\n  intro.classList.add('intro');\n\n  const introBackground = document.createElement('div');\n  introBackground.classList.add('intro-background');\n\n  const introContent = document.createElement('div');\n  introContent.classList.add('intro-content');\n  const firstTitle = document.createElement('h2');\n  firstTitle.textContent = (\"Luke's Pizza\");\n  const subTitle = document.createElement('h4');\n  subTitle.textContent = (\"Pizza at its best\");\n  const resyBtn = document.createElement('button');\n  resyBtn.textContent = (\"Reservation\");\n  resyBtn.classList.add('resy');\n\n  introContent.appendChild(firstTitle);\n  introContent.appendChild(subTitle);\n  introContent.appendChild(resyBtn);\n\n  introBackground.appendChild(introContent);\n  intro.appendChild(introBackground);\n  \n\n  section.appendChild(intro);\n\n  // About Section\n  const about = document.createElement('section');\n  about.classList.add('about');\n\n  const title = document.createElement('div');\n  title.textContent = (\"Luke's Pizza\");\n\n  const information = document.createElement('p');\n  information.classList.add('information');\n  information.textContent = (\"Luke's Pizza, a family-driven establishment since 2020, brings the essence of true Italian pizza to life, offering a genuine taste of Italy in every delightful bite. With generations-old recipes and a warm, inviting atmosphere, it's a place where food and family traditions intertwine to create a memorable dining experience.\")\n\n  const secondSubTitle = document.createElement('a');\n  secondSubTitle.textContent = (\"Menu\");\n  secondSubTitle.setAttribute('id', 'menuCenter');\n  secondSubTitle.setAttribute('href', '#');\n\n  about.appendChild(title);\n  about.appendChild(information);\n  about.appendChild(secondSubTitle);\n\n  section.appendChild(about);\n\n  // Contacts Section\n  const contacts = document.createElement('section');\n  contacts.classList.add('contact');\n\n  // Address\n  const address = document.createElement('div');\n  address.classList.add('address');\n  const addressIcon = document.createElement('i');\n  addressIcon.classList.add('fa-solid', 'fa-location-dot');\n  addressIcon.setAttribute('id', 'contact-icon');\n  const addressTitle = document.createElement('div');\n  addressTitle.textContent = (\"Address\");\n  const addressContent = document.createElement('p');\n  addressContent.textContent = (`831 Bottom Feeder Lane \\r\\n Bikini Bottom \\r\\n Pacific Ocean`);\n\n  address.appendChild(addressIcon);\n  address.appendChild(addressTitle);\n  address.appendChild(addressContent);\n\n  // Hours\n  const hours = document.createElement('div');\n  hours.classList.add('hours');\n  const hoursIcon = document.createElement('i');\n  hoursIcon.classList.add('fa-solid', 'fa-clock');\n  hoursIcon.setAttribute('id', 'contact-icon');\n  const hoursTitle = document.createElement('div');\n  hoursTitle.textContent = (\"Hours\");\n  const hoursContent = document.createElement('p');\n  hoursContent.textContent = (`Monday-Thursday \\r\\n 11:00 am - 09:00 pm \\r\\n \\r\\n Friday-Sunday \\r\\n 10:00 am - 11:00 pm`);\n\n  hours.appendChild(hoursIcon);\n  hours.appendChild(hoursTitle);\n  hours.appendChild(hoursContent);\n\n  // Contact Information\n  const contactInfo = document.createElement('div');\n  contactInfo.classList.add('contact-info');\n  const contactIcon = document.createElement('i');\n  contactIcon.classList.add('fa-solid', 'fa-phone');\n  contactIcon.setAttribute('id', 'contact-icon')\n  const contactTitle = document.createElement('div');\n  contactTitle.textContent = (\"Contact\");\n  const contactContent = document.createElement('p');\n  contactContent.textContent = (`Phone: 555-555-5555 \\r\\n Email: lukespizza@gmail.com`);\n\n  contactInfo.appendChild(contactIcon);\n  contactInfo.appendChild(contactTitle);\n  contactInfo.appendChild(contactContent);\n\n  contacts.appendChild(address);\n  contacts.appendChild(hours);\n  contacts.appendChild(contactInfo);\n\n  section.appendChild(contacts);\n\n  return section;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHome);\n\n\n//# sourceURL=webpack://rest/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\n\n\n\n\nfunction init() {\n  const container = document.getElementById('container');\n  container.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n  container.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n  container.appendChild((0,_footer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n\n\n  return container\n}\n\ninit()\n\n//# sourceURL=webpack://rest/./src/index.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;