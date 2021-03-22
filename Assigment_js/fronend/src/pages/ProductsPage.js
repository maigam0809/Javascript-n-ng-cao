import productAPI from '../api/productAPI';
import CategoryAPI from "../api/categoryAPI";

// import axios from "axios";

const ProductsPage ={
    async render(){
        try {
            const {data: products} = await productAPI.getAll();

            const result = products.map(product=>{
                return /*html*/`
                    <div class="card col-md-3" >
                        <div class="product_border">
                            <div class="product-box-h">
                                <div class="border_in">
                                    <div class="icon_pro">
                                        <div class="price" style="background-color:green;margin-left: -12px;  padding: 5px 6px;">
                                            <a data-toggle="modal" data-target="#myModal" class="xem_nhanh "
                                                href="">
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
                                            <img class="lazyload loaded" src="${product.image}">
                                        </a>
                                        <div class="pro_action">
                                            <form action="" method="post">
                                                <input type="hidden" name="" value="">
                                                <button class="btn btn-cart hidden ">Thêm vào giỏ hàng</button>
                                            </form>
                                        </div>
                                    </div>
                                    <div class="product-info">
                                        <h3 class="product-name"><a class="height_name" href="#"
                                                title="Chuối Nam Mỹ">Chuối
                                                Nam Mỹ</a>
                                        </h3>
                                        <div class="product-hides">
                                            <div class="price-box clearfix">
                                                <span class="price product-price">
                                                ${product.price-product.sale}</span>
                                                <span class="price product-price-old">
                                                    <del>${product.price}</del>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }).join("")
            // console.log(result);
            const {data: categories} = await CategoryAPI.getAll();
            return /*html*/`
            <div class="product" style="background-color: #fff;">
                     
                <div class="title_top_menu" style=" margin-left: 120px;">
                    <span class="title-head">
                        <a href="#" class="dk" title="Sản phẩm bán chạy">Sản phẩm bán chạy</a>
                    </span>
                </div>
               
                <div class="container" >
                    <div class="mb-4">
                        ${result}
                    </div>
                </div>
            </div>
                
              
                    
                
                `;
        } catch (error) {
            console.log("error404");
        }
        
    },
    async afterRender(){
        return ``;
    }
    
}

export default ProductsPage;