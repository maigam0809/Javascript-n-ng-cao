import productAPI from '../api/productAPI';

const HomePage ={
    async render(){
        // const {products} = data;
        try {
            // const {id}  = parseRequestUrl();
            // console.log(id);
            // Lấy tất cả dữ liệu của bang products
            const {data: products} = await productAPI.getAll();
            
            // Sắp sếp sản phẩm theo lượt người đã mua hàng
            const quantitySold = products.sort((a, b) =>b.quantity_sold - a.quantity_sold).slice(0,5);
            // console.log(quantitySold);

            // Lấy list các loại sản phẩm
            const vegetableFood5 = products.filter(product => product.cate_id == 1).slice(0,5);
            const seafood5 = products.filter(product => product.cate_id == 2).slice(0,5);
            const fruit5 = products.filter(product => product.cate_id == 3).slice(0,5);
            const dryFood = products.filter(product => product.cate_id == 4).slice(0,5);
            const  meat5=  products.filter(product => product.cate_id == 5).slice(0,5);
            // console.log(a);
           
        return /*html*/`
            <div class="container " >
                <!-- start voucher-->
                <div class="voucher">

                    <div class="col-lg-4  img_voucher">
                        <div class="img_effect ">
                            <a href="#" title="Banner 1">
                                <img class="image_voucher" src="public/client/images/main-image/banner_1.jpg">
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-4  img_voucher">
                        <div class="img_effect ">
                            <a href="#" title="Banner 1">
                                <img class="image_voucher" src="public/client/images/main-image/banner_1.jpg">
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-4  img_voucher">
                        <div class="img_effect ">
                            <a href="#" title="Banner 1">
                                <img class="image_voucher" src="public/client/images/main-image/banner_1.jpg">
                            </a>
                        </div>
                    </div>

                </div>
                <!-- end voucher-->

                <!-- start Sản phẩm bán chạy -->
                
                <div class="product">
                     
                    <div class="title_top_menu">
                        <span class="title-head">
                            <a href="#" class="dk" title="Sản phẩm bán chạy">Sản phẩm bán chạy</a>
                        </span>
                    </div>
                    <div class="product_wap owl-carousel owl-loaded owl-drag" >
                        <div class="owl-stage-outer" >
                            <div class="owl-stage" style="transform: translate3d(0px, 0px, 0px); transition: all 0s ease 0s; width: 2300px;">
                            
                            ${quantitySold.map(product=>{
                                // console.log(product);
                                        return /*html*/`
                                        <div class="owl-item" style="width: 220px; margin-right: 10px;">
                                            <div class="card ">
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
                                                                    <img class="lazyload loaded" src="${product.image}" style="width:200px;height:200px;">
                                                                </a>
                                                                <div class="pro_action">
                                                                    <form action="" method="post">
                                                                        <input type="hidden" name="" value="">
                                                                        <button class="btn btn-cart hidden ">Thêm vào giỏ hàng</button>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                            <div class="product-info">
                                                                <h3 class="product-name"><a class="height_name" href="/#/products/${product.id}"
                                                                        title="${product.name}">${product.name}</a>
                                                                </h3>
                                                                <div class="product-hides">
                                                                    <div class="price-box clearfix">
                                                                        <span class="price product-price">$${product.price-product.sale}</span>
                                                                        <span class="price product-price-old">
                                                                            <del>${product.price}₫/kg</del>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        `;
                                    }).join("")
                            }
                            </div>
                        </div>
                        <div class="owl-nav">
                            <button type="button" role="presentation" class="owl-prev disabled">
                            <span aria-label="Previous">‹</span>
                            </button>
                            <button type="button" role="presentation" class="owl-next">
                            <span aria-label="Next">›</span></button>

                        </div>
                        <div class="owl-dots">
                            <button role="button" class="owl-dot active">
                            <span></span></button><button role="button" class="owl-dot"><span></span></button>
                        </div>
                    </div>
                </div>

                <!-- Phần lấy dữ liệu của Rau củ-->
                <div class="product show-product">
                    <div class="title_top_menu">
                        <span class="title-head">
                            <a href="#" class="dk" title="Rau củ">Rau củ</a>
                            <a href="#" class="xem-them" title="Xem thêm">Xem thêm <i class="fa fa-caret-right"></i></a>
                        </span>
                    </div>
                    <div class="pro_do_kho">
                        ${vegetableFood5.map(product=> {
                                return /*html*/`
                                    <div class="product_border">
                                        <div class="product-box-h">
                                            <div class="border_in">
                                                <div class="icon_pro">
                                                    <div class="price" style="background-color:green;margin-left: -12px;  padding: 5px 6px;">
                                                        <a data-toggle="modal" data-target="#myModal" class="xem_nhanh " href="">
                                                            ${product.sale}%
                                                            <!-- <i class="fa fa-eye"></i> -->
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
                                                    <h3 class="product-name"><a class="height_name" href="${product.id}" title="${product.name}">${product.name}</a>
                                                    </h3>
                                                    <div class="product-hides">
                                                        <div class="price-box clearfix">
                                                            <span class="price product-price">${product.price-product.sale}</span>
                                                            <span class="price product-price-old">
                                                                <del> ${product.price}₫/kg</del>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                
                                `;

                                // }

                            }).join("")
                            
                        }
                    
                        
                    </div>

                </div>

               

                <!-- Phần lấy dữ liệu của Hoa quả trong nước -->
                <div class="product show-product">
                    <div class="title_top_menu">
                        <span class="title-head">
                            <a href="#" class="dk" title="Hoa quả trong nước">Hoa Quả Trong Nước</a>
                            <a href="#" class="xem-them" title="Xem thêm">Xem thêm <i class="fa fa-caret-right"></i></a>
                        </span>
                    </div>
                    <div class="pro_do_kho">
                        ${fruit5.map(product=> {
                                return /*html*/`
                                    <div class="product_border">
                                        <div class="product-box-h">
                                            <div class="border_in">
                                                <div class="icon_pro">
                                                    <div class="price" style="background-color:green;margin-left: -12px;  padding: 5px 6px;">
                                                        <a data-toggle="modal" data-target="#myModal" class="xem_nhanh " href="">
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
                                                    <h3 class="product-name"><a class="height_name" href="${product.id}" title="${product.name}">${product.name}</a>
                                                    </h3>
                                                    <div class="product-hides">
                                                        <div class="price-box clearfix">
                                                            <span class="price product-price">${product.price-product.sale}</span>
                                                            <span class="price product-price-old">
                                                                <del> ${product.price}₫/kg</del>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                
                                `;

                                // }

                            }).join("")
                            
                        }
                    
                        
                    </div>

                </div>
                
                
                <!-- Phần lấy dữ liệu của Hoa quả sấy -->
                <div class="product show-product">
                    <div class="title_top_menu">
                        <span class="title-head">
                            <a href="#" class="dk" title="Hoa quả sấy">Đồ khô</a>
                            <a href="#" class="xem-them" title="Xem thêm">Xem thêm <i class="fa fa-caret-right"></i></a>
                        </span>
                    </div>
                    <div class="pro_do_kho">
                        ${dryFood.map(product=> {
                                return /*html*/`
                                    <div class="product_border">
                                        <div class="product-box-h">
                                            <div class="border_in">
                                                <div class="icon_pro">
                                                    <div class="price" style="background-color:green;margin-left: -12px;  padding: 5px 6px;">
                                                        <a data-toggle="modal" data-target="#myModal" class="xem_nhanh " href="">
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
                                                    <h3 class="product-name"><a class="height_name" href="${product.id}" title="${product.name}">${product.name}</a>
                                                    </h3>
                                                    <div class="product-hides">
                                                        <div class="price-box clearfix">
                                                            <span class="price product-price">${product.price-product.sale}</span>
                                                            <span class="price product-price-old">
                                                                <del> ${product.price}₫/kg</del>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                
                                `;

                                // }

                            }).join("")
                            
                        }
                    
                        
                    </div>

                </div>

                <!-- Phần lấy dữ liệu của Thịt các loại -->
                <div class="product show-product">
                    <div class="title_top_menu">
                        <span class="title-head">
                            <a href="#" class="dk" title="Thịt các loại">Thịt Các Loại</a>
                            <a href="#" class="xem-them" title="Xem thêm">Xem thêm <i class="fa fa-caret-right"></i></a>
                        </span>
                    </div>
                    <div class="pro_do_kho">
                        ${meat5.map(product=> {
                                return /*html*/`
                                    <div class="product_border">
                                        <div class="product-box-h">
                                            <div class="border_in">
                                                <div class="icon_pro">
                                                    <div class="price" style="background-color:green;margin-left: -12px;  padding: 5px 6px;">
                                                        <a data-toggle="modal" data-target="#myModal" class="xem_nhanh " href="">
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
                                                    <h3 class="product-name"><a class="height_name" href="${product.id}" title="${product.name}">${product.name}</a>
                                                    </h3>
                                                    <div class="product-hides">
                                                        <div class="price-box clearfix">
                                                            <span class="price product-price">${product.price-product.sale}</span>
                                                            <span class="price product-price-old">
                                                                <del> ${product.price}₫/kg</del>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                
                                `;

                                // }

                            }).join("")
                            
                        }
                    
                        
                    </div>

                </div>






            </div>


            <!-- kết thúc phần container lấy dữ liệu của  -->

             
             
            <!-- bắt đầu dữ liệu mới -->
            <div class="content-buttom show-product">
                <div class="img flex">
                    <img src="public/client/images/main-image/bg_left_body.png" alt="">
                    <img src="public/client/images/main-image/bg_right_body.png" alt="">
                </div>
                <div class="container content_product_relative">
                    <div class="product">
                        <div class="title_top_menu">
                            <span class="title-head">
                                <a href="#" class="dk" title="Hải sản">Hải sản</a>
                                <a href="#" class="xem-them" title="Xem thêm">Xem thêm <i class="fa fa-caret-right"></i></a>
                            </span>
                        </div>
                        <div class="pro_do_kho">
                        ${seafood5.map(product=> {
                            return /*html*/`

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
                                            <h3 class="product-name"><a class="height_name" href="/#/products/${product.id}"
                                                    title="${product.name}">${product.name}</a>
                                            </h3>
                                            <div class="product-hides">
                                                <div class="price-box clearfix">
                                                    <span class="price product-price">${product.price-product.sale}₫/kg</span>
                                                    <span class="price product-price-old">
                                                        <del> ${product.price}₫/kg</del>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            `
                            }).join("")
                        }
                            
                        </div>

                    </div>
                </div>
            </div>
            <!-- end hải sản -->
            
           
                `;
        } catch (error) {
            console.log("error404");
        }
        
    },
    async afterRender(){
        return ``;
    }
}
export default HomePage;