function removeDuplicate(arr){
    //using set
    let ans = [...new Set(arr)];
    console.log(ans);

    //using filter
    let res = arr.filter((item, index) => arr.indexOf(item) == index);
    console.log(res);
}

removeDuplicate([12, 13, 12, 34, 54, 34, 54]);