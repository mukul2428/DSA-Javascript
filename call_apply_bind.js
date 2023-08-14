let student = {
  fname: "Mukul",
  lname: "Raghav"
};
let teacher = {
  fname: "Viral",
  lname: "Coder"
};
let worker = {
  fname: "Raja",
  lname: "Singh"
};

function email(id){
  return `${this.fname}${id}${this.lname}@gmail.com`;
}

console.log(email.bind(student, ["ID-101"])());
console.log(email.bind(teacher, ["ID-102"])());
console.log(email.bind(worker, ["ID-103"])());

// or
let st = email.bind(student, ["ID-101"]);

console.log(st());

// email is repeating in all 3 objects but can have a seperate function for email

// we can also apply argument in call

// apply = this uses array as an argument

// bind = it creates new function which can be used later
