var h2 = document.querySelector("h2");

function quaTrinhHoc(totalMark, time){
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            if(totalMark >= 9){
                resolve(totalMark);
            }else{
                reject("Bạn không được sinh viên xuất sắc");
            }
            
        }, time);
    })

}

var diemTongKet = prompt("Mời bạn nhập điểm tổng kết: ");
var time = prompt("Mời bạn nhập thời gian học: ");

quaTrinhHoc(parseInt(diemTongKet),parseInt(time))
    .then(function(mark){
        h2.innerText = "Bạn được đi Singapo và điểm tổng kết là " + mark;
    })
    .catch(function(error){
        h2.innerText = error;
    })