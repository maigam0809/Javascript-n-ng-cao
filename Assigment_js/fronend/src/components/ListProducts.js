
import ProductApi from '../api/productAPI.js';
import {reRender, $} from '../untils.js';

const ListProducts = {
    async render(){
        const {data : products} =await ProductApi.getAll();
        // console.log(product);
        return /*html*/`
            <table class="table table-striped table-sm">
                
              <thead>
                <tr>
                  <th>Index</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Image</th>
                  <th>Action</th>
                  <th><a href="/#/addproducts">Tạo mới</a></th>
                </tr>
              </thead>
              <tbody>
                  ${products.map((product, index)=>{
                      return /*html*/`
                    <tr>
                        <td>${index}</td>
                        <td>${product.name}</td>
                        <td style="max-width: 150px;">
                        <img src="${product.image}" alt="${product.image}" class="" style="max-width: 100%; height: 100px;"> 
                        </td>
                        <td>${product.price}</td>
                       
                        <td>
                            <a class="btn btn-success btn-edit" href="/#/editproducts/${product.id}">
                                <i class="fa fa-edit"></i>
                            </a>
                        </td>

                        <td>
                            <button class="btn btn-outline-danger rounded-circle m-btn m-btn--icon btn-sm m-btn--icon-only m-btn--pill m-btn--air btn-remove " data-id="${product.id}">
                                <i class="fa fa-trash"></i>
                            </button>
                        </td>
                    </tr>`
                    }).join("")
                    }
              </tbody>
            </table>
        `
    },
    async afterRender(){
        const btns = $('#list-products .btn-remove');
        // console.log(btns);
        btns.forEach(btn => {
            const id = btn.dataset.id;
            btn.addEventListener('click', function(){
                const question = confirm("Bạn có chắc muôn xoá không ?");
                if(question){
                    ProductApi.remove(id);
                    reRender(ListProducts, '#list-products')
                }
            });
        });
    }

}
export default ListProducts;