class Person {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    greet(){
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
    }
}

//creating instances of person class
const person1 = new Person("Viral", "Coder", 22);

console.log(person1.firstName);
person1.greet();