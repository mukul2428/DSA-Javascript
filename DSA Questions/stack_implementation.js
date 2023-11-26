class Stack {
    constructor(){
        this.items = [];
    }
    //add an element to stack
    push(item){
        this.items.push(item);
    }
    //check if stack is empty
    isEmpty(){
        return this.items.length == 0;
    }
    //remove and return the top element from stack
    pop(){
        if(this.isEmpty()){
            return null;
        }
        return this.items.pop();
    }
    //return the top element of stack without removing it
    peek(){
        if(this.isEmpty()){
            return null;
        }
        return this.items[this.items.length - 1];
    }
    //return the number of elements in stack
    size(){
        return this.items.length;
    }
    //clear all elements from stack
    clear(){
        this.items = [];
    }
}

//example usage
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek()); // 30
console.log(stack.pop()); // 30
console.log(stack.size()); // 2

stack.clear();
console.log(stack.isEmpty()); // true