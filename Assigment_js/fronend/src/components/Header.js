import ProductAPI from "../api/productAPI";
import { parseRequestUrl,$ } from "../untils";
import Search from "../pages/Search";

const Header ={
    async render(){
     
        // console.log(products);
        const {resource,id} = parseRequestUrl();
        // console.log(resource);
        // console.log(id);
        // console.log(ProductAPI.search())

        function findGetParameter(parameterName) {
            var result = null,
                tmp = [];
            location.search
                .substr(1)
                .split("&")
                .forEach(function (item) {
                  tmp = item.split("=");
                  if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
                });
            return result;
        }
        console.log(findGetParameter(resource));
        
   
       

         return /*html*/`
           <div class="index-container">
            <!-- start top -->
            <div class="container">
                <div class="index-top">
                    <div class="top">
                        <i class="fas fa-check"></i>
                        <p>Giá cả nhiều ưu đãi hấp dẫn khi mua hàng</p>
                    </div>
                    <div class="top top-middle">
                        <i class="fas fa-plane"></i>
                        <p>Giao hàng miễn phí toàn quốc và nhanh chóng</p>
                    </div>
                    <div class="top">
                        <i class="fas fa-star"></i>
                        <p>Sản phẩm đa dạng đạt tiêu chuẩn có kiểm định</p>
                    </div>
                </div>
            </div>
            <!-- end top -->
            <!-- start header -->
            <header class="container-fluid">
                <div class="container">
                    <div class="index-header">
                        <div class="logo">
                            <a href="/">
                                <img src="./public/client/images/icon/logo.png" alt="">
                            </a>
                        </div>
                        <div class="flex">
                            <div class="header-middle">
                                <form id="search" method="get">
                                    <i class="fas fa-search"></i>
                                    <input type="text" placeholder="Tìm kiếm ở đây" id="valueSearch" required>
                                    <!-- <div class="form-group btn"> -->
                                        <input type="submit" class="form-control" value="add New"/>
                                    <!-- </div> -->
                                    <!-- <input type="submit" placeholder="Submit">                             -->
                                </form>
                                <div class="link">
                                    <a href="/#/product_selling">Bán chạy nhất</a> |
                                    <a href="/#/new">Tin tức</a> |
                                    <a href="/#/sale">Giảm giá</a>
                                </div>
                            </div>
                            <div class="header-final">
                                <div class="detail detail-none">
                                    <i class="fas fa-heart"></i>
                                    <a href="/#/listproducts">Admin</a>
                                </div>
                                <div class="detail detail-none">
                                    <i class="fas fa-user"></i>
                                    <div>
                                        <a href="/#/login">Đăng nhập</a> <br>
                                        <a href="/#/register">Đăng ký</a>
                                    </div>
                                </div>
                                <div class="detail btn">
                                    <i class="fas fa-shopping-bag"></i>
                                    <a href="cart.html">GIỎ HÀNG(0)</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <!-- end header -->
        </div>
        `
    },
    async afterRender(){
        return `${await ListProducts.afterRender()}`;
        
        // var a = $('#valueSearch').value; 
        // console.log(a);

    //     $('#search').addEventListener('submit', e =>{ 
    //         e.preventDefault();
    //         const {resource}  = parseRequestUrl();
    //         console.log(resource);

    //         // const {data: products} =  ProductAPI.getAll();
    //         const a = $('#valueSearch').value; 
    //         console.log(a);
    //         ProductAPI.add(result);

    //         // console.log(products);
    //         // const newImage = $('#new_image').files[0];
    //        //  console.log(productImage);
    //     //    let storageRef = firebase.storage().ref(`news/${newImage.name}`);
    //     //    console.log(storageRef);

    //     //    storageRef.put(newImage).then(function(){
    //     //        // console.log('upload thành công');
    //     //        storageRef.getDownloadURL().then (async (url) =>{
    //     //            const result ={
    //     //                id: Math.random().toString(36).substring(7),
    //     //                name : $('#new_name').value,
    //     //                image : url,
    //     //                description : $('#description').value,
    //     //                detail : $('#detail').value
    //     //            }
    //     //            // console.log(result);
    //     //            NewAPI.add(result);
    //     //            window.location.hash = '/listnews';
    //     //        })
    //     //    });
         
    //    })

   }
}
export default Header;