/*!
 * vee-i18n v0.0.0 
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vee-validate')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vee-validate'], factory) :
  (global = global || self, factory(global.VeeI18n = {}, global.veeValidate));
}(this, (function (exports, veeValidate) { 'use strict';

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

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  /**
    * vee-validate v3.3.9
    * (c) 2020 Abdelrahman Awad
    * @license MIT
    */

  /**
   * Some Alpha Regex helpers.
   * https://github.com/chriso/validator.js/blob/master/src/lib/alpha.js
   */

  /* eslint-disable no-misleading-character-class */
  var alpha = {
    en: /^[A-Z]*$/i,
    cs: /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,
    da: /^[A-ZÆØÅ]*$/i,
    de: /^[A-ZÄÖÜß]*$/i,
    es: /^[A-ZÁÉÍÑÓÚÜ]*$/i,
    fa: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی]*$/,
    fr: /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,
    it: /^[A-Z\xC0-\xFF]*$/i,
    lt: /^[A-ZĄČĘĖĮŠŲŪŽ]*$/i,
    nl: /^[A-ZÉËÏÓÖÜ]*$/i,
    hu: /^[A-ZÁÉÍÓÖŐÚÜŰ]*$/i,
    pl: /^[A-ZĄĆĘŚŁŃÓŻŹ]*$/i,
    pt: /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,
    ro: /^[A-ZĂÂÎŞŢ]*$/i,
    ru: /^[А-ЯЁ]*$/i,
    sk: /^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,
    sr: /^[A-ZČĆŽŠĐ]*$/i,
    sv: /^[A-ZÅÄÖ]*$/i,
    tr: /^[A-ZÇĞİıÖŞÜ]*$/i,
    uk: /^[А-ЩЬЮЯЄІЇҐ]*$/i,
    ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/,
    az: /^[A-ZÇƏĞİıÖŞÜ]*$/i,
    el: /^[Α-ώ]*$/i
  };
  var alphaSpaces = {
    en: /^[A-Z\s]*$/i,
    cs: /^[A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ\s]*$/i,
    da: /^[A-ZÆØÅ\s]*$/i,
    de: /^[A-ZÄÖÜß\s]*$/i,
    es: /^[A-ZÁÉÍÑÓÚÜ\s]*$/i,
    fa: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی]*$/,
    fr: /^[A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ\s]*$/i,
    it: /^[A-Z\xC0-\xFF\s]*$/i,
    lt: /^[A-ZĄČĘĖĮŠŲŪŽ\s]*$/i,
    nl: /^[A-ZÉËÏÓÖÜ\s]*$/i,
    hu: /^[A-ZÁÉÍÓÖŐÚÜŰ\s]*$/i,
    pl: /^[A-ZĄĆĘŚŁŃÓŻŹ\s]*$/i,
    pt: /^[A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ\s]*$/i,
    ro: /^[A-ZĂÂÎŞŢ\s]*$/i,
    ru: /^[А-ЯЁ\s]*$/i,
    sk: /^[A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ\s]*$/i,
    sr: /^[A-ZČĆŽŠĐ\s]*$/i,
    sv: /^[A-ZÅÄÖ\s]*$/i,
    tr: /^[A-ZÇĞİıÖŞÜ\s]*$/i,
    uk: /^[А-ЩЬЮЯЄІЇҐ\s]*$/i,
    ar: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ\s]*$/,
    az: /^[A-ZÇƏĞİıÖŞÜ\s]*$/i,
    el: /^[Α-ώ\s]*$/i
  };
  var alphanumeric = {
    en: /^[0-9A-Z]*$/i,
    cs: /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ]*$/i,
    da: /^[0-9A-ZÆØÅ]$/i,
    de: /^[0-9A-ZÄÖÜß]*$/i,
    es: /^[0-9A-ZÁÉÍÑÓÚÜ]*$/i,
    fa: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی]*$/,
    fr: /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ]*$/i,
    it: /^[0-9A-Z\xC0-\xFF]*$/i,
    lt: /^[0-9A-ZĄČĘĖĮŠŲŪŽ]*$/i,
    hu: /^[0-9A-ZÁÉÍÓÖŐÚÜŰ]*$/i,
    nl: /^[0-9A-ZÉËÏÓÖÜ]*$/i,
    pl: /^[0-9A-ZĄĆĘŚŁŃÓŻŹ]*$/i,
    pt: /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ]*$/i,
    ro: /^[0-9A-ZĂÂÎŞŢ]*$/i,
    ru: /^[0-9А-ЯЁ]*$/i,
    sk: /^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ]*$/i,
    sr: /^[0-9A-ZČĆŽŠĐ]*$/i,
    sv: /^[0-9A-ZÅÄÖ]*$/i,
    tr: /^[0-9A-ZÇĞİıÖŞÜ]*$/i,
    uk: /^[0-9А-ЩЬЮЯЄІЇҐ]*$/i,
    ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ]*$/,
    az: /^[0-9A-ZÇƏĞİıÖŞÜ]*$/i,
    el: /^[0-9Α-ώ]*$/i
  };
  var alphaDash = {
    en: /^[0-9A-Z_-]*$/i,
    cs: /^[0-9A-ZÁČĎÉĚÍŇÓŘŠŤÚŮÝŽ_-]*$/i,
    da: /^[0-9A-ZÆØÅ_-]*$/i,
    de: /^[0-9A-ZÄÖÜß_-]*$/i,
    es: /^[0-9A-ZÁÉÍÑÓÚÜ_-]*$/i,
    fa: /^[ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰپژگچکی]*$/,
    fr: /^[0-9A-ZÀÂÆÇÉÈÊËÏÎÔŒÙÛÜŸ_-]*$/i,
    it: /^[0-9A-Z\xC0-\xFF_-]*$/i,
    lt: /^[0-9A-ZĄČĘĖĮŠŲŪŽ_-]*$/i,
    nl: /^[0-9A-ZÉËÏÓÖÜ_-]*$/i,
    hu: /^[0-9A-ZÁÉÍÓÖŐÚÜŰ_-]*$/i,
    pl: /^[0-9A-ZĄĆĘŚŁŃÓŻŹ_-]*$/i,
    pt: /^[0-9A-ZÃÁÀÂÇÉÊÍÕÓÔÚÜ_-]*$/i,
    ro: /^[0-9A-ZĂÂÎŞŢ_-]*$/i,
    ru: /^[0-9А-ЯЁ_-]*$/i,
    sk: /^[0-9A-ZÁÄČĎÉÍĹĽŇÓŔŠŤÚÝŽ_-]*$/i,
    sr: /^[0-9A-ZČĆŽŠĐ_-]*$/i,
    sv: /^[0-9A-ZÅÄÖ_-]*$/i,
    tr: /^[0-9A-ZÇĞİıÖŞÜ_-]*$/i,
    uk: /^[0-9А-ЩЬЮЯЄІЇҐ_-]*$/i,
    ar: /^[٠١٢٣٤٥٦٧٨٩0-9ءآأؤإئابةتثجحخدذرزسشصضطظعغفقكلمنهوىيًٌٍَُِّْٰ_-]*$/,
    az: /^[0-9A-ZÇƏĞİıÖŞÜ_-]*$/i,
    el: /^[0-9Α-ώ_-]*$/i
  };

  var validate = function validate(value, _a) {
    var _b = (_a === void 0 ? {} : _a).locale,
        locale = _b === void 0 ? '' : _b;

    if (Array.isArray(value)) {
      return value.every(function (val) {
        return validate(val, {
          locale: locale
        });
      });
    } // Match at least one locale.


    if (!locale) {
      return Object.keys(alpha).some(function (loc) {
        return alpha[loc].test(value);
      });
    }

    return (alpha[locale] || alpha.en).test(value);
  };

  var params = [{
    name: 'locale'
  }];
  var alpha$1 = {
    validate: validate,
    params: params
  };

  var validate$1 = function validate$1(value, _a) {
    var _b = (_a === void 0 ? {} : _a).locale,
        locale = _b === void 0 ? '' : _b;

    if (Array.isArray(value)) {
      return value.every(function (val) {
        return validate$1(val, {
          locale: locale
        });
      });
    } // Match at least one locale.


    if (!locale) {
      return Object.keys(alphaDash).some(function (loc) {
        return alphaDash[loc].test(value);
      });
    }

    return (alphaDash[locale] || alphaDash.en).test(value);
  };

  var params$1 = [{
    name: 'locale'
  }];
  var alpha_dash = {
    validate: validate$1,
    params: params$1
  };

  var validate$2 = function validate$2(value, _a) {
    var _b = (_a === void 0 ? {} : _a).locale,
        locale = _b === void 0 ? '' : _b;

    if (Array.isArray(value)) {
      return value.every(function (val) {
        return validate$2(val, {
          locale: locale
        });
      });
    } // Match at least one locale.


    if (!locale) {
      return Object.keys(alphanumeric).some(function (loc) {
        return alphanumeric[loc].test(value);
      });
    }

    return (alphanumeric[locale] || alphanumeric.en).test(value);
  };

  var params$2 = [{
    name: 'locale'
  }];
  var alpha_num = {
    validate: validate$2,
    params: params$2
  };

  var validate$3 = function validate$3(value, _a) {
    var _b = (_a === void 0 ? {} : _a).locale,
        locale = _b === void 0 ? '' : _b;

    if (Array.isArray(value)) {
      return value.every(function (val) {
        return validate$3(val, {
          locale: locale
        });
      });
    } // Match at least one locale.


    if (!locale) {
      return Object.keys(alphaSpaces).some(function (loc) {
        return alphaSpaces[loc].test(value);
      });
    }

    return (alphaSpaces[locale] || alphaSpaces.en).test(value);
  };

  var params$3 = [{
    name: 'locale'
  }];
  var alpha_spaces = {
    validate: validate$3,
    params: params$3
  };

  var validate$4 = function validate$4(value, _a) {
    var _b = _a === void 0 ? {} : _a,
        min = _b.min,
        max = _b.max;

    if (Array.isArray(value)) {
      return value.every(function (val) {
        return !!validate$4(val, {
          min: min,
          max: max
        });
      });
    }

    return Number(min) <= value && Number(max) >= value;
  };

  var params$4 = [{
    name: 'min'
  }, {
    name: 'max'
  }];
  var between = {
    validate: validate$4,
    params: params$4
  };

  var validate$5 = function validate$5(value, _a) {
    var target = _a.target;
    return String(value) === String(target);
  };

  var params$5 = [{
    name: 'target',
    isTarget: true
  }];
  var confirmed = {
    validate: validate$5,
    params: params$5
  };

  var validate$6 = function validate$6(value, _a) {
    var length = _a.length;

    if (Array.isArray(value)) {
      return value.every(function (val) {
        return validate$6(val, {
          length: length
        });
      });
    }

    var strVal = String(value);
    return /^[0-9]*$/.test(strVal) && strVal.length === length;
  };

  var params$6 = [{
    name: 'length',
    cast: function cast(value) {
      return Number(value);
    }
  }];
  var digits = {
    validate: validate$6,
    params: params$6
  };

  var validateImage = function validateImage(file, width, height) {
    var URL = window.URL || window.webkitURL;
    return new Promise(function (resolve) {
      var image = new Image();

      image.onerror = function () {
        return resolve(false);
      };

      image.onload = function () {
        return resolve(image.width === width && image.height === height);
      };

      image.src = URL.createObjectURL(file);
    });
  };

  var validate$7 = function validate$7(files, _a) {
    var width = _a.width,
        height = _a.height;
    var list = [];
    files = Array.isArray(files) ? files : [files];

    for (var i = 0; i < files.length; i++) {
      // if file is not an image, reject.
      if (!/\.(jpg|svg|jpeg|png|bmp|gif)$/i.test(files[i].name)) {
        return Promise.resolve(false);
      }

      list.push(files[i]);
    }

    return Promise.all(list.map(function (file) {
      return validateImage(file, width, height);
    })).then(function (values) {
      return values.every(function (v) {
        return v;
      });
    });
  };

  var params$7 = [{
    name: 'width',
    cast: function cast(value) {
      return Number(value);
    }
  }, {
    name: 'height',
    cast: function cast(value) {
      return Number(value);
    }
  }];
  var dimensions = {
    validate: validate$7,
    params: params$7
  };

  var validate$8 = function validate$8(value, _a) {
    var multiple = (_a === void 0 ? {} : _a).multiple; // eslint-disable-next-line

    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (multiple && !Array.isArray(value)) {
      value = String(value).split(',').map(function (emailStr) {
        return emailStr.trim();
      });
    }

    if (Array.isArray(value)) {
      return value.every(function (val) {
        return re.test(String(val));
      });
    }

    return re.test(String(value));
  };

  var params$8 = [{
    name: 'multiple',
    default: false
  }];
  var email = {
    validate: validate$8,
    params: params$8
  };

  function isNullOrUndefined(value) {
    return value === null || value === undefined;
  }

  function isEmptyArray(arr) {
    return Array.isArray(arr) && arr.length === 0;
  }

  function isCallable(fn) {
    return typeof fn === 'function';
  }

  function includes(collection, item) {
    return collection.indexOf(item) !== -1;
  }
  /**
   * Converts an array-like object to array, provides a simple polyfill for Array.from
   */


  function toArray(arrayLike) {
    if (isCallable(Array.from)) {
      return Array.from(arrayLike);
    }
    /* istanbul ignore next */


    return _copyArray(arrayLike);
  }
  /* istanbul ignore next */


  function _copyArray(arrayLike) {
    var array = [];
    var length = arrayLike.length;

    for (var i = 0; i < length; i++) {
      array.push(arrayLike[i]);
    }

    return array;
  }

  var validate$9 = function validate$9(value, options) {
    if (Array.isArray(value)) {
      return value.every(function (val) {
        return validate$9(val, options);
      });
    }

    return toArray(options).some(function (item) {
      // eslint-disable-next-line
      return item == value;
    });
  };

  var oneOf = {
    validate: validate$9
  };

  var validate$a = function validate$a(value, args) {
    return !validate$9(value, args);
  };

  var excluded = {
    validate: validate$a
  };

  var validate$b = function validate$b(files, extensions) {
    var regex = new RegExp(".(" + extensions.join('|') + ")$", 'i');

    if (Array.isArray(files)) {
      return files.every(function (file) {
        return regex.test(file.name);
      });
    }

    return regex.test(files.name);
  };

  var ext = {
    validate: validate$b
  };

  var validate$c = function validate$c(files) {
    var regex = /\.(jpg|svg|jpeg|png|bmp|gif|webp)$/i;

    if (Array.isArray(files)) {
      return files.every(function (file) {
        return regex.test(file.name);
      });
    }

    return regex.test(files.name);
  };

  var image = {
    validate: validate$c
  };

  var validate$d = function validate$d(value) {
    if (Array.isArray(value)) {
      return value.every(function (val) {
        return /^-?[0-9]+$/.test(String(val));
      });
    }

    return /^-?[0-9]+$/.test(String(value));
  };

  var integer = {
    validate: validate$d
  };

  var validate$e = function validate$e(value, _a) {
    var other = _a.other;
    return value === other;
  };

  var params$9 = [{
    name: 'other'
  }];
  var is = {
    validate: validate$e,
    params: params$9
  };

  var validate$f = function validate$f(value, _a) {
    var other = _a.other;
    return value !== other;
  };

  var params$a = [{
    name: 'other'
  }];
  var is_not = {
    validate: validate$f,
    params: params$a
  };

  var validate$g = function validate$g(value, _a) {
    var length = _a.length;

    if (isNullOrUndefined(value)) {
      return false;
    }

    if (typeof value === 'number') {
      value = String(value);
    }

    if (!value.length) {
      value = toArray(value);
    }

    return value.length === length;
  };

  var params$b = [{
    name: 'length',
    cast: function cast(value) {
      return Number(value);
    }
  }];
  var length = {
    validate: validate$g,
    params: params$b
  };

  var validate$h = function validate$h(value, _a) {
    var length = _a.length;

    if (isNullOrUndefined(value)) {
      return length >= 0;
    }

    if (Array.isArray(value)) {
      return value.every(function (val) {
        return validate$h(val, {
          length: length
        });
      });
    }

    return String(value).length <= length;
  };

  var params$c = [{
    name: 'length',
    cast: function cast(value) {
      return Number(value);
    }
  }];
  var max = {
    validate: validate$h,
    params: params$c
  };

  var validate$i = function validate$i(value, _a) {
    var max = _a.max;

    if (isNullOrUndefined(value) || value === '') {
      return false;
    }

    if (Array.isArray(value)) {
      return value.length > 0 && value.every(function (val) {
        return validate$i(val, {
          max: max
        });
      });
    }

    return Number(value) <= max;
  };

  var params$d = [{
    name: 'max',
    cast: function cast(value) {
      return Number(value);
    }
  }];
  var max_value = {
    validate: validate$i,
    params: params$d
  };

  var validate$j = function validate$j(files, mimes) {
    var regex = new RegExp(mimes.join('|').replace('*', '.+') + "$", 'i');

    if (Array.isArray(files)) {
      return files.every(function (file) {
        return regex.test(file.type);
      });
    }

    return regex.test(files.type);
  };

  var mimes = {
    validate: validate$j
  };

  var validate$k = function validate$k(value, _a) {
    var length = _a.length;

    if (isNullOrUndefined(value)) {
      return false;
    }

    if (Array.isArray(value)) {
      return value.every(function (val) {
        return validate$k(val, {
          length: length
        });
      });
    }

    return String(value).length >= length;
  };

  var params$e = [{
    name: 'length',
    cast: function cast(value) {
      return Number(value);
    }
  }];
  var min = {
    validate: validate$k,
    params: params$e
  };

  var validate$l = function validate$l(value, _a) {
    var min = _a.min;

    if (isNullOrUndefined(value) || value === '') {
      return false;
    }

    if (Array.isArray(value)) {
      return value.length > 0 && value.every(function (val) {
        return validate$l(val, {
          min: min
        });
      });
    }

    return Number(value) >= min;
  };

  var params$f = [{
    name: 'min',
    cast: function cast(value) {
      return Number(value);
    }
  }];
  var min_value = {
    validate: validate$l,
    params: params$f
  };
  var ar = /^[٠١٢٣٤٥٦٧٨٩]+$/;
  var en = /^[0-9]+$/;

  var validate$m = function validate$m(value) {
    var testValue = function testValue(val) {
      var strValue = String(val);
      return en.test(strValue) || ar.test(strValue);
    };

    if (Array.isArray(value)) {
      return value.every(testValue);
    }

    return testValue(value);
  };

  var numeric = {
    validate: validate$m
  };

  var validate$n = function validate$n(value, _a) {
    var regex = _a.regex;

    if (Array.isArray(value)) {
      return value.every(function (val) {
        return validate$n(val, {
          regex: regex
        });
      });
    }

    return regex.test(String(value));
  };

  var params$g = [{
    name: 'regex',
    cast: function cast(value) {
      if (typeof value === 'string') {
        return new RegExp(value);
      }

      return value;
    }
  }];
  var regex = {
    validate: validate$n,
    params: params$g
  };

  var validate$o = function validate$o(value, _a) {
    var allowFalse = (_a === void 0 ? {
      allowFalse: true
    } : _a).allowFalse;
    var result = {
      valid: false,
      required: true
    };

    if (isNullOrUndefined(value) || isEmptyArray(value)) {
      return result;
    } // incase a field considers `false` as an empty value like checkboxes.


    if (value === false && !allowFalse) {
      return result;
    }

    result.valid = !!String(value).trim().length;
    return result;
  };

  var computesRequired = true;
  var params$h = [{
    name: 'allowFalse',
    default: true
  }];
  var required = {
    validate: validate$o,
    params: params$h,
    computesRequired: computesRequired
  };

  var testEmpty = function testEmpty(value) {
    return isEmptyArray(value) || includes([false, null, undefined], value) || !String(value).trim().length;
  };

  var validate$p = function validate$p(value, _a) {
    var target = _a.target,
        values = _a.values;
    var required;

    if (values && values.length) {
      if (!Array.isArray(values) && typeof values === 'string') {
        values = [values];
      } // eslint-disable-next-line


      required = values.some(function (val) {
        return val == String(target).trim();
      });
    } else {
      required = !testEmpty(target);
    }

    if (!required) {
      return {
        valid: true,
        required: required
      };
    }

    return {
      valid: !testEmpty(value),
      required: required
    };
  };

  var params$i = [{
    name: 'target',
    isTarget: true
  }, {
    name: 'values'
  }];
  var computesRequired$1 = true;
  var required_if = {
    validate: validate$p,
    params: params$i,
    computesRequired: computesRequired$1
  };

  var validate$q = function validate$q(files, _a) {
    var size = _a.size;

    if (isNaN(size)) {
      return false;
    }

    var nSize = size * 1024;

    if (!Array.isArray(files)) {
      return files.size <= nSize;
    }

    for (var i = 0; i < files.length; i++) {
      if (files[i].size > nSize) {
        return false;
      }
    }

    return true;
  };

  var params$j = [{
    name: 'size',
    cast: function cast(value) {
      return Number(value);
    }
  }];
  var size = {
    validate: validate$q,
    params: params$j
  };

  var rules = /*#__PURE__*/Object.freeze({
    __proto__: null,
    alpha: alpha$1,
    alpha_dash: alpha_dash,
    alpha_num: alpha_num,
    alpha_spaces: alpha_spaces,
    between: between,
    confirmed: confirmed,
    digits: digits,
    dimensions: dimensions,
    email: email,
    excluded: excluded,
    ext: ext,
    image: image,
    integer: integer,
    is: is,
    is_not: is_not,
    length: length,
    max: max,
    max_value: max_value,
    mimes: mimes,
    min: min,
    min_value: min_value,
    numeric: numeric,
    oneOf: oneOf,
    regex: regex,
    required: required,
    required_if: required_if,
    size: size
  });

  var dict = function dict(_) {
    return {
      alpha: _('This field may only contain alphabetic characters'),
      alpha_num: _('This field may only contain alpha-numeric characters'),
      alpha_dash: _('This  field may contain alpha-numeric characters as well as dashes and underscores'),
      alpha_spaces: _('This field may only contain alphabetic characters as well as spaces'),
      between: _('This field must be between {min} and {max}'),
      confirmed: _('This field confirmation does not match'),
      digits: _('This field must be numeric and exactly contain {length} digits'),
      dimensions: _('This field must be {width} pixels by {height} pixels'),
      email: _('Enter valid e-mail'),
      decimal: _('Enter the correct number'),
      excluded: _('This field is not a valid value'),
      ext: _('This field is not a valid file'),
      image: _('This field must be an image'),
      integer: _('This field must be an integer'),
      length: _('This field must be {length} long'),
      min: _('Enter at least {length} characters'),
      min_value: _('Value can not be low then {min}'),
      max: _('Value is too large'),
      phone: _('Enter valid phone'),
      mimes: _('This field must have a valid file type'),
      numeric: _('This field may only contain numeric characters'),
      oneOf: _('This field is not a valid value'),
      regex: _('This field format is invalid'),
      required_if: _('This field is required'),
      required: _('This field is required'),
      size: _('This field size must be less than {size}KB')
    };
  };

  function trans(i18n) {
    function _() {
      return i18n.t.apply(i18n, arguments);
    } // loop over all rules


    for (var rule in rules) {
      // add the rule
      veeValidate.extend(rule, _objectSpread2(_objectSpread2({}, rules[rule]), {}, {
        message: dict(_)[rule]
      }));
    }
  }

  var messages = _defineProperty({}, window.language, window.django.catalog || {});

  var compileMessages = {
    locale: window.language,
    messages: messages
  };
  function translator() {
    for (var _len = arguments.length, arg = new Array(_len), _key = 0; _key < _len; _key++) {
      arg[_key] = arguments[_key];
    }

    return this.$t.apply(this, arg);
  }

  function install(Vue) {
    Vue.prototype._ = translator;
  }

  var main = {
    install: install
  };

  exports.compileMessages = compileMessages;
  exports.default = main;
  exports.trans = trans;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
