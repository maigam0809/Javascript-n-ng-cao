// import { parseRequestUrl } from '../untils.js';

// import NewAPI from '../api/newAPI';

// const NewDetail ={
//     async render(){
//         const {id} = parseRequestUrl();
//         const {data:result} = await NewAPI.get(id);

//         return /*html*/`
//             <div class="container">
//                 <div class="row  ">
//                     <div class="col-md-6 cart-detail col-md-offset-3">
//                         <div class="new_detail ">
//                             <div class="tieude">
//                                 <h1 style="text-align: center;">${result.name}></h1>
//                             </div>
//                             <br>
//                             <div class="image center-block"  style="width: 300px;">
//                                 <img class="img-responsive" src="${result.image}" alt="" width="100%">
//                             </div>
//                             <br>
//                             <div class="content" style="padding: 0 10px;">
//                                 <b>
//                                     ${result.description}
//                                 </b>
//                                 <br>
//                                 <div>
//                                     ${result.detail}
//                                 </div>
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             </div>
                            
//             `;
//     }
// }
// export default NewDetail;