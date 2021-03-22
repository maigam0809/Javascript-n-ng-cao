import { dataproducts } from './data.js';
// console.log(dataproducts);

var $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


class Product{
    displayProducts (products){
        const result = products.map((product,index)=>{
            return`<tr>
            <td>${index +1}</td>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td><img src="${product.image}" width="70px"></td>
            <td>${product.quantity}</td>
            <td> ${product.status == false ? "Hết hàng" : "Còn hàng"} </td>
            <td>
                <button type="button" class="btn btn-primary btn-detail" data-id="${product.id}">Chi tiết</button>
                <button type="button" class="btn btn-danger btn-remove" data-id="${product.id}">Xoá</button>
                </td>
            </tr>`
        }).join("");
        $('#content').innerHTML = result;
    }

    addProduct(){


    }
    getProduct(id){
        console.log("getProduct",id);
        const found = dataproducts.find(product => product.id == id);
        console.log(found);
        document.querySelector('#detail').innerHTML =`<h4> ${found.name} </h4>
        <h4> ${found.price} </h4>
        <h4> ${found.quantity} </h4>`;

    }
    removeProduct(id){
        console.log("remove()",id);
        

    }
    updateproduct(){

    }

    getButtons(){
        const btns = $$('.btn');
        // console.log(this);
        const _this = this;
        // console.log(_this);
        btns.forEach(btn => {
            let id = btn.dataset.id;
            // console.log(id);
            btn.addEventListener('click', function(e){
                let hasClass = this.classList;
    
                if(hasClass.contains('btn-detail')){
                    _this.getProduct(id);
    
                }else if(hasClass.contains('btn-remove')){
                    _this.removeProduct(id);
    
                }
            })
        });
    }
}

window.addEventListener('DOMContentLoaded',function(){
    const product = new Product();
    product.displayProducts(dataproducts);
    product.getButtons();
})