"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _categoryAPI = _interopRequireDefault(require("../api/categoryAPI"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Header = {
  render: function render() {
    var _ref, categories;

    return regeneratorRuntime.async(function render$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(_categoryAPI["default"].getAll());

          case 2:
            _ref = _context.sent;
            categories = _ref.data;
            return _context.abrupt("return",
            /*html*/
            "\n\n         \n            ".concat(categories.map(function (category) {
              return "\n                        <li><a href=\"/#/categories/".concat(category.id, "\"><img class=\"hiden-none\" src=\"").concat(category.image, "\" alt=\"\">\n                        ").concat(category.name, "\n                        </a></li>\n\n                     ");
            }).join(""), "\n        "));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    });
  }
};
var _default = Header;
exports["default"] = _default;