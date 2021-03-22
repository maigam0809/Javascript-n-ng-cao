var StudentInfo = {
    student_id : 'PH10005',
    myName : 'Mai Thị Gấm',
    myClass : 'PT15312',
    created_date : '2019/7/15',
    number_avg: 8,
    tinhHocLuc : function(){
        number = this.number_avg;
        if(number >= 9){
          
            console.log("sx");

        }else if(number >= 8){

            console.log("giỏi");

        }else if(number >=7){

            console.log("Khá");

        }else if(number >=5){

            console.log("TB");
        }

    },
    thoiGianRaTruong: function(){   

    },
    


}


console.log(StudentInfo.tinhHocLuc());
function Amimal(name, age, gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.run() = function(){
        
    }

}
const vit = new Amimal();


// console.log(sum(3,4));
// function sum(a,b){
//     return a*b;
// }

// const sum = function(a,b){
//     return a* b;
// }

// const sum = (a,b)=> a*b;