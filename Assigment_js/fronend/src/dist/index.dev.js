"use strict";

var _untils = require("./untils.js");

var _Error404Page = _interopRequireDefault(require("./pages/Error404Page.js"));

var _Header = _interopRequireDefault(require("./components/Header.js"));

var _Footer = _interopRequireDefault(require("./components/Footer.js"));

var _HomePage = _interopRequireDefault(require("./pages/HomePage.js"));

var _ProductsPage = _interopRequireDefault(require("./pages/ProductsPage.js"));

var _ProductDetail = _interopRequireDefault(require("./pages/ProductDetail.js"));

var _CategoryPage = _interopRequireDefault(require("./pages/CategoryPage.js"));

var _Product_Selling = _interopRequireDefault(require("./pages/Product_Selling.js"));

var _NewPage = _interopRequireDefault(require("./pages/NewPage.js"));

var _Contact = _interopRequireDefault(require("./pages/Contact.js"));

var _Register = _interopRequireDefault(require("./pages/Register.js"));

var _Login = _interopRequireDefault(require("./pages/Login.js"));

var _Product_Sale = _interopRequireDefault(require("./pages/Product_Sale.js"));

var _NewDetail = _interopRequireDefault(require("./pages/NewDetail.js"));

var _AdminProductPage = _interopRequireDefault(require("./components/AdminProductPage.js"));

var _AddProduct = _interopRequireDefault(require("./components/AddProduct.js"));

var _ProductEditPage = _interopRequireDefault(require("./components/ProductEditPage.js"));

var _ListCate = _interopRequireDefault(require("./components/ListCate.js"));

var _CateEdit = _interopRequireDefault(require("./components/CateEdit.js"));

var _AddCate = _interopRequireDefault(require("./components/AddCate.js"));

var _ListNew = _interopRequireDefault(require("./components/ListNew.js"));

var _AddNew = _interopRequireDefault(require("./components/AddNew.js"));

var _NewEdit = _interopRequireDefault(require("./components/NewEdit.js"));

var _ListContact = _interopRequireDefault(require("./components/ListContact.js"));

var _ListUser = _interopRequireDefault(require("./components/ListUser.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// client
// Admin
var routers = {
  '/': _HomePage["default"],
  '/products': _ProductsPage["default"],
  '/products/:id': _ProductDetail["default"],
  '/categories/:id': _CategoryPage["default"],
  '/new': _NewPage["default"],
  '/contact': _Contact["default"],
  '/register': _Register["default"],
  '/login': _Login["default"],
  '/sale': _Product_Sale["default"],
  '/product_selling': _Product_Selling["default"],
  '/addproducts': _AddProduct["default"],
  '/listproducts': _AdminProductPage["default"],
  '/listcate': _ListCate["default"],
  '/addcate': _AddCate["default"],
  '/editcategory/:id': _CateEdit["default"],
  '/editproducts/:id': _ProductEditPage["default"],
  '/listnews': _ListNew["default"],
  '/editnew/:id': _NewEdit["default"],
  '/addnew': _AddNew["default"],
  '/new/:id': _NewDetail["default"],
  '/listcontacts': _ListContact["default"],
  '/listuser': _ListUser["default"]
};

var router = function router() {
  var _parseRequestUrl, resource, id, parseUrl, page;

  return regeneratorRuntime.async(function router$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _parseRequestUrl = (0, _untils.parseRequestUrl)(), resource = _parseRequestUrl.resource, id = _parseRequestUrl.id; // console.log(parseRequestUrl());
          // console.log(id);

          parseUrl = (resource ? "/".concat(resource) : '/') + (id ? "/:id" : ''); // console.log(parseUrl);

          page = routers[parseUrl] ? routers[parseUrl] : _Error404Page["default"];
          console.log(page);
          _context.next = 6;
          return regeneratorRuntime.awrap(_Header["default"].render());

        case 6:
          (0, _untils.$)('#header').innerHTML = _context.sent;
          _context.next = 9;
          return regeneratorRuntime.awrap(page.render());

        case 9:
          (0, _untils.$)('#main-content').innerHTML = _context.sent;

          if (!page.afterRender) {
            _context.next = 13;
            break;
          }

          _context.next = 13;
          return regeneratorRuntime.awrap(page.afterRender());

        case 13:
          (0, _untils.$)('#footer').innerHTML = _Footer["default"].render();

        case 14:
        case "end":
          return _context.stop();
      }
    }
  });
};

window.addEventListener('DOMContentLoaded', router);
window.addEventListener('hashchange', router); // $('#main-content').innerHTML = HomePage.render();