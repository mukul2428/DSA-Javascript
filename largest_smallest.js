function small_largest(numbers){
    //method 2
    let largest = Math.max(...numbers);
    let smallest = Math.min(...numbers);

    //using spread operator we are passing elements of an array as an indiavidaul argumenets to function

    console.log({"largest": largest, "smallest": smallest});
}
small_largest([10, 5, 25, 3, 17, 8]);