"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _userAPI = _interopRequireDefault(require("../api/userAPI"));

var _untils = require("../untils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import NewAPI from '../api/NewAPI';
var RegisterPage = {
  render: function render() {
    return regeneratorRuntime.async(function render$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return",
            /*html*/
            "\n                 <!-- b\u1EAFt \u0111\u1EA7u ph\u1EA7n content -->\n                 <div class=\"container-fluild register-detail\">\n                    <div class=\"container\">\n                        <h4>\u0110\u0102NG K\xDD T\xC0I KHO\u1EA2N</h4>\n                        <p>N\u1EBFu ch\u01B0a c\xF3 t\xE0i kho\u1EA3n vui l\xF2ng \u0111\u0103ng k\xFD t\u1EA1i \u0111\xE2y</p>\n                        <form action=\"\" class=\"form-group\" id=\"form-add\">\n                            <div class=\"form-group\">\n                                <label for=\"email\">H\u1ECD t\xEAn *</label>\n                                <input type=\"text\" class=\"form-control\" id=\"user_name\" required placeholder=\"H\u1ECD t\xEAn\" required>\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"email\">Email *</label>\n                                <input type=\"email\" class=\"form-control\" id=\"email\" required placeholder=\"Email\" required>\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"pwd\">M\u1EADt kh\u1EA9u *</label>\n                                <input type=\"password\" class=\"form-control\" id=\"password\" required placeholder=\"M\u1EADt kh\u1EA9u\" required>\n                            </div>\n                            <div class=\"form-group\">\n                                <label for=\"pwd\">X\xE1c nh\u1EADn m\u1EADt kh\u1EA9u *</label>\n                                <input type=\"password\" class=\"form-control\" id=\"password2\" required placeholder=\" X\xE1c nh\u1EADn m\u1EADt kh\u1EA9u\" required>\n                            </div>\n                            <div class=\"form-group\">\n                                <button class=\"btn btn-primary\">\u0110\u0103ng k\xFD</button>\n                                <a class=\"btn btn-info\" href=\"/#/login\">\u0110\u0103ng nh\u1EADp</a>\n                            </div>\n                        </form>\n                    </div>\n\n                </div>\n       \n        \n        ");

          case 1:
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
            (0, _untils.$)('#form-add').addEventListener('submit', function (e) {
              e.preventDefault();
              if ((0, _untils.$)('#email').value == '') ;
              alert("Đăng ký thành công");
              var category = {
                id: Math.random().toString(36).substring(7),
                user_name: (0, _untils.$)('#user_name').value,
                email: (0, _untils.$)('#email').value,
                password: (0, _untils.$)('#password').value,
                image: url
              };

              _userAPI["default"].add(category);
            });

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    });
  }
};
var _default = RegisterPage;
exports["default"] = _default;