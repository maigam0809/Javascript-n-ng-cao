import CategoryAPI from '../api/categoryAPI.js';
import { $ } from '../untils.js';

import firebase from "../firebase";

const CateAddPage = {
    async render() {
        return /*html*/`
        <form class="form"  id="form-add" method="post">
            <div class="form-group">
                <label for="cate_name" class="form-label">Tên Loại</label>
                <input type="text" class="form-control" placeholder="Tên sản phẩm" id ="cate_name"/>
            </div>
            <div class="form-group">
                <label for="cate_image" class="form-label">Ảnh</label>
                <input type="file" class="form-control" placeholder="Ảnh sản phẩm" id ="cate_image"/>
            </div>
            <div class="form-group btn">
                <input type="submit" class="form-control" value="add cate"/>
            </div>

        <form>
        
        `;
    },
    async afterRender() {
        $('#form-add').addEventListener('submit', e => {
            e.preventDefault()
            const cateImage = $('#cate_image').files[0];
            //  console.log(productImage);
            let storageRef = firebase.storage().ref(`category/${cateImage.name}`);
            console.log(storageRef);

            storageRef.put(cateImage).then(function () {
                // console.log('upload thành công');
                storageRef.getDownloadURL().then(async (url) => {
                    const category = {
                        id: Math.random().toString(36).substring(7),
                        name: $('#cate_name').value,
                        phone: $('#cate_name').value,
                        image: url
                    }
                    // console.log(category);
                    CategoryAPI.add(category);
                    window.location.hash = '/listcate';
                })
            });

        })

    }
}
export default CateAddPage;