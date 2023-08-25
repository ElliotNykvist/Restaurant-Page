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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createContact() {\n  // Create the main section\n  const section = document.createElement('section');\n  section.setAttribute('id', 'pageLoadContainer');\n\n  // Create the section for contact information\n  const section1 = document.createElement(\"section\");\n  section1.setAttribute('id', 'contact');\n\n  // Create the section header\n  const header = document.createElement(\"h1\");\n  header.className = \"section-header\";\n  header.textContent = \"Contact\";\n\n  // Create a container for the contact information\n  const contactWrapper = document.createElement(\"div\");\n  contactWrapper.className = \"contact-wrapper\";\n\n  // Create the contact form\n  const contactForm = document.createElement(\"form\");\n  contactForm.id = \"contact-form\";\n  contactForm.className = \"form-horizontal\";\n  contactForm.setAttribute(\"role\", \"form\");\n\n  // Create the first form group\n  const formGroup1 = document.createElement(\"div\");\n  formGroup1.className = \"form-group\";\n\n  const col1 = document.createElement(\"div\");\n  col1.className = \"col-sm-12\";\n\n  const inputName = document.createElement(\"input\");\n  inputName.type = \"text\";\n  inputName.className = \"form-control\";\n  inputName.id = \"name\";\n  inputName.placeholder = \"NAME\";\n  inputName.name = \"name\";\n  inputName.value = \"\";\n  inputName.required = true;\n\n  col1.appendChild(inputName);\n  formGroup1.appendChild(col1);\n\n  // Create the second form group\n  const formGroup2 = document.createElement(\"div\");\n  formGroup2.className = \"form-group\";\n\n  const col2 = document.createElement(\"div\");\n  col2.className = \"col-sm-12\";\n\n  const inputEmail = document.createElement(\"input\");\n  inputEmail.type = \"email\";\n  inputEmail.className = \"form-control\";\n  inputEmail.id = \"email\";\n  inputEmail.placeholder = \"EMAIL\";\n  inputEmail.name = \"email\";\n  inputEmail.value = \"\";\n  inputEmail.required = true;\n\n  col2.appendChild(inputEmail);\n  formGroup2.appendChild(col2);\n\n  // Create the textarea\n  const textarea = document.createElement(\"textarea\");\n  textarea.className = \"form-control\";\n  textarea.rows = \"10\";\n  textarea.placeholder = \"MESSAGE\";\n  textarea.name = \"message\";\n  textarea.required = true;\n\n  // Create the submit button\n  const button = document.createElement(\"button\");\n  button.className = \"btn btn-primary send-button\";\n  button.id = \"submit\";\n  button.type = \"submit\";\n  button.textContent = \"SEND\";\n\n  // Append form elements to the contact form\n  contactForm.appendChild(formGroup1);\n  contactForm.appendChild(formGroup2);\n  contactForm.appendChild(textarea);\n  contactForm.appendChild(button);\n\n  // Create the direct contact container\n  const directContactContainer = document.createElement(\"div\");\n  directContactContainer.className = \"direct-contact-container\";\n\n  // Create the contact list\n  const contactList = document.createElement(\"ul\");\n  contactList.className = \"contact-list\";\n\n  // Create list items for contact information\n  function createContactItem(iconClass, contactText) {\n    const listItem = document.createElement(\"li\");\n    const icon = document.createElement(\"i\");\n    icon.className = iconClass;\n    const span = document.createElement(\"span\");\n    span.className = \"contact-text\";\n    span.textContent = contactText;\n    listItem.appendChild(icon);\n    listItem.appendChild(span);\n    return listItem;\n  }\n\n  contactList.appendChild(createContactItem(\"fa fa-map-marker fa-2x\", \"123 Serendipity Street\"));\n  contactList.appendChild(createContactItem(\"fa fa-phone fa-2x\", \"555-555-5555\"));\n  contactList.appendChild(createContactItem(\"fa fa-envelope fa-2x\", \"lukespizza@gmail.com\"));\n\n  // Create the social media list\n  const socialMediaList = document.createElement(\"ul\");\n  socialMediaList.className = \"social-media-list\";\n\n  // Create social media icons\n  function createSocialMediaIcon(iconClass) {\n    const listItem = document.createElement(\"li\");\n    const anchor = document.createElement(\"a\");\n    anchor.href = \"#\";\n    anchor.target = \"_blank\";\n    anchor.className = \"contact-icon\";\n    const icon = document.createElement(\"i\");\n    icon.className = iconClass;\n    anchor.appendChild(icon);\n    listItem.appendChild(anchor);\n    return listItem;\n  }\n\n  socialMediaList.appendChild(createSocialMediaIcon(\"fa fa-github\"));\n  socialMediaList.appendChild(createSocialMediaIcon(\"fa fa-codepen\"));\n  socialMediaList.appendChild(createSocialMediaIcon(\"fa fa-twitter\"));\n  socialMediaList.appendChild(createSocialMediaIcon(\"fa fa-instagram\"));\n\n  // Append contact information elements to the direct contact container\n  directContactContainer.appendChild(contactList);\n  directContactContainer.appendChild(document.createElement(\"hr\"));\n  directContactContainer.appendChild(socialMediaList);\n  directContactContainer.appendChild(document.createElement(\"hr\"));\n\n  // Append all elements to the contact wrapper\n  contactWrapper.appendChild(contactForm);\n  contactWrapper.appendChild(directContactContainer);\n\n  // Append the header and contact wrapper to the section\n  section1.appendChild(header);\n  section1.appendChild(contactWrapper);\n\n  section.appendChild(section1);\n\n  return section;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContact);\n\n\n//# sourceURL=webpack://rest/./src/contact.js?");

/***/ }),

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHeader() {\n  const header = document.createElement('header');\n  header.classList.add('header');\n\n  const leftHeader = document.createElement('div');\n  leftHeader.classList.add('left-header');\n\n  const logoText = document.createElement('h1');\n  logoText.classList.add('logo-text');\n  logoText.textContent = \"Luke's Pizza\";\n\n  leftHeader.appendChild(logoText);\n\n  header.appendChild(leftHeader);\n\n\n  const rightHeader = document.createElement('div')\n  rightHeader.classList.add('right-header');\n\n  const buttons = document.createElement('ul');\n  buttons.classList.add('buttons');\n\n  const homeBtn = document.createElement('li')\n  homeBtn.setAttribute('id', 'home')\n  homeBtn.setAttribute('id', 'not-active')\n  homeBtn.classList.add('tab');\n  homeBtn.textContent = 'Home';\n\n  const menuBtn = document.createElement('li')\n  menuBtn.setAttribute('id', 'menu')\n  menuBtn.setAttribute('id', 'not-active')\n  menuBtn.classList.add('tab');\n  menuBtn.textContent = 'Menu';\n\n  const contactBtn = document.createElement('li')\n  contactBtn.setAttribute('id', 'contact')\n  contactBtn.setAttribute('id', 'not-active')\n  contactBtn.classList.add('tab');\n  contactBtn.textContent = 'Contact';\n  \n\n  buttons.appendChild(homeBtn);\n  buttons.appendChild(menuBtn);\n  buttons.appendChild(contactBtn);\n\n  rightHeader.appendChild(buttons);\n\n  const social = document.createElement('div');\n  social.classList.add('social');\n\n  const facebook = document.createElement('i');\n  facebook.setAttribute('id', 'facebook');\n  facebook.classList.add('fab', 'fa-facebook-square'); // Use 'fab' for brand icons\n\n  const instagram = document.createElement('i');\n  instagram.setAttribute('id', 'instagram');\n  instagram.classList.add('fab', 'fa-instagram'); // Use 'fab' for brand icons\n\n  social.appendChild(facebook);\n  social.appendChild(instagram);\n\n  rightHeader.appendChild(social)\n\n  header.appendChild(rightHeader);\n\n  return header;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHeader);\n\n//# sourceURL=webpack://rest/./src/header.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createHome() {\n  window.scrollTo(0, 0); // Scroll to the top of the page\n\n  const section = document.createElement('section');\n  section.setAttribute('id', 'pageLoadContainer');\n\n  // Intro Section\n  const intro = document.createElement('section');\n  intro.classList.add('intro');\n\n  const introBackground = document.createElement('div');\n  introBackground.classList.add('intro-background');\n\n  const introContent = document.createElement('div');\n  introContent.classList.add('intro-content');\n  const firstTitle = document.createElement('h2');\n  firstTitle.textContent = (\"Luke's Pizza\");\n  const subTitle = document.createElement('h4');\n  subTitle.textContent = (\"Pizza at its best\");\n  const resyBtn = document.createElement('button');\n  resyBtn.textContent = (\"Reservation\");\n  resyBtn.classList.add('resy');\n  resyBtn.classList.add('tab')\n\n  introContent.appendChild(firstTitle);\n  introContent.appendChild(subTitle);\n  introContent.appendChild(resyBtn);\n\n  introBackground.appendChild(introContent);\n  intro.appendChild(introBackground);\n  \n\n  section.appendChild(intro);\n\n  // About Section\n  const about = document.createElement('section');\n  about.classList.add('about');\n\n  const title = document.createElement('div');\n  title.textContent = (\"Luke's Pizza\");\n\n  const information = document.createElement('p');\n  information.classList.add('information');\n  information.textContent = (\"Luke's Pizza, a family-driven establishment since 2020, brings the essence of true Italian pizza to life, offering a genuine taste of Italy in every delightful bite. With generations-old recipes and a warm, inviting atmosphere, it's a place where food and family traditions intertwine to create a memorable dining experience.\")\n\n  const secondSubTitle = document.createElement('a');\n  secondSubTitle.textContent = (\"Menu\");\n  secondSubTitle.setAttribute('id', 'menuCenter');\n  secondSubTitle.setAttribute('href', '#');\n\n  about.appendChild(title);\n  about.appendChild(information);\n  about.appendChild(secondSubTitle);\n\n  section.appendChild(about);\n\n  // Contacts Section\n  const contacts = document.createElement('section');\n  contacts.classList.add('contact');\n\n  // Address\n  const address = document.createElement('div');\n  address.classList.add('address');\n  const addressIcon = document.createElement('i');\n  addressIcon.classList.add('fa-solid', 'fa-location-dot');\n  addressIcon.setAttribute('id', 'contact-icon');\n  const addressTitle = document.createElement('div');\n  addressTitle.textContent = (\"Address\");\n  const addressContent = document.createElement('p');\n  addressContent.textContent = (`123 Serendipity Street \\r\\n Wonderland City \\r\\n Enchanted Forest`);\n\n  address.appendChild(addressIcon);\n  address.appendChild(addressTitle);\n  address.appendChild(addressContent);\n\n  // Hours\n  const hours = document.createElement('div');\n  hours.classList.add('hours');\n  const hoursIcon = document.createElement('i');\n  hoursIcon.classList.add('fa-solid', 'fa-clock');\n  hoursIcon.setAttribute('id', 'contact-icon');\n  const hoursTitle = document.createElement('div');\n  hoursTitle.textContent = (\"Hours\");\n  const hoursContent = document.createElement('p');\n  hoursContent.textContent = (`Monday-Thursday \\r\\n 11:00 am - 09:00 pm \\r\\n \\r\\n Friday-Sunday \\r\\n 10:00 am - 11:00 pm`);\n\n  hours.appendChild(hoursIcon);\n  hours.appendChild(hoursTitle);\n  hours.appendChild(hoursContent);\n\n  // Contact Information\n  const contactInfo = document.createElement('div');\n  contactInfo.classList.add('contact-info');\n  const contactIcon = document.createElement('i');\n  contactIcon.classList.add('fa-solid', 'fa-phone');\n  contactIcon.setAttribute('id', 'contact-icon')\n  const contactTitle = document.createElement('div');\n  contactTitle.textContent = (\"Contact\");\n  const contactContent = document.createElement('p');\n  contactContent.textContent = (`Phone: 555-555-5555 \\r\\n Email: lukespizza@gmail.com`);\n\n  contactInfo.appendChild(contactIcon);\n  contactInfo.appendChild(contactTitle);\n  contactInfo.appendChild(contactContent);\n\n  contacts.appendChild(address);\n  contacts.appendChild(hours);\n  contacts.appendChild(contactInfo);\n\n  section.appendChild(contacts);\n\n  return section;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHome);\n\n\n//# sourceURL=webpack://rest/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n\n\nfunction navTabs(header) {\n  const pageContent = document.getElementById(\"pageLoadContainer\");\n  const tabs = header.querySelectorAll('.tab'); // Get elements with the class \"tab\" inside the header\n\n  tabs.forEach(tab => {\n    tab.addEventListener('click', () => {\n      // Clear the pageContent\n      pageContent.textContent = \"\";\n\n      if (tab.textContent === \"Home\") {\n        // Append the content from createHome to pageContent\n        pageContent.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n      } else if (tab.textContent === \"Menu\") {\n        // Append the content from createMenu to pageContent\n        pageContent.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\n      } else if (tab.textContent === \"Contact\"){\n        pageContent.appendChild((0,_contact__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\n      } else {\n        pageContent.appendChild((0,_contact__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\n      };\n    });\n  });\n}\n\nfunction init() {\n  const container = document.getElementById('container');\n  const header = (0,_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(); // Create the header once\n\n  container.appendChild(header);\n  container.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n  container.appendChild((0,_footer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n  (0,_menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(container);\n\n  navTabs(header); // Pass the header as an argument to helloMsg\n}\n\ninit();\n\n\n\n//# sourceURL=webpack://rest/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createMenu(){\n  window.scrollTo(0,0); //to start page from top\n\n  const section = document.createElement('section');\n  section.setAttribute('id', 'pageLoadContainer');\n\n  const menu = document.createElement('section');\n  menu.classList.add('menuContent');\n\n  const menuBackground = document.createElement('div');\n  menuBackground.classList.add('menuBackground');\n\n  const menuTitle = document.createElement('p');\n  menuTitle.textContent = (\"Menu\");\n  menuTitle.classList.add('menuTitle');\n  menuBackground.appendChild(menuTitle);\n\n  let menuItemPrice = [\n    \"Margherita Pizza\", \"9.99\",\n    \"Pepperoni Pizza\", \"11.50\",\n    \"Hawaiian Pizza\", \"12.75\",\n    \"Vegetarian Pizza\", \"10.25\",\n    \"Supreme Pizza\", \"13.75\",\n    \"Cheese Stuffed Crust\", \"2.00\",\n    \"Extra Cheese\", \"1.50\",\n    \"Garlic Breadsticks\", \"4.50\",\n    \"Mushroom Pizza\", \"10.75\",\n    \"BBQ Chicken Pizza\", \"12.25\",\n    \"Sausage Pizza\", \"11.00\",\n    \"Pesto Pizza\", \"12.50\",\n    \"Spinach and Feta Pizza\", \"11.75\",\n    \"Meat Lovers Pizza\", \"13.50\",\n    \"Veggie Calzone\", \"9.25\",\n    \"Veggie Stromboli\", \"9.75\",\n    \"Caesar Salad\", \"6.50\",\n    \"Greek Salad\", \"7.00\",\n    \"Caprese Salad\", \"8.00\",\n    \"Garlic Knots (6 pieces)\", \"3.50\",\n    \"Cannoli\", \"4.25\",\n    \"Tiramisu\", \"5.75\",\n];\n        \n\n\n  menuItemPrice.forEach(element => {\n    const item = document.createElement('p');\n    item.textContent = element;\n    menuBackground.appendChild(item);\n  });\n\n  menu.appendChild(menuBackground);\n  section.appendChild(menu);\n  return section;\n}\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenu);\n\n//# sourceURL=webpack://rest/./src/menu.js?");

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