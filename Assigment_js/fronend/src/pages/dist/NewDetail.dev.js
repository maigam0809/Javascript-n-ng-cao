"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _untils = require("../untils.js");

var _newAPI = _interopRequireDefault(require("../api/newAPI"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var NewDetail = {
  render: function render() {
    var _parseRequestUrl, id, _ref, result;

    return regeneratorRuntime.async(function render$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _parseRequestUrl = (0, _untils.parseRequestUrl)(), id = _parseRequestUrl.id;
            _context.next = 3;
            return regeneratorRuntime.awrap(_newAPI["default"].get(id));

          case 3:
            _ref = _context.sent;
            result = _ref.data;
            return _context.abrupt("return",
            /*html*/
            "\n            <div class=\"container\">\n                <div class=\"row  \">\n                    <div class=\"col-md-6 cart-detail col-md-offset-3\">\n                        <div class=\"new_detail \">\n                            <div class=\"tieude\">\n                                <h1 style=\"text-align: center;\">".concat(result.name, "></h1>\n                            </div>\n                            <br>\n                            <div class=\"image center-block\"  style=\"width: 300px;\">\n                                <img class=\"img-responsive\" src=\"").concat(result.image, "\" alt=\"\" width=\"100%\">\n                            </div>\n                            <br>\n                            <div class=\"content\" style=\"padding: 0 10px;\">\n                                <b>\n                                    ").concat(result.description, "\n                                </b>\n                                <br>\n                                <div>\n                                    ").concat(result.detail, "\n                                </div>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n            </div>\n                            \n            "));

          case 6:
          case "end":
            return _context.stop();
        }
      }
    });
  }
};
var _default = NewDetail;
exports["default"] = _default;