"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _categoryAPI = _interopRequireDefault(require("../api/categoryAPI.js"));

var _untils = require("../untils.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ListCate = {
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
            "\n            <div class=\"row\">\n              <nav class=\"col-md-2 d-none d-md-block bg-light sidebar\">\n                  <div class=\"sidebar-sticky\">\n                    <ul class=\"nav flex-column\">\n                      <li class=\"nav-item\">\n                        <a class=\"nav-link active\" href=\"/#/listcate\">\n                          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-home\"><path d=\"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"></path><polyline points=\"9 22 9 12 15 12 15 22\"></polyline></svg>\n                          Categories<span class=\"sr-only\">(current)</span>\n                        </a>\n                      </li>\n                      <li class=\"nav-item\">\n                        <a class=\"nav-link\" href=\"/#/listproducts\">\n                          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-shopping-cart\"><circle cx=\"9\" cy=\"21\" r=\"1\"></circle><circle cx=\"20\" cy=\"21\" r=\"1\"></circle><path d=\"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6\"></path></svg>\n                          Products\n                        </a>\n                      </li>\n                      <li class=\"nav-item\">\n                        <a class=\"nav-link\" href=\"#\">\n                          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-users\"><path d=\"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"></path><circle cx=\"9\" cy=\"7\" r=\"4\"></circle><path d=\"M23 21v-2a4 4 0 0 0-3-3.87\"></path><path d=\"M16 3.13a4 4 0 0 1 0 7.75\"></path></svg>\n                          Customers\n                        </a>\n                      </li>\n                      <li class=\"nav-item\">\n                        <a class=\"nav-link\" href=\"/#/\">\n                          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-bar-chart-2\"><line x1=\"18\" y1=\"20\" x2=\"18\" y2=\"10\"></line><line x1=\"12\" y1=\"20\" x2=\"12\" y2=\"4\"></line><line x1=\"6\" y1=\"20\" x2=\"6\" y2=\"14\"></line></svg>\n                         News\n                        </a>\n                      </li>\n                      <li class=\"nav-item\">\n                        <a class=\"nav-link\" href=\"#\">\n                          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-layers\"><polygon points=\"12 2 2 7 12 12 22 7 12 2\"></polygon><polyline points=\"2 17 12 22 22 17\"></polyline><polyline points=\"2 12 12 17 22 12\"></polyline></svg>\n                          Integrations\n                        </a>\n                      </li>\n                    </ul>\n\n                    <h6 class=\"sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted\">\n                      <span>Saved reports</span>\n                      <a class=\"d-flex align-items-center text-muted\" href=\"#\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-plus-circle\"><circle cx=\"12\" cy=\"12\" r=\"10\"></circle><line x1=\"12\" y1=\"8\" x2=\"12\" y2=\"16\"></line><line x1=\"8\" y1=\"12\" x2=\"16\" y2=\"12\"></line></svg>\n                      </a>\n                    </h6>\n                    <ul class=\"nav flex-column mb-2\">\n                      <li class=\"nav-item\">\n                        <a class=\"nav-link\" href=\"#\">\n                          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-file-text\"><path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"></path><polyline points=\"14 2 14 8 20 8\"></polyline><line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"></line><line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"></line><polyline points=\"10 9 9 9 8 9\"></polyline></svg>\n                          Current month\n                        </a>\n                      </li>\n                      <li class=\"nav-item\">\n                        <a class=\"nav-link\" href=\"#\">\n                          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-file-text\"><path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"></path><polyline points=\"14 2 14 8 20 8\"></polyline><line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"></line><line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"></line><polyline points=\"10 9 9 9 8 9\"></polyline></svg>\n                          Last quarter\n                        </a>\n                      </li>\n                      <li class=\"nav-item\">\n                        <a class=\"nav-link\" href=\"#\">\n                          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-file-text\"><path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"></path><polyline points=\"14 2 14 8 20 8\"></polyline><line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"></line><line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"></line><polyline points=\"10 9 9 9 8 9\"></polyline></svg>\n                          Social engagement\n                        </a>\n                      </li>\n                      <li class=\"nav-item\">\n                        <a class=\"nav-link\" href=\"#\">\n                          <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-file-text\"><path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"></path><polyline points=\"14 2 14 8 20 8\"></polyline><line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"></line><line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"></line><polyline points=\"10 9 9 9 8 9\"></polyline></svg>\n                          Year-end sale\n                        </a>\n                      </li>\n                    </ul>\n                  </div>\n                </nav>\n                <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 pt-3 px-4\"><div class=\"chartjs-size-monitor\" style=\"position: absolute; inset: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;\"><div class=\"chartjs-size-monitor-expand\" style=\"position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;\"><div style=\"position:absolute;width:1000000px;height:1000000px;left:0;top:0\"></div></div><div class=\"chartjs-size-monitor-shrink\" style=\"position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;\"><div style=\"position:absolute;width:200%;height:200%;left:0; top:0\"></div></div></div>\n                  <div class=\"d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom\">\n                    <h1 class=\"h2\">Dashboard</h1>\n                    <div class=\"btn-toolbar mb-2 mb-md-0\">\n                      <button class=\"btn btn-sm btn-outline-secondary dropdown-toggle\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-calendar\"><rect x=\"3\" y=\"4\" width=\"18\" height=\"18\" rx=\"2\" ry=\"2\"></rect><line x1=\"16\" y1=\"2\" x2=\"16\" y2=\"6\"></line><line x1=\"8\" y1=\"2\" x2=\"8\" y2=\"6\"></line><line x1=\"3\" y1=\"10\" x2=\"21\" y2=\"10\"></line></svg>\n                        This week\n                      </button>\n                    </div>\n                  </div>\n                  <div class=\"table-responsive\" id =\"list-cate\">\n                  <table class=\"table table-striped table-sm\">\n                        <thead>\n                        <tr>\n                            <th>Index</th>\n                            <th>Name</th>\n                            <th>Image</th>\n                            <th>Action</th>\n                            <th><a href=\"/#/addcate\">T\u1EA1o m\u1EDBi</a></th>\n                        </tr>\n                        </thead>\n                        <tbody>\n                            ".concat(categories.map(function (category, index) {
              return (
                /*html*/
                "\n                            <tr>\n                                <td>".concat(index, "</td>\n                                <td>").concat(category.name, "</td>\n                                <td>\n                                <img src=\"").concat(category.image, "\" alt=\"").concat(category.image, "\" class=\"\" style=\"max-width: 100%;\"> \n                                </td>\n                                \n                                <td>\n                                    <a class=\"btn btn-success btn-edit\" href=\"/#/editcategory/").concat(category.id, "\">\n                                    <i class=\"fa fa-edit\"></i>\n                                    </a>\n                                </td>\n        \n                                <td>\n                                    <button class=\"btn btn-outline-danger rounded-circle m-btn m-btn--icon btn-sm m-btn--icon-only m-btn--pill m-btn--air btn-remove \" data-id=\"").concat(category.id, "\">\n                                        Xo\xE1\n                                        <i class=\"fa fa-trash\"></i>\n                                    </button>\n                                </td>\n                            </tr>")
              );
            }).join(""), "\n                        </tbody>\n                    </table>\n                  </div>\n                </main>\n            </div>\n\n\n\n           \n        "));

          case 5:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  afterRender: function afterRender() {
    var btns;
    return regeneratorRuntime.async(function afterRender$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap((0, _untils.$)('#list-cate .btn-remove'));

          case 2:
            btns = _context2.sent;
            // console.log(btns);
            btns.forEach(function (btn) {
              var id = btn.dataset.id; // console.log(id);

              btn.addEventListener('click', function () {
                var question = confirm("Bạn có chắc muôn xoá không ?");

                if (question) {
                  _categoryAPI["default"].remove(id);

                  (0, _untils.reRender)(ListCate, '#list-cate');
                }
              });
            });

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    });
  }
};
var _default = ListCate;
exports["default"] = _default;