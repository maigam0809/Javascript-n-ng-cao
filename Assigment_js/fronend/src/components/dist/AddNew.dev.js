"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _newAPI = _interopRequireDefault(require("../api/newAPI.js"));

var _untils = require("../untils.js");

var _firebase = _interopRequireDefault(require("../firebase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var NewAdd = {
  render: function render() {
    return regeneratorRuntime.async(function render$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return",
            /*html*/
            "\n        <form class=\"form\"  id=\"form-add\" method=\"post\">\n            <div class=\"form-group\">\n                <label for=\"new_name\" class=\"form-label\">Ti\xEAu \u0111\u1EC1</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Ti\xEAu \u0111\u1EC1 c\u1EE7a tin t\u1EE9c\" id =\"new_name\"/>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"new_image\" class=\"form-label\">\u1EA2nh</label>\n                <input type=\"file\" class=\"form-control\" placeholder=\"\u1EA2nh s\u1EA3n ph\u1EA9m\" id =\"new_image\"/>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"description\" class=\"form-label\">Description</label>\n                <input type=\"text\" class=\"form-control\" id=\"description\"/>\n            </div>\n            <div class=\"form-group\">\n                <label for=\"detail\" class=\"form-label\">Detail</label>\n                <input type=\"text\" class=\"form-control\" id=\"detail\"/>\n            </div>\n           \n            <div class=\"form-group btn\">\n                <input type=\"submit\" class=\"form-control\" value=\"add New\"/>\n            </div>\n\n        <form>\n        \n        ");

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
              var newImage = (0, _untils.$)('#new_image').files[0]; //  console.log(productImage);

              var storageRef = _firebase["default"].storage().ref("news/".concat(newImage.name));

              console.log(storageRef);
              storageRef.put(newImage).then(function () {
                // console.log('upload thành công');
                storageRef.getDownloadURL().then(function _callee(url) {
                  var result;
                  return regeneratorRuntime.async(function _callee$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          result = {
                            id: Math.random().toString(36).substring(7),
                            name: (0, _untils.$)('#new_name').value,
                            image: url,
                            description: (0, _untils.$)('#description').value,
                            detail: (0, _untils.$)('#detail').value
                          }; // console.log(result);

                          _newAPI["default"].add(result);

                          window.location.hash = '/listnews';

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
var _default = NewAdd;
exports["default"] = _default;