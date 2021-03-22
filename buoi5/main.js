function display(some){
    document.getElementById('demo').innerHTML = some;
}

function sum(a,b, callback){
    let tong = a+b;
    callback(tong);
}


sum(5,5,display);
