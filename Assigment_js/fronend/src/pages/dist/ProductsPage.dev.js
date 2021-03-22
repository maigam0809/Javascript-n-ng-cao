"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _productAPI = _interopRequireDefault(require("../api/productAPI"));

var _categoryAPI = _interopRequireDefault(require("../api/categoryAPI"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import axios from "axios";
var ProductsPage = {
  render: function render() {
    var _ref, products, result, _ref2, categories;

    return regeneratorRuntime.async(function render$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return regeneratorRuntime.awrap(_productAPI["default"].getAll());

          case 3:
            _ref = _context.sent;
            products = _ref.data;
            result = products.map(function (product) {
              return (
                /*html*/
                "\n                    <div class=\"card col-md-3\" >\n                        <div class=\"product_border\">\n                            <div class=\"product-box-h\">\n                                <div class=\"border_in\">\n                                    <div class=\"icon_pro\">\n                                        <div class=\"price\" style=\"background-color:green;margin-left: -12px;  padding: 5px 6px;\">\n                                            <a data-toggle=\"modal\" data-target=\"#myModal\" class=\"xem_nhanh \"\n                                                href=\"\">\n                                                ".concat(product.sale, "%\n                                            </a>\n                                        </div>\n                                        <div>\n                                            <a class=\"like\" href=\"#\">\n                                                <i class=\"far fa-heart\"></i>\n                                            </a>\n                                        </div>\n                                    </div>\n                                    <div class=\"product-thumbnail\">\n                                        <a class=\"image_link\" href=\"/#/products/").concat(product.id, "\" title=\"").concat(product.name, "\">\n                                            <img class=\"lazyload loaded\" src=\"").concat(product.image, "\">\n                                        </a>\n                                        <div class=\"pro_action\">\n                                            <form action=\"\" method=\"post\">\n                                                <input type=\"hidden\" name=\"\" value=\"\">\n                                                <button class=\"btn btn-cart hidden \">Th\xEAm v\xE0o gi\u1ECF h\xE0ng</button>\n                                            </form>\n                                        </div>\n                                    </div>\n                                    <div class=\"product-info\">\n                                        <h3 class=\"product-name\"><a class=\"height_name\" href=\"#\"\n                                                title=\"Chu\u1ED1i Nam M\u1EF9\">Chu\u1ED1i\n                                                Nam M\u1EF9</a>\n                                        </h3>\n                                        <div class=\"product-hides\">\n                                            <div class=\"price-box clearfix\">\n                                                <span class=\"price product-price\">\n                                                ").concat(product.price - product.sale, "</span>\n                                                <span class=\"price product-price-old\">\n                                                    <del>").concat(product.price, "</del>\n                                                </span>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                ")
              );
            }).join(""); // console.log(result);

            _context.next = 8;
            return regeneratorRuntime.awrap(_categoryAPI["default"].getAll());

          case 8:
            _ref2 = _context.sent;
            categories = _ref2.data;
            return _context.abrupt("return",
            /*html*/
            "\n            <div class=\"product\" style=\"background-color: #fff;\">\n                     \n                <div class=\"title_top_menu\" style=\" margin-left: 120px;\">\n                    <span class=\"title-head\">\n                        <a href=\"#\" class=\"dk\" title=\"S\u1EA3n ph\u1EA9m b\xE1n ch\u1EA1y\">S\u1EA3n ph\u1EA9m b\xE1n ch\u1EA1y</a>\n                    </span>\n                </div>\n               \n                <div class=\"container\" >\n                    <div class=\"mb-4\">\n                        ".concat(result, "\n                    </div>\n                </div>\n            </div>\n                \n              \n                    \n                \n                "));

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](0);
            console.log("error404");

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 13]]);
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
var _default = ProductsPage;
exports["default"] = _default;