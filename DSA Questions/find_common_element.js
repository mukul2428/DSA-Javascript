function findCommonElements(arr1, arr2){
    const common = [];

    for(const num of arr1){
        //using find method
        if(arr2.find(element => element === num)){
            common.push(num);
        }
    }
    console.log(common);
}
findCommonElements([1, 2, 3, 4], [3, 4, 5, 6]);