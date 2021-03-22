"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axiosClient = require("./axiosClient");

var UserAPI = {
  getAll: function getAll() {
    var url = "/users";
    return _axiosClient.axiosClient.get(url);
  },
  get: function get(id) {
    var url = "/users/".concat(id);
    return _axiosClient.axiosClient.get(url);
  },
  add: function add(category) {
    var url = "/users";
    return _axiosClient.axiosClient.post(url, category);
  },
  remove: function remove(id) {
    var url = "/users/".concat(id);
    return _axiosClient.axiosClient["delete"](url);
  },
  update: function update(id, data) {
    var url = "/users/".concat(id);
    return _axiosClient.axiosClient.put(url, data);
  }
};
var _default = UserAPI;
exports["default"] = _default;