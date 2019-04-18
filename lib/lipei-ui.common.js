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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/alert/src/main.vue?vue&type=template&id=6e53341b&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "el-alert-fade" } }, [
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
        staticClass: "el-alert",
        class: [_vm.typeClass, _vm.center ? "is-center" : ""],
        attrs: { role: "alert" }
      },
      [
        _vm.showIcon
          ? _c("i", {
              staticClass: "el-alert__icon",
              class: [_vm.iconClass, _vm.isBigIcon]
            })
          : _vm._e(),
        _c("div", { staticClass: "el-alert__content" }, [
          _vm.title || _vm.$slots.title
            ? _c(
                "span",
                { staticClass: "el-alert__title", class: [_vm.isBoldTitle] },
                [_vm._t("title", [_vm._v(_vm._s(_vm.title))])],
                2
              )
            : _vm._e(),
          _vm.$slots.default && !_vm.description
            ? _c(
                "p",
                { staticClass: "el-alert__description" },
                [_vm._t("default")],
                2
              )
            : _vm._e(),
          _vm.description && !_vm.$slots.default
            ? _c("p", { staticClass: "el-alert__description" }, [
                _vm._v(_vm._s(_vm.description))
              ])
            : _vm._e(),
          _c(
            "i",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.closable,
                  expression: "closable"
                }
              ],
              staticClass: "el-alert__closebtn",
              class: {
                "is-customed": _vm.closeText !== "",
                "el-icon-close": _vm.closeText === ""
              },
              on: {
                click: function($event) {
                  return _vm.close()
                }
              }
            },
            [_vm._v(_vm._s(_vm.closeText))]
          )
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/alert/src/main.vue?vue&type=template&id=6e53341b&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/alert/src/main.vue?vue&type=script&lang=js&
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

var TYPE_CLASSES_MAP = {
  'success': 'el-icon-success',
  'warning': 'el-icon-warning',
  'error': 'el-icon-error'
};
/* harmony default export */ var mainvue_type_script_lang_js_ = ({
  name: 'zyAlert',

  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'info'
    },
    closable: {
      type: Boolean,
      default: true
    },
    closeText: {
      type: String,
      default: ''
    },
    showIcon: Boolean,
    center: Boolean
  },

  data: function data() {
    return {
      visible: true
    };
  },


  methods: {
    close: function close() {
      this.visible = false;
      this.$emit('close');
    }
  },

  computed: {
    typeClass: function typeClass() {
      return 'el-alert--' + this.type;
    },
    iconClass: function iconClass() {
      return TYPE_CLASSES_MAP[this.type] || 'el-icon-info';
    },
    isBigIcon: function isBigIcon() {
      return this.description || this.$slots.default ? 'is-big' : '';
    },
    isBoldTitle: function isBoldTitle() {
      return this.description || this.$slots.default ? 'is-bold' : '';
    }
  }
});
// CONCATENATED MODULE: ./packages/alert/src/main.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_mainvue_type_script_lang_js_ = (mainvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
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

// CONCATENATED MODULE: ./packages/alert/src/main.vue





/* normalize component */

var component = normalizeComponent(
  src_mainvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/alert/src/main.vue"
/* harmony default export */ var main = (component.exports);
// CONCATENATED MODULE: ./packages/alert/index.js


/* istanbul ignore next */
main.install = function (Vue) {
  Vue.component(main.name, main);
};

/* harmony default export */ var packages_alert = (main);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/switch/src/component.vue?vue&type=template&id=2dcd8fbb&
var componentvue_type_template_id_2dcd8fbb_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "el-switch",
      class: { "is-disabled": _vm.switchDisabled, "is-checked": _vm.checked },
      attrs: {
        role: "switch",
        "aria-checked": _vm.checked,
        "aria-disabled": _vm.switchDisabled
      },
      on: { click: _vm.switchValue }
    },
    [
      _c("input", {
        ref: "input",
        staticClass: "el-switch__input",
        attrs: {
          type: "checkbox",
          id: _vm.id,
          name: _vm.name,
          "true-value": _vm.activeValue,
          "false-value": _vm.inactiveValue,
          disabled: _vm.switchDisabled
        },
        on: {
          change: _vm.handleChange,
          keydown: function($event) {
            if (
              !$event.type.indexOf("key") &&
              _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
            ) {
              return null
            }
            return _vm.switchValue($event)
          }
        }
      }),
      _vm.inactiveIconClass || _vm.inactiveText
        ? _c(
            "span",
            {
              class: [
                "el-switch__label",
                "el-switch__label--left",
                !_vm.checked ? "is-active" : ""
              ]
            },
            [
              _vm.inactiveIconClass
                ? _c("i", { class: [_vm.inactiveIconClass] })
                : _vm._e(),
              !_vm.inactiveIconClass && _vm.inactiveText
                ? _c("span", { attrs: { "aria-hidden": _vm.checked } }, [
                    _vm._v(_vm._s(_vm.inactiveText))
                  ])
                : _vm._e()
            ]
          )
        : _vm._e(),
      _c("span", {
        ref: "core",
        staticClass: "el-switch__core",
        style: { width: _vm.coreWidth + "px" }
      }),
      _vm.activeIconClass || _vm.activeText
        ? _c(
            "span",
            {
              class: [
                "el-switch__label",
                "el-switch__label--right",
                _vm.checked ? "is-active" : ""
              ]
            },
            [
              _vm.activeIconClass
                ? _c("i", { class: [_vm.activeIconClass] })
                : _vm._e(),
              !_vm.activeIconClass && _vm.activeText
                ? _c("span", { attrs: { "aria-hidden": !_vm.checked } }, [
                    _vm._v(_vm._s(_vm.activeText))
                  ])
                : _vm._e()
            ]
          )
        : _vm._e()
    ]
  )
}
var componentvue_type_template_id_2dcd8fbb_staticRenderFns = []
componentvue_type_template_id_2dcd8fbb_render._withStripped = true


// CONCATENATED MODULE: ./packages/switch/src/component.vue?vue&type=template&id=2dcd8fbb&

// CONCATENATED MODULE: ./src/mixins/emitter.js
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
/* harmony default export */ var emitter = ({
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
// CONCATENATED MODULE: ./src/mixins/focus.js
/* harmony default export */ var mixins_focus = (function (ref) {
  return {
    methods: {
      focus: function focus() {
        this.$refs[ref].focus();
      }
    }
  };
});;
// CONCATENATED MODULE: ./src/mixins/migrating.js
/**
 * Show migrating guide in browser console.
 *
 * Usage:
 * import Migrating from 'element-ui/src/mixins/migrating';
 *
 * mixins: [Migrating]
 *
 * add getMigratingConfig method for your component.
 *  getMigratingConfig() {
 *    return {
 *      props: {
 *        'allow-no-selection': 'allow-no-selection is removed.',
 *        'selection-mode': 'selection-mode is removed.'
 *      },
 *      events: {
 *        selectionchange: 'selectionchange is renamed to selection-change.'
 *      }
 *    };
 *  },
 */
/* harmony default export */ var migrating = ({
  mounted: function mounted() {
    if (true) return;
    if (!this.$vnode) return;

    var _getMigratingConfig = this.getMigratingConfig(),
        _getMigratingConfig$p = _getMigratingConfig.props,
        props = _getMigratingConfig$p === undefined ? {} : _getMigratingConfig$p,
        _getMigratingConfig$e = _getMigratingConfig.events,
        events = _getMigratingConfig$e === undefined ? {} : _getMigratingConfig$e;

    var _$vnode = this.$vnode,
        data = _$vnode.data,
        componentOptions = _$vnode.componentOptions;

    var definedProps = data.attrs || {};
    var definedEvents = componentOptions.listeners || {};

    for (var propName in definedProps) {
      if (definedProps.hasOwnProperty(propName) && props[propName]) {
        console.warn('[Element Migrating][' + this.$options.name + '][Attribute]: ' + props[propName]);
      }
    }

    for (var eventName in definedEvents) {
      if (definedEvents.hasOwnProperty(eventName) && events[eventName]) {
        console.warn('[Element Migrating][' + this.$options.name + '][Event]: ' + events[eventName]);
      }
    }
  },

  methods: {
    getMigratingConfig: function getMigratingConfig() {
      return {
        props: {},
        events: {}
      };
    }
  }
});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/switch/src/component.vue?vue&type=script&lang=js&
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
//
//
//
//
//
//

// import emitter from 'lipei-ui/src/mixins/emitter';
// import Focus from 'lipei-ui/src/mixins/focus';
// import Migrating from 'lipei-ui/src/mixins/migrating';



/* harmony default export */ var componentvue_type_script_lang_js_ = ({
  name: 'zySwitch',
  mixins: [mixins_focus('input'), migrating, emitter],
  inject: {
    elForm: {
      default: ''
    }
  },
  props: {
    value: {
      type: [Boolean, String, Number],
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number,
      default: 40
    },
    activeIconClass: {
      type: String,
      default: ''
    },
    inactiveIconClass: {
      type: String,
      default: ''
    },
    activeText: String,
    inactiveText: String,
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    },
    activeValue: {
      type: [Boolean, String, Number],
      default: true
    },
    inactiveValue: {
      type: [Boolean, String, Number],
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    validateEvent: {
      type: Boolean,
      default: true
    },
    id: String
  },
  data: function data() {
    return {
      coreWidth: this.width
    };
  },
  created: function created() {
    if (!~[this.activeValue, this.inactiveValue].indexOf(this.value)) {
      this.$emit('input', this.inactiveValue);
    }
  },

  computed: {
    checked: function checked() {
      return this.value === this.activeValue;
    },
    switchDisabled: function switchDisabled() {
      return this.disabled || (this.elForm || {}).disabled;
    }
  },
  watch: {
    checked: function checked() {
      this.$refs.input.checked = this.checked;
      if (this.activeColor || this.inactiveColor) {
        this.setBackgroundColor();
      }
      if (this.validateEvent) {
        this.dispatch('ElFormItem', 'el.form.change', [this.value]);
      }
    }
  },
  methods: {
    handleChange: function handleChange(event) {
      var _this = this;

      var val = this.checked ? this.inactiveValue : this.activeValue;
      this.$emit('input', val);
      this.$emit('change', val);
      this.$nextTick(function () {
        // set input's checked property
        // in case parent refuses to change component's value
        _this.$refs.input.checked = _this.checked;
      });
    },
    setBackgroundColor: function setBackgroundColor() {
      var newColor = this.checked ? this.activeColor : this.inactiveColor;
      this.$refs.core.style.borderColor = newColor;
      this.$refs.core.style.backgroundColor = newColor;
    },
    switchValue: function switchValue() {
      !this.switchDisabled && this.handleChange();
    },
    getMigratingConfig: function getMigratingConfig() {
      return {
        props: {
          'on-color': 'on-color is renamed to active-color.',
          'off-color': 'off-color is renamed to inactive-color.',
          'on-text': 'on-text is renamed to active-text.',
          'off-text': 'off-text is renamed to inactive-text.',
          'on-value': 'on-value is renamed to active-value.',
          'off-value': 'off-value is renamed to inactive-value.',
          'on-icon-class': 'on-icon-class is renamed to active-icon-class.',
          'off-icon-class': 'off-icon-class is renamed to inactive-icon-class.'
        }
      };
    }
  },
  mounted: function mounted() {
    /* istanbul ignore if */
    this.coreWidth = this.width || 40;
    if (this.activeColor || this.inactiveColor) {
      this.setBackgroundColor();
    }
    this.$refs.input.checked = this.checked;
  }
});
// CONCATENATED MODULE: ./packages/switch/src/component.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_componentvue_type_script_lang_js_ = (componentvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/switch/src/component.vue





/* normalize component */

var component_component = normalizeComponent(
  src_componentvue_type_script_lang_js_,
  componentvue_type_template_id_2dcd8fbb_render,
  componentvue_type_template_id_2dcd8fbb_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var component_api; }
component_component.options.__file = "packages/switch/src/component.vue"
/* harmony default export */ var src_component = (component_component.exports);
// CONCATENATED MODULE: ./packages/switch/index.js


/* istanbul ignore next */
src_component.install = function (Vue) {
  Vue.component(src_component.name, src_component);
};

/* harmony default export */ var packages_switch = (src_component);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/spin/src/spin.vue?vue&type=template&id=62f3a3b4&
var spinvue_type_template_id_62f3a3b4_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.spinning
    ? _c("transition", { attrs: { name: "fade" } }, [
        _c("div", { class: _vm.classes }, [
          _c("div", { class: _vm.mainClasses }, [
            _c("span", { class: _vm.dotClasses }),
            _c("div", { class: _vm.textClasses }, [_vm._t("default")], 2)
          ])
        ])
      ])
    : _vm._e()
}
var spinvue_type_template_id_62f3a3b4_staticRenderFns = []
spinvue_type_template_id_62f3a3b4_render._withStripped = true


// CONCATENATED MODULE: ./packages/spin/src/spin.vue?vue&type=template&id=62f3a3b4&

// CONCATENATED MODULE: ./src/utils/assist.js
// import Vue from 'vue';
// const isServer = Vue.prototype.$isServer;

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
    props: {
        size: {
            validator: function validator(value) {
                return oneOf(value, ['small', 'large', 'default']);
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
        }
    },
    data: function data() {
        return {
            showText: false
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
        }
    },
    mounted: function mounted() {
        this.showText = this.$slots.default !== undefined;
    }
});
// CONCATENATED MODULE: ./packages/spin/src/spin.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_spinvue_type_script_lang_js_ = (spinvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/spin/src/spin.vue





/* normalize component */

var spin_component = normalizeComponent(
  src_spinvue_type_script_lang_js_,
  spinvue_type_template_id_62f3a3b4_render,
  spinvue_type_template_id_62f3a3b4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var spin_api; }
spin_component.options.__file = "packages/spin/src/spin.vue"
/* harmony default export */ var spin = (spin_component.exports);
// CONCATENATED MODULE: ./packages/spin/index.js


/* istanbul ignore next */
spin.install = function (Vue) {
  Vue.component(spin.name, spin);
};

/* harmony default export */ var packages_spin = (spin);
// CONCATENATED MODULE: ./src/index.js
/* Automatically generated by './build/build-entry.js' */



var components = [packages_alert, packages_switch, packages_spin];
var install = function install(Vue) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  components.forEach(function (component) {
    Vue.component(component.name, component);
  });
  Vue.prototype.$LIPEI = {
    size: opts.size || '',
    zIndex: opts.zIndex || 2000
  };
};
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
/* harmony default export */ var src = __webpack_exports__["default"] = ({
  install: install,
  Alert: packages_alert,
  Switch: packages_switch,
  Spin: packages_spin
});

/***/ })
/******/ ])["default"];