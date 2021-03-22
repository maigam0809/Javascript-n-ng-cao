import NewAPI from '../api/newAPI.js';

import {parseRequestUrl, $} from '../untils';
import firebase from "../firebase";

const NewEdit ={
    async render(){
        const {id} = parseRequestUrl();
        const {data:result} = await NewAPI.get(id);

        // console.log(id);
        // console.log(category);

        return /*html*/`
            <form id="form-update-new">
                <div class="form-group">
                    <label for="new_name" class="form-label">Tiêu đề tin tức</label>
                    <input type="text" class="form-control" value="${result.name}" placeholder="Tiêu đề tin tức" id ="new_name"/>
                </div>
                <div class="form-group">
                    <label for="cate_image" class="form-label">Ảnh</label>
                    <img src="${result.image}" alt=""  >
                    <input type="file" class="form-control" placeholder="Ảnh sản phẩm" id ="new_image"/>
                </div>
                <div class="form-group">
                    <label for="description" class="form-label">Description</label>
                    <input type="text" class="form-control" value="${result.description}" placeholder="Content ngắn" id ="description"/>
                </div>
                <div class="form-group">
                    <label for="detail" class="form-label">Detail</label>
                    <input type="text" class="form-control" value="${result.detail}" placeholder="Content ngắn" id ="detail"/>
                </div>
                <div class="form-group btn">
                    <input type="submit" class="form-control" value="Update"/>
                </div>
               
            </form>
        `;

    }
    ,
    async afterRender(){
        const {id} = parseRequestUrl();
        const {data:result} = await NewAPI.get(id);
        // console.log(id);
        // console.log(product);
        $('#form-update-new').addEventListener('submit', e =>{ 
            e.preventDefault()
            
            // const cateImage = '';

            if($('#new_image').files[0]){
                const newImage = $('#new_image').files[0];
                let storageRef = firebase.storage().ref(`news/${newImage.name}`);
                // console.log(storageRef);
                storageRef.put(newImage).then(function(){
                    // console.log('upload thành công');
                    storageRef.getDownloadURL().then (async (url) =>{
                        const newProduct ={
                           ...result,
                            name : $('#new_name').value,
                            image : url,
                            description : $('#description').value,
                            detail : $('#detail').value
                        }
                        // console.log(category);
                        NewAPI.update(id,newProduct);
                        window.location.hash = '/listnews';
                    })
                });
            }else{
                const newImage = result.image;

                const newProduct = {
                    ...result,
                    name : $('#new_name').value,
                    image : newImage,
                    description : $('#description').value,
                    detail : $('#detail').value
                }
                NewAPI.update(id,newProduct);
                window.location.hash = '/listnews';
            }
       })
    }
}
export default NewEdit;