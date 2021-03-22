"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _contactAPI = _interopRequireDefault(require("../api/contactAPI.js"));

var _untils = require("../untils.js");

var _firebase = _interopRequireDefault(require("../firebase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ContactPage = {
  render: function render() {
    return regeneratorRuntime.async(function render$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return",
            /*html*/
            "\n                 <!-- b\u1EAFt \u0111\u1EA7u ph\u1EA7n content -->\n    <div class=\"content content_contact\">\n        <div class=\"container col-12\">\n            <div class=\"row\">\n                <div class=\"bg_content_contact\">\n                    <div class=\"select_maps sec_footer col-lg-6 col-md-6 col-sm-12 col-xs-12\">\n                        <div class=\"map_h\">\n                            <div class=\"page_contact\">\n                                <h1 class=\"title_db\">\n                                    <span>Li\xEAn h\u1EC7 v\u1EDBi ch\xFAng t\xF4i</span>\n                                </h1>\n                            </div>\n                            <div class=\"list_menu\">\n                                <div class=\"widget_db\">\n                                    <div class=\"item\">\n                                        <ul class=\"contact contact_x\">\n                                            <b class=\"title_bold\">C\u1EEDa h\xE0ng ch\xEDnh:</b>\n                                            <li>\n                                                <i class=\"fa fa-map-marker\"></i>\n                                                <span class=\"txt_content_child\">\n                                                    S\u1ED1 23/71 \u0110\u01B0\u1EDDng M\u1EF9 \u0110\xECnh, Qu\u1EADn Nam T\xF9 Ni\xEAm ,Th\xE0nh Ph\u1ED1 H\xE0 N\u1ED9i\n                                                </span>\n                                            </li>\n                                            <li class=\"sdt\">\n                                                <i class=\"fa fa-mobile\"></i>\n                                                <span class=\"txt_content_child\">\n                                                  \u0110i\u1EC7n Tho\u1EA1i\n                                                </span>\n                                                <a href=\"\">0344358618</a>\n                                            </li>\n                                            <li>\n                                                <i class=\"fa fa-envelope\"></i>\n                                                <span class=\"txt_content_child\">\n                                                    Email:\n                                                </span>\n                                                <a href=\"\">maigam08092000@gmail.com</a>\n                                            </li>\n\n                                        </ul>\n                                    </div>\n                                </div>\n                            </div>\n\n                            <div class=\"page-login page_contact\">\n                                <div class=\"title-head-contact a-left\">\n                                    <span>G\u1EEDi Li\xEAn h\u1EC7</span>\n                                </div>\n                                <div id=\"pagelogin\">\n                                    <form action=\"\" id=\"form-add\" method=\"post\">\n\n                                        <div class=\"form-signup clearfix\">\n                                            <div class=\"row group_contact\">\n                                                <fieldset class=\"form-group col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n                                                    <input type=\"text\" id=\"name\" placeholder=\"H\u1ECD v\xE0 t\xEAn\" name=\"\" class=\"form-control  form-control-lg\" required=\"\">\n                                                </fieldset>\n                                                <fieldset class=\"form-group col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n                                                    <input type=\"text\" id=\"email\" placeholder=\"Email\" name=\"\" class=\"form-control  form-control-lg\" required=\"\">\n                                                </fieldset>\n                                                <fieldset class=\"form-group col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n                                                    <textarea placeholder=\"L\u1EDDi nh\u1EAFn\" name=\"\" id=\"describe\" class=\"form-control content-area form-control-lg\"  rows=\"2\" required=\"\"></textarea>\n                                                </fieldset>\n                                                <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 form-button\">\n                                                    <button type=\"submit\" class=\"btn btn-primary btn-lienhe\">G\u1EEDi li\xEAn h\u1EC7</button>\n                                                </div>\n                                            </div>\n\n                                        </div>\n\n                                    </form>\n\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"select_maps sec_footer col-lg-6 col-md-6 col-sm-12 col-xs-12 right_contact\">\n                        <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.1373202472373!2d105.77297221424524!3d21.027190793209357!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454b1eec75f8d%3A0xaabda7549065fb73!2zVHLGsOG7nW5nIG3huqdtIG5vbiBN4bu5IMSQw6xuaCAy!5e0!3m2!1svi!2s!4v1605431715983!5m2!1svi!2s \"\n                            width=\"100%\" height=\"450 \" frameborder=\"0 \" style=\"border:0; \" allowfullscreen=\" \" aria-hidden=\"false \" tabindex=\"0 \"></iframe>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- k\u1EBFt th\xFAc ph\u1EA7n content -->\n       \n        \n        ");

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
              if ((0, _untils.$)('#name').value == '') ;
              alert("Gửi liên hệ thành công");
              var result = {
                id: Math.random().toString(36).substring(7),
                name: (0, _untils.$)('#name').value,
                email: (0, _untils.$)('#email').value,
                describe: (0, _untils.$)('#describe').value
              };

              _contactAPI["default"].add(result);
            });

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    });
  }
};
var _default = ContactPage;
exports["default"] = _default;