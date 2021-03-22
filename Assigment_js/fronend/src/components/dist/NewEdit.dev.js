"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _newAPI = _interopRequireDefault(require("../api/newAPI.js"));

var _untils = require("../untils");

var _firebase = _interopRequireDefault(require("../firebase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var NewEdit = {
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
            "\n            <form id=\"form-update-new\">\n                <div class=\"form-group\">\n                    <label for=\"new_name\" class=\"form-label\">Ti\xEAu \u0111\u1EC1 tin t\u1EE9c</label>\n                    <input type=\"text\" class=\"form-control\" value=\"".concat(result.name, "\" placeholder=\"Ti\xEAu \u0111\u1EC1 tin t\u1EE9c\" id =\"new_name\"/>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"cate_image\" class=\"form-label\">\u1EA2nh</label>\n                    <img src=\"").concat(result.image, "\" alt=\"\"  >\n                    <input type=\"file\" class=\"form-control\" placeholder=\"\u1EA2nh s\u1EA3n ph\u1EA9m\" id =\"new_image\"/>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"description\" class=\"form-label\">Description</label>\n                    <input type=\"text\" class=\"form-control\" value=\"").concat(result.description, "\" placeholder=\"Content ng\u1EAFn\" id =\"description\"/>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"detail\" class=\"form-label\">Detail</label>\n                    <input type=\"text\" class=\"form-control\" value=\"").concat(result.detail, "\" placeholder=\"Content ng\u1EAFn\" id =\"detail\"/>\n                </div>\n                <div class=\"form-group btn\">\n                    <input type=\"submit\" class=\"form-control\" value=\"Update\"/>\n                </div>\n               \n            </form>\n        "));

          case 6:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  afterRender: function afterRender() {
    var _parseRequestUrl2, id, _ref2, result;

    return regeneratorRuntime.async(function afterRender$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _parseRequestUrl2 = (0, _untils.parseRequestUrl)(), id = _parseRequestUrl2.id;
            _context3.next = 3;
            return regeneratorRuntime.awrap(_newAPI["default"].get(id));

          case 3:
            _ref2 = _context3.sent;
            result = _ref2.data;
            // console.log(id);
            // console.log(product);
            (0, _untils.$)('#form-update-new').addEventListener('submit', function (e) {
              e.preventDefault(); // const cateImage = '';

              if ((0, _untils.$)('#new_image').files[0]) {
                var newImage = (0, _untils.$)('#new_image').files[0];

                var storageRef = _firebase["default"].storage().ref("news/".concat(newImage.name)); // console.log(storageRef);


                storageRef.put(newImage).then(function () {
                  // console.log('upload thành công');
                  storageRef.getDownloadURL().then(function _callee(url) {
                    var newProduct;
                    return regeneratorRuntime.async(function _callee$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            newProduct = _objectSpread({}, result, {
                              name: (0, _untils.$)('#new_name').value,
                              image: url,
                              description: (0, _untils.$)('#description').value,
                              detail: (0, _untils.$)('#detail').value
                            }); // console.log(category);

                            _newAPI["default"].update(id, newProduct);

                            window.location.hash = '/listnews';

                          case 3:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    });
                  });
                });
              } else {
                var _newImage = result.image;

                var newProduct = _objectSpread({}, result, {
                  name: (0, _untils.$)('#new_name').value,
                  image: _newImage,
                  description: (0, _untils.$)('#description').value,
                  detail: (0, _untils.$)('#detail').value
                });

                _newAPI["default"].update(id, newProduct);

                window.location.hash = '/listnews';
              }
            });

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    });
  }
};
var _default = NewEdit;
exports["default"] = _default;