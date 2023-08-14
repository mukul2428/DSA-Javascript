function findSecondLargest(numbers) {
    if(numbers.length < 2){
        console.log(null);
    }
    let largest = numbers[0];
    let secondLargest = null;

    //loop through array starting from second element
    for(let i = 1; i < numbers.length; i++){
        //if current element is larger than the current 'largest'
        if(numbers[i] > largest){
            secondLargest = largest;
            largest = numbers[i];
        }
        //if current element is not the largest but is larger than the current 'secondLargest'
        else if(numbers[i] > secondLargest && numbers[i] !== largest){
            secondLargest = numbers[i];
        }
        //here numbers[i] !== largest is to handle duplicates elements
    }
    console.log(secondLargest);
}

findSecondLargest([10, 5, 25, 3, 17, 8]);