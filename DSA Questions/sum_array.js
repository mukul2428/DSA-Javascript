function sumArrayValues(arr) {
    // method 1: using simple for loop
    let sum1 = 0;
    for (let i = 0; i < arr.length; i++) {
      sum1 += arr[i];
    }
    console.log(sum1);
  
    // method 2: using foreach loop
    let sum2 = 0;
    arr.forEach((value) => {
      sum2 += value;
    });
    console.log(sum2);
  
    // method 3: using reduce method
    let sum3 = arr.reduce((sum, current) => sum + current, 0);
    console.log(sum3);
  
    //method 4: using eval method
    let sum4 = eval(arr.join('+'));
    console.log(sum4);
  }
  
  sumArrayValues([29,1,9,98,0,-83,29]);
  