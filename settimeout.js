//using immediatly invoked functions

for(var i = 0; i < 5; i++){
    (function(index) {
        setTimeout(()=>{
            console.log(index);
        }, 1000);
    })(i);
}

//this will give 0 1 2 3 4