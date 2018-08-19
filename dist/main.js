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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _speechRecognitionService = __webpack_require__(/*! ./speechRecognitionService */ \"./src/speechRecognitionService.js\");\n\nvar _speechRecognitionService2 = _interopRequireDefault(_speechRecognitionService);\n\nvar _wordEditor = __webpack_require__(/*! ./wordEditor */ \"./src/wordEditor.js\");\n\nvar _wordEditor2 = _interopRequireDefault(_wordEditor);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar editor = (0, _wordEditor2.default)(document.getElementById('result'));\nvar listener = (0, _speechRecognitionService2.default)();\nvar mic = document.getElementById('mic');\n\nlistener.onEnd(function (result) {\n  console.log(result);\n  editor.addText(result);\n});\n\nmic.addEventListener('click', function (event) {\n  event.preventDefault();\n  listener.start();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/speechRecognitionService.js":
/*!*****************************************!*\
  !*** ./src/speechRecognitionService.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar speechRecognitionService = function speechRecognitionService() {\n  var recognition = new webkitSpeechRecognition();\n  // The final speech recognition will be stored here\n  var finalResult = void 0;\n\n  recognition.continuous = false;\n  recognition.interimResults = false;\n  recognition.lang = 'es-AR';\n\n  recognition.onstart = function () {\n    finalResult = \"\";\n    console.log(\"onstart\");\n  };\n\n  recognition.onerror = function (event) {\n    console.log(\"error\", event.error);\n  };\n\n  //TODO , RETURN INTERIM AND PRINT FOR BETTER VISUAL STUFF\n  //PURO PLANTE, PUES\n  recognition.onresult = function (event) {\n    finalResult = event.results[0][0].transcript;\n  };\n\n  var start = function start() {\n    recognition.start();\n  };\n\n  var onEnd = function onEnd(cb) {\n    recognition.onend = function () {\n      cb(finalResult);\n    };\n  };\n\n  return {\n    start: start,\n    onEnd: onEnd\n  };\n};\n\nexports.default = speechRecognitionService;\n\n//# sourceURL=webpack:///./src/speechRecognitionService.js?");

/***/ }),

/***/ "./src/wordEditor.js":
/*!***************************!*\
  !*** ./src/wordEditor.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar wordEditor = function wordEditor(domElement) {\n  var editor = domElement;\n  var words = [];\n  var currentSpan = null; //Guarda el último span clickeado\n  var clonedSpan = null; // Guarda una copia del último span clickeado\n\n  // Math.random should be unique because of its seeding algorithm.\n  // Convert it to base 36 (numbers + letters), and grab the first 9 characters\n  // after the decimal  \n  var ID = function ID() {\n    return '_' + Math.random().toString(36).substr(2, 9);\n  };\n\n  var createSpace = function createSpace() {\n    return document.createTextNode(\" \");\n  };\n\n  var convertToWords = function convertToWords(textInput) {\n    words = textInput.split(\" \").map(function (word) {\n      var span = document.createElement(\"span\");\n      span.id = ID();\n      span.innerHTML = word;\n      return span;\n    });\n  };\n\n  var appendWordsToEditor = function appendWordsToEditor() {\n    words.map(function (word) {\n      editor.append(word);\n      editor.append(createSpace());\n    });\n  };\n\n  var addText = function addText(textInput) {\n    convertToWords(textInput);\n    appendWordsToEditor();\n  };\n\n  var copyTarget = function copyTarget(target) {\n    currentSpan = target;\n    clonedSpan = target.cloneNode(true);\n  };\n\n  // Agrego un anchor y un click listener para borrar el elemento\n  var addDeleteToTarget = function addDeleteToTarget(target) {\n    var deleteAnchor = document.createElement(\"a\");\n    deleteAnchor.innerHTML = \"X\";\n    target.append(deleteAnchor);\n\n    deleteAnchor.addEventListener('click', function (event) {\n      currentSpan.remove();\n    });\n  };\n\n  // Revierto el span a como estaba antes de darle click\n  var removeDeleteFromTarget = function removeDeleteFromTarget(oldItem, newItem) {\n    oldItem.replaceWith(newItem);\n  };\n\n  // Hande click events\n  editor.addEventListener('click', function (event) {\n    var currentTarget = event.target;\n\n    if (currentTarget.matches('span')) {\n      if (!clonedSpan) {\n        // Primer click ever\n        copyTarget(currentTarget);\n        addDeleteToTarget(currentTarget);\n      } else if (!!clonedSpan && clonedSpan.id === currentTarget.id) {\n        // Estoy dándole click al mismo item\n        if (currentTarget.childElementCount) {\n          // Tiene más elementos que solo el SPAN?\n          removeDeleteFromTarget(currentTarget, clonedSpan);\n        } else {\n          copyTarget(currentTarget);\n          addDeleteToTarget(currentTarget);\n        }\n      } else {\n        // Estoy dándole click a un nuevo item\n        removeDeleteFromTarget(currentSpan, clonedSpan);\n        copyTarget(currentTarget);\n        addDeleteToTarget(currentTarget);\n      }\n    }\n  }, false);\n\n  return {\n    addText: addText\n  };\n};\n\nexports.default = wordEditor;\n\n//# sourceURL=webpack:///./src/wordEditor.js?");

/***/ })

/******/ });