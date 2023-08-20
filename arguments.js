function add(){
    let sum = 0;
    for(let arg of arguments){
        sum += arg;
    }
    return sum;
}
console.log(add(1,2,3,333,343));

//as you can see, here we have not passed any parameter in add function but still it is working.
//because of "arguments" keyword this is working

//now you can pass any number of arguments