"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _untils = require("../untils");

var _productAPI = _interopRequireDefault(require("../api/productAPI"));

var _categoryAPI = _interopRequireDefault(require("../api/categoryAPI"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ProductsSale = {
  render: function render() {
    var _parseRequestUrl, id, _ref, products, quantitySold, pro_sale12, _ref2, categories;

    return regeneratorRuntime.async(function render$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _parseRequestUrl = (0, _untils.parseRequestUrl)(), id = _parseRequestUrl.id; // console.log(id);

            _context.next = 3;
            return regeneratorRuntime.awrap(_productAPI["default"].getAll());

          case 3:
            _ref = _context.sent;
            products = _ref.data;
            quantitySold = products.sort(function (a, b) {
              return b.quantity_sold - a.quantity_sold;
            }).slice(0, 5);
            pro_sale12 = products.sort(function (a, b) {
              return b.sale - a.sale;
            }).slice(0, 12); // const {id} = parseRequestUrl();
            // console.log(products);
            // const result = pro_sale.map(product=>{
            //                     return  /*html*/`
            //                         <div class="col-xs-6 col-sm-3 col-md-3 col-lg-3" style="  margin-bottom: 10px;">
            //                             <div class="product_border">
            //                                 <div class="product-box-h">
            //                                     <div class="border_in">
            //                                         <div class="icon_pro">
            //                                             <div class="price"  style="background-color:green;margin-left: -12px;  padding: 5px 6px;">
            //                                                 <a data-toggle="modal" data-target="#myModal"
            //                                                     class="xem_nhanh " href="">
            //                                                     ${product.sale}%
            //                                                 </a>
            //                                             </div>
            //                                             <div>
            //                                                 <a class="like" href="#">
            //                                                     <i class="far fa-heart"></i>
            //                                                 </a>
            //                                             </div>
            //                                         </div>
            //                                         <div class="product-thumbnail">
            //                                             <a class="image_link" href="/#/products/${product.id}" title="${product.name}">
            //                                                 <img class="lazyload loaded"
            //                                                     src="${product.image}">
            //                                             </a>
            //                                             <div class="pro_action">
            //                                                 <form action="" method="post">
            //                                                     <input type="hidden" name="" value="">
            //                                                     <button class="btn btn-cart hidden ">Thêm vào giỏ
            //                                                         hàng</button>
            //                                                 </form>
            //                                             </div>
            //                                         </div>
            //                                         <div class="product-info">
            //                                             <h3 class="product-name"><a class="height_name" href="/#/products/${product.id}"
            //                                                     title="${product.name}">${product.name}</a>
            //                                             </h3>
            //                                             <div class="product-hides">
            //                                                 <div class="price-box clearfix">
            //                                                     <span class="price product-price">${product.price}₫/kg</span>
            //                                                     <span class="price product-price-old">
            //                                                         <del> ${product.price}₫/kg</del>
            //                                                     </span>
            //                                                 </div>
            //                                             </div>
            //                                         </div>
            //                                     </div>
            //                                 </div>
            //                             </div>
            //                         </div>
            //                     `;
            //                 }).join("");

            _context.next = 9;
            return regeneratorRuntime.awrap(_categoryAPI["default"].getAll());

          case 9:
            _ref2 = _context.sent;
            categories = _ref2.data;
            return _context.abrupt("return",
            /*html*/
            "\n                <div class=\"content content_sale\">\n                    <div class=\"container col-12 col-bg\">\n                        <div class=\"row\">\n                            <div class=\"bg_collection clearfix\">\n                                <!-- start turn left -->\n\n                                <article class=\"content_left dqdt-sidebar sidebar left-content col-lg-3 show-product2\">\n\n                                    <article class=\"aside-filter aside-item sidebar-category collection-category\">\n                                        <div class=\"aside-title\">\n                                            <div class=\"title_module border_bottom_10\">\n                                                <h2><span>Danh s\xE1ch s\u1EA3n ph\u1EA9m</span></h2>\n                                            </div>\n                                        </div>\n                                        <div class=\"aside-content\">\n                                            <nav class=\"nav-category navbar-toggleable-md\">\n                                                <ul class=\"nav navbar-pills\">\n                                                ".concat(categories.map(function (category) {
              return "\n                                                        <li class=\"nav-item lv1\"><a href=\"/#/categories/".concat(category.id, "\" class=\"nav-link\"><img class=\"hiden-none\" src=\"").concat(category.image, "\" alt=\"\" style=\"margin-right: 15px;\">\n                                                        ").concat(category.name, "\n                                                        </a></li>\n                                                        ");
            }).join(""), "\n                                                </ul>\n                                            </nav>\n                                        </div>\n                                    </article>\n\n                                    <article class=\"aside-filter\">\n                                        <div class=\"filter-container\">\n                                            <div class=\"filter-container__selected-filter\">\n\n                                                <div class=\"filter-container__selected-filter-list\">\n                                                    <ul></ul>\n                                                </div>\n\n                                            </div>\n                                        </div>\n                                    </article>\n\n                                    <article class=\"aside-item aside-filter hidden-md hidden-sm hidden-xs\">\n                                        <div class=\"aside-title aside-title-fillter\">\n                                            <div class=\"title_module border_bottom_10\">\n                                                <h2><span>SP b\xE1n ch\u1EA1y</span></h2>\n                                            </div>\n                                        </div>\n\n                                        <div class=\"sale_off_today\">\n                                            <div class=\"not-dqowl wrp_list_product\">\n                                            ").concat(quantitySold.map(function (product) {
              return (
                /*html*/
                "\n                                                        <div class=\"item_small\">\n                                                            <div class=\"product-mini-item clearfix on-sale\">\n                                                                <a href=\"/#/products/".concat(product.id, "\"\n                                                                    class=\"product-img\">\n                                                                    <img src=\"").concat(product.image, "\"alt=\"").concat(product.image, "\">\n                                                                </a>\n                                                                <div class=\"product-info\">\n                                                                    <h3>\n                                                                        <a href=\"/#/products/").concat(product.id, "\"\n                                                                            class=\"product-name text3line\">").concat(product.name, "</a>\n                                                                    </h3>\n                                                                    <div class=\"price-box\">\n                                                                        <span class=\"price\">\n                                                                            <span class=\"product-price\">").concat(product.price - product.sale, "\u20AB/kg</span>\n                                                                        </span>\n                                                                        <!-- gi\xE1 khuy\u1EBFn m\xE3i -->\n                                                                        <span class=\"old-price\">\n                                                                            <del class=\"sale-price\">").concat(product.price, "\u20AB/kg</del>\n                                                                        </span>\n                                                                        <!-- gi\xE1 g\u1ED1c c\u1EE7a s\u1EA3n ph\u1EA9m nh\xE9-->\n                                                                    </div>\n\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                    ")
              );
            }).join(""), "\n                                             \n                                                <span class=\"view_more\">\n                                                    <a href=\"\" title=\"Xem th\xEAm\">\n                                                        Xem th\xEAm\n                                                        <i class=\"fas fa-caret-right\"></i>\n                                                    </a>\n                                                </span>\n                                            </div>\n                                        </div>\n                                    </article>\n                                </article>\n                                <!-- end turn left -->\n\n\n                                <!-- start turn right -->\n                                <article class=\"content_right dqdt-sidebar sidebar left-content col-lg-9 col-xs-12\">\n                                    <article class=\"aside-filter aside-item sidebar-category collection-category\">\n                                        <div class=\"aside-title\">\n                                            <div class=\"title_module border_bottom_10\">\n                                                <h2>\n                                                Top 12 Gi\u1EA3m Gi\xE1 Nhi\u1EC1u Nh\u1EA5t\n                                                </span>\n                                                </h2>\n                                            </div>\n                                        </div>\n                                        <section class=\"products-view products-view-grid aside-content\">\n                                            <div class=\"row row-noGutter-45\">\n                                                <!-- box-1 -->\n                                                ").concat(pro_sale12.map(function (product) {
              return (
                /*html*/
                "\n                                                            <div class=\"col-xs-6 col-sm-3 col-md-3 col-lg-3\" style=\"  margin-bottom: 10px;\">\n                                                                <div class=\"product_border\">\n                                                                    <div class=\"product-box-h\">\n                                                                        <div class=\"border_in\">\n                                                                            <div class=\"icon_pro\">\n                                                                                <div class=\"price\"  style=\"background-color:green;margin-left: -12px;  padding: 5px 6px;\">\n                                                                                    <a data-toggle=\"modal\" data-target=\"#myModal\"\n                                                                                        class=\"xem_nhanh \" href=\"\">\n                                                                                        ".concat(product.sale, "%\n                                                                                    </a>\n                                                                                </div>\n                                                                                <div>\n                                                                                    <a class=\"like\" href=\"#\">\n                                                                                        <i class=\"far fa-heart\"></i>\n                                                                                    </a>\n                                                                                </div>\n                                                                            </div>\n                                                                            <div class=\"product-thumbnail\">\n                                                                                <a class=\"image_link\" href=\"/#/products/").concat(product.id, "\" title=\"").concat(product.name, "\">\n                                                                                    <img class=\"lazyload loaded\"\n                                                                                        src=\"").concat(product.image, "\">\n                                                                                </a>\n                                                                                <div class=\"pro_action\">\n                                                                                    <form action=\"\" method=\"post\">\n                                                                                        <input type=\"hidden\" name=\"\" value=\"\">\n                                                                                        <button class=\"btn btn-cart hidden \">Th\xEAm v\xE0o gi\u1ECF\n                                                                                            h\xE0ng</button>\n                                                                                    </form>\n                                                                                </div>\n                                                                            </div>\n                                                                            <div class=\"product-info\">\n                                                                                <h3 class=\"product-name\"><a class=\"height_name\" href=\"/#/products/").concat(product.id, "\"\n                                                                                        title=\"").concat(product.name, "\">").concat(product.name, "</a>\n                                                                                </h3>\n                                                                                <div class=\"product-hides\">\n                                                                                    <div class=\"price-box clearfix\">\n                                                                                        <span class=\"price product-price\">").concat(product.price, "\u20AB/kg</span>\n                                                                                        <span class=\"price product-price-old\">\n                                                                                            <del> ").concat(product.price, "\u20AB/kg</del>\n                                                                                        </span>\n                                                                                    </div>\n                                                                                </div>\n                                                                            </div>\n                                                                        </div>\n                                                                    </div>\n                                                                </div>\n                                                            </div>\n                                                        ")
              );
            }).join(""), "\n                                            </div>\n                                        </section>\n                                    </article>\n                                </article>\n                                <!-- end turn right -->\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n                <!-- k\u1EBFt th\xFAc content_type -->\n\n        "));

          case 12:
          case "end":
            return _context.stop();
        }
      }
    });
  },
  afterRender: function afterRender() {
    return "abc";
  }
};
var _default = ProductsSale;
exports["default"] = _default;