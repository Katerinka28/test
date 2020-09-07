/*!
 * vue-trans v0.0.0 
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.VueTrans = {}));
}(this, (function (exports) { 'use strict';

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var messages = _defineProperty({}, window.language, window.django && window.django.catalog || {});

  var compileMessages = function compileMessages() {
    return {
      locale: window.language,
      messages: messages
    };
  };
  function translator() {
    for (var _len = arguments.length, arg = new Array(_len), _key = 0; _key < _len; _key++) {
      arg[_key] = arguments[_key];
    }

    /* eslint-disable prefer-spread */
    return this.$t.apply(this, arg);
  }

  function install(Vue) {
    /* eslint-disable no-param-reassign */
    Vue.prototype._ = translator;
  }

  var main = {
    install: install
  };

  exports.compileMessages = compileMessages;
  exports.default = main;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
