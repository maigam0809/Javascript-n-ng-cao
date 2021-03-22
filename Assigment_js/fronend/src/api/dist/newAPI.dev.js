"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axiosClient = require("./axiosClient");

var NewAPI = {
  getAll: function getAll() {
    var url = "/news";
    return _axiosClient.axiosClient.get(url);
  },
  get: function get(id) {
    var url = "/news/".concat(id);
    return _axiosClient.axiosClient.get(url);
  },
  add: function add(result) {
    var url = "/news";
    return _axiosClient.axiosClient.post(url, result);
  },
  remove: function remove(id) {
    var url = "/news/".concat(id);
    return _axiosClient.axiosClient["delete"](url);
  },
  update: function update(id, data) {
    var url = "/news/".concat(id);
    return _axiosClient.axiosClient.put(url, data);
  }
};
var _default = NewAPI;
exports["default"] = _default;