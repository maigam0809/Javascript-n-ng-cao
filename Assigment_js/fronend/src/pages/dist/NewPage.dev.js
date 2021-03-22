"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _NewAPI = _interopRequireDefault(require("../api/NewAPI"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var NewPage = {
  render: function render() {
    var _ref, news;

    return regeneratorRuntime.async(function render$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(_NewAPI["default"].getAll());

          case 2:
            _ref = _context.sent;
            news = _ref.data;
            return _context.abrupt("return",
            /*html*/
            "\n            <div class=\"content content_news\">\n                <div class=\"container col-12\">\n                    ".concat(news.map(function (result) {
              return (
                /*html*/
                "\n                                <div class=\"row \">\n                                    <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-4\">\n                                        <img src=\"".concat(result.image, "\" alt=\"\" class=\"mx-auto\" style=\"width: 100%;\">\n                                    </div>\n                                    <div class=\"col-xl-9 col-lg-8 col-md-8 col-sm-8\">\n                                    <a href=\"/#/new/").concat(result.id, "\">\n                                        <h4 class=\"text-title\">").concat(result.name, "</h4>\n                                    </a>\n                                        <p>").concat(result.description, "</p>\n                                    </div>\n\n                                </div>\n                            ")
              );
            }).join(""), "\n                </div>\n            </div>\n        \n            "));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  afterRender: function afterRender() {
    return regeneratorRuntime.async(function afterRender$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", "");

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    });
  }
};
var _default = NewPage;
exports["default"] = _default;