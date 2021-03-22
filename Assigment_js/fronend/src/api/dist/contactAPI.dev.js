"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axiosClient = require("./axiosClient");

var ContactAPI = {
  getAll: function getAll() {
    var url = "/contact";
    return _axiosClient.axiosClient.get(url);
  },
  get: function get(id) {
    var url = "/contact/".concat(id);
    return _axiosClient.axiosClient.get(url);
  },
  add: function add(data) {
    var url = "/contact";
    return _axiosClient.axiosClient.post(url, data);
  },
  remove: function remove(id) {
    var url = "/contact/".concat(id);
    return _axiosClient.axiosClient["delete"](url);
  },
  update: function update(id, data) {
    var url = "/contact/".concat(id);
    return _axiosClient.axiosClient.put(url, data);
  }
};
var _default = ContactAPI;
exports["default"] = _default;