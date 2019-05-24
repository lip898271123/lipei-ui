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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
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
/* 2 */,
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
/* 4 */,
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
/* 6 */,
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
/* 10 */,
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/spin/src/spin.vue?vue&type=template&id=62f3a3b4&
var spinvue_type_template_id_62f3a3b4_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.spinning
    ? _c("transition", { attrs: { name: "fade" } }, [
        _vm.fullscreenVisible
          ? _c("div", { class: _vm.classes }, [
              _c("div", { class: _vm.mainClasses }, [
                _c("span", { class: _vm.dotClasses }),
                _c("div", { class: _vm.textClasses }, [_vm._t("default")], 2)
              ])
            ])
          : _vm._e()
      ])
    : _vm._e()
}
var staticRenderFns = []
spinvue_type_template_id_62f3a3b4_render._withStripped = true


// CONCATENATED MODULE: ./packages/spin/src/spin.vue?vue&type=template&id=62f3a3b4&

// EXTERNAL MODULE: ./src/utils/assist.js
var assist = __webpack_require__(3);

// EXTERNAL MODULE: ./src/mixins/mixins-scrollbar.js
var mixins_scrollbar = __webpack_require__(7);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/spin/src/spin.vue?vue&type=script&lang=js&
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



var prefixCls = 'lp-spin';
/* harmony default export */ var spinvue_type_script_lang_js_ = ({
    name: 'lpSpin',
    mixins: [mixins_scrollbar["a" /* default */]],
    props: {
        size: {
            validator: function validator(value) {
                return Object(assist["c" /* oneOf */])(value, ['small', 'large', 'default']);
            },
            default: function _default() {
                return !this.$LIPEI || this.$LIPEI.size === '' ? 'default' : this.$LIPEI.size;
            }
        },
        fix: {
            type: Boolean,
            default: false
        },
        spinning: {
            type: Boolean,
            default: true
        },
        fullscreen: {
            type: Boolean,
            default: false
        }
    },
    data: function data() {
        return {
            showText: false,
            visible: false
        };
    },

    computed: {
        classes: function classes() {
            var _ref;

            return ['' + prefixCls, (_ref = {}, _ref[prefixCls + '-' + this.size] = !!this.size, _ref[prefixCls + '-fix'] = this.fix, _ref[prefixCls + '-show-text'] = this.showText, _ref[prefixCls + '-fullscreen'] = this.fullscreen, _ref)];
        },
        mainClasses: function mainClasses() {
            return prefixCls + '-main';
        },
        dotClasses: function dotClasses() {
            return prefixCls + '-dot';
        },
        textClasses: function textClasses() {
            return prefixCls + '-text';
        },
        fullscreenVisible: function fullscreenVisible() {
            if (this.fullscreen) {
                return this.visible;
            } else {
                return true;
            }
        }
    },
    watch: {
        visible: function visible(val) {
            if (val) {
                this.addScrollEffect();
            } else {
                this.removeScrollEffect();
            }
        }
    },
    mounted: function mounted() {
        this.showText = this.$slots.default !== undefined;
    }
});
// CONCATENATED MODULE: ./packages/spin/src/spin.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_spinvue_type_script_lang_js_ = (spinvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./packages/spin/src/spin.vue





/* normalize component */

var spin_component = Object(componentNormalizer["a" /* default */])(
  src_spinvue_type_script_lang_js_,
  spinvue_type_template_id_62f3a3b4_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
spin_component.options.__file = "packages/spin/src/spin.vue"
/* harmony default export */ var src_spin = (spin_component.exports);
// EXTERNAL MODULE: ./src/utils/transfer-queue.js
var transfer_queue = __webpack_require__(5);

// CONCATENATED MODULE: ./packages/spin/src/spin.js





function handleGetIndex() {
    Object(transfer_queue["a" /* transferIncrease */])();
    return transfer_queue["b" /* transferIndex */];
}

var tIndex = handleGetIndex();
src_spin.install = function (vm) {
    vm.component(src_spin.name, src_spin);
    vm.prototype.$Spin = src_spin;
};
src_spin.newInstance = function (properties) {
    var _props = properties || {};

    var Instance = new external_vue_default.a({
        data: Object.assign({}, _props, {}),
        render: function render(h) {
            var vnode = '';
            if (this.render) {
                vnode = h(src_spin, {
                    props: {
                        fix: true,
                        fullscreen: true
                    }
                }, [this.render(h)]);
            } else {
                vnode = h(src_spin, {
                    props: {
                        size: 'large',
                        fix: true,
                        fullscreen: true
                    }
                });
            }
            return h('div', {
                'class': 'lp-spin-fullscreen lp-spin-fullscreen-wrapper',
                'style': {
                    'z-index': 2010 + tIndex
                }
            }, [vnode]);
        }
    });

    var component = Instance.$mount();
    document.body.appendChild(component.$el);
    var spin = Instance.$children[0];

    return {
        show: function show() {
            spin.visible = true;
            tIndex = handleGetIndex();
        },
        remove: function remove(cb) {
            spin.visible = false;
            setTimeout(function () {
                spin.$parent.$destroy();
                if (document.getElementsByClassName('lp-spin-fullscreen')[0] !== undefined) {
                    document.body.removeChild(document.getElementsByClassName('lp-spin-fullscreen')[0]);
                }
                cb();
            }, 500);
        },

        component: spin
    };
};

/* harmony default export */ var spin_src_spin = (src_spin);
// CONCATENATED MODULE: ./packages/spin/index.js


var spinInstance = void 0;

function getSpinInstance() {
    var render = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

    spinInstance = spinInstance || spin_src_spin.newInstance({
        render: render
    });

    return spinInstance;
}

function loading(options) {
    var render = 'render' in options ? options.render : undefined;
    var instance = getSpinInstance(render);

    instance.show(options);
}

spin_src_spin.show = function () {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return loading(props);
};
spin_src_spin.hide = function () {
    if (!spinInstance) return false;

    var instance = getSpinInstance();

    instance.remove(function () {
        spinInstance = null;
    });
};

/* harmony default export */ var packages_spin = __webpack_exports__["default"] = (spin_src_spin);

/***/ })
/******/ ]);