const products =[
    {
        id: 1,
        name: 'product 1'
    },
    {
        id: 2,
        name: 'product 2'
    },
    {
        id: 3,
        name: 'product 3'
    },
]

var $ = document.querySelector.bind(document);


var newArr = products.map(function(item){
    return `<div class ="item">
    <h4> ${item.name} </h4>
    </div>`

}).join("");

$('#products').innerHTML = newArr;