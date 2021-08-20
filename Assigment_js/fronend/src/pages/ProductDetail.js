// import data from '../data.js';
// import axios from 'axios';
import { parseRequestUrl } from '../untils.js';

import productAPI from '../api/productAPI';

const ProductDetail ={
    async render(){
        
        // const {products} = data;
        // const response = await axios('https://603778fe54350400177227c5.mockapi.io/products');
        // console.log(response);
        // const products = await response.data;
        // const request = parseRequestUrl();
        // console.log(request.id);
        const {id} = parseRequestUrl();
        const {data:product} = await productAPI.get(id);

        // console.log(id);

        // const product = products.find(
        //     // product => product.id == request.id
        //     product => product.id == id
        // )
        // console.log(product);

        return /*html*/`
                <div class="container-fluild product_detail">
                    <div class="container info">
                        <div class="row">
                            <div class="image col-lg-5 col-md-6 col-sm-12">
                                <img src="http://127.0.0.1:8000/${product.image}" alt="">
                            </div>
                            <div class="info-product col-lg-5 col-md-6 col-sm-12">
                                <p>
                                <h4 style="font-weight:bold; margin-bottom: 10px;font-size: 20px">
                                    ${product.name}
                                </h4>
                                <span>Xuất xứ:${product.intro} </span>
                                </p>
                                <p>
                                
                                    <span style="color: #ff8e4a; font-size:24px; font-weight:bold"
                                        class="price">${product.price-product.sale}đ/kg</span>
                                
                                    <span style="color:#707070; font-size: 16px; font-weight:bold"
                                        class="sale"><del>${product.price}đ/kg</del></span>
                                </p>
                                <p>

                                </p>
                                <div class="count">
                                    <p>Số lượng: </p>
                                    <p class="btn-count">
                                        <button id="btn_delete">-</button>
                                        <span id="count">1</span>
                                        <!-- <input id="count" type="hidden" value="1"> -->
                                        <button id="btn_add">+</button>
                                    </p>
                                </div>
                                <p class="cart">

                                <form action="" method="post">
                                    <input name="count" id="set_count" type="hidden" value="1">
                                    <button
                                        style="background-color: #ff8e4a;color: white;padding: 13px 20px 13px 20px;border-radius: 3px;outline: none;border: none;"
                                        name="btn_cart" type="submit">Thêm vào giỏ hàng</button>
                                </form>
                                </p>
                            </div>
                            <div class="product-icon col-lg-2">
                                <div class="icon">
                                    <img src="public/client/images/icon/serpro_1.png" alt="">
                                    <p>Giao hàng miễn phí</p>
                                </div>
                                <div class="icon">
                                    <img src="public/client/images/icon/serpro_2.png" alt="">
                                    <p>Tích điểm đổi quà</p>
                                </div>
                                <div class="icon">
                                    <img src="public/client/images/icon/serpro_3.png" alt="">
                                    <p>100% an toàn thực phẩm</p>
                                </div>
                                <div class="icon">
                                    <img src="public/client/images/icon/serpro_4.png" alt="">
                                    <p>Tư vấn 8/24</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container info pl-4">
                        <h2 style="font-family:Arial;font-size: 2rem; font-weight:bold; margin: 10px 5px;">Mô tả </h2>
                        <p style="font-size: 16px;">
                            ${product.description}
                        </p>
                    </div>
                    <div class="container info pl-3">

                        <h2 class="mb-2 text-danger" style="font-family:Arial;font-size: 2rem; font-weight:bold; margin: 10px 5px;">Bình
                            luận của bạn: </h2>
                        <script>
                        function post() {
                            var customer_id = document.getElementById("customer_id").value;
                            var product_id = document.getElementById("product_id").value;
                            var comment = document.getElementById("comment").value;
                            if (customer_id && product_id && comment) {
                                $.ajax({

                                        type: 'post',
                                        url: 'http://localhost<?= BASE_URL?>/ajaxcomment/index',
                                        data: {
                                            user_id: customer_id,
                                            product_id: product_id,
                                            content: comment
                                        }

                                        ,
                                        success: function(response) {
                                            document.getElementById("all_comments").innerHTML = response + document
                                                .getElementById("all_comments").innerHTML;
                                            document.getElementById("comment").value = "";
                                            document.getElementById("customer_id").value = "<?php $a = $_SESSION['user'];
                                                                                                    if (isset($_SESSION['user'])) {
                                                                                                        echo $a[0]["user_id"];
                                                                                                    } else {
                                                                                                        echo "";
                                                                                                    }  ?>";
                                            document.getElementById("product_id").value =
                                                "";

                                        }
                                    }

                                );
                            }
                            return false;
                        }
                        </script>

                        <form class="" method='post' action="" onsubmit="return post();" id="container">
                            <input type="hidden" id="customer_id" value="" name="name" disabled>
                            <input type="hidden" id="product_id" value="" disabled>
                            <textarea class="form-control" name="" id="comment" cols="100" rows="5"></textarea>


                            <button type="submit" value="Post Comment" id="submit"
                                style="background-color: #ff8e4a;color: white;padding: 10px 20px 10px 20px;border-radius: 3px;outline: none;border: none;">Bình
                                luận</button>
                        </form>
                        <h5 class="font-weight-bold text-success">Bình luận mới nhất</h5>
                        <div class="comments-list col-xl-6 col-md-6" style="margin-top: 20px; " id ="all_comments">
                                <div class="media mb-4 pl-1 col-10" style="border-bottom: 0.2px solid #DDDDDD;">
                                    <a class="media-left mr-3 " href="#">
                                        <img src="https://ui-avatars.com/api/">
                                    </a>
                                    <div class="media-body">

                                        <h6 class="media-heading user_name font-weight-bold"></h6>
                                        <p class="font-size-2" style="font-size: 14px;"></p>
                                    </div>

                                    <p class="pull-right">
                                        <small></small>
                                    </p>
                                </div>
                            </div>
                    </div>
                </div>
               
                
            `;
    }
}
export default ProductDetail;