module.exports =
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return off; });
/* unused harmony export once */
/* unused harmony export hasClass */
/* unused harmony export addClass */
/* unused harmony export removeClass */
/* unused harmony export getStyle */
/* unused harmony export setStyle */
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };



var isServer = vue__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.$isServer; //当前Vue 实例是否运行于服务器。
var SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
var MOZ_HACK_REGEXP = /^moz([A-Z])/;
var ieVersion = isServer ? 0 : Number(document.documentMode);

/* istanbul ignore next */
var trim = function trim(string) {
  return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
};
/* istanbul ignore next */
var camelCase = function camelCase(name) {
  return name.replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
    return offset ? letter.toUpperCase() : letter;
  }).replace(MOZ_HACK_REGEXP, 'Moz$1');
};

/* istanbul ignore next */
var on = function () {
  if (!isServer && document.addEventListener) {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false);
      }
    };
  } else {
    return function (element, event, handler) {
      if (element && event && handler) {
        element.attachEvent('on' + event, handler);
      }
    };
  }
}();

/* istanbul ignore next */
var off = function () {
  if (!isServer && document.removeEventListener) {
    return function (element, event, handler) {
      if (element && event) {
        element.removeEventListener(event, handler, false);
      }
    };
  } else {
    return function (element, event, handler) {
      if (element && event) {
        element.detachEvent('on' + event, handler);
      }
    };
  }
}();

/* istanbul ignore next */
var once = function once(el, event, fn) {
  var listener = function listener() {
    if (fn) {
      fn.apply(this, arguments);
    }
    off(el, event, listener);
  };
  on(el, event, listener);
};

/* istanbul ignore next */
function hasClass(el, cls) {
  if (!el || !cls) return false;
  if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
  if (el.classList) {
    return el.classList.contains(cls);
  } else {
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
  }
};

/* istanbul ignore next */
function addClass(el, cls) {
  if (!el) return;
  var curClass = el.className;
  var classes = (cls || '').split(' ');

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.add(clsName);
    } else if (!hasClass(el, clsName)) {
      curClass += ' ' + clsName;
    }
  }
  if (!el.classList) {
    el.className = curClass;
  }
};

/* istanbul ignore next */
function removeClass(el, cls) {
  if (!el || !cls) return;
  var classes = cls.split(' ');
  var curClass = ' ' + el.className + ' ';

  for (var i = 0, j = classes.length; i < j; i++) {
    var clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.remove(clsName);
    } else if (hasClass(el, clsName)) {
      curClass = curClass.replace(' ' + clsName + ' ', ' ');
    }
  }
  if (!el.classList) {
    el.className = trim(curClass);
  }
};

/* istanbul ignore next */
var getStyle = ieVersion < 9 ? function (element, styleName) {
  if (isServer) return;
  if (!element || !styleName) return null;
  styleName = camelCase(styleName);
  if (styleName === 'float') {
    styleName = 'styleFloat';
  }
  try {
    switch (styleName) {
      case 'opacity':
        try {
          return element.filters.item('alpha').opacity / 100;
        } catch (e) {
          return 1.0;
        }
      default:
        return element.style[styleName] || element.currentStyle ? element.currentStyle[styleName] : null;
    }
  } catch (e) {
    return element.style[styleName];
  }
} : function (element, styleName) {
  if (isServer) return;
  if (!element || !styleName) return null;
  styleName = camelCase(styleName);
  if (styleName === 'float') {
    styleName = 'cssFloat';
  }
  try {
    var computed = document.defaultView.getComputedStyle(element, '');
    return element.style[styleName] || computed ? computed[styleName] : null;
  } catch (e) {
    return element.style[styleName];
  }
};

/* istanbul ignore next */
function setStyle(element, styleName, value) {
  if (!element || !styleName) return;

  if ((typeof styleName === 'undefined' ? 'undefined' : _typeof(styleName)) === 'object') {
    for (var prop in styleName) {
      if (styleName.hasOwnProperty(prop)) {
        setStyle(element, prop, styleName[prop]);
      }
    }
  } else {
    styleName = camelCase(styleName);
    if (styleName === 'opacity' && ieVersion < 9) {
      element.style.filter = isNaN(value) ? '' : 'alpha(opacity=' + value * 100 + ')';
    } else {
      element.style[styleName] = value;
    }
  }
};

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return oneOf; });
/* unused harmony export camelcaseToHyphen */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getScrollBarSize; });
/* unused harmony export getStyle */
/* unused harmony export firstUpperCase */
/* unused harmony export warnProp */
/* unused harmony export deepCopy */
/* unused harmony export scrollTop */
/* unused harmony export findComponentUpward */
/* unused harmony export findComponentDownward */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return findComponentsDownward; });
/* unused harmony export findComponentsUpward */
/* unused harmony export findBrothersComponents */
/* unused harmony export hasClass */
/* unused harmony export addClass */
/* unused harmony export removeClass */
/* unused harmony export dimensionMap */
/* unused harmony export setMatchMedia */
/* unused harmony export sharpMatcherRegx */
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var isServer = vue__WEBPACK_IMPORTED_MODULE_0___default.a.prototype.$isServer;

// 判断参数是否是其中之一
function oneOf(value, validList) {
    for (var i = 0; i < validList.length; i++) {
        if (value === validList[i]) {
            return true;
        }
    }
    return false;
}
function camelcaseToHyphen(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}
// For Modal scrollBar hidden
var cached = void 0;
function getScrollBarSize(fresh) {
    if (isServer) return 0;
    if (fresh || cached === undefined) {
        var inner = document.createElement('div');
        inner.style.width = '100%';
        inner.style.height = '200px';

        var outer = document.createElement('div');
        var outerStyle = outer.style;

        outerStyle.position = 'absolute';
        outerStyle.top = 0;
        outerStyle.left = 0;
        outerStyle.pointerEvents = 'none';
        outerStyle.visibility = 'hidden';
        outerStyle.width = '200px';
        outerStyle.height = '150px';
        outerStyle.overflow = 'hidden';

        outer.appendChild(inner);

        document.body.appendChild(outer);

        var widthContained = inner.offsetWidth;
        outer.style.overflow = 'scroll';
        var widthScroll = inner.offsetWidth;

        if (widthContained === widthScroll) {
            widthScroll = outer.clientWidth;
        }

        document.body.removeChild(outer);

        cached = widthContained - widthScroll;
    }
    return cached;
}
// getStyle
function getStyle(element, styleName) {
    if (!element || !styleName) return null;
    styleName = camelCase(styleName);
    if (styleName === 'float') {
        styleName = 'cssFloat';
    }
    try {
        var computed = document.defaultView.getComputedStyle(element, '');
        return element.style[styleName] || computed ? computed[styleName] : null;
    } catch (e) {
        return element.style[styleName];
    }
}

// firstUpperCase
function firstUpperCase(str) {
    return str.toString()[0].toUpperCase() + str.toString().slice(1);
}


// Warn
function warnProp(component, prop, correctType, wrongType) {
    correctType = firstUpperCase(correctType);
    wrongType = firstUpperCase(wrongType);
    console.error('[warn]: Invalid prop: type check failed for prop ' + prop + '. Expected ' + correctType + ', got ' + wrongType + '. (found in component: ' + component + ')'); // eslint-disable-line
}

function typeOf(obj) {
    var toString = Object.prototype.toString;
    var map = {
        '[object Boolean]': 'boolean',
        '[object Number]': 'number',
        '[object String]': 'string',
        '[object Function]': 'function',
        '[object Array]': 'array',
        '[object Date]': 'date',
        '[object RegExp]': 'regExp',
        '[object Undefined]': 'undefined',
        '[object Null]': 'null',
        '[object Object]': 'object'
    };
    return map[toString.call(obj)];
}

// deepCopy
function deepCopy(data) {
    var t = typeOf(data);
    var o = void 0;

    if (t === 'array') {
        o = [];
    } else if (t === 'object') {
        o = {};
    } else {
        return data;
    }

    if (t === 'array') {
        for (var i = 0; i < data.length; i++) {
            o.push(deepCopy(data[i]));
        }
    } else if (t === 'object') {
        for (var _i in data) {
            o[_i] = deepCopy(data[_i]);
        }
    }
    return o;
}



// scrollTop animation
function scrollTop(el) {
    var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var to = arguments[2];
    var duration = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 500;

    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function (callback) {
            return window.setTimeout(callback, 1000 / 60);
        };
    }
    var difference = Math.abs(from - to);
    var step = Math.ceil(difference / duration * 50);

    function scroll(start, end, step) {
        if (start === end) return;

        var d = start + step > end ? end : start + step;
        if (start > end) {
            d = start - step < end ? end : start - step;
        }

        if (el === window) {
            window.scrollTo(d, d);
        } else {
            el.scrollTop = d;
        }
        window.requestAnimationFrame(function () {
            return scroll(d, end, step);
        });
    }
    scroll(from, to, step);
}

// Find components upward
function findComponentUpward(context, componentName, componentNames) {
    if (typeof componentName === 'string') {
        componentNames = [componentName];
    } else {
        componentNames = componentName;
    }

    var parent = context.$parent;
    var name = parent.$options.name;
    while (parent && (!name || componentNames.indexOf(name) < 0)) {
        parent = parent.$parent;
        if (parent) name = parent.$options.name;
    }
    return parent;
}


// Find component downward
function findComponentDownward(context, componentName) {
    var childrens = context.$children;
    var children = null;

    if (childrens.length) {
        for (var _iterator = childrens, _isArray = Array.isArray(_iterator), _i2 = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
            var _ref;

            if (_isArray) {
                if (_i2 >= _iterator.length) break;
                _ref = _iterator[_i2++];
            } else {
                _i2 = _iterator.next();
                if (_i2.done) break;
                _ref = _i2.value;
            }

            var child = _ref;

            var name = child.$options.name;
            if (name === componentName) {
                children = child;
                break;
            } else {
                children = findComponentDownward(child, componentName);
                if (children) break;
            }
        }
    }
    return children;
}

// Find components downward
function findComponentsDownward(context, componentName) {
    return context.$children.reduce(function (components, child) {
        if (child.$options.name === componentName) components.push(child);
        var foundChilds = findComponentsDownward(child, componentName);
        return components.concat(foundChilds);
    }, []);
}

// Find components upward
function findComponentsUpward(context, componentName) {
    var parents = [];
    var parent = context.$parent;
    if (parent) {
        if (parent.$options.name === componentName) parents.push(parent);
        return parents.concat(findComponentsUpward(parent, componentName));
    } else {
        return [];
    }
}

// Find brothers components
function findBrothersComponents(context, componentName) {
    var exceptMe = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    var res = context.$parent.$children.filter(function (item) {
        return item.$options.name === componentName;
    });
    var index = res.findIndex(function (item) {
        return item._uid === context._uid;
    });
    if (exceptMe) res.splice(index, 1);
    return res;
}

/* istanbul ignore next */
var trim = function trim(string) {
    return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
};

/* istanbul ignore next */
function hasClass(el, cls) {
    if (!el || !cls) return false;
    if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.');
    if (el.classList) {
        return el.classList.contains(cls);
    } else {
        return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1;
    }
}

/* istanbul ignore next */
function addClass(el, cls) {
    if (!el) return;
    var curClass = el.className;
    var classes = (cls || '').split(' ');

    for (var i = 0, j = classes.length; i < j; i++) {
        var clsName = classes[i];
        if (!clsName) continue;

        if (el.classList) {
            el.classList.add(clsName);
        } else {
            if (!hasClass(el, clsName)) {
                curClass += ' ' + clsName;
            }
        }
    }
    if (!el.classList) {
        el.className = curClass;
    }
}

/* istanbul ignore next */
function removeClass(el, cls) {
    if (!el || !cls) return;
    var classes = cls.split(' ');
    var curClass = ' ' + el.className + ' ';

    for (var i = 0, j = classes.length; i < j; i++) {
        var clsName = classes[i];
        if (!clsName) continue;

        if (el.classList) {
            el.classList.remove(clsName);
        } else {
            if (hasClass(el, clsName)) {
                curClass = curClass.replace(' ' + clsName + ' ', ' ');
            }
        }
    }
    if (!el.classList) {
        el.className = trim(curClass);
    }
}

var dimensionMap = {
    xs: '480px',
    sm: '768px',
    md: '992px',
    lg: '1200px',
    xl: '1600px'
};

function setMatchMedia() {
    if (typeof window !== 'undefined') {
        var matchMediaPolyfill = function matchMediaPolyfill(mediaQuery) {
            return {
                media: mediaQuery,
                matches: false,
                on: function on() {},
                off: function off() {}
            };
        };
        window.matchMedia = window.matchMedia || matchMediaPolyfill;
    }
}

var sharpMatcherRegx = /#([^#]+)$/;

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/button/src/button.vue?vue&type=template&id=ca859fb4&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "button",
    {
      staticClass: "lp-button",
      class: [
        _vm.type ? "lp-button--" + _vm.type : "",
        _vm.buttonSize ? "lp-button--" + _vm.buttonSize : "",
        {
          "is-disabled": _vm.buttonDisabled,
          "is-loading": _vm.loading,
          "is-plain": _vm.plain,
          "is-round": _vm.round,
          "is-circle": _vm.circle,
          "is-dashed": _vm.dashed
        }
      ],
      attrs: {
        disabled: _vm.buttonDisabled || _vm.loading,
        autofocus: _vm.autofocus,
        type: _vm.nativeType
      },
      on: { click: _vm.handleClick }
    },
    [
      _vm.loading ? _c("i", { staticClass: "el-icon-loading" }) : _vm._e(),
      _vm.icon && !_vm.loading ? _c("i", { class: _vm.icon }) : _vm._e(),
      _vm.$slots.default ? _c("span", [_vm._t("default")], 2) : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/button/src/button.vue?vue&type=template&id=ca859fb4&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/button/src/button.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var buttonvue_type_script_lang_js_ = ({
  name: 'lpButton',
  inject: {
    elForm: {
      default: ''
    },
    elFormItem: {
      default: ''
    }
  },
  props: {
    type: {
      type: String,
      default: 'default'
    },
    size: String,
    icon: {
      type: String,
      default: ''
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean,
    dashed: Boolean
  },
  computed: {
    _elFormItemSize: function _elFormItemSize() {
      return (this.elFormItem || {}).elFormItemSize;
    },
    buttonSize: function buttonSize() {
      return this.size || this._elFormItemSize || (this.$LIPEI || {}).size;
    },
    buttonDisabled: function buttonDisabled() {
      return this.disabled || (this.elForm || {}).disabled;
    }
  },
  methods: {
    handleClick: function handleClick(evt) {
      this.$emit('click', evt);
    }
  }
});
// CONCATENATED MODULE: ./packages/button/src/button.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_buttonvue_type_script_lang_js_ = (buttonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./packages/button/src/button.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_buttonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/button/src/button.vue"
/* harmony default export */ var src_button = __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return transferIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return transferIncrease; });
var transferIndex = 0;

function transferIncrease() {
    transferIndex++;
}



/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function _broadcast(componentName, eventName, params) {
  this.$children.forEach(function (child) {
    var name = child.$options.componentName;

    if (name === componentName) {
      child.$emit.apply(child, [eventName].concat(params));
    } else {
      _broadcast.apply(child, [componentName, eventName].concat([params]));
    }
  });
}
/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    dispatch: function dispatch(componentName, eventName, params) {
      var parent = this.$parent || this.$root;
      var name = parent.$options.componentName;

      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;

        if (parent) {
          name = parent.$options.componentName;
        }
      }
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params));
      }
    },
    broadcast: function broadcast(componentName, eventName, params) {
      _broadcast.call(this, componentName, eventName, params);
    }
  }
});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _utils_assist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);

/* harmony default export */ __webpack_exports__["a"] = ({
    methods: {
        checkScrollBar: function checkScrollBar() {
            var fullWindowWidth = window.innerWidth;
            if (!fullWindowWidth) {
                // workaround for missing window.innerWidth in IE8
                var documentElementRect = document.documentElement.getBoundingClientRect();
                fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
            }
            this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth;
            if (this.bodyIsOverflowing) {
                this.scrollBarWidth = Object(_utils_assist__WEBPACK_IMPORTED_MODULE_0__[/* getScrollBarSize */ "b"])();
            }
        },
        checkMaskInVisible: function checkMaskInVisible() {
            var masks = document.getElementsByClassName('lp-modal-mask') || [];
            return Array.from(masks).every(function (m) {
                return m.style.display === 'none' || m.classList.contains('fade-leave-to');
            });
        },
        setScrollBar: function setScrollBar() {
            if (this.bodyIsOverflowing && this.scrollBarWidth !== undefined) {
                document.body.style.paddingRight = this.scrollBarWidth + 'px';
            }
        },
        resetScrollBar: function resetScrollBar() {
            document.body.style.paddingRight = '';
        },
        addScrollEffect: function addScrollEffect() {
            this.checkScrollBar();
            this.setScrollBar();
            document.body.style.overflow = 'hidden';
        },
        removeScrollEffect: function removeScrollEffect() {
            if (this.checkMaskInVisible()) {
                document.body.style.overflow = '';
                this.resetScrollBar();
            }
        }
    }
});

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/modal/src/modal.vue?vue&type=template&id=73083168&
var modalvue_type_template_id_73083168_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [{ name: "transfer-dom", rawName: "v-transfer-dom" }],
      attrs: { "data-transfer": _vm.transfer }
    },
    [
      _c("transition", { attrs: { name: _vm.transitionNames[1] } }, [
        _vm.showMask
          ? _c("div", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.visible,
                  expression: "visible"
                }
              ],
              class: _vm.maskClasses,
              style: _vm.wrapStyles,
              on: { click: _vm.handleMask }
            })
          : _vm._e()
      ]),
      _c(
        "div",
        {
          class: _vm.wrapClasses,
          style: _vm.wrapStyles,
          on: { click: _vm.handleWrapClick }
        },
        [
          _c(
            "transition",
            {
              attrs: { name: _vm.transitionNames[0] },
              on: { "after-leave": _vm.animationFinish }
            },
            [
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.visible,
                      expression: "visible"
                    }
                  ],
                  class: _vm.classes,
                  style: _vm.mainStyles,
                  on: { mousedown: _vm.handleMousedown }
                },
                [
                  _c(
                    "div",
                    {
                      ref: "content",
                      class: _vm.contentClasses,
                      style: _vm.contentStyles,
                      on: { click: _vm.handleClickModal }
                    },
                    [
                      _vm.closable
                        ? _c(
                            "a",
                            {
                              class: [_vm.prefixCls + "-close"],
                              on: { click: _vm.close }
                            },
                            [
                              _vm._t("close", [
                                _c("i", {
                                  staticClass:
                                    "lp-icon-close iconfont icon-close1"
                                })
                              ])
                            ],
                            2
                          )
                        : _vm._e(),
                      _vm.showHead
                        ? _c(
                            "div",
                            {
                              class: [_vm.prefixCls + "-header"],
                              on: { mousedown: _vm.handleMoveStart }
                            },
                            [
                              _vm._t("header", [
                                _c(
                                  "div",
                                  { class: [_vm.prefixCls + "-header-inner"] },
                                  [_vm._v(_vm._s(_vm.title))]
                                )
                              ])
                            ],
                            2
                          )
                        : _vm._e(),
                      _c(
                        "div",
                        { class: [_vm.prefixCls + "-body"] },
                        [_vm._t("default")],
                        2
                      ),
                      !_vm.footerHide
                        ? _c(
                            "div",
                            { class: [_vm.prefixCls + "-footer"] },
                            [
                              _vm._t("footer", [
                                _c(
                                  "i-button",
                                  {
                                    attrs: { type: "text", size: "large" },
                                    nativeOn: {
                                      click: function($event) {
                                        return _vm.cancel($event)
                                      }
                                    }
                                  },
                                  [_vm._v(_vm._s(_vm.localeCancelText))]
                                ),
                                _c(
                                  "i-button",
                                  {
                                    attrs: {
                                      type: "primary",
                                      size: "large",
                                      loading: _vm.buttonLoading
                                    },
                                    nativeOn: {
                                      click: function($event) {
                                        return _vm.ok($event)
                                      }
                                    }
                                  },
                                  [_vm._v(_vm._s(_vm.localeOkText))]
                                )
                              ])
                            ],
                            2
                          )
                        : _vm._e()
                    ]
                  )
                ]
              )
            ]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
modalvue_type_template_id_73083168_render._withStripped = true


// CONCATENATED MODULE: ./packages/modal/src/modal.vue?vue&type=template&id=73083168&

// EXTERNAL MODULE: ./packages/button/src/button.vue + 4 modules
var src_button = __webpack_require__(4);

// CONCATENATED MODULE: ./src/directives/transfer-dom.js
/**
 * Get target DOM Node
 * @param {(Node|string|Boolean)} [node=document.body] DOM Node, CSS selector, or Boolean
 * @return {Node} The target that the el will be appended to
 */
function getTarget(node) {
    if (node === void 0) {
        node = document.body;
    }
    if (node === true) {
        return document.body;
    }
    return node instanceof window.Node ? node : document.querySelector(node);
}

var directive = {
    inserted: function inserted(el, _ref, vnode) {
        var value = _ref.value;

        if (el.dataset && el.dataset.transfer !== 'true') return false;
        el.className = el.className ? el.className + ' v-transfer-dom' : 'v-transfer-dom';
        var parentNode = el.parentNode;
        if (!parentNode) return;
        var home = document.createComment('');
        var hasMovedOut = false;

        if (value !== false) {
            parentNode.replaceChild(home, el); // moving out, el is no longer in the document
            getTarget(value).appendChild(el); // moving into new place
            hasMovedOut = true;
        }
        if (!el.__transferDomData) {
            el.__transferDomData = {
                parentNode: parentNode,
                home: home,
                target: getTarget(value),
                hasMovedOut: hasMovedOut
            };
        }
    },
    componentUpdated: function componentUpdated(el, _ref2) {
        var value = _ref2.value;

        if (el.dataset && el.dataset.transfer !== 'true') return false;
        // need to make sure children are done updating (vs. `update`)
        var ref$1 = el.__transferDomData;
        if (!ref$1) return;
        // homes.get(el)
        var parentNode = ref$1.parentNode;
        var home = ref$1.home;
        var hasMovedOut = ref$1.hasMovedOut; // recall where home is

        if (!hasMovedOut && value) {
            // remove from document and leave placeholder
            parentNode.replaceChild(home, el);
            // append to target
            getTarget(value).appendChild(el);
            el.__transferDomData = Object.assign({}, el.__transferDomData, { hasMovedOut: true, target: getTarget(value) });
        } else if (hasMovedOut && value === false) {
            // previously moved, coming back home
            parentNode.replaceChild(el, home);
            el.__transferDomData = Object.assign({}, el.__transferDomData, { hasMovedOut: false, target: getTarget(value) });
        } else if (value) {
            // already moved, going somewhere else
            getTarget(value).appendChild(el);
        }
    },
    unbind: function unbind(el) {
        if (el.dataset && el.dataset.transfer !== 'true') return false;
        el.className = el.className.replace('v-transfer-dom', '');
        var ref$1 = el.__transferDomData;
        if (!ref$1) return;
        if (el.__transferDomData.hasMovedOut === true) {
            el.__transferDomData.parentNode && el.__transferDomData.parentNode.appendChild(el);
        }
        el.__transferDomData = null;
    }
};

/* harmony default export */ var transfer_dom = (directive);
// EXTERNAL MODULE: ./src/mixins/emitter.js
var emitter = __webpack_require__(6);

// EXTERNAL MODULE: ./src/mixins/mixins-scrollbar.js
var mixins_scrollbar = __webpack_require__(7);

// EXTERNAL MODULE: ./src/utils/dom.js
var dom = __webpack_require__(2);

// EXTERNAL MODULE: ./src/utils/assist.js
var assist = __webpack_require__(3);

// EXTERNAL MODULE: ./src/utils/transfer-queue.js
var transfer_queue = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/modal/src/modal.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








var prefixCls = 'lp-modal';
/* harmony default export */ var modalvue_type_script_lang_js_ = ({
    name: 'lpModal',
    mixins: [emitter["a" /* default */], mixins_scrollbar["a" /* default */]],
    components: { iButton: src_button["a" /* default */] },
    directives: { TransferDom: transfer_dom },
    props: {
        value: {
            type: Boolean,
            default: false
        },
        closable: {
            type: Boolean,
            default: true
        },
        maskClosable: {
            type: Boolean,
            default: function _default() {
                return !this.$LIPEI || this.$LIPEI.modal.maskClosable === '' ? true : this.$LIPEI.modal.maskClosable;
            }
        },
        title: {
            type: String
        },
        width: {
            type: [Number, String],
            default: 520
        },
        okText: {
            type: String
        },
        cancelText: {
            type: String
        },
        loading: {
            type: Boolean,
            default: false
        },
        styles: {
            type: Object
        },
        className: {
            type: String
        },
        // for instance
        footerHide: {
            type: Boolean,
            default: false
        },
        scrollable: {
            type: Boolean,
            default: false
        },
        transitionNames: {
            type: Array,
            default: function _default() {
                return ['ease', 'fade'];
            }
        },
        transfer: {
            type: Boolean,
            default: function _default() {
                return !this.$LIPEI || this.$LIPEI.transfer === '' ? true : this.$LIPEI.transfer;
            }
        },
        fullscreen: {
            type: Boolean,
            default: false
        },
        mask: {
            type: Boolean,
            default: true
        },
        draggable: {
            type: Boolean,
            default: false
        },
        zIndex: {
            type: Number,
            default: 1000
        }
    },
    data: function data() {
        return {
            prefixCls: prefixCls,
            wrapShow: false,
            showHead: true,
            buttonLoading: false,
            visible: this.value,
            dragData: {
                x: null,
                y: null,
                dragX: null,
                dragY: null,
                dragging: false
            },
            modalIndex: this.handleGetModalIndex(), // for Esc close the top modal
            isMouseTriggerIn: false // #5800
        };
    },

    computed: {
        wrapClasses: function wrapClasses() {
            var _ref;

            return [prefixCls + '-wrap', (_ref = {}, _ref[prefixCls + '-hidden'] = !this.wrapShow, _ref['' + this.className] = !!this.className, _ref[prefixCls + '-no-mask'] = !this.showMask, _ref)];
        },
        wrapStyles: function wrapStyles() {
            return {
                zIndex: this.modalIndex + this.zIndex
            };
        },
        maskClasses: function maskClasses() {
            return prefixCls + '-mask';
        },
        classes: function classes() {
            var _ref2;

            return ['' + prefixCls, (_ref2 = {}, _ref2[prefixCls + '-fullscreen'] = this.fullscreen, _ref2[prefixCls + '-fullscreen-no-header'] = this.fullscreen && !this.showHead, _ref2[prefixCls + '-fullscreen-no-footer'] = this.fullscreen && this.footerHide, _ref2)];
        },
        contentClasses: function contentClasses() {
            var _ref3;

            return [prefixCls + '-content', (_ref3 = {}, _ref3[prefixCls + '-content-no-mask'] = !this.showMask, _ref3[prefixCls + '-content-drag'] = this.draggable, _ref3[prefixCls + '-content-dragging'] = this.draggable && this.dragData.dragging, _ref3)];
        },
        mainStyles: function mainStyles() {
            var style = {};
            var width = parseInt(this.width);
            var styleWidth = this.dragData.x !== null ? {
                top: 0
            } : {
                width: width <= 100 ? width + '%' : width + 'px'
            };
            var customStyle = this.styles ? this.styles : {};
            Object.assign(style, styleWidth, customStyle);
            return style;
        },
        contentStyles: function contentStyles() {
            var style = {};
            if (this.draggable) {
                if (this.dragData.x !== null) style.left = this.dragData.x + 'px';
                if (this.dragData.y !== null) style.top = this.dragData.y + 'px';
                var width = parseInt(this.width);
                var styleWidth = {
                    width: width <= 100 ? width + '%' : width + 'px'
                };
                Object.assign(style, styleWidth);
            }
            return style;
        },
        localeOkText: function localeOkText() {
            if (this.okText === undefined) {
                return "确定";
            } else {
                return this.okText;
            }
        },
        localeCancelText: function localeCancelText() {
            if (this.cancelText === undefined) {
                return "取消";
            } else {
                return this.cancelText;
            }
        },
        showMask: function showMask() {
            return this.draggable ? false : this.mask;
        }
    },
    methods: {
        close: function close() {
            this.visible = false;
            this.$emit('input', false);
            this.$emit('on-cancel');
        },
        handleMask: function handleMask() {
            if (this.maskClosable && this.showMask) {
                this.close();
            }
        },
        handleWrapClick: function handleWrapClick(event) {
            if (this.isMouseTriggerIn) {
                this.isMouseTriggerIn = false;
                return;
            }
            // use indexOf,do not use === ,because ivu-modal-wrap can have other custom className
            var className = event.target.getAttribute('class');
            if (className && className.indexOf(prefixCls + '-wrap') > -1) this.handleMask();
        },
        handleMousedown: function handleMousedown() {
            this.isMouseTriggerIn = true;
        },
        cancel: function cancel() {
            this.close();
        },
        ok: function ok() {
            if (this.loading) {
                this.buttonLoading = true;
            } else {
                this.visible = false;
                this.$emit('input', false);
            }
            this.$emit('on-ok');
        },
        EscClose: function EscClose(e) {
            if (this.visible && this.closable) {
                if (e.keyCode === 27) {
                    var $Modals = Object(assist["a" /* findComponentsDownward */])(this.$root, 'Modal').filter(function (item) {
                        return item.$data.visible && item.$props.closable;
                    });
                    var $TopModal = $Modals.sort(function (a, b) {
                        return a.$data.modalIndex < b.$data.modalIndex ? 1 : -1;
                    })[0];
                    setTimeout(function () {
                        $TopModal.close();
                    }, 0);
                }
            }
        },
        animationFinish: function animationFinish() {
            this.$emit('on-hidden');
        },
        handleMoveStart: function handleMoveStart(event) {
            if (!this.draggable) return false;
            var $content = this.$refs.content;
            var rect = $content.getBoundingClientRect();
            this.dragData.x = rect.x || rect.left;
            this.dragData.y = rect.y || rect.top;
            var distance = {
                x: event.clientX,
                y: event.clientY
            };
            this.dragData.dragX = distance.x;
            this.dragData.dragY = distance.y;
            this.dragData.dragging = true;
            Object(dom["b" /* on */])(window, 'mousemove', this.handleMoveMove);
            Object(dom["b" /* on */])(window, 'mouseup', this.handleMoveEnd);
        },
        handleMoveMove: function handleMoveMove(event) {
            if (!this.dragData.dragging) return false;
            var distance = {
                x: event.clientX,
                y: event.clientY
            };
            var diff_distance = {
                x: distance.x - this.dragData.dragX,
                y: distance.y - this.dragData.dragY
            };
            this.dragData.x += diff_distance.x;
            this.dragData.y += diff_distance.y;
            this.dragData.dragX = distance.x;
            this.dragData.dragY = distance.y;
        },
        handleMoveEnd: function handleMoveEnd() {
            this.dragData.dragging = false;
            Object(dom["a" /* off */])(window, 'mousemove', this.handleMoveMove);
            Object(dom["a" /* off */])(window, 'mouseup', this.handleMoveEnd);
        },
        handleGetModalIndex: function handleGetModalIndex() {
            Object(transfer_queue["a" /* transferIncrease */])();
            return transfer_queue["b" /* transferIndex */];
        },
        handleClickModal: function handleClickModal() {
            if (this.draggable) {
                this.modalIndex = this.handleGetModalIndex();
            }
        }
    },
    mounted: function mounted() {
        if (this.visible) {
            this.wrapShow = true;
        }
        var showHead = true;
        if (this.$slots.header === undefined && !this.title) {
            showHead = false;
        }
        this.showHead = showHead;
        // ESC close
        document.addEventListener('keydown', this.EscClose);
    },
    beforeDestroy: function beforeDestroy() {
        document.removeEventListener('keydown', this.EscClose);
        this.removeScrollEffect();
    },

    watch: {
        value: function value(val) {
            this.visible = val;
        },
        visible: function visible(val) {
            var _this = this;

            if (val === false) {
                this.buttonLoading = false;
                this.timer = setTimeout(function () {
                    _this.wrapShow = false;
                    _this.removeScrollEffect();
                }, 300);
            } else {
                this.modalIndex = this.handleGetModalIndex();
                if (this.timer) clearTimeout(this.timer);
                this.wrapShow = true;
                if (!this.scrollable) {
                    this.addScrollEffect();
                }
            }
            this.broadcast('Table', 'on-visible-change', val);
            this.broadcast('Slider', 'on-visible-change', val); // #2852
            this.$emit('on-visible-change', val);
        },
        loading: function loading(val) {
            if (!val) {
                this.buttonLoading = false;
            }
        },
        scrollable: function scrollable(val) {
            if (!val) {
                this.addScrollEffect();
            } else {
                this.removeScrollEffect();
            }
        },
        title: function title(val) {
            if (this.$slots.header === undefined) {
                this.showHead = !!val;
            }
        }
    }
});
// CONCATENATED MODULE: ./packages/modal/src/modal.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_modalvue_type_script_lang_js_ = (modalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./packages/modal/src/modal.vue





/* normalize component */

var modal_component = Object(componentNormalizer["a" /* default */])(
  src_modalvue_type_script_lang_js_,
  modalvue_type_template_id_73083168_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
modal_component.options.__file = "packages/modal/src/modal.vue"
/* harmony default export */ var src_modal = (modal_component.exports);
// CONCATENATED MODULE: ./packages/modal/confirm.js




var confirm_prefixCls = 'lp-modal-confirm';
src_modal.install = function (vm) {
    vm.component(src_modal.name, src_modal);
    vm.prototype.$Modal = src_modal;
};
src_modal.newInstance = function (properties) {
    var _props = properties || {};

    var Instance = new external_vue_default.a({
        data: Object.assign({}, _props, {
            visible: false,
            width: 416,
            title: '',
            body: '',
            iconType: '',
            iconName: '',
            okText: undefined,
            cancelText: undefined,
            showCancel: false,
            loading: false,
            buttonLoading: false,
            scrollable: false,
            closable: false
        }),
        render: function render(h) {
            var _this = this;

            var footerVNodes = [];
            if (this.showCancel) {
                footerVNodes.push(h(src_button["a" /* default */], {
                    props: {
                        type: 'text',
                        size: 'large'
                    },
                    on: {
                        click: this.cancel
                    }
                }, this.localeCancelText));
            }
            footerVNodes.push(h(src_button["a" /* default */], {
                props: {
                    type: 'primary',
                    size: 'large',
                    loading: this.buttonLoading
                },
                on: {
                    click: this.ok
                }
            }, this.localeOkText));

            // render content
            var body_render = void 0;
            if (this.render) {
                body_render = h('div', {
                    attrs: {
                        class: confirm_prefixCls + '-body ' + confirm_prefixCls + '-body-render'
                    }
                }, [this.render(h)]);
            } else {
                body_render = h('div', {
                    attrs: {
                        class: confirm_prefixCls + '-body'
                    }
                }, [h('div', {
                    domProps: {
                        innerHTML: this.body
                    }
                })]);
            }
            // when render with no title, hide head
            var head_render = void 0;
            if (this.title) {
                head_render = h('div', {
                    attrs: {
                        class: confirm_prefixCls + '-head'
                    }
                }, [h('div', {
                    class: this.iconTypeCls
                }, [h('i', {
                    class: this.iconNameCls
                })]), h('div', {
                    attrs: {
                        class: confirm_prefixCls + '-head-title'
                    },
                    domProps: {
                        innerHTML: this.title
                    }
                })]);
            }
            return h(src_modal, {
                props: Object.assign({}, _props, {
                    width: this.width,
                    scrollable: this.scrollable,
                    closable: this.closable
                }),
                domProps: {
                    value: this.visible
                },
                on: {
                    input: function input(status) {
                        _this.visible = status;
                    },
                    'on-cancel': this.cancel
                }
            }, [h('div', {
                attrs: {
                    class: confirm_prefixCls
                }
            }, [head_render, body_render, h('div', {
                attrs: {
                    class: confirm_prefixCls + '-footer'
                }
            }, footerVNodes)])]);
        },

        computed: {
            iconTypeCls: function iconTypeCls() {
                return [confirm_prefixCls + '-head-icon', confirm_prefixCls + '-head-icon-' + this.iconType];
            },
            iconNameCls: function iconNameCls() {
                return this.iconName;
            },
            localeOkText: function localeOkText() {
                if (this.okText) {
                    return this.okText;
                } else {
                    return "确认";
                }
            },
            localeCancelText: function localeCancelText() {
                if (this.cancelText) {
                    return this.cancelText;
                } else {
                    return "取消";
                }
            }
        },
        methods: {
            cancel: function cancel() {
                this.$children[0].visible = false;
                this.buttonLoading = false;
                this.onCancel();
                this.remove();
            },
            ok: function ok() {
                if (this.loading) {
                    this.buttonLoading = true;
                } else {
                    this.$children[0].visible = false;
                    this.remove();
                }
                this.onOk();
            },
            remove: function remove() {
                var _this2 = this;

                setTimeout(function () {
                    _this2.destroy();
                }, 300);
            },
            destroy: function destroy() {
                this.$destroy();
                document.body.removeChild(this.$el);
                this.onRemove();
            },
            onOk: function onOk() {},
            onCancel: function onCancel() {},
            onRemove: function onRemove() {}
        }
    });

    var component = Instance.$mount();
    document.body.appendChild(component.$el);
    var modal = Instance.$children[0];

    return {
        show: function show(props) {
            modal.$parent.showCancel = props.showCancel;
            modal.$parent.iconType = props.icon;

            switch (props.icon) {
                case 'info':
                    modal.$parent.iconName = 'el-icon-info';
                    break;
                case 'success':
                    modal.$parent.iconName = 'el-icon-success';
                    break;
                case 'warning':
                    modal.$parent.iconName = 'el-icon-warning';
                    break;
                case 'error':
                    modal.$parent.iconName = 'el-icon-error';
                    break;
                case 'confirm':
                    modal.$parent.iconName = 'el-icon-question';
                    break;
            }

            if ('width' in props) {
                modal.$parent.width = props.width;
            }

            if ('closable' in props) {
                modal.$parent.closable = props.closable;
            }

            if ('title' in props) {
                modal.$parent.title = props.title;
            }

            if ('content' in props) {
                modal.$parent.body = props.content;
            }

            if ('okText' in props) {
                modal.$parent.okText = props.okText;
            }

            if ('cancelText' in props) {
                modal.$parent.cancelText = props.cancelText;
            }

            if ('onCancel' in props) {
                modal.$parent.onCancel = props.onCancel;
            }

            if ('onOk' in props) {
                modal.$parent.onOk = props.onOk;
            }

            // async for ok
            if ('loading' in props) {
                modal.$parent.loading = props.loading;
            }

            if ('scrollable' in props) {
                modal.$parent.scrollable = props.scrollable;
            }

            // notice when component destroy
            modal.$parent.onRemove = props.onRemove;

            modal.visible = true;
        },
        remove: function remove() {
            modal.visible = false;
            modal.$parent.buttonLoading = false;
            modal.$parent.remove();
        },

        component: modal
    };
};

/* harmony default export */ var modal_confirm = (src_modal);
// CONCATENATED MODULE: ./packages/modal/index.js

var modalInstance = void 0;
function getModalInstance() {
    var render = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

    modalInstance = modalInstance || modal_confirm.newInstance({
        closable: false,
        maskClosable: false,
        footerHide: true,
        render: render
    });
    return modalInstance;
}
function packages_modal_confirm(options) {
    var render = 'render' in options ? options.render : undefined;
    var instance = getModalInstance(render);

    options.onRemove = function () {
        modalInstance = null;
    };
    instance.show(options);
}
modal_confirm.info = function () {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    props.icon = 'info';
    props.showCancel = false;
    return packages_modal_confirm(props);
};

modal_confirm.success = function () {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    props.icon = 'success';
    props.showCancel = false;
    return packages_modal_confirm(props);
};

modal_confirm.warning = function () {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    props.icon = 'warning';
    props.showCancel = false;
    return packages_modal_confirm(props);
};

modal_confirm.error = function () {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    props.icon = 'error';
    props.showCancel = false;
    return packages_modal_confirm(props);
};

modal_confirm.confirm = function () {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    props.icon = 'confirm';
    props.showCancel = true;
    return packages_modal_confirm(props);
};

modal_confirm.remove = function () {
    if (!modalInstance) {
        // at loading status, remove after Cancel
        return false;
    }
    var instance = getModalInstance();
    instance.remove();
};
/* harmony default export */ var packages_modal = __webpack_exports__["default"] = (modal_confirm);

/***/ })
/******/ ]);