"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var cloneDeep = function cloneDeep(value) {
  var response = value;

  if (Array.isArray(response)) {
    response = _toConsumableArray(response);
    response.forEach(function (item, index) {
      response[index] = cloneDeep(item);
    });
  } else if (_typeof(response) === 'object') {
    response = Object.assign({}, response);
    Object.keys(response).forEach(function (key) {
      response[key] = cloneDeep(response[key]);
    });
  }

  return response;
};

var _default = cloneDeep;
exports.default = _default;