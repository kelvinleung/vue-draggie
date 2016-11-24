/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	{
	  (function () {
	    var Draggie = {};
	    Draggie.install = function (Vue, options) {
	      var dragEl = {};
	      var dropEl = {};

	      var _ref = options ? options : { effect: 'none', start: null, enter: null },
	          effect = _ref.effect,
	          start = _ref.start,
	          enter = _ref.enter;

	      Vue.directive('draggie', {
	        bind: function bind(el, binding) {
	          var _ref2 = binding.value ? binding.value : { swap: function swap() {}, id: null },
	              swap = _ref2.swap,
	              id = _ref2.id;

	          function handleDragStart(e) {
	            var _ref3 = [this, id, effect];
	            dragEl.el = _ref3[0];
	            dragEl.id = _ref3[1];
	            e.dataTransfer.effectAllowed = _ref3[2];

	            this.classList.add(start);
	          }
	          function handleDragEnter(e) {
	            this.classList.add(enter);
	          }
	          function handleDragOver(e) {
	            if (e.preventDefault()) {
	              e.preventDefault();
	            }
	            e.dataTransfer.dropEffect = effect;
	            return false;
	          }
	          function handleDragLeave(e) {
	            this.classList.remove(enter);
	          }
	          function handleDragEnd(e) {
	            this.classList.remove(start);
	          }
	          function handleDrop(e) {
	            var _ref4 = [this, id];
	            dropEl.el = _ref4[0];
	            dropEl.id = _ref4[1];

	            if (e.stopPropagation()) {
	              e.stopPropagation();
	            }
	            if (dragEl != dropEl) {
	              swap(dragEl, dropEl);
	            }
	            this.classList.remove(enter);
	            return false;
	          }
	          el.addEventListener('dragstart', handleDragStart, false);
	          el.addEventListener('dragenter', handleDragEnter, false);
	          el.addEventListener('dragover', handleDragOver, false);
	          el.addEventListener('dragleave', handleDragLeave, false);
	          el.addEventListener('dragend', handleDragEnd, false);
	          el.addEventListener('drop', handleDrop, false);
	        },
	        unbind: function unbind() {
	          el.removeEventListener('dragstart', handleDragStart, false);
	          el.removeEventListener('dragenter', handleDragEnter, false);
	          el.removeEventListener('dragover', handleDragOver, false);
	          el.removeEventListener('dragleave', handleDragLeave, false);
	          el.removeEventListener('dragend', handleDragEnd, false);
	          el.removeEventListener('drop', handleDrop, false);
	        }
	      });
	    };
	    if (( false ? 'undefined' : _typeof(exports)) == "object") {
	      module.exports = Draggie;
	    } else if (true) {
	      !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	        return Draggie;
	      }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (window.Vue) {
	      window.Draggie = Draggie;
	      Vue.use(Draggie);
	    }
	  })();
	}

/***/ }
/******/ ]);