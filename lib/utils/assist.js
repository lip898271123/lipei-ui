'use strict';

exports.__esModule = true;
exports.sharpMatcherRegx = exports.dimensionMap = exports.findComponentUpward = exports.deepCopy = exports.firstUpperCase = undefined;
exports.oneOf = oneOf;
exports.camelcaseToHyphen = camelcaseToHyphen;
exports.getScrollBarSize = getScrollBarSize;
exports.getStyle = getStyle;
exports.warnProp = warnProp;
exports.scrollTop = scrollTop;
exports.findComponentDownward = findComponentDownward;
exports.findComponentsDownward = findComponentsDownward;
exports.findComponentsUpward = findComponentsUpward;
exports.findBrothersComponents = findBrothersComponents;
exports.hasClass = hasClass;
exports.addClass = addClass;
exports.removeClass = removeClass;
exports.setMatchMedia = setMatchMedia;

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isServer = _vue2.default.prototype.$isServer;

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
exports.firstUpperCase = firstUpperCase;

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

exports.deepCopy = deepCopy;

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
exports.findComponentUpward = findComponentUpward;

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

var dimensionMap = exports.dimensionMap = {
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

var sharpMatcherRegx = exports.sharpMatcherRegx = /#([^#]+)$/;