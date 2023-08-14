function findMissingNumber(nums){
    // one number is missing, so add 1 to length
    const n = nums.length+ 1;

    //calculate the sum of first n natural numbers
    const totalSum = (n * (n + 1)) / 2;

    //calculate the sum of all the elements of an array
    const arraySum = nums.reduce((acc,num) => acc + num, 0);

    // missing number can be found by sustracting 
    console.log(totalSum - arraySum);
}

findMissingNumber([1,2,4,5,6])
// range = [1, N]