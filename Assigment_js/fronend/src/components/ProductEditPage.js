import productAPI from '../api/productAPI';
import CategoryAPI from '../api/categoryAPI.js';

import {parseRequestUrl, $} from '../untils';
import firebase from "../firebase";
const ProductEditPage ={
    async render(){
        const {id} = parseRequestUrl();
        const {data:product} = await productAPI.get(id);

        const {data:categories} = await CategoryAPI.getAll();
        // console.log(id);
        // console.log(product);

        return /*html*/`
            <form id="form-update-product">
                <div class="mb-3">
                    <label for="product_name" class="form-label">Tên Sản Phẩm</label>
                    <input type="text" class="form-control" id="product_name"value="${product.name}" aria-describedby="emailHelp">
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
                      <img src="${product.image}" alt="">
                    <input type="file" class="form-control"  placeholder="Ảnh sản phẩm" id ="product_image"/>
                </div>
                <div class="form-group">
                <label for="intro">Intro</label>
                    <input type="text" class="form-control" value="${product.intro}"  placeholder="Intro" id ="intro"/>
                </div>
                <div class="form-group">
                <label for="product_image">Giá</label>
                    <input type="number" class="form-control" value="${product.price}"  placeholder="Giá" id ="price"/>
                </div>
                <div class="form-group">
                <label for="quantity">Quantity</label>
                    <input type="text" class="form-control" value="${product.quantity}"  placeholder="quantity" id ="quantity"/>
                </div>
                <div class="form-group">
                    <label for="sale">Sale</label>
                    <input type="number" class="form-control" value="${product.sale}"  placeholder="Sale" id ="sale"/>
                </div>
                <div class="form-group">
                    <label for="description">Description</label>
                    <textarea class="form-control" id="detail"value="${product.detail}" rows="3"></textarea>
                </div>
                    <button type="submit" class="btn btn-primary">Update</button>
            </form>
        `;

    }
    ,
    async afterRender(){
        const {id} = parseRequestUrl();
        const {data:product} = await productAPI.get(id);
        // console.log(id);
        // console.log(product);
        $('#form-update-product').addEventListener('submit', e =>{ 
            e.preventDefault()
            // console.log('Before',product);

            if($('#product_image').files[0]){
                const productImage = $('#product_image').files[0];
                let storageRef = firebase.storage().ref(`image/${productImage.name}`);
                // console.log(storageRef);
                storageRef.put(productImage).then(function(){
                    // console.log('upload thành công');
                    storageRef.getDownloadURL().then (async (url) =>{
                        const newProduct ={
                           ...product,
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
                        // console.log(category);
                        productAPI.update(id,newProduct);
                        window.location.hash = '/listproducts';
                    })
                });
            }else{
                const productImage = product.image;

                const newProduct = {
                    ...product,
                    name : $('#product_name').value,
                    image : productImage
                }
                productAPI.update(id,newProduct);
                window.location.hash = '/listproducts';
            }

       })
    }
}
export default ProductEditPage;