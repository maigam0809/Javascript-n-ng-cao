import ProductApi from '../api/productAPI.js';
import CategoryAPI from '../api/categoryAPI.js';

// import ListProducts from "../components/ListProducts.js";

import { $ } from '../untils.js';

import firebase from "../firebase";

const ProductAddPage ={
    
    async render(){
        const {data: categories} = await CategoryAPI.getAll();
        // console.log(categories);
        
        return /*html*/`
        <form class="form"  id="form-add" method="post">
            <div class="form-group">
                <label for="product_name">Tên sản phẩm</label>
                <input type="text" class="form-control" required placeholder="Tên sản phẩm" id ="product_name"/>
            </div>
            <div class="form-group input-group mb-3">
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">Loại</label>
                </div>
                <select class="custom-select" id="product_categoryId">
                    ${categories.map(category=>{
                            return `
                                <option value="${category.id}"> ${category.name}</option>
                            `
                        }).join("")
                   }
                </select>
            </div>
            <div class="form-group">
                <label for="product_image">Ảnh</label>
                <input type="file" class="form-control" required placeholder="Ảnh sản phẩm" id ="product_image"/>
            </div>
            <div class="form-group">
            <label for="intro">Intro</label>
                <input type="text" class="form-control" value="0"  placeholder="Intro" id ="intro"/>
            </div>
            <div class="form-group">
            <label for="price">Giá</label>
                <input type="number" class="form-control" value="0"  placeholder="Giá" id ="price"/>
            </div>
            <div class="form-group">
            <label for="quantity">Quantity</label>
                <input type="text" class="form-control" value="0"  placeholder="quantity" id ="quantity"/>
            </div>
            <div class="form-group">
                <label for="sale">Sale</label>
                <input type="number" class="form-control" value="0"  placeholder="Sale" id ="sale"/>
            </div>
            <div class="form-group">
                <label for="detail">Detail</label>
                <textarea class="form-control" id="detail" rows="3"></textarea>
            </div>

            <div class="form-group btn">
                <input type="submit" class="form-control" value="add product"/>
            </div>

        <form>
        
        `;
    },
    async afterRender(){
        $('#form-add').addEventListener('submit', e =>{ 
             e.preventDefault()
             const productImage = $('#product_image').files[0];
            //  console.log(productImage);
            let storageRef = firebase.storage().ref(`image/${productImage.name}`);
            console.log(storageRef);

            storageRef.put(productImage).then(function(){
                console.log('upload thành công');
                storageRef.getDownloadURL().then (async (url) =>{
                   
                    const product ={
                        id: Math.random().toString(36).substring(7),
                        name : $('#product_name').value,
                        cate_id: $('#product_categoryId').value,
                        image : url,
                        intro : $('#intro').value,
                        price : $('#price').value,
                        quantity : $('#quantity').value,
                        sale : $('#sale').value,
                        view:  0,
                        quantity_sold:  0,
                        detail:  $('#detail').value
                    }
                    // console.log(product);
                    ProductApi.add(product)
                     window.location.hash = '/listproducts';
                })
            });
          
        })

    }
    
}
export default ProductAddPage;