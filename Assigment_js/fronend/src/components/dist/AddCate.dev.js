"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _categoryAPI = _interopRequireDefault(require("../api/categoryAPI.js"));

var _untils = require("../untils.js");

var _firebase = _interopRequireDefault(require("../firebase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CateAddPage = {
  render: function render() {
    return regeneratorRuntime.async(function render$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return",
            /*html*/
            "\n        <form class=\"form\"  id=\"form-add\" method=\"post\">\n            <div class=\"form-group\">\n                <label for=\"cate_name\" class=\"form-label\">T\xEAn Lo\u1EA1i</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"T\xEAn s\u1EA3n ph\u1EA9m\" id =\"cate_name\"/>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"cate_image\" class=\"form-label\">\u1EA2nh</label>\n                <input type=\"file\" class=\"form-control\" placeholder=\"\u1EA2nh s\u1EA3n ph\u1EA9m\" id =\"cate_image\"/>\n            </div>\n            <div class=\"form-group btn\">\n                <input type=\"submit\" class=\"form-control\" value=\"add cate\"/>\n            </div>\n\n        <form>\n        \n        ");

          case 1:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  afterRender: function afterRender() {
    return regeneratorRuntime.async(function afterRender$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            (0, _untils.$)('#form-add').addEventListener('submit', function (e) {
              e.preventDefault();
              var cateImage = (0, _untils.$)('#cate_image').files[0]; //  console.log(productImage);

              var storageRef = _firebase["default"].storage().ref("category/".concat(cateImage.name));

              console.log(storageRef);
              storageRef.put(cateImage).then(function () {
                // console.log('upload thành công');
                storageRef.getDownloadURL().then(function _callee(url) {
                  var category;
                  return regeneratorRuntime.async(function _callee$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          category = {
                            id: Math.random().toString(36).substring(7),
                            name: (0, _untils.$)('#cate_name').value,
                            phone: (0, _untils.$)('#cate_name').value,
                            image: url
                          }; // console.log(category);

                          _categoryAPI["default"].add(category);

                          window.location.hash = '/listcate';

                        case 3:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  });
                });
              });
            });

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    });
  }
};
var _default = CateAddPage;
exports["default"] = _default;