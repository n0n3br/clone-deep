"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof =
  typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
    ? function(obj) {
        return typeof obj;
      }
    : function(obj) {
        return obj &&
          typeof Symbol === "function" &&
          obj.constructor === Symbol &&
          obj !== Symbol.prototype
          ? "symbol"
          : typeof obj;
      };

function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  } else {
    return Array.from(arr);
  }
}

var cloneDeep = function cloneDeep(value) {
  var response = value;
  if (Array.isArray(response)) {
    response = [].concat(_toConsumableArray(response));
    response.forEach(function(item, index) {
      response[index] = cloneDeep(item);
    });
  } else if (
    (typeof response === "undefined" ? "undefined" : _typeof(response)) ===
    "object"
  ) {
    response = Object.assign({}, response);
    Object.keys(response).forEach(function(key) {
      response[key] = cloneDeep(response[key]);
    });
  }
  return response;
};
exports.default = cloneDeep;
