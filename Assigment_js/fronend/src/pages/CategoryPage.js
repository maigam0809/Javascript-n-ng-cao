import { parseRequestUrl } from "../untils";
import CategoryAPI from "../api/categoryAPI";
import productAPI from "../api/productAPI";


const CategoryPage = {
    async render(){
        // console.log("go herre");
        
        // const {id}  = parseRequestUrl();
        // console.log(id);
        
    const { id } = parseRequestUrl()
    const products = (await ProductAPI.getAll()).data;
    const category_name = (await categoryAPI.get(id)).data.name;
    console.log(category_name);

    const products_cate = [];
    products.map(item => {
      if(item.category_id == id){
        products_cate.push(item); 
      }
    })
    console.log(products_cate);

        // const {data: categories} = await CategoryAPI.getAll();
        // console.log(categories);
        // const {data: products} = await productAPI.getAll();
        
        // const quantitySold = products.sort((a, b) =>b.quantity - a.quantity).slice(0,5);
        // console.log(products);
        // const {id} = parseRequestUrl();

        
        
        const result = products.filter(product => product.category_id == id).map(product=>{
                            return  /*html*/`
                                <div class="col-xs-6 col-sm-3 col-md-3 col-lg-3" style="  margin-bottom: 10px;">
                                    <div class="product_border">
                                        <div class="product-box-h">
                                            <div class="border_in">
                                                <div class="icon_pro">
                                                    <div class="price"  style="background-color:green;margin-left: -12px;  padding: 5px 6px;">
                                                        <a data-toggle="modal" data-target="#myModal"
                                                            class="xem_nhanh " href="">
                                                            ${product.sale}%
                                                        </a>
                                                    </div>
                                                    <div>
                                                        <a class="like" href="#">
                                                            <i class="far fa-heart"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                                <div class="product-thumbnail">
                                                    <a class="image_link" href="/#/products/${product.id}" title="${product.name}">
                                                        <img class="lazyload loaded"
                                                            src="http://127.0.0.1:8000/${product.image}">
                                                    </a>
                                                    <div class="pro_action">
                                                        <form action="" method="post">
                                                            <input type="hidden" name="" value="">
                                                            <button class="btn btn-cart hidden ">Thêm vào giỏ
                                                                hàng</button>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div class="product-info">
                                                    <h3 class="product-name"><a class="height_name" href="/#/products/${product.id}"
                                                            title="${product.name}">${product.name}</a>
                                                    </h3>
                                                    <div class="product-hides">
                                                        <div class="price-box clearfix">
                                                            <span class="price product-price">${product.price}₫/kg</span>
                                                            <span class="price product-price-old">
                                                                <del> ${product.price}₫/kg</del>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;
                        }).join("");
        const {data: categories} = await CategoryAPI.getAll();
        
        return /*html*/`
                <div class="content content_sale">
                    <div class="container col-12 col-bg">
                        <div class="row">
                            <div class="bg_collection clearfix">
                                <!-- start turn left -->

                                <article class="content_left dqdt-sidebar sidebar left-content col-lg-3 show-product2">

                                    <article class="aside-filter aside-item sidebar-category collection-category">
                                        <div class="aside-title">
                                            <div class="title_module border_bottom_10">
                                                <h2><span>Danh sách sản phẩm</span></h2>
                                            </div>
                                        </div>
                                        <div class="aside-content">
                                            <nav class="nav-category navbar-toggleable-md">
                                                <ul class="nav navbar-pills">
                                                ${
                                                    categories.map(category=>{
                                                        return `
                                                        <li class="nav-item lv1"><a href="/#/categories/${category.id}" class="nav-link"><img class="hiden-none" src="http://127.0.0.1:8000/${category.image}" alt="" style="margin-right: 15px;">
                                                        ${category.name}
                                                        </a></li>
                                                        `
                                                    }).join("")
                                                }
                                                </ul>
                                            </nav>
                                        </div>
                                    </article>

                                    <article class="aside-filter">
                                        <div class="filter-container">
                                            <div class="filter-container__selected-filter">

                                                <div class="filter-container__selected-filter-list">
                                                    <ul></ul>
                                                </div>

                                            </div>
                                        </div>
                                    </article>

                                    <article class="aside-item aside-filter hidden-md hidden-sm hidden-xs">
                                        <div class="aside-title aside-title-fillter">
                                            <div class="title_module border_bottom_10">
                                                <h2><span>SP bán chạy</span></h2>
                                            </div>
                                        </div>

                                        <div class="sale_off_today">
                                            <div class="not-dqowl wrp_list_product">
                                            ${
                                                quantitySold.map(product=>{
                                                    return /*html*/`
                                                        <div class="item_small">
                                                            <div class="product-mini-item clearfix on-sale">
                                                                <a href="/#/products/${product.id}"
                                                                    class="product-img">
                                                                    <img src="http://127.0.0.1:8000/${product.image}"alt="${product.image}">
                                                                </a>
                                                                <div class="product-info">
                                                                    <h3>
                                                                        <a href="/#/products/${product.id}"
                                                                            class="product-name text3line">${product.name}</a>
                                                                    </h3>
                                                                    <div class="price-box">
                                                                        <span class="price">
                                                                            <span class="product-price">${product.price-product.sale}₫/kg</span>
                                                                        </span>
                                                                        <!-- giá khuyến mãi -->
                                                                        <span class="old-price">
                                                                            <del class="sale-price">${product.price}₫/kg</del>
                                                                        </span>
                                                                        <!-- giá gốc của sản phẩm nhé-->
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    `
                                                    }).join("")
                                                }
                                             
                                                <span class="view_more">
                                                    <a href="" title="Xem thêm">
                                                        Xem thêm
                                                        <i class="fas fa-caret-right"></i>
                                                    </a>
                                                </span>
                                            </div>
                                        </div>
                                    </article>
                                </article>
                                <!-- end turn left -->


                                <!-- start turn right -->
                                <article class="content_right dqdt-sidebar sidebar left-content col-lg-9 col-xs-12">
                                    <article class="aside-filter aside-item sidebar-category collection-category">
                                        <div class="aside-title">
                                            <div class="title_module border_bottom_10">
                                                <h2>
                                                <span value="${id}">
                                                ${
                                                    categories.map(category=>{
                                                        if(category.id == id){
                                                            return `
                                                                ${category.name}
                                                            `
                                                        }
                                                    }).join("")
                                                }
                                                </span>
                                                </h2>
                                            </div>
                                        </div>
                                        <section class="products-view products-view-grid aside-content">
                                            <div class="row row-noGutter-45">
                                                <!-- box-1 -->
                                                ${result}
                                            </div>
                                        </section>
                                    </article>
                                </article>
                                <!-- end turn right -->
                            </div>
                        </div>

                    </div>
                </div>
                <!-- kết thúc content_type -->

        `;
    },
     afterRender(){
        return `abc`;
    }
}
export default CategoryPage;