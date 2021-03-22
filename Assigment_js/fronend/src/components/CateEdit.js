import CategoryAPI from '../api/categoryAPI.js';

import {parseRequestUrl, $} from '../untils';
import firebase from "../firebase";

const CateEdit ={
    async render(){
        const {id} = parseRequestUrl();
        const {data:category} = await CategoryAPI.get(id);

        // console.log(id);
        // console.log(category);

        return /*html*/`
            <form id="form-update-category">
                <div class="form-group">
                    <label for="cate_name" class="form-label">Tên Loại</label>
                    <input type="text" class="form-control" value="${category.name}" placeholder="Tên sản phẩm" id ="cate_name"/>
                </div>
                <div class="form-group">
                    <label for="cate_image" class="form-label">Ảnh</label>
                    <img src="${category.image}" alt=""  >
                    <input type="file" class="form-control" placeholder="Ảnh sản phẩm" id ="cate_image"/>
                </div>
                <div class="form-group btn">
                    <input type="submit" class="form-control" value="add cate"/>
                </div>
               
            </form>
        `;

    }
    ,
    async afterRender(){
        const {id} = parseRequestUrl();
        const {data:category} = await CategoryAPI.get(id);
        // console.log(id);
        // console.log(product);
        $('#form-update-category').addEventListener('submit', e =>{ 
            e.preventDefault()
            
            // const cateImage = '';

            if($('#cate_image').files[0]){
                const cateImage = $('#cate_image').files[0];
                let storageRef = firebase.storage().ref(`category/${cateImage.name}`);
                // console.log(storageRef);
                storageRef.put(cateImage).then(function(){
                    // console.log('upload thành công');
                    storageRef.getDownloadURL().then (async (url) =>{
                        const newProduct ={
                           ...category,
                            name : $('#cate_name').value,
                            image : url
                        }
                        // console.log(category);
                        CategoryAPI.update(id,newProduct);
                        window.location.hash = '/listcate';
                    })
                });
            }else{
                const cateImage = category.image;

                const newProduct = {
                    ...category,
                    name : $('#cate_name').value,
                    image : cateImage
                }
                CategoryAPI.update(id,newProduct);
                window.location.hash = '/listcate';
            }
       })
    }
}
export default CateEdit;