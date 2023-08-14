function incrementCounter(){
  let count = 0;
  //creating closure
  function increment(){
    //accessing outer variable count
    count++;
    console.log(`Current count: ${count}`);
  }
  //return inner function 'increment' from this outer function
  return increment;
}

//call outer function, which will return inner function 'increment'. it will still retain access to count variable

const counter = incrementCounter();

counter(); //o/p = 1
counter(); // 2
counter(); //3
counter(); //4