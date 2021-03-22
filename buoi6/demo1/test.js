function cauHon() {
    return new Promise(function(resolve, reject){
        let approve = true;
        if(approve){
            setTimeout(function(){
                resolve("Em đồng ý");
            },3000)
        }else{
            reject("Chim cút");
        }
    })
}

cauHon()
    .then(function(message){
        console.log(message);
    })
    .catch(function(error){
        console.log(error);
    })