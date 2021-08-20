// import NewAPI from '../api/newAPI.js';
// import { $ } from '../untils.js';

// import firebase from "../firebase";

// const NewAdd ={
//     async render(){
//         return /*html*/`
//         <form class="form"  id="form-add" method="post">
//             <div class="form-group">
//                 <label for="new_name" class="form-label">Tiêu đề</label>
//                 <input type="text" class="form-control" placeholder="Tiêu đề của tin tức" id ="new_name"/>
//             </div>
//             <div class="form-group">
//                 <label for="new_image" class="form-label">Ảnh</label>
//                 <input type="file" class="form-control" placeholder="Ảnh sản phẩm" id ="new_image"/>
//             </div>
//             <div class="form-group">
//                 <label for="description" class="form-label">Description</label>
//                 <input type="text" class="form-control" id="description"/>
//             </div>
//             <div class="form-group">
//                 <label for="detail" class="form-label">Detail</label>
//                 <input type="text" class="form-control" id="detail"/>
//             </div>
           
//             <div class="form-group btn">
//                 <input type="submit" class="form-control" value="add New"/>
//             </div>

//         <form>
        
//         `;
//     },
//     async afterRender(){
//          $('#form-add').addEventListener('submit', e =>{ 
//              e.preventDefault()
//              const newImage = $('#new_image').files[0];
//             //  console.log(productImage);
//             let storageRef = firebase.storage().ref(`news/${newImage.name}`);
//             console.log(storageRef);

//             storageRef.put(newImage).then(function(){
//                 // console.log('upload thành công');
//                 storageRef.getDownloadURL().then (async (url) =>{
//                     const result ={
//                         id: Math.random().toString(36).substring(7),
//                         name : $('#new_name').value,
//                         image : url,
//                         description : $('#description').value,
//                         detail : $('#detail').value
//                     }
//                     // console.log(result);
//                     NewAPI.add(result);
//                     window.location.hash = '/listnews';
//                 })
//             });
          
//         })

//     }
// }
// export default NewAdd;