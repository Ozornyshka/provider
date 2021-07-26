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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function () {\r\n  var body = $(\"body\");\r\n  body.on(\"click\", \".header__burger\", function () {\r\n    $(\"body\").addClass(\"overflow\");\r\n    $(\".header__navbar-menu\").addClass(\"burger-open\");\r\n  });\r\n  body.on(\"click\", \".burger-open .icon-close\", function () {\r\n    $(\"body\").removeClass(\"overflow\");\r\n    $(\".header__navbar-menu\").removeClass(\"burger-open\");\r\n  });\r\n\r\n  /////////////////// кнопка все каналы на странице со списком каналов //////\r\n  body.on(\"click\", \".chanel-block__list-btn\", function (e) {\r\n    e.preventDefault();\r\n    $(this).parent(\".chanel-block__list\").toggleClass(\"show\");\r\n  });\r\n\r\n  //////////////// Слайдер ////////\r\n\r\n  $(\".home-banner\").slick({\r\n    dots: true,\r\n    speed: 500,\r\n    autoplaySpeed: 5000,\r\n    // fade: true,\r\n    cssEase: \"linear\",\r\n    slidesToShow: 1,\r\n    autoplay: true,\r\n    adaptiveHeight: true,\r\n  });\r\n  $(\".tariffs-carusel\").slick({\r\n    // dots: true,\r\n    infinite: false,\r\n    speed: 300,\r\n    slidesToShow: 4,\r\n    // centerMode: true,\r\n    variableWidth: true,\r\n    slidesToScroll: 1,\r\n    // adaptiveHeight: true,\r\n    responsive: [\r\n      {\r\n        breakpoint: 1440,\r\n        settings: {\r\n          slidesToShow: 1,\r\n          slidesToScroll: 1,\r\n          centerMode: true,\r\n        },\r\n      },\r\n      {\r\n        breakpoint: 767,\r\n        settings: {\r\n          slidesToShow: 2,\r\n          slidesToScroll: 1,\r\n          centerMode: true,\r\n        },\r\n      },\r\n      {\r\n        breakpoint: 480,\r\n        settings: {\r\n          slidesToShow: 1,\r\n          slidesToScroll: 1,\r\n          centerMode: true,\r\n        },\r\n      },\r\n      // You can unslick at a given breakpoint now by adding:\r\n      // settings: \"unslick\"\r\n      // instead of a settings object\r\n    ],\r\n  });\r\n\r\n  //////////// таб контайнер тарифов ////////\r\n  body.on(\"click\", \".tariffs-tabs\", function () {\r\n    $(this).addClass(\"active\");\r\n  });\r\n\r\n  body.on(\"click\", \".tariffs-tabs-item\", function () {\r\n    $(\".tariffs-tabs-item\").removeClass(\"active\");\r\n    $(this).addClass(\"active\");\r\n    var getvalue = $(this).attr(\"data-tariffs\");\r\n    $(\".tariffs\").attr(\"class\", \"tariffs\").addClass(getvalue);\r\n  });\r\n\r\n  function tabs() {\r\n    $(\".tariffs-tabs-item\").each(function () {\r\n      if ($(this).hasClass(\"active\")) {\r\n        $(\".tariffs\").attr(\"class\", \"tariffs\");\r\n        $(\".tariffs\").addClass($(this).attr(\"data-tariffs\"));\r\n      }\r\n    });\r\n  }\r\n  tabs();\r\n\r\n  body.on(\"click\", \".__select__title\", function (e) {\r\n    if (\"active\" === $(\".__select\")[0].getAttribute(\"data-state\")) {\r\n      $(\".__select\")[0].setAttribute(\"data-state\", \"\");\r\n    } else {\r\n      $(\".__select\")[0].setAttribute(\"data-state\", \"active\");\r\n    }\r\n\r\n    // Close when click to option\r\n    for (let i = 0; i < $(\".__select__label\").length; i++) {\r\n      $(\".__select__label\").on(\"click\", function (evt) {\r\n        $(\".__select__title\")[0].textContent = evt.target.textContent;\r\n        $(\".__select\")[0].setAttribute(\"data-state\", \"\");\r\n        $(\".tariffs\").attr(\"class\", \"tariffs\");\r\n        $(\".tariffs\").addClass(evt.target.getAttribute(\"data-tariffs\"));\r\n      });\r\n    }\r\n  });\r\n\r\n  ////////////////////// Popup /////////\r\n  $(\"a[data-popup]\").click(function (e) {\r\n    e.preventDefault();\r\n    let popup = e.target.getAttribute(\"data-popup\");\r\n    $(\".popup\").addClass(popup);\r\n    popupClose();\r\n  });\r\n\r\n  body.on(\"click\", \".popup .close\", function () {\r\n    $(\".popup\").attr(\"class\", \"popup\");\r\n  });\r\n\r\n  function popupClose() {\r\n    var popup = $(\".popup\");\r\n    var popup1 = $(\".popup-center\");\r\n    window.onclick = function (event) {\r\n      if (event.target == popup[0]) {\r\n        $(\".popup\").attr(\"class\", \"popup\");\r\n      } else if (event.target == popup1[0]) {\r\n        $(\".popup\").attr(\"class\", \"popup\");\r\n      }\r\n    };\r\n  }\r\n\r\n  //////////// Скрол плавный к якорю на страницах с акордион меню\r\n  $(\"#subscriber__nav\").on(\"click\", \"a\", function (event) {\r\n    //отменяем стандартную обработку нажатия по ссылке\r\n    event.preventDefault();\r\n\r\n    //забираем идентификатор бока с атрибута href\r\n    var id = $(this).attr(\"href\"),\r\n      //узнаем высоту от начала страницы до блока на который ссылается якорь\r\n      top = $(id).offset().top;\r\n\r\n    //анимируем переход на расстояние - top за 1500 мс\r\n    $(\"body,html\").animate({ scrollTop: top }, 1500);\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ })

/******/ });